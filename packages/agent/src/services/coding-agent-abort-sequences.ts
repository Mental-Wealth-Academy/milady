/**
 * Per-adapter abort / interrupt key sequences for the HITL Control
 * primitive (see docs/followups/hitl-plan-mode.md).
 *
 * Each CLI coding agent handles "stop what you're doing" differently:
 *
 *   - Claude Code takes TWO escape presses to fully interrupt a
 *     running tool call. A single esc cancels menus or partial
 *     input but doesn't stop an in-flight `Bash`/`Edit` invocation.
 *   - Codex takes ctrl+c once (matches the "esc to interrupt" hint
 *     in its status row — esc works too but ctrl+c is more reliable
 *     when the status row isn't showing).
 *   - Aider takes ctrl+c once (interrupts the current command; a
 *     second ctrl+c exits the REPL entirely, which we don't want).
 *   - Gemini CLI takes ctrl+c once.
 *
 * Phase 1 of the HITL control work keeps this table in Milady so we
 * can iterate without publishing a new `coding-agent-adapters` version.
 * Once the behavior is validated we should move the knowledge into
 * each adapter's class as an `abortSequence` getter upstream.
 */

export type AdapterKey = "claude" | "codex" | "gemini" | "aider" | "shell";

/**
 * Key sequence to send via `PTYSession.sendKeys()` to interrupt the
 * in-flight tool call without terminating the session.
 *
 * Returned as an array so callers can send the keys with a short
 * delay between them when the adapter needs repeats (Claude's double
 * esc). A single-element array is a single keystroke.
 */
export function getAbortSequence(adapter: AdapterKey): string[] {
  switch (adapter) {
    case "claude":
      // Claude Code uses esc to cancel. One esc cancels a menu or
      // partial input; two escs cancel the active tool call.
      return ["escape", "escape"];
    case "codex":
      // Codex's "esc to interrupt" hint is real but ctrl+c is more
      // reliable — esc only works while the status row is visible.
      return ["ctrl+c"];
    case "aider":
      // Aider ctrl+c interrupts the current command. Sending twice
      // would exit the REPL entirely.
      return ["ctrl+c"];
    case "gemini":
      return ["ctrl+c"];
    case "shell":
      // Plain shell sessions — same default as a terminal user.
      return ["ctrl+c"];
    default:
      // Unknown adapter: ctrl+c is the least-bad default. Most CLIs
      // honor it and it never elevates beyond "interrupt current
      // command" on a well-behaved TUI.
      return ["ctrl+c"];
  }
}

/**
 * Delay between successive keys when the abort sequence has more
 * than one entry. 50ms matches `PTYSession.sendKeySequence`'s own
 * internal stagger, which is tuned to let TUI renderers catch up
 * between presses.
 */
export const ABORT_KEY_STAGGER_MS = 50;

/**
 * Map an adapter's self-reported type string (as used by
 * `pty-manager` / `coding-agent-adapters`) to the tight union above.
 * Unknown / off-list values fall through to the caller's default.
 */
export function normalizeAdapterType(raw: string | undefined): AdapterKey {
  if (!raw) return "shell";
  const lower = raw.trim().toLowerCase();
  if (lower === "claude" || lower === "claude-code" || lower === "claude code")
    return "claude";
  if (lower === "codex" || lower === "openai-codex" || lower === "openai codex")
    return "codex";
  if (lower === "gemini" || lower === "google-gemini" || lower === "gemini-cli")
    return "gemini";
  if (lower === "aider") return "aider";
  if (lower === "shell" || lower === "bash" || lower === "zsh") return "shell";
  return "shell";
}
