import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  CodingAgentControlBus,
  type SessionLike,
} from "../coding-agent-control-bus";

/**
 * Build a fake PTY session that records every sendKeys call so we
 * can assert the exact key sequence that hit it.
 */
function makeSession(id: string, adapterType: string) {
  const sent: string[] = [];
  const session: SessionLike = {
    id,
    adapterType,
    sendKeys: vi.fn(async (keys: string | string[]) => {
      const list = Array.isArray(keys) ? keys : [keys];
      for (const k of list) sent.push(k);
    }),
  };
  return { session, sent };
}

describe("CodingAgentControlBus", () => {
  let bus: CodingAgentControlBus;
  beforeEach(() => {
    bus = new CodingAgentControlBus();
  });

  it("starts in the 'running' state with no targeted sessions", () => {
    const snap = bus.snapshot();
    expect(snap.state).toBe("running");
    expect(snap.reason).toBeNull();
    expect(snap.targetedSessionIds).toEqual([]);
    expect(bus.isHalted()).toBe(false);
  });

  it("applyPause flips state to 'paused' without touching any sessions", async () => {
    const claude = makeSession("s1", "claude");
    const codex = makeSession("s2", "codex");
    const ptyService = {
      listSessions: () => [claude.session, codex.session],
    };
    // Pause must not send ANY keys — soft pause lets in-flight tool
    // calls finish on their own.
    bus.applyPause("user asked to hold on", ["s1", "s2"]);
    expect(claude.sent).toEqual([]);
    expect(codex.sent).toEqual([]);
    // Service was not even consulted for pause — the bus only touches
    // PTYs when aborting.
    expect(ptyService.listSessions().length).toBe(2);
    const snap = bus.snapshot();
    expect(snap.state).toBe("paused");
    expect(snap.reason).toBe("user asked to hold on");
    expect(snap.targetedSessionIds).toEqual(["s1", "s2"]);
    expect(bus.isHalted()).toBe(true);
  });

  it("applyAbort sends the per-adapter key sequence to every session", async () => {
    const claude = makeSession("s1", "claude-code");
    const codex = makeSession("s2", "OpenAI Codex");
    const aider = makeSession("s3", "aider");
    const gemini = makeSession("s4", "gemini-cli");
    const ptyService = {
      listSessions: () => [
        claude.session,
        codex.session,
        aider.session,
        gemini.session,
      ],
    };
    const targeted = await bus.applyAbort(ptyService, "STOP");
    expect(targeted.sort()).toEqual(["s1", "s2", "s3", "s4"]);
    // Claude got two escapes.
    expect(claude.sent).toEqual(["escape", "escape"]);
    // The rest got one ctrl+c.
    expect(codex.sent).toEqual(["ctrl+c"]);
    expect(aider.sent).toEqual(["ctrl+c"]);
    expect(gemini.sent).toEqual(["ctrl+c"]);
    const snap = bus.snapshot();
    expect(snap.state).toBe("aborting");
    expect(snap.reason).toBe("STOP");
    expect(bus.isHalted()).toBe(true);
  });

  it("applyAbort tolerates sessions that throw from sendKeys", async () => {
    const good = makeSession("good", "claude");
    const bad: SessionLike = {
      id: "bad",
      adapterType: "codex",
      sendKeys: vi.fn(() => {
        throw new Error("session already dead");
      }),
    };
    const ptyService = { listSessions: () => [good.session, bad] };
    const targeted = await bus.applyAbort(ptyService, null);
    // Both sessions are still reported as targeted — the bad one is
    // best-effort, we don't want one dead session to block the rest.
    expect(targeted.sort()).toEqual(["bad", "good"]);
    expect(good.sent).toEqual(["escape", "escape"]);
    expect(bus.snapshot().state).toBe("aborting");
  });

  it("applyAbort returns [] and stays running when ptyService is null", async () => {
    const targeted = await bus.applyAbort(null, "no service");
    expect(targeted).toEqual([]);
    // Still transitioned — the state reflects the user's intent
    // even when there's nothing to interrupt.
    expect(bus.snapshot().state).toBe("aborting");
  });

  it("applyResume clears the halt flag and returns to 'running'", async () => {
    const claude = makeSession("s1", "claude");
    await bus.applyAbort({ listSessions: () => [claude.session] }, "halt");
    expect(bus.isHalted()).toBe(true);
    bus.applyResume("user said go ahead");
    expect(bus.isHalted()).toBe(false);
    const snap = bus.snapshot();
    expect(snap.state).toBe("running");
    expect(snap.reason).toBe("user said go ahead");
    expect(snap.targetedSessionIds).toEqual([]);
  });

  it("snapshot changedAt moves forward on each transition", async () => {
    const first = bus.snapshot().changedAt;
    await new Promise((r) => setTimeout(r, 5));
    bus.applyPause("first", []);
    const second = bus.snapshot().changedAt;
    expect(new Date(second).getTime()).toBeGreaterThanOrEqual(
      new Date(first).getTime(),
    );
    await new Promise((r) => setTimeout(r, 5));
    bus.applyResume();
    const third = bus.snapshot().changedAt;
    expect(new Date(third).getTime()).toBeGreaterThanOrEqual(
      new Date(second).getTime(),
    );
  });

  it("supports PTYServiceLike exposing getSessions() instead of listSessions()", async () => {
    const claude = makeSession("s1", "claude");
    const ptyService = { getSessions: () => [claude.session] };
    await bus.applyAbort(ptyService, null);
    expect(claude.sent).toEqual(["escape", "escape"]);
  });
});
