import type { IAgentRuntime } from "@elizaos/core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  CodingAgentControlBus,
  type SessionLike,
} from "../coding-agent-control-bus";
import {
  applyClassification,
  maybeHandleControlIntent,
  shouldRunControlClassifier,
} from "../coding-agent-control-handler";

/**
 * NOTE: the handler module imports the singleton `codingAgentControlBus`
 * from `coding-agent-control-bus`. To keep tests isolated we reset
 * the singleton's state between tests via `applyResume`.
 */
import { codingAgentControlBus } from "../coding-agent-control-bus";

function makeSession(id: string, adapterType: string): SessionLike {
  return {
    id,
    adapterType,
    sendKeys: vi.fn(async () => undefined),
  };
}

function makeRuntime(modelResponse: unknown): IAgentRuntime {
  return {
    useModel: vi.fn(async () => modelResponse),
  } as unknown as IAgentRuntime;
}

beforeEach(() => {
  // Singleton bus — reset to clean state at the start of each test.
  codingAgentControlBus.applyResume(null);
});

afterEach(() => {
  codingAgentControlBus.applyResume(null);
});

// ---------------------------------------------------------------------------
// shouldRunControlClassifier — the cheap gate
// ---------------------------------------------------------------------------

describe("shouldRunControlClassifier", () => {
  it("returns false when bus is running and no PTY service is provided", () => {
    expect(shouldRunControlClassifier(null)).toBe(false);
  });

  it("returns true when the bus is halted, even with no PTY service", () => {
    codingAgentControlBus.applyPause("test", []);
    expect(shouldRunControlClassifier(null)).toBe(true);
  });

  it("returns false when the bus is running and PTY service has zero sessions", () => {
    expect(shouldRunControlClassifier({ listSessions: () => [] })).toBe(false);
  });

  it("returns true when the bus is running and at least one session exists", () => {
    expect(
      shouldRunControlClassifier({
        listSessions: () => [makeSession("s1", "claude")],
      }),
    ).toBe(true);
  });

  it("returns true when the bus is running and listSessions returns a Promise (assume worth classifying)", () => {
    expect(
      shouldRunControlClassifier({
        listSessions: () => Promise.resolve([]) as unknown as SessionLike[],
      }),
    ).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// applyClassification — pure dispatcher
// ---------------------------------------------------------------------------

describe("applyClassification", () => {
  it("status with running bus reports session count", async () => {
    const ptyService = {
      listSessions: () => [
        makeSession("s1", "claude"),
        makeSession("s2", "codex"),
      ],
    };
    const result = await applyClassification(
      { intent: "status", source: "fast_path" },
      ptyService,
    );
    expect(result.intent).toBe("status");
    expect(result.responseText).toContain("2 coding agent");
    // Bus state was not mutated.
    expect(codingAgentControlBus.snapshot().state).toBe("running");
  });

  it("status with halted bus reports the bus state and reason", async () => {
    codingAgentControlBus.applyPause("user said hold on", []);
    const result = await applyClassification(
      { intent: "status", source: "fast_path" },
      null,
    );
    expect(result.responseText).toContain("paused");
    expect(result.responseText).toContain("user said hold on");
  });

  it("soft_pause flips bus state to paused without sending keys", async () => {
    const claude = makeSession("s1", "claude");
    const ptyService = { listSessions: () => [claude] };
    const result = await applyClassification(
      { intent: "soft_pause", source: "llm" },
      ptyService,
    );
    expect(codingAgentControlBus.snapshot().state).toBe("paused");
    expect(claude.sendKeys).not.toHaveBeenCalled();
    expect(result.responseText).toContain("Holding off");
  });

  it("hard_abort sends per-adapter keys and reports the targeted count", async () => {
    const claude = makeSession("s1", "claude");
    const codex = makeSession("s2", "codex");
    const ptyService = { listSessions: () => [claude, codex] };
    const result = await applyClassification(
      { intent: "hard_abort", source: "fast_path" },
      ptyService,
    );
    expect(codingAgentControlBus.snapshot().state).toBe("aborting");
    expect(claude.sendKeys).toHaveBeenCalledWith("escape");
    expect(codex.sendKeys).toHaveBeenCalledWith("ctrl+c");
    expect(result.targetedSessions).toBe(2);
    expect(result.responseText).toContain("Interrupted 2");
  });

  it("hard_abort with no sessions still flips state and reports it", async () => {
    const result = await applyClassification(
      { intent: "hard_abort", source: "fast_path" },
      null,
    );
    expect(codingAgentControlBus.snapshot().state).toBe("aborting");
    expect(result.targetedSessions).toBe(0);
    expect(result.responseText).toContain("No coding agents");
  });

  it("resume clears the halt flag", async () => {
    codingAgentControlBus.applyPause("test", []);
    expect(codingAgentControlBus.isHalted()).toBe(true);
    const result = await applyClassification(
      { intent: "resume", source: "fast_path" },
      null,
    );
    expect(codingAgentControlBus.isHalted()).toBe(false);
    expect(result.responseText).toContain("Resumed");
  });

  it("resume is downgraded to none when bus is not halted", async () => {
    expect(codingAgentControlBus.isHalted()).toBe(false);
    const result = await applyClassification(
      { intent: "resume", source: "llm" },
      null,
    );
    expect(result.intent).toBe("none");
    expect(result.responseText).toBe("");
  });

  it("soft_pause is downgraded to none when bus is already halted", async () => {
    codingAgentControlBus.applyPause("already paused", []);
    const result = await applyClassification(
      { intent: "soft_pause", source: "llm" },
      null,
    );
    expect(result.intent).toBe("none");
    expect(result.responseText).toBe("");
  });
});

// ---------------------------------------------------------------------------
// maybeHandleControlIntent — top-level glue
// ---------------------------------------------------------------------------

describe("maybeHandleControlIntent", () => {
  it("returns null when no agents are running and bus is idle (skips classification entirely)", async () => {
    const runtime = makeRuntime('{"intent":"hard_abort"}');
    const handled = await maybeHandleControlIntent(runtime, "STOP", null);
    expect(handled).toBeNull();
    // Critical: useModel was NEVER called because the gate
    // short-circuited.
    expect(runtime.useModel).not.toHaveBeenCalled();
  });

  it("classifies via fast path and dispatches when at least one session exists", async () => {
    const claude = makeSession("s1", "claude");
    const ptyService = { listSessions: () => [claude] };
    const runtime = makeRuntime("never called");
    const handled = await maybeHandleControlIntent(
      runtime,
      "STOP!!!",
      ptyService,
    );
    expect(handled?.intent).toBe("hard_abort");
    expect(handled?.source).toBe("fast_path");
    expect(claude.sendKeys).toHaveBeenCalledWith("escape");
    // Fast path matched — LLM was not consulted.
    expect(runtime.useModel).not.toHaveBeenCalled();
  });

  it("falls through to LLM tier when fast path returns null and a session is active", async () => {
    const claude = makeSession("s1", "claude");
    const ptyService = { listSessions: () => [claude] };
    const runtime = makeRuntime('{"intent":"soft_pause","rationale":"chill"}');
    const handled = await maybeHandleControlIntent(
      runtime,
      "hold on a sec, can we discuss this?",
      ptyService,
    );
    expect(handled?.intent).toBe("soft_pause");
    expect(handled?.source).toBe("llm");
    expect(codingAgentControlBus.snapshot().state).toBe("paused");
  });

  it("returns null when LLM classifier returns 'none' (normal coding instruction)", async () => {
    const claude = makeSession("s1", "claude");
    const ptyService = { listSessions: () => [claude] };
    const runtime = makeRuntime('{"intent":"none"}');
    const handled = await maybeHandleControlIntent(
      runtime,
      "make it blue",
      ptyService,
    );
    expect(handled).toBeNull();
    expect(codingAgentControlBus.snapshot().state).toBe("running");
  });

  it("classifies even with no sessions when bus is already halted (so user can resume)", async () => {
    codingAgentControlBus.applyPause("earlier hold", []);
    const runtime = makeRuntime("never called");
    const handled = await maybeHandleControlIntent(runtime, "go ahead", null);
    expect(handled?.intent).toBe("resume");
    expect(codingAgentControlBus.snapshot().state).toBe("running");
  });

  it("returns null when classifier says resume but bus is not halted (no false resume)", async () => {
    const claude = makeSession("s1", "claude");
    const ptyService = { listSessions: () => [claude] };
    // LLM classifies "yes" as resume, but bus is running — should be no-op
    const runtime = makeRuntime('{"intent":"resume","rationale":"user said yes"}');
    const handled = await maybeHandleControlIntent(
      runtime,
      "yes",
      ptyService,
    );
    expect(handled).toBeNull();
    expect(codingAgentControlBus.snapshot().state).toBe("running");
  });

  it("fails closed: returns null when classifier throws (never auto-halts on bug)", async () => {
    const claude = makeSession("s1", "claude");
    const ptyService = { listSessions: () => [claude] };
    const runtime = {
      useModel: vi.fn(() => {
        throw new Error("model crash");
      }),
    } as unknown as IAgentRuntime;
    // Send a message that won't match any fast-path rule so the
    // throw bubbles through to the catch.
    const handled = await maybeHandleControlIntent(
      runtime,
      "let's actually talk about whether this matches the spec",
      ptyService,
    );
    expect(handled).toBeNull();
    expect(codingAgentControlBus.snapshot().state).toBe("running");
  });
});
