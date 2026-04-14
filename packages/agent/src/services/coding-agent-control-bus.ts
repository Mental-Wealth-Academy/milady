/**
 * ControlBus — the shared pause/abort/resume/status primitive for
 * the HITL Control feature (see docs/followups/hitl-plan-mode.md).
 *
 * Phase 1 scope: in-memory state machine + `applyPause` /
 * `applyAbort` / `applyResume` methods that iterate active coding
 * agent PTY sessions and send the right interrupt keys via
 * `PTYSession.sendKeys()`.
 *
 * Design rules (from the locked design doc):
 *
 * - **Soft pause** finishes the in-flight tool call but blocks new
 *   actions until resume. We implement this as a flag the
 *   orchestrator checks before spawning/sending the next action.
 *   No keys are sent to the PTY on pause — we trust the current
 *   tool call to finish on its own.
 *
 * - **Hard abort** sends the adapter's abort key sequence (Claude:
 *   2x esc; Codex/Aider/Gemini: ctrl+c) to every running coding
 *   agent session, then sets the same "no new actions" flag.
 *
 * - **Per-conversation scoping.** Pause/abort/resume can be scoped
 *   to a specific conversation so plan mode in one chat doesn't
 *   block coding agents in other chats. A global pause (no
 *   conversationId) halts everything. `isHalted(conversationId?)`
 *   returns true when the specific conversation is paused OR a
 *   global halt is active.
 *
 * - **Session persistence.** The bus state is in-process for Phase
 *   1. Phase 3 will persist it to conversation state so the UI
 *   recovers across browser reloads. Persistence is a separate
 *   layer on top of the primitive — the bus itself is intentionally
 *   simple so we can test it without a runtime.
 *
 * This module owns NO HTTP routing. The auth routes in `server.ts`
 * import and call the singleton bus. That keeps the primitive
 * testable without spinning up the whole server.
 */

import {
  ABORT_KEY_STAGGER_MS,
  type AdapterKey,
  getAbortSequence,
  normalizeAdapterType,
} from "./coding-agent-abort-sequences";

export type ControlState = "running" | "paused" | "aborting";

export interface ControlBusSnapshot {
  state: ControlState;
  /** ISO timestamp of the last state change. */
  changedAt: string;
  /** Free-text reason the caller supplied when entering this state. */
  reason: string | null;
  /**
   * Session ids that were explicitly targeted by the most recent
   * pause/abort call. Empty means "all sessions at the time of the
   * call". Informational — not authoritative.
   */
  targetedSessionIds: string[];
}

/**
 * The subset of `PTYSession` the bus needs. Typed as a structural
 * shape so tests can pass a fake without importing `pty-manager`.
 */
export interface SessionLike {
  readonly id: string;
  readonly adapterType?: string;
  sendKeys(keys: string | string[]): void | Promise<void>;
}

/**
 * The subset of `PTYService` the bus needs to enumerate sessions.
 * Kept structural for the same testability reason.
 */
export interface PTYServiceLike {
  listSessions?: () => SessionLike[] | Promise<SessionLike[]>;
  getSessions?: () => SessionLike[] | Promise<SessionLike[]>;
}

/**
 * Per-conversation control state entry. Each conversation can be
 * independently paused/aborted without affecting other conversations.
 */
interface ConversationControlEntry {
  state: ControlState;
  changedAt: string;
  reason: string | null;
  targetedSessionIds: string[];
}

export class CodingAgentControlBus {
  /**
   * Global state — applies to ALL conversations when set to non-running.
   * Used for the colloquial "STOP everything" intent.
   */
  private _globalState: ControlState = "running";
  private _globalChangedAt: string = new Date().toISOString();
  private _globalReason: string | null = null;
  private _globalTargetedSessionIds: string[] = [];

  /**
   * Per-conversation state — scoped pauses (e.g. plan mode in one chat).
   * Only tracks conversations that are NOT running; running conversations
   * are implicitly absent from the map.
   */
  private _conversations = new Map<string, ConversationControlEntry>();

  /**
   * Snapshot of the global bus state. For per-conversation state, use
   * `snapshotForConversation()`.
   */
  snapshot(): ControlBusSnapshot {
    return {
      state: this._globalState,
      changedAt: this._globalChangedAt,
      reason: this._globalReason,
      targetedSessionIds: [...this._globalTargetedSessionIds],
    };
  }

  /**
   * Snapshot for a specific conversation, merging global + per-conversation
   * state. If globally halted, that takes precedence.
   */
  snapshotForConversation(conversationId: string): ControlBusSnapshot {
    if (this._globalState !== "running") {
      return this.snapshot();
    }
    const entry = this._conversations.get(conversationId);
    if (entry) {
      return {
        state: entry.state,
        changedAt: entry.changedAt,
        reason: entry.reason,
        targetedSessionIds: [...entry.targetedSessionIds],
      };
    }
    return {
      state: "running",
      changedAt: this._globalChangedAt,
      reason: null,
      targetedSessionIds: [],
    };
  }

  /**
   * True when new coding-agent actions should be refused.
   *
   * - No conversationId: true if ANYTHING is halted (global or any conversation).
   *   Use this for backward-compat checks that don't have conversation context.
   * - With conversationId: true if that specific conversation is halted OR
   *   the global bus is halted.
   */
  isHalted(conversationId?: string): boolean {
    if (this._globalState !== "running") return true;
    if (conversationId) {
      const entry = this._conversations.get(conversationId);
      return entry ? entry.state !== "running" : false;
    }
    // No conversationId — check if any conversation is halted (backward compat)
    return this._conversations.size > 0;
  }

  /**
   * True only when the global halt is active (not per-conversation pauses).
   * Used by the dispatch gate when it doesn't know the conversation context.
   */
  isHaltedGlobally(): boolean {
    return this._globalState !== "running";
  }

  /**
   * Soft pause — no keys are sent. Sets the flag that the
   * orchestrator checks before dispatching new actions.
   *
   * When `conversationId` is provided, only that conversation is paused.
   * Other conversations continue running freely.
   * When omitted, applies a global pause to all conversations.
   */
  applyPause(
    reason: string | null,
    sessionIds: string[] = [],
    conversationId?: string,
  ): void {
    if (conversationId) {
      this._conversations.set(conversationId, {
        state: "paused",
        changedAt: new Date().toISOString(),
        reason,
        targetedSessionIds: sessionIds,
      });
    } else {
      this.transitionGlobal("paused", reason, sessionIds);
    }
  }

  /**
   * Hard abort — sends the per-adapter abort key sequence to every
   * session provided by `ptyService`, then transitions to the
   * `aborting` state.
   *
   * When `conversationId` is provided, only marks that conversation
   * as aborting (still sends abort keys to all sessions — we can't
   * know which sessions belong to which conversation yet).
   */
  async applyAbort(
    ptyService: PTYServiceLike | null,
    reason: string | null,
    conversationId?: string,
  ): Promise<string[]> {
    const sessions = await this.resolveSessions(ptyService);
    const targeted: string[] = [];
    for (const session of sessions) {
      const adapter: AdapterKey = normalizeAdapterType(session.adapterType);
      const sequence = getAbortSequence(adapter);
      await this.sendSequence(session, sequence);
      targeted.push(session.id);
    }
    if (conversationId) {
      this._conversations.set(conversationId, {
        state: "aborting",
        changedAt: new Date().toISOString(),
        reason,
        targetedSessionIds: targeted,
      });
    } else {
      this.transitionGlobal("aborting", reason, targeted);
    }
    return targeted;
  }

  /**
   * Resume — clears the halt flag.
   *
   * When `conversationId` is provided, only that conversation resumes.
   * When omitted, clears the global halt AND all per-conversation halts.
   */
  applyResume(reason: string | null = null, conversationId?: string): void {
    if (conversationId) {
      this._conversations.delete(conversationId);
    } else {
      this.transitionGlobal("running", reason, []);
      this._conversations.clear();
    }
  }

  /**
   * Send a key sequence to a single session, staggering successive
   * keys with `ABORT_KEY_STAGGER_MS` so the TUI renderer can catch
   * up between presses (Claude's double-esc needs this).
   */
  private async sendSequence(
    session: SessionLike,
    keys: string[],
  ): Promise<void> {
    for (let i = 0; i < keys.length; i++) {
      try {
        await session.sendKeys(keys[i]);
      } catch {
        // Best effort — if a session rejects the key (already dead,
        // race with exit) we skip it and move on to the next.
      }
      if (i < keys.length - 1) {
        await delay(ABORT_KEY_STAGGER_MS);
      }
    }
  }

  private async resolveSessions(
    ptyService: PTYServiceLike | null,
  ): Promise<SessionLike[]> {
    if (!ptyService) return [];
    const fn = ptyService.listSessions ?? ptyService.getSessions;
    if (!fn) return [];
    try {
      const result = await fn.call(ptyService);
      return Array.isArray(result) ? result : [];
    } catch {
      return [];
    }
  }

  private transitionGlobal(
    state: ControlState,
    reason: string | null,
    targetedSessionIds: string[],
  ): void {
    this._globalState = state;
    this._globalReason = reason;
    this._globalTargetedSessionIds = targetedSessionIds;
    this._globalChangedAt = new Date().toISOString();
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Process-wide singleton. The HTTP routes in `server.ts` share this
 * instance so every pause/abort/resume call reflects the same state.
 * Tests that need isolation should instantiate their own
 * `CodingAgentControlBus` rather than using the singleton.
 */
export const codingAgentControlBus = new CodingAgentControlBus();
