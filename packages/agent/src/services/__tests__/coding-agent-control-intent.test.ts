import type { IAgentRuntime } from "@elizaos/core";
import { describe, expect, it, vi } from "vitest";
import {
  classifyControlIntent,
  fastPathClassify,
  llmClassify,
  parseClassifierJson,
} from "../coding-agent-control-intent";

// ---------------------------------------------------------------------------
// Tier 1: fast-path regex tests
// ---------------------------------------------------------------------------

describe("fastPathClassify — hard_abort", () => {
  it("matches all-caps STOP variants", () => {
    expect(fastPathClassify("STOP")?.intent).toBe("hard_abort");
    expect(fastPathClassify("STOP!")?.intent).toBe("hard_abort");
    expect(fastPathClassify("STOP!!!")?.intent).toBe("hard_abort");
    expect(fastPathClassify("STOP STOP STOP")?.intent).toBe("hard_abort");
  });

  it("matches HALT / ABORT / CANCEL", () => {
    expect(fastPathClassify("HALT")?.intent).toBe("hard_abort");
    expect(fastPathClassify("ABORT")?.intent).toBe("hard_abort");
    expect(fastPathClassify("CANCEL")?.intent).toBe("hard_abort");
  });

  it("matches NO with bang punctuation", () => {
    expect(fastPathClassify("NO!")?.intent).toBe("hard_abort");
    expect(fastPathClassify("NO!!!")?.intent).toBe("hard_abort");
  });

  it("does NOT trigger on lowercase 'stop' (ambiguous in chat)", () => {
    // "stop after the first match" / "we stop deploying on Fridays"
    // — these should route to LLM tier, not fast-path abort.
    expect(fastPathClassify("stop after the first match")).toBeNull();
    expect(fastPathClassify("we stop deploying on Fridays")).toBeNull();
  });
});

describe("fastPathClassify — soft_pause", () => {
  it("matches single-word pause / wait / hold on", () => {
    expect(fastPathClassify("pause")?.intent).toBe("soft_pause");
    expect(fastPathClassify("wait")?.intent).toBe("soft_pause");
    expect(fastPathClassify("hold on")?.intent).toBe("soft_pause");
    expect(fastPathClassify("hold up")?.intent).toBe("soft_pause");
    expect(fastPathClassify("wait a sec")?.intent).toBe("soft_pause");
  });

  it("matches case-insensitively and with optional 'please' prefix", () => {
    expect(fastPathClassify("PAUSE")?.intent).toBe("soft_pause");
    expect(fastPathClassify("Please pause")?.intent).toBe("soft_pause");
    expect(fastPathClassify("please hold on")?.intent).toBe("soft_pause");
  });

  it("does NOT trigger on 'wait' embedded in a longer sentence", () => {
    // "wait, that's wrong!" should route to LLM tier where the
    // alarmed tone bumps it to hard_abort.
    expect(fastPathClassify("wait, that's wrong!")).toBeNull();
    expect(fastPathClassify("wait until tomorrow")).toBeNull();
  });
});

describe("fastPathClassify — resume", () => {
  it("matches single-word resume / continue / proceed / go ahead", () => {
    expect(fastPathClassify("resume")?.intent).toBe("resume");
    expect(fastPathClassify("continue")?.intent).toBe("resume");
    expect(fastPathClassify("proceed")?.intent).toBe("resume");
    expect(fastPathClassify("go ahead")?.intent).toBe("resume");
    expect(fastPathClassify("go")?.intent).toBe("resume");
    expect(fastPathClassify("go on")?.intent).toBe("resume");
  });

  it("does NOT trigger on 'go to the moon'", () => {
    expect(fastPathClassify("go to the moon")).toBeNull();
    expect(fastPathClassify("continue with the migration")).toBeNull();
  });
});

describe("fastPathClassify — status", () => {
  it("matches the obvious status questions", () => {
    expect(fastPathClassify("status")?.intent).toBe("status");
    expect(fastPathClassify("status?")?.intent).toBe("status");
    expect(fastPathClassify("what's running")?.intent).toBe("status");
    expect(fastPathClassify("whats running")?.intent).toBe("status");
    expect(fastPathClassify("what's the status")?.intent).toBe("status");
    expect(fastPathClassify("what are you working on")?.intent).toBe("status");
    expect(fastPathClassify("what are you working on?")?.intent).toBe("status");
    expect(fastPathClassify("what are you doing?")?.intent).toBe("status");
  });

  it("does NOT trigger on 'what's running on the server'", () => {
    expect(fastPathClassify("what's running on the server")).toBeNull();
  });
});

describe("fastPathClassify — non-matches", () => {
  it("returns null for normal coding instructions", () => {
    expect(fastPathClassify("make it blue")).toBeNull();
    expect(fastPathClassify("add a test for the auth flow")).toBeNull();
    expect(fastPathClassify("rename the file to foo.ts")).toBeNull();
    expect(fastPathClassify("what's the weather")).toBeNull();
  });

  it("returns null for empty / whitespace input", () => {
    expect(fastPathClassify("")).toBeNull();
    expect(fastPathClassify("   ")).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// JSON parser
// ---------------------------------------------------------------------------

describe("parseClassifierJson", () => {
  it("parses a clean JSON response", () => {
    expect(
      parseClassifierJson('{"intent":"hard_abort","rationale":"alarmed"}'),
    ).toEqual({ intent: "hard_abort", rationale: "alarmed" });
  });

  it("strips fenced code blocks", () => {
    const raw = '```json\n{"intent":"soft_pause","rationale":"chill"}\n```';
    expect(parseClassifierJson(raw)).toEqual({
      intent: "soft_pause",
      rationale: "chill",
    });
  });

  it("tolerates leading prose before the JSON object", () => {
    const raw = 'Sure! Here is the answer: {"intent":"none"}';
    expect(parseClassifierJson(raw)).toEqual({ intent: "none" });
  });

  it("returns null on unknown intent labels", () => {
    expect(parseClassifierJson('{"intent":"emergency"}')).toBeNull();
  });

  it("returns null on missing intent field", () => {
    expect(parseClassifierJson('{"rationale":"oops"}')).toBeNull();
  });

  it("returns null on non-string input", () => {
    expect(parseClassifierJson(null)).toBeNull();
    expect(parseClassifierJson(42)).toBeNull();
    expect(parseClassifierJson({})).toBeNull();
  });

  it("returns null on malformed JSON", () => {
    expect(parseClassifierJson("not json at all")).toBeNull();
    expect(parseClassifierJson("{intent: hard_abort}")).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// LLM tier with stubbed runtime
// ---------------------------------------------------------------------------

function makeRuntime(modelResponse: unknown | (() => unknown)): IAgentRuntime {
  return {
    useModel: vi.fn(async () => {
      return typeof modelResponse === "function"
        ? (modelResponse as () => unknown)()
        : modelResponse;
    }),
  } as unknown as IAgentRuntime;
}

describe("llmClassify", () => {
  it("returns the parsed intent on a successful LLM call", async () => {
    const runtime = makeRuntime(
      '{"intent":"hard_abort","rationale":"user is alarmed"}',
    );
    const result = await llmClassify(runtime, "WAIT WAIT WAIT that's wrong!");
    expect(result.intent).toBe("hard_abort");
    expect(result.source).toBe("llm");
    expect(result.rationale).toBe("user is alarmed");
  });

  it("falls back to 'none' when the LLM throws (fail-closed: never auto-halt on a buggy classifier)", async () => {
    const runtime = makeRuntime(() => {
      throw new Error("model is down");
    });
    const result = await llmClassify(runtime, "anything");
    expect(result.intent).toBe("none");
    expect(result.source).toBe("fallback");
  });

  it("falls back to 'none' when the LLM returns malformed JSON", async () => {
    const runtime = makeRuntime("totally not json");
    const result = await llmClassify(runtime, "anything");
    expect(result.intent).toBe("none");
    expect(result.source).toBe("fallback");
  });

  it("falls back to 'none' when the LLM returns an unknown intent label", async () => {
    const runtime = makeRuntime('{"intent":"emergency"}');
    const result = await llmClassify(runtime, "anything");
    expect(result.intent).toBe("none");
    expect(result.source).toBe("fallback");
  });
});

// ---------------------------------------------------------------------------
// Combined entry point
// ---------------------------------------------------------------------------

describe("classifyControlIntent", () => {
  it("returns the fast-path result without calling the LLM when it matches", async () => {
    const runtime = makeRuntime(
      '{"intent":"none","rationale":"should not be called"}',
    );
    const result = await classifyControlIntent(runtime, "STOP!!!");
    expect(result.intent).toBe("hard_abort");
    expect(result.source).toBe("fast_path");
    // Verify the LLM was NOT consulted.
    expect(runtime.useModel).not.toHaveBeenCalled();
  });

  it("falls through to the LLM tier when the fast path returns null", async () => {
    const runtime = makeRuntime('{"intent":"soft_pause","rationale":"chill"}');
    const result = await classifyControlIntent(
      runtime,
      "hold on a sec, can we talk about this approach?",
    );
    expect(result.intent).toBe("soft_pause");
    expect(result.source).toBe("llm");
    expect(runtime.useModel).toHaveBeenCalledTimes(1);
  });

  it("returns 'none' when both tiers decline (normal coding instruction)", async () => {
    const runtime = makeRuntime('{"intent":"none"}');
    const result = await classifyControlIntent(runtime, "make it blue");
    expect(result.intent).toBe("none");
    expect(result.source).toBe("llm");
  });
});
