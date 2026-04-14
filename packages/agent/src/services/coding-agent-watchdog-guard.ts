/**
 * Watchdog suppression helper for Phase 8 of the HITL feature
 * (see docs/followups/hitl-plan-mode.md).
 *
 * The PTY-side stall detector lives in `pty-manager` upstream and
 * fires an `onStallClassify` callback every 8s of busy idle. The
 * orchestrator plugin then runs an LLM classifier to decide
 * whether to tear the agent down. While the user has intentionally
 * halted the bus (paused, aborting, awaiting_user_input) we MUST
 * NOT tear down agents — they're "stalled" because we told them
 * to be.
 *
 * This module exports a pure function that the orchestrator's
 * stall-handling path can call before invoking the LLM classifier.
 * Returning `true` short-circuits the classifier with "not
 * stalled" so the watchdog becomes a no-op until the user
 * resumes / answers.
 *
 * Wiring sites (in the order they should be patched):
 *
 *   1. **Phase 8 (this PR):** the helper exists, the
 *      `CodingAgentControlBus` exposes `shouldSuppressWatchdog()`,
 *      and any Milady-side stall path consults the helper. The
 *      upstream orchestrator plugin doesn't know about it yet.
 *
 *   2. **Follow-up:** patch `@elizaos/plugin-agent-orchestrator`
 *      via `scripts/patch-deps.mjs` (or bump the pinned version
 *      with an upstream PR) so its `_onStallClassify` callback
 *      consults the bus before running the LLM classifier.
 *
 *   3. **Belt-and-suspenders:** the prompt-optimization layer can
 *      detect stall-classifier prompts and short-circuit them.
 *      Not implemented here because the upstream prompt shape
 *      isn't stable enough to pattern-match safely.
 *
 * The helper itself is a pure function so the wiring sites can
 * test it without spinning up a runtime.
 */

import {
  type ControlBusSnapshot,
  codingAgentControlBus,
} from "./coding-agent-control-bus";

export interface WatchdogContext {
  /**
   * The current bus snapshot. Pass `codingAgentControlBus.snapshot()`
   * in production; tests pass a fixture.
   */
  snapshot: ControlBusSnapshot;
  /**
   * How long the agent has been idle, in milliseconds. Used so
   * the helper can decide whether even a halted state should
   * still allow tear-down after an extreme timeout (e.g., user
   * walked away for 30 minutes during a question — at some point
   * we should still recover the session).
   */
  stallDurationMs: number;
}

export interface WatchdogDecision {
  suppress: boolean;
  /** Human-readable reason for the decision. */
  reason: string;
}

/**
 * Hard cap: even when the bus is intentionally halted, we still
 * tear down agents that have been idle for longer than this. The
 * cap is *very* generous because the whole point of Phase 8 is
 * "the user walked away for a while" — but we can't pin a session
 * forever.
 *
 * 30 minutes matches the intuition: if the user has been gone
 * that long, they're not coming back to this turn.
 */
export const WATCHDOG_HARD_TIMEOUT_MS = 30 * 60 * 1000;

/**
 * Pure decision function. Use the bus snapshot + stall duration
 * to decide whether the watchdog should fire. Returns the
 * decision plus a reason for logs.
 */
export function evaluateWatchdogSuppression(
  ctx: WatchdogContext,
): WatchdogDecision {
  const { snapshot, stallDurationMs } = ctx;
  if (snapshot.state === "running") {
    return { suppress: false, reason: "bus is running — watchdog active" };
  }
  if (stallDurationMs > WATCHDOG_HARD_TIMEOUT_MS) {
    return {
      suppress: false,
      reason: `bus is ${snapshot.state} but stallDuration ${stallDurationMs}ms exceeds hard timeout ${WATCHDOG_HARD_TIMEOUT_MS}ms — letting watchdog tear down`,
    };
  }
  return {
    suppress: true,
    reason: `bus is ${snapshot.state} (${snapshot.reason ?? "no reason"}) — suppressing watchdog`,
  };
}

/**
 * Convenience wrapper for callers that always want the singleton
 * bus's current state. Equivalent to
 * `evaluateWatchdogSuppression({ snapshot: bus.snapshot(), stallDurationMs })`.
 */
export function shouldSuppressWatchdogNow(
  stallDurationMs: number,
): WatchdogDecision {
  return evaluateWatchdogSuppression({
    snapshot: codingAgentControlBus.snapshot(),
    stallDurationMs,
  });
}
