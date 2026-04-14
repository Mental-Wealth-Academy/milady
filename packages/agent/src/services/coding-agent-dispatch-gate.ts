/**
 * HTTP-level gate for the HITL Control feature (Phase 2).
 *
 * The orchestrator's dispatch path lives in
 * `@elizaos/plugin-agent-orchestrator` upstream, which Milady can't
 * directly modify. Rather than waiting for an upstream pause hook,
 * we gate at the HTTP boundary: when the `CodingAgentControlBus` is
 * halted, refuse any incoming POST that submits NEW work to a
 * coding agent and return 423 Locked. Status reads, auth flows,
 * stop, and the control routes themselves are always allowed.
 *
 * This module exports the pure decision function so it's testable
 * without spinning up the server. The actual gate is wired in
 * `server.ts` at the top of the `/api/coding-agents/*` /
 * `/api/workspace/*` / `/api/issues/*` block.
 */

/**
 * Routes that must NEVER be gated by the control bus, even when
 * paused or aborting. Order: cheap checks first (exact matches),
 * regex patterns last.
 */
const NEVER_GATED_EXACT = new Set<string>([
  // Control routes — the bus operates itself through these.
  "/api/coding-agents/control/status",
  "/api/coding-agents/control/pause",
  "/api/coding-agents/control/abort",
  "/api/coding-agents/control/resume",
  // Phase 8 awaiting-user-input flow. Raise must always work
  // (Milady raises questions while running) and answer must
  // always work (the user resolves a halt).
  "/api/coding-agents/control/raise-question",
  "/api/coding-agents/control/answer-question",
  // Plan mode lifecycle — entry pauses the bus, so without these
  // exemptions plan-mode users would be locked out of their own
  // /update and /exit calls. The plan store is the user's escape
  // hatch from plan mode and must always be reachable.
  "/api/coding-agents/plan/active",
  "/api/coding-agents/plan/enter",
]);

/**
 * Path patterns (against POST/DELETE/PUT — GETs are never gated)
 * that are exempt from the gate. These are scratch/auth/stop/plan
 * ops that are independent of new-work dispatch.
 */
const NEVER_GATED_PATTERNS: RegExp[] = [
  // Per-session stop is always allowed — it's the manual abort
  // counterpart to control/abort.
  /^\/api\/coding-agents\/[^/]+\/stop$/,
  // Auth trigger — independent of dispatch state.
  /^\/api\/coding-agents\/auth\/[^/]+$/,
  // Scratch workspace keep / delete / promote — cleanup ops, not
  // new dispatch.
  /^\/api\/coding-agents\/[^/]+\/scratch\/(keep|delete|promote)$/,
  // Plan mode update/exit — same rationale as the exact matches
  // above. Without this the user can enter plan mode but can't
  // edit or exit it because the bus is paused.
  /^\/api\/coding-agents\/plan\/[^/]+\/(update|exit)$/,
];

/**
 * Decide whether the given (method, pathname) should be blocked by
 * the dispatch gate. The function captures the policy:
 *
 *   - Only POST / PUT / DELETE / PATCH are ever gated. GETs are
 *     status reads and always pass.
 *   - Control routes (pause/abort/resume/status) are always allowed
 *     so the bus can be operated even when halted.
 *   - Per-session `/stop`, `/auth/:agent`, and scratch cleanup ops
 *     are exempt — they're not new-work dispatch.
 *   - Everything else under `/api/coding-agents`, `/api/workspace`,
 *     `/api/issues` is treated as new-work submission and gated.
 *
 * Pure function: same input → same output, no I/O. Tests live in
 * `__tests__/coding-agent-dispatch-gate.test.ts`.
 */
export function shouldGateRequest(method: string, pathname: string): boolean {
  const m = method.toUpperCase();
  if (m === "GET" || m === "HEAD" || m === "OPTIONS") return false;
  if (!isCodingAgentScope(pathname)) return false;
  if (NEVER_GATED_EXACT.has(pathname)) return false;
  for (const re of NEVER_GATED_PATTERNS) {
    if (re.test(pathname)) return false;
  }
  return true;
}

/**
 * The three URL prefixes that the control bus considers "coding
 * agent territory". Kept exported so the request handler can
 * short-circuit when a request lands outside this scope.
 */
export function isCodingAgentScope(pathname: string): boolean {
  return (
    pathname.startsWith("/api/coding-agents") ||
    pathname.startsWith("/api/workspace") ||
    pathname.startsWith("/api/issues")
  );
}
