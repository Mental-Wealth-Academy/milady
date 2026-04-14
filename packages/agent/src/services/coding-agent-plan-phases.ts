/**
 * Multi-Phase Plan Execution — extends the plan executor with sequential
 * phase dispatch.
 *
 * A plan can contain multiple `## Phase N: <title>` sections, each with
 * its own set of agent assignments. Phases execute sequentially:
 *
 *   1. Phase 1 agents spawn → run to completion
 *   2. SwarmCoordinator fires `swarm_complete`
 *   3. Phase 2 agents spawn (with Phase 1 context)
 *   4. Repeat until all phases complete
 *
 * The user sees all phases upfront in the plan and can track progress.
 * Between phases, the system can either auto-advance or prompt the user
 * (controlled by `autoAdvance` on the execution).
 */

import type { IAgentRuntime, Memory, HandlerCallback } from "@elizaos/core";
import type { Plan } from "./coding-agent-plan-store.js";
import { extractAgentTasks, buildAgentsParam } from "./coding-agent-plan-executor.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PlanPhase {
  /** 1-indexed phase number */
  number: number;
  /** Phase title (from `## Phase N: <title>`) */
  title: string;
  /** Raw markdown content of this phase section */
  content: string;
  /** Agent task descriptions extracted from this phase */
  tasks: string[];
}

export interface PlanExecution {
  planSlug: string;
  planTitle: string;
  conversationId: string;
  phases: PlanPhase[];
  currentPhase: number; // 0-indexed into phases array
  status: "running" | "waiting_for_user" | "completed" | "failed";
  /** Auto-advance to next phase on completion, or prompt user */
  autoAdvance: boolean;
  /** Full plan raw content for project brief */
  planRaw: string;
}

export type PhaseCompleteHandler = (
  execution: PlanExecution,
  completedPhase: PlanPhase,
) => Promise<void>;

// ---------------------------------------------------------------------------
// Phase Parser
// ---------------------------------------------------------------------------

/**
 * Extract phases from plan content. Looks for `## Phase N` headings.
 * Falls back to a single phase containing all agent tasks if no
 * phase structure is found.
 */
export function extractPhases(plan: Plan): PlanPhase[] {
  const raw = plan.raw;
  const phasePattern = /^\s*##\s+Phase\s+(\d+)\s*[:\-–]\s*(.+?)\s*$/gim;
  const matches: Array<{ index: number; number: number; title: string }> = [];

  let m: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: regex iteration
  while ((m = phasePattern.exec(raw)) !== null) {
    matches.push({
      index: m.index,
      number: Number.parseInt(m[1], 10),
      title: m[2].trim(),
    });
  }

  if (matches.length === 0) {
    // No phase structure — treat entire plan as single phase
    const tasks = extractAgentTasks(plan);
    return [
      {
        number: 1,
        title: plan.title,
        content: raw,
        tasks,
      },
    ];
  }

  // Extract content between phase headings
  const phases: PlanPhase[] = [];
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : raw.length;
    const content = raw.slice(start, end).trim();

    // Build a temporary Plan-like object for task extraction
    const phasePlan: Plan = {
      ...plan,
      raw: content,
      steps: content,
      recommendedExecution: { parallelism: 1, rationale: "", assignments: [] },
    };
    const tasks = extractAgentTasks(phasePlan);

    phases.push({
      number: matches[i].number,
      title: matches[i].title,
      content,
      tasks,
    });
  }

  return phases;
}

/**
 * Check whether a plan has multiple phases (determines if phased
 * execution should be used vs single-shot dispatch).
 */
export function isPhasedPlan(plan: Plan): boolean {
  return /^\s*##\s+Phase\s+\d+\s*[:\-–]/im.test(plan.raw);
}

// ---------------------------------------------------------------------------
// Execution State Registry
// ---------------------------------------------------------------------------

/** Active phased executions, keyed by conversationId. */
const activeExecutions = new Map<string, PlanExecution>();

/** Callback fired when a phase completes (wired by server.ts). */
let phaseCompleteHandler: PhaseCompleteHandler | null = null;

export function setPhaseCompleteHandler(handler: PhaseCompleteHandler): void {
  phaseCompleteHandler = handler;
}

export function getPhaseCompleteHandler(): PhaseCompleteHandler | null {
  return phaseCompleteHandler;
}

export function getActiveExecution(
  conversationId: string,
): PlanExecution | null {
  return activeExecutions.get(conversationId) ?? null;
}

export function removeActiveExecution(conversationId: string): void {
  activeExecutions.delete(conversationId);
}

/**
 * Start a phased plan execution. Creates the execution record and
 * dispatches Phase 1.
 */
export async function startPhasedExecution(
  runtime: IAgentRuntime,
  plan: Plan,
  message: Memory,
  conversationId: string,
  callback?: HandlerCallback,
  autoAdvance = true,
): Promise<{ text: string; success: boolean; execution: PlanExecution | null }> {
  const phases = extractPhases(plan);

  const execution: PlanExecution = {
    planSlug: plan.slug,
    planTitle: plan.title,
    conversationId,
    phases,
    currentPhase: 0,
    status: "running",
    autoAdvance,
    planRaw: plan.raw,
  };

  activeExecutions.set(conversationId, execution);

  // Dispatch Phase 1
  const result = await dispatchPhase(runtime, execution, message, callback);
  if (!result.success) {
    execution.status = "failed";
    activeExecutions.delete(conversationId);
  }

  // Build status text showing all phases
  const phaseList = phases
    .map((p, i) => {
      const marker = i === 0 ? "▶" : "○";
      const agentCount = p.tasks.length;
      return `${marker} Phase ${p.number}: ${p.title} (${agentCount} agent${agentCount === 1 ? "" : "s"})`;
    })
    .join("\n");

  const text = result.success
    ? `Plan approved! Executing in ${phases.length} phase${phases.length === 1 ? "" : "s"}:\n\n${phaseList}\n\nStarting Phase 1: ${phases[0].title}`
    : result.text;

  return { text, success: result.success, execution: result.success ? execution : null };
}

/**
 * Dispatch a specific phase's agents via CREATE_TASK.
 */
async function dispatchPhase(
  runtime: IAgentRuntime,
  execution: PlanExecution,
  message: Memory,
  callback?: HandlerCallback,
): Promise<{ text: string; success: boolean }> {
  const phase = execution.phases[execution.currentPhase];
  if (!phase || phase.tasks.length === 0) {
    return { text: "No tasks in current phase.", success: false };
  }

  const agentsParam = buildAgentsParam(phase.tasks);
  const label =
    `${execution.planTitle}-phase-${phase.number}`
      .replace(/[^a-zA-Z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 50) || "plan-phase";

  // Build project brief with phase context
  const projectBrief = [
    `# Project: ${execution.planTitle}`,
    "",
    `## Current Phase: ${phase.number} of ${execution.phases.length} — ${phase.title}`,
    "",
    execution.planRaw,
    "",
    `---`,
    `You are working on Phase ${phase.number}. Focus only on the tasks assigned to this phase.`,
  ].join("\n");

  const createTaskAction = runtime.actions?.find(
    (a) => a.name === "CREATE_TASK" || a.similes?.includes("CREATE_TASK"),
  );
  if (!createTaskAction?.handler) {
    return {
      text: `CREATE_TASK action not available for Phase ${phase.number}.`,
      success: false,
    };
  }

  const taskMessage = {
    ...message,
    content: {
      ...message.content,
      text: `Execute Phase ${phase.number}: ${phase.title}`,
      agents: agentsParam,
      label,
      memoryContent: projectBrief,
    },
  } as Memory;

  const options = {
    parameters: {
      agents: agentsParam,
      label,
      memoryContent: projectBrief,
      approvalPreset: "autonomous",
    },
  };

  try {
    await createTaskAction.handler(runtime, taskMessage, undefined, options, callback);
    return {
      text: `Phase ${phase.number} launched: ${phase.tasks.length} agent${phase.tasks.length === 1 ? "" : "s"}`,
      success: true,
    };
  } catch (err) {
    return {
      text: `Failed to launch Phase ${phase.number}: ${err instanceof Error ? err.message : String(err)}`,
      success: false,
    };
  }
}

/**
 * Called when the swarm completes for a conversation. Advances to
 * the next phase or marks the execution as complete.
 *
 * Returns a user-facing message describing what happened.
 */
export async function handlePhaseComplete(
  runtime: IAgentRuntime,
  conversationId: string,
  message: Memory,
  callback?: HandlerCallback,
): Promise<string | null> {
  const execution = activeExecutions.get(conversationId);
  if (!execution || execution.status !== "running") return null;

  const completedPhase = execution.phases[execution.currentPhase];
  const nextPhaseIdx = execution.currentPhase + 1;

  // Notify phase complete handler (for UI updates)
  if (phaseCompleteHandler && completedPhase) {
    try {
      await phaseCompleteHandler(execution, completedPhase);
    } catch {
      // Non-fatal.
    }
  }

  // Check if there are more phases
  if (nextPhaseIdx >= execution.phases.length) {
    // All phases complete — store plan metadata for the review step
    execution.status = "completed";
    completedPlans.set(conversationId, {
      planTitle: execution.planTitle,
      planRaw: execution.planRaw,
      completedAt: Date.now(),
    });
    activeExecutions.delete(conversationId);
    return `All ${execution.phases.length} phases complete! Plan "${execution.planTitle}" fully executed.`;
  }

  // Advance to next phase
  execution.currentPhase = nextPhaseIdx;
  const nextPhase = execution.phases[nextPhaseIdx];

  if (!execution.autoAdvance) {
    // Wait for user confirmation
    execution.status = "waiting_for_user";
    const phaseList = execution.phases
      .map((p, i) => {
        const marker = i < nextPhaseIdx ? "✓" : i === nextPhaseIdx ? "▶" : "○";
        return `${marker} Phase ${p.number}: ${p.title}`;
      })
      .join("\n");
    return `Phase ${completedPhase.number} complete!\n\n${phaseList}\n\nReady to start Phase ${nextPhase.number}: ${nextPhase.title}. Proceed?`;
  }

  // Auto-advance: dispatch next phase
  const result = await dispatchPhase(runtime, execution, message, callback);
  if (!result.success) {
    execution.status = "failed";
    return `Phase ${completedPhase.number} complete, but failed to start Phase ${nextPhase.number}: ${result.text}`;
  }

  const phaseList = execution.phases
    .map((p, i) => {
      const marker = i < nextPhaseIdx ? "✓" : i === nextPhaseIdx ? "▶" : "○";
      return `${marker} Phase ${p.number}: ${p.title}`;
    })
    .join("\n");

  return `Phase ${completedPhase.number} complete! Auto-advancing to Phase ${nextPhase.number}: ${nextPhase.title}\n\n${phaseList}`;
}

/**
 * Resume a paused phased execution (user said "proceed" after
 * a phase completed with autoAdvance=false).
 */
export async function resumePhasedExecution(
  runtime: IAgentRuntime,
  conversationId: string,
  message: Memory,
  callback?: HandlerCallback,
): Promise<{ text: string; success: boolean } | null> {
  const execution = activeExecutions.get(conversationId);
  if (!execution || execution.status !== "waiting_for_user") return null;

  execution.status = "running";
  const phase = execution.phases[execution.currentPhase];

  const result = await dispatchPhase(runtime, execution, message, callback);
  if (!result.success) {
    execution.status = "failed";
    return { text: `Failed to start Phase ${phase.number}: ${result.text}`, success: false };
  }

  return {
    text: `Starting Phase ${phase.number}: ${phase.title} (${phase.tasks.length} agent${phase.tasks.length === 1 ? "" : "s"})`,
    success: true,
  };
}

/**
 * Recently completed plan metadata, keyed by conversationId.
 * Kept so the review step can access plan context after the
 * execution is removed from activeExecutions.
 */
const completedPlans = new Map<
  string,
  { planTitle: string; planRaw: string; completedAt: number }
>();

/**
 * Get the last completed plan for a conversation (for review).
 */
export function getLastCompletedPlan(
  conversationId: string,
): { planTitle: string; planRaw: string } | null {
  return completedPlans.get(conversationId) ?? null;
}

/**
 * Store plan metadata for review after completion. Called by
 * executePlan for single-shot plans so the review step has
 * context even without phased execution.
 */
export function storePlanForReview(
  conversationId: string,
  planTitle: string,
  planRaw: string,
): void {
  completedPlans.set(conversationId, {
    planTitle,
    planRaw,
    completedAt: Date.now(),
  });
}

/** Test-only reset. */
export function __resetPhasesForTests(): void {
  activeExecutions.clear();
  completedPlans.clear();
  phaseCompleteHandler = null;
}
