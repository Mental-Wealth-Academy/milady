/**
 * Plan Executor — dispatches approved plans to the orchestrator.
 *
 * When a plan is approved, this module:
 * 1. Reads the plan file (or steps from the stored response)
 * 2. Extracts distinct agent tasks from the plan content
 * 3. Dispatches a single CREATE_TASK call with pipe-delimited agents
 *
 * The orchestrator handles workspace provisioning, shared context
 * generation, and agent spawning. We just need to produce the
 * properly-formatted `agents` parameter.
 */

import type { IAgentRuntime, Memory, HandlerCallback } from "@elizaos/core";
import type { Plan } from "./coding-agent-plan-store.js";

/**
 * Extract distinct agent task descriptions from plan content.
 *
 * Supports various formats the model might use:
 * - "Agent 1: description" / "Agent 2: description"
 * - "- Agent 1: description"
 * - Numbered list: "1. description" / "2. description"
 * - Bullet with **bold agent**: "- **Agent 1**: description"
 *
 * Falls back to treating the entire plan steps as a single task
 * if no multi-agent structure is detected.
 */
export function extractAgentTasks(plan: Plan): string[] {
  // First try the structured assignments from parsePlanMarkdown
  if (plan.recommendedExecution.assignments.length > 0) {
    return plan.recommendedExecution.assignments.map((a) => a.description);
  }

  // Try to extract from the raw content (the full model response).
  // We use plan.raw rather than plan.steps because the model writes
  // a conversational response without a formal ## Steps section —
  // the agent assignments are inline in the raw text.
  const tasks = parseAgentTasksFromText(plan.raw);

  if (tasks.length > 0) {
    return tasks;
  }

  // Fallback: use steps section if it exists, otherwise raw content
  // as a single task
  const singleTask = (plan.steps || plan.raw).trim();
  if (singleTask) {
    return [singleTask];
  }

  // Last resort: use the plan title
  return [plan.title];
}

/**
 * Parse agent task descriptions from free-form plan text.
 * Looks for patterns like:
 * - "Agent 1: ..." / "Agent 2: ..."
 * - "* Agent 1 (...):" or "- Agent 1:"
 * - Numbered items under a "recommended execution" or "agents" heading
 */
function parseAgentTasksFromText(text: string): string[] {
  const tasks: string[] = [];

  // Pattern 1: "Agent N: description" or "- Agent N: description"
  // Also matches "**Agent N**: description" and "Agent N (anything): description"
  // We split by agent headers and extract descriptions line by line.
  const lines = text.split(/\r?\n/);
  let currentTask = "";
  for (const line of lines) {
    const agentHeader = line.match(
      /^\s*[-*]?\s*\*{0,2}Agent\s*\d+\*{0,2}\s*(?:\([^)]*\))?\s*[:\-–]\s*(.+)/i,
    );
    if (agentHeader) {
      if (currentTask.trim().length > 5) {
        tasks.push(currentTask.trim().replace(/^["']|["']$/g, ""));
      }
      currentTask = agentHeader[1];
    } else if (currentTask && line.trim() && !line.match(/^\s*[-*]?\s*\*{0,2}Agent\s*\d+/i)) {
      // Continuation line for current agent task
      currentTask += " " + line.trim();
    }
  }
  if (currentTask.trim().length > 5) {
    tasks.push(currentTask.trim().replace(/^["']|["']$/g, ""));
  }
  if (tasks.length > 1) return tasks;

  // Pattern 2: Look for a "recommended execution" section with numbered/bulleted items
  const execSection = findSection(text, [
    "recommended execution",
    "execution plan",
    "execution",
    "agent assignments",
    "assignments",
  ]);
  if (execSection) {
    const bulletTasks = extractBulletedTasks(execSection);
    if (bulletTasks.length > 1) return bulletTasks;
  }

  // Pattern 3: numbered items that look like task descriptions (at least 2)
  const numberedPattern = /(?:^|\n)\s*(\d+)\.\s+(.+)/g;
  const numbered: string[] = [];
  let match: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: regex iteration
  while ((match = numberedPattern.exec(text)) !== null) {
    const desc = match[2].trim();
    // Skip short items that are likely headings
    if (desc.length > 20 && !desc.endsWith(":")) {
      numbered.push(desc);
    }
  }
  if (numbered.length > 1) return numbered;

  return [];
}

function findSection(text: string, headings: string[]): string | null {
  const lines = text.split(/\r?\n/);
  const wanted = new Set(headings.map((h) => h.toLowerCase()));
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*#{1,3}\s+(.+?)\s*$/);
    if (m && wanted.has(m[1].toLowerCase().replace(/[*_]/g, "").trim())) {
      start = i + 1;
      break;
    }
    // Also match bold section headers: **Recommended Execution:**
    const boldMatch = lines[i].match(
      /^\s*\*{2}(.+?)\*{2}\s*:?\s*$/,
    );
    if (boldMatch && wanted.has(boldMatch[1].toLowerCase().trim())) {
      start = i + 1;
      break;
    }
  }
  if (start === -1) return null;
  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (/^\s*#{1,3}\s+/.test(lines[i]) || /^\s*\*{2}[^*]+\*{2}\s*:?\s*$/.test(lines[i])) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function extractBulletedTasks(section: string): string[] {
  const tasks: string[] = [];
  const bulletPattern = /(?:^|\n)\s*[-*]\s+(.+)/g;
  let match: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: regex iteration
  while ((match = bulletPattern.exec(section)) !== null) {
    const desc = match[1].trim();
    // Skip metadata lines (Parallelism:, Rationale:, etc.)
    if (/^(parallelism|rationale|framework|available)\s*:/i.test(desc)) continue;
    // Skip very short items
    if (desc.length > 15) {
      tasks.push(desc.replace(/^["']|["']$/g, ""));
    }
  }
  return tasks;
}

/**
 * Build the pipe-delimited `agents` parameter for CREATE_TASK
 * from extracted plan tasks.
 */
export function buildAgentsParam(tasks: string[]): string {
  return tasks.join(" | ");
}

/**
 * Execute an approved plan by dispatching to the orchestrator's
 * CREATE_TASK action.
 *
 * If the plan contains multiple `## Phase N` sections, uses phased
 * execution (sequential dispatch with auto-advancement). Otherwise
 * dispatches all agents in a single shot.
 *
 * Returns the text response to show the user, or null if execution
 * couldn't be dispatched (caller should handle gracefully).
 */
export async function executePlan(
  runtime: IAgentRuntime,
  plan: Plan,
  message: Memory,
  callback?: HandlerCallback,
  options?: { conversationId?: string },
): Promise<{ text: string; success: boolean }> {
  // Check for multi-phase plan structure
  const { isPhasedPlan, startPhasedExecution } = await import(
    "./coding-agent-plan-phases.js"
  );
  if (isPhasedPlan(plan)) {
    const convId = options?.conversationId ?? message.roomId;
    const result = await startPhasedExecution(
      runtime,
      plan,
      message,
      convId,
      callback,
      true, // autoAdvance
    );
    return { text: result.text, success: result.success };
  }

  // Single-phase execution (original path)
  // Store plan metadata for post-completion review
  const { storePlanForReview } = await import(
    "./coding-agent-plan-phases.js"
  );
  const convId = options?.conversationId ?? message.roomId;
  storePlanForReview(convId, plan.title, plan.raw);

  const tasks = extractAgentTasks(plan);
  const agentsParam = buildAgentsParam(tasks);
  const label = plan.title
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 40) || "plan-execution";

  // Build a brief for the agents: project scope + their specific task.
  // Always use plan.raw — the model's full response with goals,
  // architecture, and recommended execution in natural format.
  const projectBrief = [
    `# Project: ${plan.title}`,
    "",
    plan.raw,
  ].join("\n");

  // Find the CREATE_TASK action on the runtime
  const createTaskAction = runtime.actions?.find(
    (a) => a.name === "CREATE_TASK" || a.similes?.includes("CREATE_TASK"),
  );
  if (!createTaskAction?.handler) {
    return {
      text: `Plan approved but CREATE_TASK action is not available. Tasks:\n${tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}`,
      success: false,
    };
  }

  // Construct the message with proper parameters for CREATE_TASK
  const taskMessage = {
    ...message,
    content: {
      ...message.content,
      text: `Execute plan: ${plan.title}`,
      agents: agentsParam,
      label,
      memoryContent: projectBrief,
    },
  } as Memory;

  const taskOptions = {
    parameters: {
      agents: agentsParam,
      label,
      memoryContent: projectBrief,
      approvalPreset: "autonomous",
    },
  };

  try {
    await createTaskAction.handler(
      runtime,
      taskMessage,
      undefined,
      taskOptions,
      callback,
    );
    return {
      text: `Plan approved! Launching ${tasks.length} agent${tasks.length === 1 ? "" : "s"}:\n${tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}`,
      success: true,
    };
  } catch (err) {
    return {
      text: `Plan approved but failed to spawn agents: ${err instanceof Error ? err.message : String(err)}`,
      success: false,
    };
  }
}
