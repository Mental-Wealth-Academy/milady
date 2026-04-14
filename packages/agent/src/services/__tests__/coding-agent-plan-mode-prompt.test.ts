import { describe, expect, it } from "vitest";
import type { Plan } from "../coding-agent-plan-store";
import {
  buildPlanFileReference,
  buildPlanModePromptBlock,
  buildPlanModeReminder,
  promptContainsPlanFileReference,
  promptContainsPlanMode,
} from "../coding-agent-plan-mode-prompt";

function makePlan(overrides: Partial<Plan> = {}): Plan {
  return {
    slug: "convo-1-20260408-150000",
    filePath: "/tmp/milady-plans/convo-1-20260408-150000.md",
    title: "Refactor auth",
    recommendedExecution: {
      parallelism: 2,
      rationale: "Auth and UI are independently verifiable",
      assignments: [
        { framework: "claude", description: "Rewrite auth middleware" },
        { framework: "codex", description: "Update settings UI" },
      ],
    },
    steps: "1. Audit\n2. Migrate\n3. Verify",
    raw: "# Plan: Refactor auth\n\n## Recommended execution\n- Parallelism: 2\n",
    createdAt: "2026-04-08T15:00:00.000Z",
    updatedAt: "2026-04-08T15:05:00.000Z",
    ...overrides,
  };
}

describe("buildPlanModeReminder", () => {
  it("includes the plan title and the canonical [plan-mode] header", () => {
    const reminder = buildPlanModeReminder(makePlan());
    expect(reminder).toMatch(/^\[plan-mode\]/);
    expect(reminder).toContain("Refactor auth");
  });

  it("forbids writes and explicitly mandates the read-only tool set", () => {
    const reminder = buildPlanModeReminder(makePlan());
    expect(reminder).toMatch(/Do NOT write code/);
    expect(reminder).toMatch(/read-only tools/);
  });

  it("documents the multi-agent decomposition schema (Parallelism / Rationale / Assignments)", () => {
    const reminder = buildPlanModeReminder(makePlan());
    expect(reminder).toContain("Parallelism:");
    expect(reminder).toContain("Rationale:");
    expect(reminder).toContain("Assignments:");
    // Spell out the supported framework union so the model picks
    // from a fixed set.
    expect(reminder).toMatch(/claude\|codex\|aider\|gemini/);
  });

  it("teaches the model to NOT force a default parallelism", () => {
    const reminder = buildPlanModeReminder(makePlan());
    expect(reminder).toMatch(/do not force a default/i);
    expect(reminder).toMatch(/N=1.*single-file edits/);
    expect(reminder).toMatch(/N=2\+/);
  });

  it("documents the ExitPlanMode approve / discard call shape", () => {
    const reminder = buildPlanModeReminder(makePlan());
    expect(reminder).toMatch(/ExitPlanMode/);
    expect(reminder).toMatch(/decision=approve/);
    expect(reminder).toMatch(/decision=discard/);
  });
});

describe("buildPlanFileReference", () => {
  it("includes the file path, content hash, and updatedAt", () => {
    const ref = buildPlanFileReference(makePlan());
    expect(ref).toMatch(/^\[plan-mode:file-ref\]/);
    expect(ref).toContain("/tmp/milady-plans/convo-1-20260408-150000.md");
    expect(ref).toMatch(/Content hash: [0-9a-f]{12}/);
    expect(ref).toContain("2026-04-08T15:05:00.000Z");
  });

  it("produces a stable hash for the same raw content", () => {
    const a = buildPlanFileReference(makePlan({ raw: "identical content" }));
    const b = buildPlanFileReference(makePlan({ raw: "identical content" }));
    const aHash = a.match(/Content hash: ([0-9a-f]+)/)?.[1];
    const bHash = b.match(/Content hash: ([0-9a-f]+)/)?.[1];
    expect(aHash).toBeDefined();
    expect(aHash).toBe(bHash);
  });

  it("produces a different hash when the raw content changes", () => {
    const a = buildPlanFileReference(makePlan({ raw: "version A" }));
    const b = buildPlanFileReference(makePlan({ raw: "version B" }));
    const aHash = a.match(/Content hash: ([0-9a-f]+)/)?.[1];
    const bHash = b.match(/Content hash: ([0-9a-f]+)/)?.[1];
    expect(aHash).not.toBe(bHash);
  });

  it("instructs the model to re-read the file when its recall disagrees", () => {
    const ref = buildPlanFileReference(makePlan());
    expect(ref).toMatch(/re-read the file/);
  });
});

describe("buildPlanModePromptBlock", () => {
  it("contains both the reminder and the file reference", () => {
    const block = buildPlanModePromptBlock(makePlan());
    expect(block).toMatch(/\[plan-mode\]/);
    expect(block).toMatch(/\[plan-mode:file-ref\]/);
    expect(promptContainsPlanMode(block)).toBe(true);
    expect(promptContainsPlanFileReference(block)).toBe(true);
  });
});

describe("promptContainsPlanMode / promptContainsPlanFileReference", () => {
  it("detects both headers in a prompt", () => {
    const prompt =
      "irrelevant text\n[plan-mode]\nmore text\n[plan-mode:file-ref]\n";
    expect(promptContainsPlanMode(prompt)).toBe(true);
    expect(promptContainsPlanFileReference(prompt)).toBe(true);
  });

  it("returns false when neither header is present", () => {
    expect(promptContainsPlanMode("hello world")).toBe(false);
    expect(promptContainsPlanFileReference("hello world")).toBe(false);
  });
});
