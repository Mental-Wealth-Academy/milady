import { describe, expect, it } from "vitest";
import {
  ABORT_KEY_STAGGER_MS,
  getAbortSequence,
  normalizeAdapterType,
} from "../coding-agent-abort-sequences";

describe("getAbortSequence", () => {
  it("returns two escapes for Claude Code (single esc doesn't stop tool calls)", () => {
    expect(getAbortSequence("claude")).toEqual(["escape", "escape"]);
  });

  it("returns a single ctrl+c for codex / aider / gemini / shell", () => {
    expect(getAbortSequence("codex")).toEqual(["ctrl+c"]);
    expect(getAbortSequence("aider")).toEqual(["ctrl+c"]);
    expect(getAbortSequence("gemini")).toEqual(["ctrl+c"]);
    expect(getAbortSequence("shell")).toEqual(["ctrl+c"]);
  });

  it("never returns an empty sequence — unknown adapters fall back to ctrl+c", () => {
    // TypeScript blocks this at compile time but the runtime default
    // branch matters when adapterType strings come in from the wire.
    expect(
      getAbortSequence(
        "unknown" as unknown as Parameters<typeof getAbortSequence>[0],
      ),
    ).toEqual(["ctrl+c"]);
  });

  it("exports a positive stagger delay so multi-key sequences don't fire simultaneously", () => {
    expect(ABORT_KEY_STAGGER_MS).toBeGreaterThan(0);
  });
});

describe("normalizeAdapterType", () => {
  it("maps canonical adapter ids straight through", () => {
    expect(normalizeAdapterType("claude")).toBe("claude");
    expect(normalizeAdapterType("codex")).toBe("codex");
    expect(normalizeAdapterType("gemini")).toBe("gemini");
    expect(normalizeAdapterType("aider")).toBe("aider");
    expect(normalizeAdapterType("shell")).toBe("shell");
  });

  it("maps full adapter display names (as reported by adapter.adapterType)", () => {
    expect(normalizeAdapterType("claude-code")).toBe("claude");
    expect(normalizeAdapterType("Claude Code")).toBe("claude");
    expect(normalizeAdapterType("openai-codex")).toBe("codex");
    expect(normalizeAdapterType("OpenAI Codex")).toBe("codex");
    expect(normalizeAdapterType("google-gemini")).toBe("gemini");
    expect(normalizeAdapterType("gemini-cli")).toBe("gemini");
  });

  it("falls back to 'shell' for unknown or missing types", () => {
    expect(normalizeAdapterType(undefined)).toBe("shell");
    expect(normalizeAdapterType("")).toBe("shell");
    expect(normalizeAdapterType("fish")).toBe("shell");
    expect(normalizeAdapterType("some-new-agent")).toBe("shell");
  });
});
