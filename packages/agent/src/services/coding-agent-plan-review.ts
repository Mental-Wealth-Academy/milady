/**
 * Plan Review — post-completion analysis of what agents built.
 *
 * After all agents finish (swarm_complete), this module:
 * 1. Scans the workspace(s) to understand what was created
 * 2. Compares output against the original plan goals
 * 3. Generates a gap analysis
 * 4. Asks the user if they want to plan the next iteration
 *
 * This is the human-in-the-loop checkpoint — the review is
 * informational and the user decides whether to continue.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { type IAgentRuntime, ModelType } from "@elizaos/core";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PlanReviewInput {
  /** Original plan title */
  planTitle: string;
  /** Original plan content (raw markdown) */
  planRaw: string;
  /** Workspace directories where agents operated */
  workdirs: string[];
  /** Per-task completion summaries from the coordinator */
  taskSummaries: Array<{
    label: string;
    originalTask: string;
    status: string;
    completionSummary: string;
  }>;
}

export interface PlanReviewResult {
  /** Full analysis text to show the user */
  analysis: string;
  /** Short summary of completeness */
  completenessEstimate: string;
  /** Whether gaps were identified */
  hasGaps: boolean;
  /** Suggested next steps if gaps exist */
  suggestedNextSteps: string;
}

// ---------------------------------------------------------------------------
// Workspace Scanner
// ---------------------------------------------------------------------------

/**
 * Scan a workspace directory and produce a structural summary.
 * Lists source files, their sizes, and any test files found.
 * Keeps it concise — we're feeding this to an LLM for analysis.
 */
async function scanWorkspace(workdir: string): Promise<string> {
  const lines: string[] = [];
  lines.push(`Workspace: ${workdir}`);

  try {
    const entries = await walkDir(workdir, 3); // max 3 levels deep
    const srcFiles = entries.filter(
      (e) =>
        /\.(ts|js|tsx|jsx|py|rs|go)$/.test(e.path) &&
        !e.path.includes("node_modules") &&
        !e.path.includes("dist/"),
    );
    const testFiles = srcFiles.filter(
      (e) =>
        e.path.includes("test") ||
        e.path.includes("spec") ||
        e.path.includes("__tests__"),
    );
    const sourceFiles = srcFiles.filter(
      (e) =>
        !e.path.includes("test") &&
        !e.path.includes("spec") &&
        !e.path.includes("__tests__"),
    );

    lines.push(`Source files (${sourceFiles.length}):`);
    for (const f of sourceFiles) {
      const relPath = path.relative(workdir, f.path);
      lines.push(`  ${relPath} (${f.lines} lines)`);
    }

    lines.push(`Test files (${testFiles.length}):`);
    for (const f of testFiles) {
      const relPath = path.relative(workdir, f.path);
      lines.push(`  ${relPath} (${f.lines} lines)`);
    }

    // Check for package.json to understand dependencies
    const pkgPath = path.join(workdir, "package.json");
    try {
      const pkgRaw = await fs.readFile(pkgPath, "utf-8");
      const pkg = JSON.parse(pkgRaw);
      const deps = Object.keys(pkg.dependencies ?? {});
      const devDeps = Object.keys(pkg.devDependencies ?? {});
      if (deps.length > 0) lines.push(`Dependencies: ${deps.join(", ")}`);
      if (devDeps.length > 0)
        lines.push(`Dev dependencies: ${devDeps.join(", ")}`);
    } catch {
      // No package.json.
    }

    // Read key source files (first 50 lines each) for content analysis
    lines.push("\nKey file previews:");
    const previewFiles = sourceFiles.slice(0, 8); // cap at 8 files
    for (const f of previewFiles) {
      try {
        const content = await fs.readFile(f.path, "utf-8");
        const preview = content.split("\n").slice(0, 50).join("\n");
        const relPath = path.relative(workdir, f.path);
        lines.push(`\n--- ${relPath} (first 50 lines) ---`);
        lines.push(preview);
      } catch {
        // Skip unreadable files.
      }
    }
  } catch (err) {
    lines.push(
      `  Error scanning: ${err instanceof Error ? err.message : String(err)}`,
    );
  }

  return lines.join("\n");
}

interface FileEntry {
  path: string;
  lines: number;
}

async function walkDir(
  dir: string,
  maxDepth: number,
  depth = 0,
): Promise<FileEntry[]> {
  if (depth >= maxDepth) return [];
  const entries: FileEntry[] = [];

  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    for (const item of items) {
      if (item.name.startsWith(".") || item.name === "node_modules" || item.name === "dist")
        continue;
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        entries.push(...(await walkDir(fullPath, maxDepth, depth + 1)));
      } else if (item.isFile()) {
        try {
          const content = await fs.readFile(fullPath, "utf-8");
          entries.push({ path: fullPath, lines: content.split("\n").length });
        } catch {
          entries.push({ path: fullPath, lines: 0 });
        }
      }
    }
  } catch {
    // Can't read directory.
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Review Generator
// ---------------------------------------------------------------------------

/**
 * Generate a plan review by scanning workspaces and comparing
 * output against the original plan goals via an LLM call.
 */
export async function generatePlanReview(
  runtime: IAgentRuntime,
  input: PlanReviewInput,
): Promise<PlanReviewResult> {
  // Scan all workspaces
  const scans = await Promise.all(input.workdirs.map(scanWorkspace));
  const workspaceSummary = scans.join("\n\n");

  // Build task completion info
  const taskInfo = input.taskSummaries
    .map(
      (t) =>
        `[${t.label}] Status: ${t.status}\nTask: ${t.originalTask}\nCompletion: ${t.completionSummary}`,
    )
    .join("\n\n");

  const prompt = [
    `You are reviewing the output of a coding plan execution.`,
    ``,
    `## Original Plan`,
    input.planRaw,
    ``,
    `## Agent Completion Reports`,
    taskInfo,
    ``,
    `## Workspace Scan`,
    workspaceSummary,
    ``,
    `## Your Task`,
    `Analyze what was built vs. what the plan intended. Produce a concise review with:`,
    ``,
    `1. **What was built** — brief inventory of implemented components`,
    `2. **What's solid** — things that work well`,
    `3. **What's missing** — gaps between plan goals and actual output`,
    `4. **Completeness estimate** — percentage (e.g. "~40% of a usable library")`,
    `5. **Recommended next priorities** — concrete, actionable items for a follow-up plan (numbered list, max 5)`,
    ``,
    `Keep it honest and practical. If it's 30% done, say so. If the architecture is good but execution is shallow, say that.`,
    ``,
    `Format your response as markdown. End with exactly this line:`,
    ``,
    `"Would you like me to generate a follow-up plan to address the remaining gaps?"`,
  ].join("\n");

  try {
    const result = await runtime.useModel(ModelType.TEXT_LARGE, { prompt });
    const analysis = typeof result === "string" ? result : String(result);

    // Extract completeness estimate from the analysis
    const completenessMatch = analysis.match(
      /~?\s*(\d+)(?:\s*[-–]\s*\d+)?\s*%/,
    );
    const completenessEstimate = completenessMatch
      ? `~${completenessMatch[1]}%`
      : "unknown";

    // Check if there are gaps
    const hasGaps =
      !completenessMatch || Number.parseInt(completenessMatch[1], 10) < 90;

    // Extract next priorities section
    const nextStepsMatch = analysis.match(
      /(?:next priorities|recommended next|next steps)[:\s]*\n([\s\S]*?)(?:\n\n|Would you)/i,
    );
    const suggestedNextSteps = nextStepsMatch
      ? nextStepsMatch[1].trim()
      : "See analysis above.";

    return {
      analysis,
      completenessEstimate,
      hasGaps,
      suggestedNextSteps,
    };
  } catch (err) {
    return {
      analysis: `Plan review failed: ${err instanceof Error ? err.message : String(err)}. Check the workspace manually.`,
      completenessEstimate: "unknown",
      hasGaps: true,
      suggestedNextSteps: "Manual review needed.",
    };
  }
}
