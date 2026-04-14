import { describe, expect, it } from "vitest";
import {
  isCodingAgentScope,
  shouldGateRequest,
} from "../coding-agent-dispatch-gate";

describe("isCodingAgentScope", () => {
  it("includes coding-agents, workspace, and issues prefixes", () => {
    expect(isCodingAgentScope("/api/coding-agents/preflight")).toBe(true);
    expect(isCodingAgentScope("/api/workspace/provision")).toBe(true);
    expect(isCodingAgentScope("/api/issues/list")).toBe(true);
  });

  it("excludes everything else", () => {
    expect(isCodingAgentScope("/api/chat/send")).toBe(false);
    expect(isCodingAgentScope("/api/config")).toBe(false);
    expect(isCodingAgentScope("/")).toBe(false);
  });
});

describe("shouldGateRequest", () => {
  it("never gates GET / HEAD / OPTIONS — status reads must always work", () => {
    expect(shouldGateRequest("GET", "/api/coding-agents/spawn")).toBe(false);
    expect(shouldGateRequest("HEAD", "/api/coding-agents/spawn")).toBe(false);
    expect(shouldGateRequest("OPTIONS", "/api/coding-agents/spawn")).toBe(
      false,
    );
    expect(shouldGateRequest("GET", "/api/coding-agents/preflight")).toBe(
      false,
    );
    expect(
      shouldGateRequest("GET", "/api/coding-agents/coordinator/status"),
    ).toBe(false);
  });

  it("never gates the control bus's own routes — the bus must be operable when halted", () => {
    expect(shouldGateRequest("POST", "/api/coding-agents/control/pause")).toBe(
      false,
    );
    expect(shouldGateRequest("POST", "/api/coding-agents/control/abort")).toBe(
      false,
    );
    expect(shouldGateRequest("POST", "/api/coding-agents/control/resume")).toBe(
      false,
    );
    expect(shouldGateRequest("GET", "/api/coding-agents/control/status")).toBe(
      false,
    );
  });

  it("never gates per-session stop — manual abort must always work", () => {
    expect(shouldGateRequest("POST", "/api/coding-agents/abc-123/stop")).toBe(
      false,
    );
    expect(shouldGateRequest("POST", "/api/coding-agents/some-uuid/stop")).toBe(
      false,
    );
  });

  it("never gates auth flows — auth is independent of dispatch state", () => {
    expect(shouldGateRequest("POST", "/api/coding-agents/auth/claude")).toBe(
      false,
    );
    expect(shouldGateRequest("POST", "/api/coding-agents/auth/codex")).toBe(
      false,
    );
    expect(shouldGateRequest("POST", "/api/coding-agents/auth/aider")).toBe(
      false,
    );
    expect(shouldGateRequest("POST", "/api/coding-agents/auth/gemini")).toBe(
      false,
    );
  });

  it("never gates plan-mode lifecycle routes — they're the user's escape hatch when paused", () => {
    expect(shouldGateRequest("GET", "/api/coding-agents/plan/active")).toBe(
      false,
    );
    expect(shouldGateRequest("POST", "/api/coding-agents/plan/active")).toBe(
      false,
    );
    expect(shouldGateRequest("POST", "/api/coding-agents/plan/enter")).toBe(
      false,
    );
    expect(
      shouldGateRequest("POST", "/api/coding-agents/plan/convo-1/update"),
    ).toBe(false);
    expect(
      shouldGateRequest("POST", "/api/coding-agents/plan/convo-1/exit"),
    ).toBe(false);
  });

  it("never gates scratch cleanup operations", () => {
    expect(
      shouldGateRequest("POST", "/api/coding-agents/sess-1/scratch/keep"),
    ).toBe(false);
    expect(
      shouldGateRequest("POST", "/api/coding-agents/sess-1/scratch/delete"),
    ).toBe(false);
    expect(
      shouldGateRequest("POST", "/api/coding-agents/sess-1/scratch/promote"),
    ).toBe(false);
  });

  it("gates POST routes that submit new work to coding agents", () => {
    // Spawn — creates a brand-new agent.
    expect(shouldGateRequest("POST", "/api/coding-agents/spawn")).toBe(true);
    // Send — pushes input to a running agent.
    expect(shouldGateRequest("POST", "/api/coding-agents/sess-1/send")).toBe(
      true,
    );
    // Dispatch — orchestrator-style entry point.
    expect(shouldGateRequest("POST", "/api/coding-agents/dispatch")).toBe(true);
    // Generic task creation.
    expect(shouldGateRequest("POST", "/api/coding-agents/tasks")).toBe(true);
    // Workspace provisioning — sets up a workspace for new dispatch.
    expect(shouldGateRequest("POST", "/api/workspace/provision")).toBe(true);
    // Issues actions — issue-driven dispatch path.
    expect(shouldGateRequest("POST", "/api/issues/process")).toBe(true);
  });

  it("gates PUT / PATCH / DELETE under coding-agent scope", () => {
    expect(shouldGateRequest("PUT", "/api/coding-agents/sess-1")).toBe(true);
    expect(shouldGateRequest("PATCH", "/api/coding-agents/sess-1/config")).toBe(
      true,
    );
    expect(shouldGateRequest("DELETE", "/api/coding-agents/sess-1")).toBe(true);
  });

  it("ignores routes outside the coding-agent scope entirely", () => {
    expect(shouldGateRequest("POST", "/api/chat/send")).toBe(false);
    expect(shouldGateRequest("POST", "/api/config")).toBe(false);
    expect(shouldGateRequest("POST", "/")).toBe(false);
  });

  it("is method-case-insensitive", () => {
    expect(shouldGateRequest("get", "/api/coding-agents/spawn")).toBe(false);
    expect(shouldGateRequest("post", "/api/coding-agents/spawn")).toBe(true);
  });
});
