/**
 * Plan Mode state machine — Phase 6 of the HITL feature described
 * in docs/followups/hitl-plan-mode.md.
 *
 * Plan Mode is a *permission/context mode on the main session*, not
 * a separate agent loop (this is the central insight from Claude
 * Code's plan subsystem). The state we track here is just enough to
 * answer "is conversation X currently planning, and which plan
 * file?" — the actual plan content lives in the file store from
 * Phase 5.
 *
 * Coupling with the Control Bus (Phase 1):
 *
 *   - **Entry calls `controlBus.applyPause(…, conversationId)`.**
 *     Plan mode pauses coding agents scoped to THIS conversation
 *     only. Other conversations are unaffected and can continue
 *     spawning/running coding agents independently.
 *
 *   - **Exit on approve calls `controlBus.applyResume(…, conversationId)`.**
 *     Once the user has signed off on the plan we lift the halt for
 *     this conversation and let the orchestrator spawn agents.
 *
 *   - **Exit on discard ALSO resumes the bus.** If the user bailed
 *     out of planning we don't want to leave them stuck halted.
 *
 * In-memory state for now. Phase 7 will persist the active-plan
 * registry to conversation memory so plan mode survives a server
 * restart, but that needs runtime memory access we don't want to
 * couple to here. The bus has the same Phase-7 follow-up.
 */

import {
  type CreatePlanInput,
  type Plan,
  createPlan,
  deletePlan,
  loadPlan,
  resolvePlansDir,
  updatePlan,
} from "./coding-agent-plan-store";
import { codingAgentControlBus } from "./coding-agent-control-bus";

export type ExitDecision = "approve" | "discard";

export interface PlanModeEntry {
  conversationId: string;
  slug: string;
  enteredAt: string;
}

export interface EnterPlanModeInput {
  conversationId: string;
  title: string;
  /** Optional initial steps body. */
  steps?: string;
  /** Optional override for the plans dir (tests pass a tmp dir). */
  plansDir?: string;
}

export interface ExitPlanModeInput {
  conversationId: string;
  decision: ExitDecision;
  plansDir?: string;
}

export interface ExitPlanModeResult {
  decision: ExitDecision;
  /** The plan that was exited. Null when nothing was active. */
  plan: Plan | null;
}

/**
 * Active plans, keyed by conversationId. Single-active-plan-per-
 * conversation is a deliberate constraint: it keeps the UX simple
 * and matches Claude Code's model.
 */
const activePlans = new Map<string, PlanModeEntry>();

/**
 * Enter plan mode for a conversation. Creates a fresh plan file,
 * pauses the control bus globally, and registers the conversation
 * as actively planning.
 *
 * Throws if the conversation is already in plan mode — callers
 * should call `getActivePlan` first if they want idempotent entry.
 */
export async function enterPlanMode(
  input: EnterPlanModeInput,
): Promise<PlanModeEntry & { plan: Plan }> {
  if (activePlans.has(input.conversationId)) {
    throw new Error(
      `Conversation ${input.conversationId} is already in plan mode`,
    );
  }
  const createInput: CreatePlanInput = {
    conversationId: input.conversationId,
    title: input.title,
    steps: input.steps,
    plansDir: input.plansDir,
  };
  const plan = await createPlan(createInput);
  // Couple with the control bus: pausing here prevents coding agents
  // associated with THIS conversation from taking new actions while
  // the user is planning. Other conversations are unaffected.
  codingAgentControlBus.applyPause(
    `Plan mode entered for conversation ${input.conversationId}`,
    [],
    input.conversationId,
  );
  const entry: PlanModeEntry = {
    conversationId: input.conversationId,
    slug: plan.slug,
    enteredAt: new Date().toISOString(),
  };
  activePlans.set(input.conversationId, entry);
  return { ...entry, plan };
}

/**
 * Get the active plan-mode entry for a conversation, or null if
 * not currently planning.
 */
export function getActivePlan(conversationId: string): PlanModeEntry | null {
  return activePlans.get(conversationId) ?? null;
}

/**
 * Returns true when ANY conversation is currently in plan mode.
 * Used by chat-turn entry points that want to gate normal action
 * routing on a global "we're planning right now" check.
 */
export function isPlanningGloballyActive(): boolean {
  return activePlans.size > 0;
}

/**
 * List all currently-active plan-mode entries. Returns a snapshot
 * array — mutations don't affect the registry.
 */
export function listActivePlans(): PlanModeEntry[] {
  return Array.from(activePlans.values());
}

/**
 * Replace the plan markdown for an active conversation. Used by
 * the model during the interview workflow when it rewrites the
 * plan file in response to user clarification.
 *
 * Returns null if the conversation is not in plan mode.
 */
export async function updateActivePlan(
  conversationId: string,
  newRaw: string,
  plansDir: string = resolvePlansDir(),
): Promise<Plan | null> {
  const entry = activePlans.get(conversationId);
  if (!entry) return null;
  return updatePlan(entry.slug, newRaw, plansDir);
}

/**
 * Read the active plan from disk for a conversation. Returns null
 * if the conversation isn't planning.
 */
export async function readActivePlan(
  conversationId: string,
  plansDir: string = resolvePlansDir(),
): Promise<Plan | null> {
  const entry = activePlans.get(conversationId);
  if (!entry) return null;
  return loadPlan(entry.slug, plansDir);
}

/**
 * Exit plan mode for a conversation. On approve we resume the bus
 * and return the loaded plan so the caller can spawn coding agents
 * matching the recommended execution. On discard we resume the bus
 * AND delete the plan file — the user bailed out and we don't
 * want to leave a half-written plan lying around.
 */
export async function exitPlanMode(
  input: ExitPlanModeInput,
): Promise<ExitPlanModeResult> {
  const entry = activePlans.get(input.conversationId);
  if (!entry) {
    return { decision: input.decision, plan: null };
  }
  const plan = await loadPlan(entry.slug, input.plansDir ?? resolvePlansDir());
  activePlans.delete(input.conversationId);

  if (input.decision === "discard") {
    // Best effort — delete failures shouldn't block resume.
    try {
      await deletePlan(entry.slug, input.plansDir ?? resolvePlansDir());
    } catch {
      // Ignore.
    }
  }

  // Resume only this conversation's bus state. Other conversations
  // remain unaffected — their pause/abort state is independent.
  codingAgentControlBus.applyResume(
    `Plan mode exited (${input.decision}) for conversation ${input.conversationId}`,
    input.conversationId,
  );

  const approvedPlan = input.decision === "discard" ? null : plan;

  // If approved, store the plan in the pending execution queue so
  // conversation-routes can dispatch agents AFTER the core's action
  // processing finishes. We don't call CREATE_TASK inside the action
  // handler because nested action invocations confuse the core's
  // continuation logic and cause double agent spawning.
  if (approvedPlan) {
    pendingPlanExecutions.set(input.conversationId, approvedPlan);
  }

  return {
    decision: input.decision,
    plan: approvedPlan,
  };
}

/**
 * Pending plan executions — plans approved via EXIT_PLAN_MODE that
 * haven't been dispatched yet. Keyed by conversationId (roomId).
 * conversation-routes calls `consumePendingPlanExecution` after
 * `generateChatResponse` returns to dispatch agents.
 */
const pendingPlanExecutions = new Map<string, Plan>();

/**
 * Check (non-destructive) whether a pending plan execution exists.
 */
export function hasPendingPlanExecution(conversationId: string): boolean {
  return pendingPlanExecutions.has(conversationId);
}

/**
 * Consume (take and remove) a pending plan execution for a
 * conversation. Returns the approved plan if one is pending, null
 * otherwise. Each plan can only be consumed once.
 */
export function consumePendingPlanExecution(
  conversationId: string,
): Plan | null {
  const plan = pendingPlanExecutions.get(conversationId) ?? null;
  if (plan) {
    pendingPlanExecutions.delete(conversationId);
  }
  return plan;
}

/**
 * Test-only: clear all active plans. Production code should never
 * call this — it bypasses the bus resume logic.
 */
export function __resetPlanModeForTests(): void {
  activePlans.clear();
  pendingPlanExecutions.clear();
}
