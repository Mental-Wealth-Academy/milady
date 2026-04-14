import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { codingAgentControlBus } from "../coding-agent-control-bus";
import {
  __resetPlanModeForTests,
  enterPlanMode,
  exitPlanMode,
  getActivePlan,
  isPlanningGloballyActive,
  listActivePlans,
  readActivePlan,
  updateActivePlan,
} from "../coding-agent-plan-mode";

let plansDir: string;

beforeEach(async () => {
  plansDir = await fs.mkdtemp(path.join(os.tmpdir(), "milady-plan-mode-test-"));
  __resetPlanModeForTests();
  codingAgentControlBus.applyResume(null);
});

afterEach(async () => {
  __resetPlanModeForTests();
  codingAgentControlBus.applyResume(null);
  await fs.rm(plansDir, { recursive: true, force: true });
});

describe("enterPlanMode", () => {
  it("creates a plan file, registers the conversation, and pauses the bus", async () => {
    const result = await enterPlanMode({
      conversationId: "convo-1",
      title: "Refactor auth",
      plansDir,
    });
    expect(result.conversationId).toBe("convo-1");
    expect(result.slug).toBeDefined();
    expect(result.plan.title).toBe("Refactor auth");
    expect(getActivePlan("convo-1")).toMatchObject({
      conversationId: "convo-1",
      slug: result.slug,
    });
    expect(isPlanningGloballyActive()).toBe(true);
    // Coupling: bus is paused for this conversation (not globally).
    expect(codingAgentControlBus.isHalted("convo-1")).toBe(true);
    expect(codingAgentControlBus.isHaltedGlobally()).toBe(false);
    // The plan file actually exists on disk.
    const stat = await fs.stat(result.plan.filePath);
    expect(stat.isFile()).toBe(true);
  });

  it("throws if the conversation is already in plan mode", async () => {
    await enterPlanMode({
      conversationId: "convo-1",
      title: "First",
      plansDir,
    });
    await expect(
      enterPlanMode({
        conversationId: "convo-1",
        title: "Second",
        plansDir,
      }),
    ).rejects.toThrow(/already in plan mode/);
  });

  it("supports multiple conversations in plan mode simultaneously", async () => {
    await enterPlanMode({
      conversationId: "a",
      title: "Plan A",
      plansDir,
    });
    await enterPlanMode({
      conversationId: "b",
      title: "Plan B",
      plansDir,
    });
    expect(listActivePlans()).toHaveLength(2);
    expect(isPlanningGloballyActive()).toBe(true);
  });
});

describe("updateActivePlan", () => {
  it("rewrites the markdown for an active conversation", async () => {
    const entry = await enterPlanMode({
      conversationId: "convo-1",
      title: "Initial",
      plansDir,
    });
    const newRaw = `# Plan: Updated\n\n## Recommended execution\n- Parallelism: 2\n- Rationale: split it\n- Assignments:\n  - Agent 1 (framework: claude): "do A"\n  - Agent 2 (framework: codex): "do B"\n\n## Steps\nNew steps\n`;
    const updated = await updateActivePlan("convo-1", newRaw, plansDir);
    expect(updated?.title).toBe("Updated");
    expect(updated?.recommendedExecution.parallelism).toBe(2);
    expect(updated?.recommendedExecution.assignments).toHaveLength(2);
    // The slug didn't change.
    expect(updated?.slug).toBe(entry.slug);
  });

  it("returns null when the conversation is not in plan mode", async () => {
    expect(await updateActivePlan("not-planning", "# x", plansDir)).toBeNull();
  });
});

describe("readActivePlan", () => {
  it("returns the loaded plan for an active conversation", async () => {
    await enterPlanMode({
      conversationId: "convo-1",
      title: "Read me",
      plansDir,
    });
    const plan = await readActivePlan("convo-1", plansDir);
    expect(plan?.title).toBe("Read me");
  });

  it("returns null when the conversation is not planning", async () => {
    expect(await readActivePlan("nope", plansDir)).toBeNull();
  });
});

describe("exitPlanMode — approve", () => {
  it("returns the plan, clears active state, and resumes the bus for that conversation", async () => {
    await enterPlanMode({
      conversationId: "convo-1",
      title: "Approve me",
      plansDir,
    });
    // Plan mode pause is per-conversation, not global
    expect(
      codingAgentControlBus.snapshotForConversation("convo-1").state,
    ).toBe("paused");
    expect(codingAgentControlBus.isHalted("convo-1")).toBe(true);
    // Other conversations are unaffected
    expect(codingAgentControlBus.isHalted("other-convo")).toBe(false);
    const result = await exitPlanMode({
      conversationId: "convo-1",
      decision: "approve",
      plansDir,
    });
    expect(result.decision).toBe("approve");
    expect(result.plan?.title).toBe("Approve me");
    expect(getActivePlan("convo-1")).toBeNull();
    expect(isPlanningGloballyActive()).toBe(false);
    expect(codingAgentControlBus.isHalted("convo-1")).toBe(false);
  });

  it("leaves the plan file on disk after approve", async () => {
    const entry = await enterPlanMode({
      conversationId: "convo-1",
      title: "Keep me",
      plansDir,
    });
    await exitPlanMode({
      conversationId: "convo-1",
      decision: "approve",
      plansDir,
    });
    // File still exists.
    const stat = await fs.stat(entry.plan.filePath);
    expect(stat.isFile()).toBe(true);
  });
});

describe("exitPlanMode — discard", () => {
  it("deletes the plan file, clears active state, and resumes the conversation", async () => {
    const entry = await enterPlanMode({
      conversationId: "convo-1",
      title: "Throw away",
      plansDir,
    });
    expect(codingAgentControlBus.isHalted("convo-1")).toBe(true);
    const result = await exitPlanMode({
      conversationId: "convo-1",
      decision: "discard",
      plansDir,
    });
    expect(result.decision).toBe("discard");
    expect(result.plan).toBeNull();
    expect(getActivePlan("convo-1")).toBeNull();
    expect(codingAgentControlBus.isHalted("convo-1")).toBe(false);
    // File is gone.
    await expect(fs.stat(entry.plan.filePath)).rejects.toThrow();
  });
});

describe("exitPlanMode — no active plan", () => {
  it("returns plan: null and does not touch the bus", async () => {
    // Bus is already running — exit on a non-active convo should
    // be a no-op.
    const result = await exitPlanMode({
      conversationId: "never-planned",
      decision: "approve",
      plansDir,
    });
    expect(result.plan).toBeNull();
    // Bus is still running (unchanged), but exitPlanMode does call
    // applyResume defensively. That's OK — running → running is
    // idempotent.
    expect(codingAgentControlBus.snapshot().state).toBe("running");
  });
});

describe("exitPlanMode coupling — per-conversation isolation", () => {
  it("approve resumes the conversation but does NOT clear a global abort", async () => {
    await enterPlanMode({
      conversationId: "convo-1",
      title: "Survive abort",
      plansDir,
    });
    // Simulate a separate global hard abort (e.g. user said "STOP everything"
    // from a different context). This is independent of plan mode.
    await codingAgentControlBus.applyAbort(null, "user STOPPED");
    expect(codingAgentControlBus.snapshot().state).toBe("aborting");
    // exitPlanMode only resumes the per-conversation pause — the global
    // abort stays because it was triggered independently.
    await exitPlanMode({
      conversationId: "convo-1",
      decision: "approve",
      plansDir,
    });
    // The per-conversation pause is cleared...
    expect(getActivePlan("convo-1")).toBeNull();
    // ...but the global abort persists (different scope).
    expect(codingAgentControlBus.isHaltedGlobally()).toBe(true);
    expect(codingAgentControlBus.snapshot().state).toBe("aborting");
  });

  it("plan mode in one conversation does not affect another", async () => {
    await enterPlanMode({
      conversationId: "convo-A",
      title: "Plan A",
      plansDir,
    });
    // convo-A is paused, convo-B is free
    expect(codingAgentControlBus.isHalted("convo-A")).toBe(true);
    expect(codingAgentControlBus.isHalted("convo-B")).toBe(false);
    // Global bus is still running
    expect(codingAgentControlBus.isHaltedGlobally()).toBe(false);
  });
});
