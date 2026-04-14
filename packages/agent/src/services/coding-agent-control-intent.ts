/**
 * Two-tier control-intent classifier for the HITL Control feature
 * (Phase 3, see docs/followups/hitl-plan-mode.md).
 *
 * Detects whether a user message during an active coding-agent
 * session is asking us to do one of:
 *
 *   - **status** — "what are you working on?", "did you finish X?",
 *     "can I see it?". Returns a state summary; no halt.
 *   - **soft_pause** — "hold on a sec", "wait, let's discuss".
 *     Calls `bus.applyPause()`. In-flight tool calls finish on
 *     their own.
 *   - **hard_abort** — "STOP", "wait wait that's wrong!", urgent /
 *     alarmed tone. Calls `bus.applyAbort()` which sends adapter
 *     interrupt keys.
 *   - **resume** — "ok yeah do it", "sounds good go ahead".
 *     Calls `bus.applyResume()`.
 *   - **none** — anything else. The chat turn proceeds normally.
 *
 * **Design rule: not brittle.** The user must NEVER need to say a
 * literal keyword to trigger a control intent. We use two tiers:
 *
 *   - **Tier 1 — fast path.** A small set of unambiguous regex
 *     matches (all-caps STOP, repeated punctuation, single-word
 *     commands) that short-circuit without an LLM call. Covers
 *     true emergencies at zero cost.
 *
 *   - **Tier 2 — LLM classifier.** Runs when Tier 1 didn't match.
 *     Single-shot classification with a tight JSON-only prompt.
 *     Uses TEXT_SMALL so it's cheap. Distinguishes tone and
 *     urgency: "hold on a sec" → soft_pause, "wait wait wait
 *     that's wrong!" → hard_abort, "ok yeah do it" → resume.
 *
 * The classifier is gated on `bus.isHalted()` callers passing a
 * "should I run?" check — there's no point classifying when no
 * coding agent is running. The decision to invoke this lives with
 * the chat-turn entry point, NOT here.
 *
 * This module exports the two tiers as separate functions so the
 * fast path is unit-testable in isolation (no runtime needed) and
 * the LLM tier is unit-testable with a stubbed `useModel`.
 */

import type { IAgentRuntime } from "@elizaos/core";
import { ModelType } from "@elizaos/core";

export type ControlIntent =
  | "status"
  | "soft_pause"
  | "hard_abort"
  | "resume"
  | "none";

export interface ClassifierResult {
  intent: ControlIntent;
  /** Which tier produced the answer. Useful for telemetry / debugging. */
  source: "fast_path" | "llm" | "fallback";
  /** Optional human-readable rationale, only set on the LLM path. */
  rationale?: string;
}

// ---------------------------------------------------------------------------
// Tier 1 — fast-path regex matches
// ---------------------------------------------------------------------------

/**
 * Hard-abort fast-path: caller is alarmed. Matches all-caps STOP /
 * HALT / NO with optional repeated punctuation and surrounding
 * filler. Tuned to catch "STOP", "STOP!!!", "STOP STOP STOP", "NO
 * STOP", "STOP!!! WAIT!!!".
 *
 * Why all-caps: lowercase "stop" is ambiguous ("stop after the
 * first match", "we stop deploying on Fridays") and routes to the
 * LLM tier instead.
 */
const HARD_ABORT_FAST_PATH =
  /(?:^|[\s\W])(STOP|HALT|ABORT|CANCEL|NO[!]+)(?:[!]{1,}|[\s\W]|$)/;

/**
 * Soft-pause fast-path: explicit single-token commands. "pause",
 * "wait", "hold on" without alarm punctuation. Lowercase OK
 * because these are unambiguous in chat context.
 */
const SOFT_PAUSE_FAST_PATH =
  /^(?:please\s+)?(pause|hold\s+on|hold\s+up|wait(?:\s+a\s+sec)?)\.?$/i;

/**
 * Resume fast-path: explicit single-token approvals. "resume",
 * "go", "continue", "proceed". Tight regex on whole-message
 * matches so "go to the moon" doesn't trigger.
 */
const RESUME_FAST_PATH =
  /^(?:please\s+)?(resume|continue|proceed|go\s+ahead|go(?:\s+on)?)\.?$/i;

/**
 * Status fast-path: "status", "what's running", "what are you
 * doing". Tight enough that "what's running on the server" doesn't
 * trigger.
 */
const STATUS_FAST_PATH =
  /^(?:status|what'?s?\s+(?:running|the\s+status|going\s+on)|what\s+are\s+you\s+(?:working\s+on|doing))\??$/i;

/**
 * Run the cheap regex tier. Returns null if no rule matches —
 * caller falls through to the LLM classifier.
 */
export function fastPathClassify(message: string): ClassifierResult | null {
  const trimmed = message.trim();
  if (!trimmed) return null;

  // Slash commands (e.g. /plan, /stop, /commands) are never control
  // intents — skip classification entirely so they route normally.
  if (trimmed.startsWith("/")) {
    return { intent: "none", source: "fast_path" };
  }

  if (HARD_ABORT_FAST_PATH.test(trimmed)) {
    return { intent: "hard_abort", source: "fast_path" };
  }
  if (SOFT_PAUSE_FAST_PATH.test(trimmed)) {
    return { intent: "soft_pause", source: "fast_path" };
  }
  if (RESUME_FAST_PATH.test(trimmed)) {
    return { intent: "resume", source: "fast_path" };
  }
  if (STATUS_FAST_PATH.test(trimmed)) {
    return { intent: "status", source: "fast_path" };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Tier 2 — LLM classifier
// ---------------------------------------------------------------------------

const LLM_CLASSIFIER_PROMPT = `You are a control-intent classifier for an AI coding agent runtime.
A user is currently running one or more CLI coding agents (Claude Code, Codex, Aider, or Gemini).
Their message will arrive in the next block. Classify it as exactly ONE of these intents:

- "status": user is asking what the agents are doing right now, what they finished, or wants to see the result. Examples: "what are you working on?", "did you finish the website?", "can I see it?", "any progress?"
- "soft_pause": user wants to take a beat, discuss, or reconsider — non-urgent. Tool calls in flight should finish; new ones should not start. Examples: "hold on a sec, let's discuss", "wait, can we talk about this?", "let's pause for a second".
- "hard_abort": user is alarmed, urgent, or ordering an immediate stop. Interrupt in-flight tool calls. Examples: "STOP", "wait wait that's wrong!", "no no no", "abort", "kill it", "this is not what I wanted".
- "resume": user is approving / unblocking previously paused work. Examples: "ok yeah do it", "sounds good, continue", "go ahead", "looks fine, proceed".
- "none": message is normal task input, follow-up instructions, or anything that isn't a control intent. Examples: "make it blue", "add a test for that", "what's the weather", "rename the file to foo.ts".

CRITICAL:
- Tone matters more than literal words. "hold on" with no alarm = soft_pause; "WAIT WAIT WAIT" with caps and repetition = hard_abort.
- If the user is giving a normal coding instruction, return "none". Don't over-trigger control intents.
- If genuinely ambiguous between two intents, prefer the less disruptive one (status > soft_pause > hard_abort).

Return EXACTLY this JSON shape, no markdown, no commentary:
{"intent": "<one of the five above>", "rationale": "<one short sentence>"}

User message:
`;

/**
 * Run the LLM classifier. Caller is responsible for deciding
 * whether to invoke this — typically only when the fast path
 * returned null AND there's at least one coding agent active.
 *
 * On any failure (network error, malformed JSON, unknown intent
 * label) we return `intent: "none"` so the message routes through
 * the normal chat path. Failing closed is critical: a buggy
 * classifier should never silently halt the runtime.
 */
export async function llmClassify(
  runtime: IAgentRuntime,
  message: string,
): Promise<ClassifierResult> {
  try {
    const raw = await runtime.useModel(ModelType.TEXT_SMALL, {
      prompt: `${LLM_CLASSIFIER_PROMPT}${message}`,
    });
    const parsed = parseClassifierJson(raw);
    if (parsed) {
      return { ...parsed, source: "llm" };
    }
    return { intent: "none", source: "fallback" };
  } catch {
    return { intent: "none", source: "fallback" };
  }
}

/**
 * Parse the classifier's JSON response. Tolerates models that wrap
 * the JSON in a fenced code block or add leading/trailing prose.
 */
export function parseClassifierJson(
  raw: unknown,
): { intent: ControlIntent; rationale?: string } | null {
  if (typeof raw !== "string") return null;
  // Strip fenced code blocks if the model wrapped the JSON.
  let body = raw.trim();
  const fence = body.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (fence) body = fence[1].trim();
  // Find the first balanced { ... } block.
  const start = body.indexOf("{");
  const end = body.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(body.slice(start, end + 1));
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object") return null;
  const obj = parsed as Record<string, unknown>;
  const intent = obj.intent;
  if (typeof intent !== "string") return null;
  if (
    intent !== "status" &&
    intent !== "soft_pause" &&
    intent !== "hard_abort" &&
    intent !== "resume" &&
    intent !== "none"
  ) {
    return null;
  }
  const rationale =
    typeof obj.rationale === "string" ? obj.rationale : undefined;
  return rationale ? { intent, rationale } : { intent };
}

// ---------------------------------------------------------------------------
// Combined entry point
// ---------------------------------------------------------------------------

/**
 * Run both tiers in order. The chat-turn entry point should call
 * this when at least one coding agent is busy. Returns "none" when
 * neither tier identifies a control intent — caller proceeds with
 * the normal action routing path.
 */
export async function classifyControlIntent(
  runtime: IAgentRuntime,
  message: string,
): Promise<ClassifierResult> {
  const fast = fastPathClassify(message);
  if (fast) return fast;
  return llmClassify(runtime, message);
}
