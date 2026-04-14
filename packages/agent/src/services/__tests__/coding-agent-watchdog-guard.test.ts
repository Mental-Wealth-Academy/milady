import { describe, expect, it } from "vitest";
import type { ControlBusSnapshot } from "../coding-agent-control-bus";
import {
  WATCHDOG_HARD_TIMEOUT_MS,
  evaluateWatchdogSuppression,
} from "../coding-agent-watchdog-guard";

function snap(
  state: ControlBusSnapshot["state"],
  reason: string | null = null,
): ControlBusSnapshot {
  return {
    state,
    changedAt: new Date().toISOString(),
    reason,
    targetedSessionIds: [],
    pendingQuestion:
      state === "awaiting_user_input"
        ? {
            question: "test",
            raisedAt: new Date().toISOString(),
          }
        : null,
  };
}

describe("evaluateWatchdogSuppression", () => {
  it("never suppresses when the bus is running — watchdog is active", () => {
    const decision = evaluateWatchdogSuppression({
      snapshot: snap("running"),
      stallDurationMs: 60_000,
    });
    expect(decision.suppress).toBe(false);
    expect(decision.reason).toContain("running");
  });

  it("suppresses when the bus is paused under the hard timeout", () => {
    const decision = evaluateWatchdogSuppression({
      snapshot: snap("paused", "user said hold on"),
      stallDurationMs: 60_000,
    });
    expect(decision.suppress).toBe(true);
    expect(decision.reason).toContain("paused");
  });

  it("suppresses when the bus is awaiting_user_input under the hard timeout", () => {
    const decision = evaluateWatchdogSuppression({
      snapshot: snap("awaiting_user_input", "Milady asked a question"),
      stallDurationMs: 5 * 60 * 1000, // 5 minutes
    });
    expect(decision.suppress).toBe(true);
    expect(decision.reason).toContain("awaiting_user_input");
  });

  it("suppresses when the bus is aborting under the hard timeout", () => {
    const decision = evaluateWatchdogSuppression({
      snapshot: snap("aborting", "user STOPPED"),
      stallDurationMs: 60_000,
    });
    expect(decision.suppress).toBe(true);
  });

  it("ALLOWS the watchdog through when stallDuration exceeds the hard timeout — recovery escape hatch", () => {
    // The user walked away for 30+ minutes during a question. We
    // can't pin a session forever, so the watchdog gets to fire
    // even though the bus is intentionally halted.
    const decision = evaluateWatchdogSuppression({
      snapshot: snap("awaiting_user_input"),
      stallDurationMs: WATCHDOG_HARD_TIMEOUT_MS + 1,
    });
    expect(decision.suppress).toBe(false);
    expect(decision.reason).toContain("hard timeout");
  });

  it("the hard timeout is generous enough for a coffee break (≥ 10 min)", () => {
    // Sanity check on the constant — anything shorter would tear
    // down sessions while users are taking a perfectly reasonable
    // break to think about Milady's question.
    expect(WATCHDOG_HARD_TIMEOUT_MS).toBeGreaterThanOrEqual(10 * 60 * 1000);
  });
});
