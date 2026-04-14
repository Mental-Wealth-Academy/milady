/**
 * Plan file store — Phase 5 of the Plan Mode feature described in
 * docs/followups/hitl-plan-mode.md.
 *
 * Plans live as markdown files at `~/.milady/plans/{slug}.md` (or
 * `${MILADY_STATE_DIR}/plans/{slug}.md` when the state dir is
 * overridden). One file per plan, named with a deterministic slug
 * derived from the conversation id and a creation timestamp so
 * concurrent sessions don't collide and we can list plans by
 * directory scan.
 *
 * Why files on disk and not just transcript text:
 *
 *   - Survives chat compaction. The plan_file_reference attachment
 *     in Phase 7 only needs the path + content hash to re-anchor
 *     the model on the current plan.
 *   - The model can re-read the file at any point during the
 *     interview workflow without re-deriving everything from the
 *     compacted transcript.
 *   - The user can edit the file directly (open in a text editor)
 *     between turns and the next plan-mode turn picks up the
 *     changes — that's the cheapest "approval UI" we can ship.
 *
 * The file's mandatory schema (per the design doc):
 *
 *     # Plan: <title>
 *
 *     ## Recommended execution
 *     - **Parallelism:** N
 *     - **Rationale:** why N
 *     - **Assignments:**
 *       - Agent 1 (framework: claude): "subtask A description"
 *       - Agent 2 (framework: codex): "subtask B description"
 *
 *     ## Steps
 *     <free-form markdown>
 *
 * The parser is intentionally lenient — LLMs vary on punctuation,
 * casing, and ordering. We only fail closed when the structured
 * `Recommended execution` block is so broken we can't extract a
 * parallelism number. The model is then prompted to fix it on the
 * next turn rather than us blowing up the whole plan.
 */

import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

export type PlanFramework = "claude" | "codex" | "gemini" | "aider";

export interface PlanAssignment {
  framework: PlanFramework;
  description: string;
}

export interface PlanRecommendedExecution {
  parallelism: number;
  rationale: string;
  assignments: PlanAssignment[];
}

export interface Plan {
  slug: string;
  /** Absolute path on disk where the plan is persisted. */
  filePath: string;
  title: string;
  recommendedExecution: PlanRecommendedExecution;
  /**
   * Free-form markdown body for the `## Steps` section. The model
   * owns the format here — we don't try to parse it.
   */
  steps: string;
  /** The whole markdown file contents — useful for hashing/diffing. */
  raw: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePlanInput {
  conversationId: string;
  title: string;
  recommendedExecution?: PlanRecommendedExecution;
  steps?: string;
  /**
   * Override the absolute plans directory. Tests pass a tmp dir.
   * Production callers should leave this undefined and let the
   * resolver pick up `MILADY_STATE_DIR`.
   */
  plansDir?: string;
}

const DEFAULT_PARALLELISM = 1;
const DEFAULT_RATIONALE =
  "Single-agent execution — no decomposition opportunity yet.";
const FRAMEWORK_KEYS: ReadonlySet<PlanFramework> = new Set([
  "claude",
  "codex",
  "gemini",
  "aider",
]);

// ---------------------------------------------------------------------------
// Path resolution
// ---------------------------------------------------------------------------

/**
 * Resolve the directory plans live in. Honors `MILADY_STATE_DIR` /
 * `ELIZA_STATE_DIR` so worktree dev sessions get isolated stores
 * just like the rest of milady.
 */
export function resolvePlansDir(): string {
  const stateDir =
    process.env.MILADY_STATE_DIR?.trim() ||
    process.env.ELIZA_STATE_DIR?.trim() ||
    path.join(os.homedir(), ".milady");
  return path.join(stateDir, "plans");
}

/**
 * Build a slug for a new plan. Deterministic enough that two plans
 * created in the same conversation in the same minute won't
 * collide (we include seconds), but still readable in `ls`.
 */
export function buildPlanSlug(
  conversationId: string,
  date: Date = new Date(),
): string {
  const safeConv = sanitizeForFilename(conversationId).slice(0, 16);
  const stamp = formatStamp(date);
  return `${safeConv}-${stamp}`;
}

function sanitizeForFilename(input: string): string {
  // Drop anything that isn't ASCII alphanumeric or `-` / `_`. Falls
  // back to "plan" if the result is empty so we always get a usable
  // slug.
  const cleaned = input
    .replace(/[^A-Za-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || "plan";
}

function formatStamp(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    `${date.getFullYear()}` +
    `${pad(date.getMonth() + 1)}` +
    `${pad(date.getDate())}` +
    `-${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`
  );
}

// ---------------------------------------------------------------------------
// Serializer
// ---------------------------------------------------------------------------

/**
 * Render a `Plan` to the canonical markdown layout. The model can
 * still write off-spec content; this is what *we* produce when
 * creating a fresh plan or rewriting one programmatically.
 */
export function serializePlan(input: {
  title: string;
  recommendedExecution: PlanRecommendedExecution;
  steps: string;
}): string {
  const { title, recommendedExecution, steps } = input;
  const lines: string[] = [];
  lines.push(`# Plan: ${title.trim() || "Untitled"}`);
  lines.push("");
  lines.push("## Recommended execution");
  lines.push(`- **Parallelism:** ${recommendedExecution.parallelism}`);
  lines.push(`- **Rationale:** ${recommendedExecution.rationale.trim()}`);
  lines.push(`- **Assignments:**`);
  if (recommendedExecution.assignments.length === 0) {
    lines.push("  - _No assignments yet._");
  } else {
    recommendedExecution.assignments.forEach((a, i) => {
      lines.push(
        `  - Agent ${i + 1} (framework: ${a.framework}): "${a.description.replace(/"/g, '\\"')}"`,
      );
    });
  }
  lines.push("");
  lines.push("## Steps");
  lines.push(steps.trim() || "_No steps written yet._");
  lines.push("");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Parser — lenient on purpose
// ---------------------------------------------------------------------------

/**
 * Parse a plan markdown file. Tolerates LLM variation on case,
 * punctuation, and section ordering. Returns sensible defaults
 * when the schema block is missing entirely so we can still load
 * a half-written plan and let the model finish it.
 */
export function parsePlanMarkdown(raw: string): {
  title: string;
  recommendedExecution: PlanRecommendedExecution;
  steps: string;
} {
  const title = extractTitle(raw);
  const recommendedExecution = extractRecommendedExecution(raw);
  const steps = extractSteps(raw);
  return { title, recommendedExecution, steps };
}

function extractTitle(raw: string): string {
  // Explicit "# Plan: title" heading
  const m = raw.match(/^\s*#\s+Plan:\s*(.+?)\s*$/m);
  if (m && m[1]) return m[1].trim();
  // First H1 heading
  const h1 = raw.match(/^\s*#\s+(.+?)\s*$/m);
  if (h1) return h1[1].trim();
  // Bold "**project title:**" or "**title:**" pattern (model conversational format)
  const boldTitle = raw.match(
    /\*{2}(?:project\s+)?title\s*:\*{2}\s*(.+?)$/im,
  );
  if (boldTitle && boldTitle[1]) return boldTitle[1].trim();
  // First H2 as a last resort before "Untitled"
  const h2 = raw.match(/^\s*##\s+(.+?)\s*$/m);
  if (h2) return h2[1].trim();
  return "Untitled";
}

function extractRecommendedExecution(raw: string): PlanRecommendedExecution {
  const body = sliceSection(raw, [
    "Recommended execution",
    "Execution plan",
    "Execution",
  ]);
  if (body === null) {
    return {
      parallelism: DEFAULT_PARALLELISM,
      rationale: DEFAULT_RATIONALE,
      assignments: [],
    };
  }
  const parallelism = extractParallelism(body);
  const rationale = extractRationale(body);
  const assignments = extractAssignments(body);
  return {
    parallelism: clampParallelism(parallelism),
    rationale: rationale || DEFAULT_RATIONALE,
    assignments,
  };
}

function extractParallelism(body: string): number {
  // Strip markdown emphasis chars before matching so any wrap shape
  // (`**Parallelism:**`, `*parallelism*:`, `Parallelism:`) works.
  const stripped = body.replace(/\*+/g, "");
  const m = stripped.match(
    /(?:^|\n)\s*[-*]\s*parallelism\s*[:\-–]\s*(\d+)/i,
  );
  if (m) {
    const n = Number.parseInt(m[1], 10);
    if (Number.isFinite(n)) return n;
  }
  return DEFAULT_PARALLELISM;
}

function clampParallelism(n: number): number {
  if (!Number.isFinite(n) || n < 1) return 1;
  if (n > 4) return 4;
  return Math.floor(n);
}

function extractRationale(body: string): string {
  const stripped = body.replace(/\*+/g, "");
  const m = stripped.match(
    /(?:^|\n)\s*[-*]\s*rationale\s*[:\-–]\s*([^\n]+)/i,
  );
  return m ? m[1].trim() : "";
}

function extractAssignments(body: string): PlanAssignment[] {
  // Look for bullets that mention `framework: <name>` and a
  // description string. We accept either:
  //   - Agent 1 (framework: claude): "do X"
  //   - Agent 1 (claude): do X
  //   - * claude — do X
  // Tolerate various forms.
  const out: PlanAssignment[] = [];
  const lineRegex =
    /(?:^|\n)\s*[-*]\s+(?:Agent\s*\d+\s*)?(?:\(\s*(?:framework\s*[:=]\s*)?(claude|codex|gemini|aider)\s*\)|(?:\*\*)?(claude|codex|gemini|aider)(?:\*\*)?)\s*[:\-–]\s*"?([^"\n]+?)"?\s*$/gim;
  let m: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: regex iteration
  while ((m = lineRegex.exec(body)) !== null) {
    const framework = (m[1] ?? m[2]) as PlanFramework | undefined;
    const description = m[3]?.trim();
    if (framework && FRAMEWORK_KEYS.has(framework) && description) {
      out.push({ framework, description });
    }
  }
  return out;
}

function extractSteps(raw: string): string {
  const body = sliceSection(raw, ["Steps"]);
  return body ? body.trim() : "";
}

/**
 * Slice the body of an `## H2` section out of a markdown blob.
 * Case-insensitive on the heading text. Returns the content from
 * the line after the heading up to (but not including) the next
 * `## H2` heading or end of file. Returns null if no matching
 * heading is found. JS regex has no `\Z`, so we do this by hand.
 */
function sliceSection(raw: string, headings: string[]): string | null {
  const lines = raw.split(/\r?\n/);
  const wanted = new Set(headings.map((h) => h.toLowerCase().trim()));
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*##\s+(.+?)\s*$/);
    if (m && wanted.has(m[1].toLowerCase().trim())) {
      start = i + 1;
      break;
    }
  }
  if (start === -1) return null;
  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (/^\s*##\s+/.test(lines[i])) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

// ---------------------------------------------------------------------------
// Store API
// ---------------------------------------------------------------------------

/**
 * Create a new plan on disk and return the loaded `Plan`. If a
 * plan with the same slug already exists we throw rather than
 * overwriting — callers control collisions through `buildPlanSlug`.
 */
export async function createPlan(input: CreatePlanInput): Promise<Plan> {
  const dir = input.plansDir ?? resolvePlansDir();
  await fs.mkdir(dir, { recursive: true });
  const slug = buildPlanSlug(input.conversationId);
  const filePath = path.join(dir, `${slug}.md`);
  // Refuse to overwrite — slug collisions in the same second are
  // rare enough that this is the safer default.
  try {
    await fs.access(filePath);
    throw new Error(`Plan already exists at ${filePath}`);
  } catch (err: unknown) {
    if (
      !(
        err instanceof Error &&
        "code" in err &&
        (err as { code: string }).code === "ENOENT"
      )
    ) {
      // Re-throw anything that ISN'T "file does not exist".
      if (err instanceof Error && err.message.startsWith("Plan already")) {
        throw err;
      }
    }
  }
  const recommendedExecution = input.recommendedExecution ?? {
    parallelism: DEFAULT_PARALLELISM,
    rationale: DEFAULT_RATIONALE,
    assignments: [],
  };
  const steps = input.steps ?? "";
  const raw = serializePlan({
    title: input.title,
    recommendedExecution,
    steps,
  });
  await fs.writeFile(filePath, raw, { encoding: "utf-8", mode: 0o600 });
  const now = new Date().toISOString();
  return {
    slug,
    filePath,
    title: input.title,
    recommendedExecution,
    steps,
    raw,
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Load a plan by slug. Returns null if the file doesn't exist.
 */
export async function loadPlan(
  slug: string,
  plansDir: string = resolvePlansDir(),
): Promise<Plan | null> {
  const filePath = path.join(plansDir, `${slug}.md`);
  try {
    const stat = await fs.stat(filePath);
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = parsePlanMarkdown(raw);
    return {
      slug,
      filePath,
      title: parsed.title,
      recommendedExecution: parsed.recommendedExecution,
      steps: parsed.steps,
      raw,
      createdAt: stat.birthtime.toISOString(),
      updatedAt: stat.mtime.toISOString(),
    };
  } catch (err: unknown) {
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code: string }).code === "ENOENT"
    ) {
      return null;
    }
    throw err;
  }
}

/**
 * Replace the entire plan markdown body. Used by the model when it
 * rewrites the plan during the interview workflow. The new content
 * is parsed and the structured fields are returned alongside the
 * raw text.
 */
export async function updatePlan(
  slug: string,
  newRaw: string,
  plansDir: string = resolvePlansDir(),
): Promise<Plan | null> {
  const filePath = path.join(plansDir, `${slug}.md`);
  try {
    await fs.access(filePath);
  } catch {
    return null;
  }
  await fs.writeFile(filePath, newRaw, { encoding: "utf-8", mode: 0o600 });
  return loadPlan(slug, plansDir);
}

/**
 * Delete a plan by slug. No-op if the file doesn't exist.
 */
export async function deletePlan(
  slug: string,
  plansDir: string = resolvePlansDir(),
): Promise<void> {
  const filePath = path.join(plansDir, `${slug}.md`);
  try {
    await fs.unlink(filePath);
  } catch (err: unknown) {
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code: string }).code !== "ENOENT"
    ) {
      throw err;
    }
  }
}

/**
 * List all plan slugs in the plans directory, newest first by
 * mtime. Returns an empty array if the directory doesn't exist.
 */
export async function listPlanSlugs(
  plansDir: string = resolvePlansDir(),
): Promise<string[]> {
  let entries: string[];
  try {
    entries = await fs.readdir(plansDir);
  } catch (err: unknown) {
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code: string }).code === "ENOENT"
    ) {
      return [];
    }
    throw err;
  }
  const md = entries.filter((e) => e.endsWith(".md"));
  const stats = await Promise.all(
    md.map(async (name) => ({
      name,
      mtime: (await fs.stat(path.join(plansDir, name))).mtimeMs,
    })),
  );
  stats.sort((a, b) => b.mtime - a.mtime);
  return stats.map((s) => s.name.replace(/\.md$/, ""));
}
