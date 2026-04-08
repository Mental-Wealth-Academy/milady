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
 * - **Multi-agent scope.** Pause/abort apply globally to every
 *   coding agent session at once — not just the one the user is
 *   watching.
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

export class CodingAgentControlBus {
  private _state: ControlState = "running";
  private _changedAt: string = new Date().toISOString();
  private _reason: string | null = null;
  private _targetedSessionIds: string[] = [];

  snapshot(): ControlBusSnapshot {
    return {
      state: this._state,
      changedAt: this._changedAt,
      reason: this._reason,
      targetedSessionIds: [...this._targetedSessionIds],
    };
  }

  /** Convenience: true when new coding-agent actions should be refused. */
  isHalted(): boolean {
    return this._state !== "running";
  }

  /**
   * Soft pause — no keys are sent. Sets the flag that the
   * orchestrator checks before dispatching new actions. In-flight
   * tool calls finish on their own.
   */
  applyPause(reason: string | null, sessionIds: string[] = []): void {
    this.transition("paused", reason, sessionIds);
  }

  /**
   * Hard abort — sends the per-adapter abort key sequence to every
   * session provided by `ptyService`, then transitions to the
   * `aborting` state. Does NOT kill the sessions; it only interrupts
   * the current tool call. Resume transitions back to `running`.
   */
  async applyAbort(
    ptyService: PTYServiceLike | null,
    reason: string | null,
  ): Promise<string[]> {
    const sessions = await this.resolveSessions(ptyService);
    const targeted: string[] = [];
    for (const session of sessions) {
      const adapter: AdapterKey = normalizeAdapterType(session.adapterType);
      const sequence = getAbortSequence(adapter);
      await this.sendSequence(session, sequence);
      targeted.push(session.id);
    }
    this.transition("aborting", reason, targeted);
    return targeted;
  }

  /**
   * Resume — clears the halt flag. Does NOT replay queued actions;
   * callers that held actions while paused are responsible for
   * re-dispatching them once they see `isHalted() === false`.
   */
  applyResume(reason: string | null = null): void {
    this.transition("running", reason, []);
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

  private transition(
    state: ControlState,
    reason: string | null,
    targetedSessionIds: string[],
  ): void {
    this._state = state;
    this._reason = reason;
    this._targetedSessionIds = targetedSessionIds;
    this._changedAt = new Date().toISOString();
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
