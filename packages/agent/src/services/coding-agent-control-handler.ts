/**
 * High-level glue between the chat turn, the control intent
 * classifier, and the control bus. Phase 3 of the HITL Control
 * feature (see docs/followups/hitl-plan-mode.md).
 *
 * The chat-turn entry point (`generateChatResponse` in
 * `chat-routes.ts`) calls `maybeHandleControlIntent` with the raw
 * user text. The helper:
 *
 *   1. Checks whether classification should run at all. We only
 *      classify when there's at least one active coding agent OR
 *      the bus is currently halted (so the user can resume). When
 *      neither holds, we skip the classifier and the chat path
 *      continues normally — zero overhead on a normal chat.
 *
 *   2. Runs the two-tier classifier (`classifyControlIntent`).
 *
 *   3. If a control intent fired, calls the bus and returns a
 *      response object the caller can short-circuit on. The chat
 *      turn replies with `responseText` and skips action routing.
 *
 *   4. Returns null when nothing handled — caller proceeds.
 *
 * Failing closed: any exception during classification or bus
 * application returns null and the chat turn continues normally.
 * A buggy classifier must NEVER halt the runtime by accident.
 */

import type { IAgentRuntime } from "@elizaos/core";
import {
  classifyControlIntent,
  type ClassifierResult,
} from "./coding-agent-control-intent";
import {
  codingAgentControlBus,
  type PTYServiceLike,
} from "./coding-agent-control-bus";

export interface ControlIntentHandled {
  /** Which intent was acted on. */
  intent: ClassifierResult["intent"];
  /** Where it came from (fast path / llm / fallback). */
  source: ClassifierResult["source"];
  /** Text the chat turn should reply with. */
  responseText: string;
  /** Number of sessions targeted (only meaningful for hard_abort). */
  targetedSessions?: number;
}

/**
 * Decide whether the classifier should run for this turn. Cheap
 * checks first — if neither holds, we skip the LLM call entirely.
 *
 *   - If the bus is halted (globally or for this conversation),
 *     ALWAYS classify. The user needs a way to resume.
 *   - Otherwise, only classify when at least one PTY session
 *     exists. No coding agents = no point.
 */
export function shouldRunControlClassifier(
  ptyService: PTYServiceLike | null,
  conversationId?: string,
): boolean {
  if (codingAgentControlBus.isHalted(conversationId)) return true;
  if (!ptyService) return false;
  try {
    const fn = ptyService.listSessions ?? ptyService.getSessions;
    if (!fn) return false;
    const sessions = fn.call(ptyService);
    // Synchronous list path — async PTYServices return a promise we
    // intentionally don't await here. The `await` happens inside
    // `maybeHandleControlIntent` so this gate stays cheap.
    if (Array.isArray(sessions)) return sessions.length > 0;
    // Promise path — assume worth classifying. The cost of one extra
    // LLM call when the answer is "no agents" is negligible compared
    // to missing a STOP because we short-circuited too aggressively.
    return true;
  } catch {
    return false;
  }
}

/**
 * Top-level handler. Runs the gate, the classifier, and dispatches
 * to the bus. Returns null when the message is normal chat input
 * and the caller should continue with action routing.
 *
 * When `conversationId` is provided, pause/resume are scoped to
 * that conversation so other chats aren't affected.
 */
export async function maybeHandleControlIntent(
  runtime: IAgentRuntime,
  message: string,
  ptyService: PTYServiceLike | null,
  conversationId?: string,
): Promise<ControlIntentHandled | null> {
  try {
    if (!shouldRunControlClassifier(ptyService, conversationId)) return null;
    const classification = await classifyControlIntent(runtime, message);
    if (classification.intent === "none") return null;
    const result = await applyClassification(classification, ptyService, conversationId);
    // applyClassification may downgrade to "none" (e.g. resume when bus isn't halted)
    if (result.intent === "none") return null;
    return result;
  } catch {
    // Fail closed — never auto-halt on classifier or bus errors.
    return null;
  }
}

/**
 * Apply the classified intent to the bus and produce the
 * user-facing response text. Exported for unit testing.
 *
 * When `conversationId` is provided, pause/resume are scoped to
 * that conversation. Hard abort is always global (sends keys to all
 * sessions) but its state is tracked per-conversation if scoped.
 */
export async function applyClassification(
  classification: ClassifierResult,
  ptyService: PTYServiceLike | null,
  conversationId?: string,
): Promise<ControlIntentHandled> {
  const { intent, source } = classification;

  // Guard: don't apply resume when nothing is actually halted.
  // The classifier may fire "resume" on normal messages containing words
  // like "continue" or "go ahead" even when agents are running freely.
  if (intent === "resume" && !codingAgentControlBus.isHalted(conversationId)) {
    return { intent: "none", source, responseText: "" };
  }

  // Guard: don't apply soft_pause when already halted — avoids
  // overwriting an "aborting" state with "paused".
  if (intent === "soft_pause" && codingAgentControlBus.isHalted(conversationId)) {
    return { intent: "none", source, responseText: "" };
  }

  switch (intent) {
    case "status": {
      const snapshot = conversationId
        ? codingAgentControlBus.snapshotForConversation(conversationId)
        : codingAgentControlBus.snapshot();
      const sessionCount = await countSessions(ptyService);
      const stateLine =
        snapshot.state === "running"
          ? `${sessionCount} coding agent session${sessionCount === 1 ? "" : "s"} running.`
          : `Coding agents are ${snapshot.state}${snapshot.reason ? ` — ${snapshot.reason}` : ""}.`;
      return {
        intent,
        source,
        responseText: stateLine,
      };
    }
    case "soft_pause": {
      codingAgentControlBus.applyPause(
        "user requested soft pause via chat",
        [],
        conversationId,
      );
      return {
        intent,
        source,
        responseText:
          'Holding off on new coding-agent actions. The current step will finish on its own. Say "go ahead" when you want me to resume.',
      };
    }
    case "hard_abort": {
      const targeted = await codingAgentControlBus.applyAbort(
        ptyService,
        "user requested hard abort via chat",
        conversationId,
      );
      return {
        intent,
        source,
        targetedSessions: targeted.length,
        responseText:
          targeted.length === 0
            ? "No coding agents to interrupt — bus is now in 'aborting' state. Say \"resume\" to clear it."
            : `Interrupted ${targeted.length} coding agent session${targeted.length === 1 ? "" : "s"}. Say \"resume\" when you want them to continue.`,
      };
    }
    case "resume": {
      codingAgentControlBus.applyResume(
        "user requested resume via chat",
        conversationId,
      );
      return {
        intent,
        source,
        responseText: "Resumed. Coding agents can take new actions again.",
      };
    }
    case "none":
      // Unreachable in practice — the caller filters this out.
      return { intent, source, responseText: "" };
  }
}

async function countSessions(
  ptyService: PTYServiceLike | null,
): Promise<number> {
  if (!ptyService) return 0;
  const fn = ptyService.listSessions ?? ptyService.getSessions;
  if (!fn) return 0;
  try {
    const sessions = await fn.call(ptyService);
    return Array.isArray(sessions) ? sessions.length : 0;
  } catch {
    return 0;
  }
}
