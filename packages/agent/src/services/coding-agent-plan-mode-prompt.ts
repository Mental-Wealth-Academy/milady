/**
 * Plan-mode prompt builders — Phase 7 of the HITL feature described
 * in docs/followups/hitl-plan-mode.md.
 *
 * Two pure functions that produce the strings the chat turn injects
 * when the conversation is in plan mode:
 *
 *   1. `buildPlanModeReminder(plan)` — long-form system instruction
 *      telling the model to stay in interview-style planning mode:
 *      explore only, ask clarifying questions, update the plan
 *      file, do not write code. Re-injected on every chat turn
 *      while the conversation is planning. This is what survives
 *      compaction without any special pinning — because it's
 *      rebuilt every turn at the chat-routes entry point, the
 *      compaction layer can strip it freely from history.
 *
 *   2. `buildPlanFileReference(plan)` — short pin telling the
 *      model where the plan lives on disk and what it currently
 *      contains. The model uses this to anchor itself across
 *      compaction events: even after history is squeezed, the
 *      file reference tells it the plan is on disk and how to
 *      find it. Includes a content hash so the model can detect
 *      stale recall.
 *
 * Both are pure — they take a `Plan` and return a string. No
 * runtime, no I/O, fully unit-testable.
 *
 * The reminder is *generic across CLI types*. Milady orchestrates
 * Claude, Codex, Aider, and Gemini, and the reminder must work for
 * any of them — that's why we don't borrow Claude Code's verbatim
 * plan_mode attachment text. The reminder talks about "coding
 * agents" generically and references the multi-agent decomposition
 * format from Phase 5.
 */

import { createHash } from "node:crypto";
import type { Plan } from "./coding-agent-plan-store";

const REMINDER_HEADER = "[plan-mode]";
const FILE_REF_HEADER = "[plan-mode:file-ref]";

/**
 * Long-form plan-mode system reminder. The chat-turn entry point
 * prepends this to the message context while the conversation is
 * planning. Designed to be re-injected every turn — short enough
 * not to bloat the prompt, specific enough to keep the model
 * locked into the interview workflow.
 */
export function buildPlanModeReminder(plan: Plan): string {
  const lines: string[] = [];
  lines.push(REMINDER_HEADER);
  lines.push(
    `You are currently in PLAN MODE for this conversation. Title: "${plan.title}".`,
  );
  lines.push("");
  lines.push("RULES while in plan mode:");
  lines.push(
    "- Do NOT write code, edit files, or run shell commands. Plan mode is read-only.",
  );
  lines.push(
    "- Think through the task and propose a concrete plan. If the user gave enough detail, draft the plan directly — do not ask unnecessary clarifying questions.",
  );
  lines.push(
    "- Only ask a clarifying question when genuinely ambiguous or critical info is missing. One question at a time.",
  );
  lines.push(
    "- Use read-only tools (read files, grep, glob) to gather codebase context when helpful.",
  );
  lines.push(
    "- Your response IS the plan. Structure it with: goals, architecture/approach, key components, and a `## Recommended execution` section.",
  );
  lines.push(
    "- The execution section MUST use one of these two formats:",
  );
  lines.push("");
  lines.push("  **Single-phase** (for simple tasks or tightly-coupled work):");
  lines.push("  ```");
  lines.push("  ## Recommended execution");
  lines.push("  - Agent 1: <detailed description>");
  lines.push("  - Agent 2: <detailed description>");
  lines.push("  ```");
  lines.push("");
  lines.push(
    "  **Multi-phase** (when later work depends on earlier work completing):",
  );
  lines.push("  ```");
  lines.push("  ## Phase 1: <phase title>");
  lines.push("  - Agent 1: <description of work in this phase>");
  lines.push("");
  lines.push("  ## Phase 2: <phase title>");
  lines.push("  - Agent 1: <description — can assume Phase 1 outputs exist>");
  lines.push("  - Agent 2: <description>");
  lines.push("  ```");
  lines.push("");
  lines.push(
    "- Use multi-phase ONLY when Phase 2 genuinely depends on Phase 1's outputs (e.g. Phase 1 builds interfaces, Phase 2 builds implementations using those interfaces). Phases execute sequentially — Phase 2 agents don't start until Phase 1 agents finish.",
  );
  lines.push(
    "- Each agent description should be a complete, self-contained brief: what to build, what interfaces to implement, what to test. An agent reading only its line should know exactly what to do.",
  );
  lines.push(
    "- End your response with a brief one-line confirmation prompt after the last agent/phase assignment (e.g. 'want me to go ahead?'). Do NOT add multiple paragraphs of follow-up or restate the plan.",
  );
  lines.push(
    "- Use 1 agent for simple tasks. Use 2-4 agents per phase ONLY when subtasks are independently verifiable and don't share mutable state.",
  );
  lines.push(
    "- Do NOT specify which framework/CLI to use — the user's settings control that. Just describe the work.",
  );
  lines.push(
    "- Do NOT use EXIT_PLAN_MODE in the same turn you generate the plan. You MUST wait for the user's next message.",
  );
  lines.push(
    '- When the user explicitly approves the plan in a SUBSEQUENT message (e.g. "looks good", "do it", "go ahead"), use the EXIT_PLAN_MODE action.',
  );
  lines.push(
    '- When the user wants to cancel (e.g. "never mind", "cancel"), use the EXIT_PLAN_MODE action.',
  );
  lines.push(
    "- CRITICAL: Your action MUST always be REPLY. Do not use CHECK_BALANCE, TRANSFER_TOKEN, PLAY_EMOTE, CREATE_TASK, ENTER_PLAN_MODE, NONE, or any other action. The ONLY exception is EXIT_PLAN_MODE when the user approves or cancels. Never combine multiple actions — output exactly one action.",
  );
  lines.push("");
  return lines.join("\n");
}

/**
 * Short plan-file reference snippet. Pinned across compaction so
 * the model never loses track of the plan path even when older
 * turns get squeezed out. Includes a content hash so the model can
 * tell when its recall is stale and re-read the file.
 */
export function buildPlanFileReference(plan: Plan): string {
  const hash = hashContent(plan.raw);
  const lines: string[] = [];
  lines.push(FILE_REF_HEADER);
  lines.push(`Active plan file: ${plan.filePath}`);
  lines.push(`Content hash: ${hash}`);
  lines.push(`Last updated: ${plan.updatedAt}`);
  lines.push(
    "If your recollection of the plan disagrees with this hash, re-read the file before answering.",
  );
  return lines.join("\n");
}

/**
 * Combined block: reminder + file reference, joined by a blank
 * line. Use this when the caller wants to prepend a single string
 * to the message context.
 */
export function buildPlanModePromptBlock(plan: Plan): string {
  return `${buildPlanModeReminder(plan)}\n${buildPlanFileReference(plan)}`;
}

/**
 * Detect whether a prompt already contains the plan-mode reminder
 * (so we don't double-inject when the chat turn entry point and
 * the prompt-optimization compaction layer both try to add it).
 */
export function promptContainsPlanMode(prompt: string): boolean {
  return prompt.includes(REMINDER_HEADER);
}

/**
 * Detect whether a prompt already contains a plan_file_reference
 * pin. Same purpose as `promptContainsPlanMode` but checks the
 * file-ref header specifically.
 */
export function promptContainsPlanFileReference(prompt: string): boolean {
  return prompt.includes(FILE_REF_HEADER);
}

function hashContent(raw: string): string {
  return createHash("sha256").update(raw, "utf8").digest("hex").slice(0, 12);
}
