import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildPlanSlug,
  createPlan,
  deletePlan,
  listPlanSlugs,
  loadPlan,
  parsePlanMarkdown,
  serializePlan,
  updatePlan,
} from "../coding-agent-plan-store";

let plansDir: string;

beforeEach(async () => {
  plansDir = await fs.mkdtemp(path.join(os.tmpdir(), "milady-plans-test-"));
});

afterEach(async () => {
  await fs.rm(plansDir, { recursive: true, force: true });
});

// ---------------------------------------------------------------------------
// buildPlanSlug
// ---------------------------------------------------------------------------

describe("buildPlanSlug", () => {
  it("includes a sanitized conversation id and a sortable timestamp", () => {
    const slug = buildPlanSlug(
      "convo-abc-123",
      new Date("2026-04-08T14:30:45Z"),
    );
    expect(slug).toMatch(/^convo-abc-123-\d{8}-\d{6}$/);
  });

  it("strips unsafe characters from the conversation id", () => {
    const slug = buildPlanSlug(
      "../../etc/passwd",
      new Date("2026-04-08T00:00:00Z"),
    );
    expect(slug).not.toContain("/");
    expect(slug).not.toContain("..");
    expect(slug).toMatch(/^etc-passwd-/);
  });

  it("falls back to 'plan' when the conversation id is empty after sanitization", () => {
    const slug = buildPlanSlug("////", new Date("2026-04-08T00:00:00Z"));
    expect(slug).toMatch(/^plan-\d{8}-\d{6}$/);
  });
});

// ---------------------------------------------------------------------------
// serializePlan ↔ parsePlanMarkdown round-trip
// ---------------------------------------------------------------------------

describe("serializePlan / parsePlanMarkdown round-trip", () => {
  it("round-trips a single-agent plan", () => {
    const raw = serializePlan({
      title: "Add dark mode toggle",
      recommendedExecution: {
        parallelism: 1,
        rationale: "Single-file edit, no parallelism benefit.",
        assignments: [
          { framework: "claude", description: "Edit the theme provider" },
        ],
      },
      steps: "1. Read theme.tsx\n2. Add toggle\n3. Write tests",
    });
    const parsed = parsePlanMarkdown(raw);
    expect(parsed.title).toBe("Add dark mode toggle");
    expect(parsed.recommendedExecution.parallelism).toBe(1);
    expect(parsed.recommendedExecution.assignments).toHaveLength(1);
    expect(parsed.recommendedExecution.assignments[0]).toEqual({
      framework: "claude",
      description: "Edit the theme provider",
    });
    expect(parsed.steps).toContain("1. Read theme.tsx");
  });

  it("round-trips a multi-agent decomposition", () => {
    const raw = serializePlan({
      title: "Migrate auth + UI together",
      recommendedExecution: {
        parallelism: 2,
        rationale: "Auth refactor and UI rewrite are independently verifiable.",
        assignments: [
          { framework: "claude", description: "Rewrite auth middleware" },
          { framework: "codex", description: "Update settings UI components" },
        ],
      },
      steps: "Phase 1: backend\nPhase 2: frontend\nPhase 3: e2e tests",
    });
    const parsed = parsePlanMarkdown(raw);
    expect(parsed.recommendedExecution.parallelism).toBe(2);
    expect(parsed.recommendedExecution.assignments).toHaveLength(2);
    expect(
      parsed.recommendedExecution.assignments.map((a) => a.framework),
    ).toEqual(["claude", "codex"]);
  });
});

// ---------------------------------------------------------------------------
// parsePlanMarkdown — leniency
// ---------------------------------------------------------------------------

describe("parsePlanMarkdown — lenient on LLM variation", () => {
  it("clamps parallelism above 4 down to 4", () => {
    const raw = `# Plan: Big task\n\n## Recommended execution\n- **Parallelism:** 99\n- **Rationale:** wishful thinking\n\n## Steps\n_TBD_\n`;
    expect(parsePlanMarkdown(raw).recommendedExecution.parallelism).toBe(4);
  });

  it("clamps parallelism below 1 up to 1", () => {
    const raw = `# Plan: Small\n\n## Recommended execution\n- Parallelism: 0\n- Rationale: lol\n`;
    expect(parsePlanMarkdown(raw).recommendedExecution.parallelism).toBe(1);
  });

  it("accepts alternative section heading 'Execution plan'", () => {
    const raw = `# Plan: Alt heading\n\n## Execution plan\n- **Parallelism:** 3\n- **Rationale:** three streams\n`;
    expect(parsePlanMarkdown(raw).recommendedExecution.parallelism).toBe(3);
  });

  it("returns sensible defaults when the schema block is missing entirely", () => {
    const raw = `# Plan: Half written\n\n## Steps\nTBD\n`;
    const parsed = parsePlanMarkdown(raw);
    expect(parsed.recommendedExecution.parallelism).toBe(1);
    expect(parsed.recommendedExecution.rationale).toContain("Single-agent");
    expect(parsed.recommendedExecution.assignments).toEqual([]);
  });

  it("extracts assignments in the 'Agent N (framework: X): \"Y\"' format", () => {
    const raw = `# Plan: Multi\n\n## Recommended execution\n- **Parallelism:** 3\n- **Rationale:** parallel ok\n- **Assignments:**\n  - Agent 1 (framework: claude): "do A"\n  - Agent 2 (framework: codex): "do B"\n  - Agent 3 (framework: aider): "do C"\n`;
    const parsed = parsePlanMarkdown(raw);
    expect(parsed.recommendedExecution.assignments).toHaveLength(3);
    expect(
      parsed.recommendedExecution.assignments.map((a) => a.framework),
    ).toEqual(["claude", "codex", "aider"]);
  });

  it("ignores assignments with unknown framework names", () => {
    const raw = `# Plan: With trash\n\n## Recommended execution\n- **Parallelism:** 2\n- **Rationale:** ok\n- **Assignments:**\n  - Agent 1 (framework: hermes): "do A"\n  - Agent 2 (framework: claude): "do B"\n`;
    const parsed = parsePlanMarkdown(raw);
    expect(parsed.recommendedExecution.assignments).toHaveLength(1);
    expect(parsed.recommendedExecution.assignments[0].framework).toBe("claude");
  });

  it("falls back to 'Untitled' when no H1 is present", () => {
    expect(parsePlanMarkdown("just some text").title).toBe("Untitled");
  });
});

// ---------------------------------------------------------------------------
// Store API: create / load / update / delete / list
// ---------------------------------------------------------------------------

describe("createPlan + loadPlan", () => {
  it("creates a plan file and round-trips through loadPlan", async () => {
    const plan = await createPlan({
      conversationId: "convo-1",
      title: "First plan",
      plansDir,
    });
    expect(plan.filePath.startsWith(plansDir)).toBe(true);
    const stat = await fs.stat(plan.filePath);
    expect(stat.isFile()).toBe(true);
    const loaded = await loadPlan(plan.slug, plansDir);
    expect(loaded?.title).toBe("First plan");
    expect(loaded?.recommendedExecution.parallelism).toBe(1);
  });

  it("returns null when loadPlan can't find the slug", async () => {
    expect(await loadPlan("does-not-exist", plansDir)).toBeNull();
  });

  it("persists a multi-agent plan and parses it back", async () => {
    const plan = await createPlan({
      conversationId: "convo-2",
      title: "Refactor auth + UI",
      plansDir,
      recommendedExecution: {
        parallelism: 2,
        rationale: "Two independent workstreams",
        assignments: [
          { framework: "claude", description: "Rewrite middleware" },
          { framework: "codex", description: "Update UI" },
        ],
      },
      steps: "1. Plan\n2. Execute",
    });
    const loaded = await loadPlan(plan.slug, plansDir);
    expect(loaded?.recommendedExecution.parallelism).toBe(2);
    expect(loaded?.recommendedExecution.assignments).toHaveLength(2);
    expect(loaded?.steps).toContain("1. Plan");
  });

  it("file is written with mode 0600 (owner-only readable)", async () => {
    const plan = await createPlan({
      conversationId: "secrets",
      title: "Sensitive plan",
      plansDir,
    });
    const stat = await fs.stat(plan.filePath);
    // On systems that report permission bits, the lower 9 bits
    // should be 0o600. Skip the assertion on platforms that strip
    // the mode entirely (Windows in CI).
    if (stat.mode && (stat.mode & 0o777) !== 0) {
      expect(stat.mode & 0o777).toBe(0o600);
    }
  });
});

describe("updatePlan", () => {
  it("rewrites the file and parses the new content", async () => {
    const plan = await createPlan({
      conversationId: "u1",
      title: "Initial",
      plansDir,
    });
    const newRaw = `# Plan: Updated\n\n## Recommended execution\n- **Parallelism:** 3\n- **Rationale:** changed my mind\n\n## Steps\nNew steps\n`;
    const updated = await updatePlan(plan.slug, newRaw, plansDir);
    expect(updated?.title).toBe("Updated");
    expect(updated?.recommendedExecution.parallelism).toBe(3);
    expect(updated?.steps).toContain("New steps");
  });

  it("returns null when the slug doesn't exist", async () => {
    expect(await updatePlan("nope", "# x", plansDir)).toBeNull();
  });
});

describe("deletePlan", () => {
  it("removes the file and subsequent loadPlan returns null", async () => {
    const plan = await createPlan({
      conversationId: "d1",
      title: "Doomed",
      plansDir,
    });
    await deletePlan(plan.slug, plansDir);
    expect(await loadPlan(plan.slug, plansDir)).toBeNull();
  });

  it("is a no-op when the slug doesn't exist", async () => {
    await expect(deletePlan("nope", plansDir)).resolves.toBeUndefined();
  });
});

describe("listPlanSlugs", () => {
  it("returns an empty array when the directory doesn't exist", async () => {
    expect(await listPlanSlugs(path.join(plansDir, "missing-subdir"))).toEqual(
      [],
    );
  });

  it("returns slugs newest-first by mtime", async () => {
    const a = await createPlan({
      conversationId: "first",
      title: "A",
      plansDir,
    });
    // Wait briefly so mtimes differ on filesystems with second-resolution mtime.
    await new Promise((r) => setTimeout(r, 10));
    const b = await createPlan({
      conversationId: "second",
      title: "B",
      plansDir,
    });
    const slugs = await listPlanSlugs(plansDir);
    expect(slugs).toContain(a.slug);
    expect(slugs).toContain(b.slug);
    // b is newer
    expect(slugs.indexOf(b.slug)).toBeLessThan(slugs.indexOf(a.slug));
  });
});
