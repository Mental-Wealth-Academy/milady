# HITL Control + Plan Mode for Coding Agents

**Status:** Design locked — Phase 1 starting
**Owner:** TBD
**Created:** 2026-04-08
**Locked:** 2026-04-08
**Origin:** Shaw direction on user scripts like "hold on, let's discuss" / "STOP!!!" / "okay let's do it"

## Decisions locked (2026-04-08)

- **Q1 soft vs hard pause:** soft pause finishes the in-flight tool call; "STOP" / urgent language hard-interrupts mid-call.
- **Q2 scope:** all running agents pause globally.
- **Q3 persistence:** session state — pause survives browser reload so the UI recovers.
- **Q4 plan directory:** `~/.milady/plans/` (separate from Claude Code's). Milady orchestrates multiple CLI types (Claude Code, Codex, Aider, Gemini) so its plan store is not Claude-Code-specific.
- **Q5 plan scope:** main Milady chat agent only. Coding subagents receive the finalized plan as context at approval-and-spawn time; they don't have their own plan mode.
- **Q6 `/plan` while agents writing:** enters plan mode *and* pauses all agents. The features are intentionally coupled — plan-mode entry calls the ControlBus pause path.
- **Sequencing:** ship HITL Control (phases 1–4) as one PR, Plan Mode (phases 5–8) as a follow-up.
- **Intent classification must NOT be brittle** — the user should never have to say a literal keyword. A fast-path matches obvious cases but tone/urgency/colloquial variants route to an LLM classifier. See "Intent classifier" below.
- **Plans are multi-agent-aware** — the plan's output includes a recommended subagent count and parallel decomposition. Simple task → 1 agent. Decomposable task → N parallel workstreams where N is what the task actually needs, not a forced default. See "Plan Mode" below.

Two coupled capabilities for the Parallax coding-agent surface: a human-in-the-loop interrupt/pause/stop flow that works from colloquial chat, and a Claude-Code-style plan mode that constrains the session to exploration until a plan is approved.

## Feature 1 — HITL Control (interrupt / pause / stop)

### Intent taxonomy

Shaw's examples span four distinct intents — don't lump them.

| User says | Intent | Action |
|---|---|---|
| "what are you working on?" | **status** | read-only summary of current task + subagent tree |
| "did you finish X?" / "can I see it?" | **status** | same, plus artifact link |
| "hold on, let's discuss" | **soft pause** | finish current tool call, stop taking new actions, enter conversation mode |
| "wait, that's not right" | **soft pause + critique** | soft pause, surface last action for user critique |
| "STOP!!!" | **hard abort** | send SIGINT / esc to all PTYs immediately, drain, mark aborted |
| "okay let's do it" | **resume / approve** | exit pause, continue from checkpoint |

### Components

1. **Intent classifier** in the main chat turn — runs before normal action routing. Detects `{status, soft_pause, hard_abort, resume, none}`.

   **Design rule: not brittle.** The user must never need to say a literal keyword. The classifier runs in two tiers:

   - **Tier 1 — cheap fast-path.** A small set of unambiguous regex matches that short-circuit without an LLM call: all-caps "STOP"/"HALT", repeated punctuation ("stop!!!"), single-word commands ("pause", "resume"). Hit rate: high for true emergencies. Covers the obvious 20% of traffic at zero cost.

   - **Tier 2 — LLM classifier.** Runs on every user message while any coding agent is active if Tier 1 didn't fire. Single-shot classification with a tight prompt: "Given this user message while coding agents are running, classify intent as one of: status, soft_pause, hard_abort, resume, none. Return JSON only." Uses the cheapest available model. Distinguishes tone and urgency: "hold on a sec" → soft_pause, "wait wait wait that's wrong!" → hard_abort (user is alarmed), "ok yeah do it" → resume, "what are you working on" → status, "make it blue" → none (normal turn).

   The classifier only runs when at least one coding agent is in `busy` or `starting` state. No overhead when nothing's running.

2. **ControlBus** service in `packages/agent/src/services/` — single broadcast channel. Orchestrator + PTY workers subscribe. Events: `pause`, `abort`, `resume`, `status_request`. Avoids point-to-point wiring to every subagent.

3. **PTY-layer abort** — `BunCompatiblePTYManager.sendControl(sessionId, signal)` where signal is `"SIGINT"` / `"esc"` / `"ctrl-c"`. CLI-specific: Claude Code takes 2× esc to fully interrupt, Aider needs `/clear` or ctrl-c, Codex takes ctrl-c. Needs a per-adapter `abortSequence` hook in `coding-agent-adapters`.

4. **Orchestrator pause state** — add `paused` to session status (alongside `busy`/`idle`/`starting`). While paused, orchestrator refuses new actions and stall detector is suspended. `send()` no longer force-sets to `busy` when paused.

5. **UI surface** — persistent Pause button in CompanionShell / xterm drawer, state chip showing `working / paused / aborting`.

### Open questions

- **Q1:** Soft pause — finish the in-flight tool call or interrupt it? Default: finish (safety). "STOP!!!" still hard-interrupts.
- **Q2:** Multi-agent scope. Pause all agents or only the watched one? Default: all.
- **Q3:** Does pause persist across browser reloads? Session state vs process state.

## Feature 2 — Plan Mode

### Claude Code's model applied to Milady

1. **Mode on session, not separate loop.** Add `planMode: boolean` to conversation state. Pre-action guard rejects any tool call that isn't `read`/`grep`/`glob`/`web` or the plan-file tool. Orchestrator broadcasts the planning phase so subagents know not to write.

2. **Plan file on disk.** `~/.milady/plans/{sessionSlug}.md`. Session slug derives from conversation id + timestamp. One file per session, optional per-subagent variants.

3. **Entry paths:**
   - `/plan` slash command → direct mode flip
   - User says "let's plan this out" → intent classifier triggers `EnterPlanModeAction`
   - Model decides on its own → `EnterPlanModeTool` — asks permission first

4. **Plan mode attachment re-injection.** Every N human turns while `planMode=true`, inject a system message: "You are in plan mode. Only read/explore. Update the plan file via UpdatePlan. Ask clarifying questions. Do not write code." Must survive compaction — mark as pinned.

5. **Interview workflow.** Model drives the loop: read/explore → update plan.md → ask user one clarifying question → wait for answer → repeat. Stop when plan is approved.

6. **Multi-agent decomposition in the plan output.** The finalized plan file has a mandatory schema section at the top:

   ```markdown
   # Plan: <title>

   ## Recommended execution
   - **Parallelism:** N  <!-- integer 1..4 -->
   - **Rationale:** why N and not N±1
   - **Assignments:**
     - Agent 1 (framework: claude): "subtask A description"
     - Agent 2 (framework: codex): "subtask B description"
     - ...

   ## Steps
   ...
   ```

   The LLM must *justify* N. Rules it's prompted with:
   - **N=1** for stupid-simple tasks, single-file edits, tight-coupling tasks where parallelism adds coordination cost.
   - **N=2+** only when the subtasks are *independently verifiable* and don't share mutable state.
   - **Never force a default N** — if the model picks N=1 that's correct.
   - **Framework choice per slot** draws from installed/available coding agents. Claude and Codex are interchangeable for most work; Aider is preferred when the task is narrow-scope edits with a test harness; Gemini is deprioritized in cloud mode (no Google proxy).

   At exit time, `ExitPlanModeAction` reads `Recommended execution`, spawns exactly N coding agents through the existing orchestrator, passes each its slice of the plan, and routes their outputs back to the user chat. User can override N from the approval UI (spinner: "use 1/2/3/4 agents") before clicking Approve.

6. **Exit paths:**
   - `ExitPlanModeAction` / tool — reads plan from disk, surfaces approval UI with the markdown, user clicks Approve → restores `prePlanMode` and hands plan to coding-agent spawn
   - User says "okay let's do it" → approval shortcut (intent classifier again)
   - User says "never mind" → discard, restore mode, delete plan file

7. **Compaction survival.** `plan_file_reference` attachment with path + content hash gets pinned during compaction. If still in plan mode post-compact, re-inject the plan_mode instruction.

### Open questions

- **Q4:** `~/.milady/plans/` (separate from `~/.claude/plans`) or share? Default: separate.
- **Q5:** Plan mode for Milady's main chat agent, coding subagents, or both? Default: main agent only; coding agents receive finalized plan as context at approval time.
- **Q6:** `/plan` while an agent is actively writing code — enter plan mode implies pause. This is why the features are coupled.

## Coupling / sequencing

These two share the pause primitive. Build order:

1. **PTY sendControl + per-adapter abortSequence** (unblocks everything)
2. **ControlBus + orchestrator pause state**
3. **Intent classifier** (fast-path first: literal "STOP" / "pause" / "wait")
4. **HITL Control UI chip + button**
5. **Plan file store + `~/.milady/plans/` layout**
6. **EnterPlanMode / ExitPlanMode actions** (reuse ControlBus.pause at entry)
7. **Plan mode attachment re-injection + compaction pinning**
8. **Interview workflow prompting**

Phases 1–4 deliver HITL Control alone (shippable). Phases 5–8 deliver Plan Mode on top.

## Reference architecture

Claude Code's plan subsystem (for reference, not 1:1 copy):

- `/plan` slash command — `claude-code/src/commands/plan/plan.tsx`
- `EnterPlanModeTool` — `claude-code/src/tools/EnterPlanModeTool/EnterPlanModeTool.ts`
- `ExitPlanModeV2Tool` — `claude-code/src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts`
- Plan file store — `claude-code/src/utils/plans.ts`
- Permission-state transitions — `claude-code/src/utils/permissions/permissionSetup.ts`
- Attachments — `claude-code/src/utils/attachments.ts`, `claude-code/src/utils/messages.ts`
- Approval UI — `claude-code/src/components/permissions/ExitPlanModePermissionRequest/`

Central idea: plan mode is a permission/context mode on the main session, not a separate agent loop. Toggle `toolPermissionContext.mode = "plan"`, stash prior in `prePlanMode`, constrain to read-only except plan file. Plan is a markdown file on disk, not transcript text.

## Open product questions

- Do we want `docs/followups/hitl-plan-mode.md` as the living design doc, or promote to `docs/guides/` once locked?
- Ship HITL Control and Plan Mode in one PR or split? (Leaning split — HITL is useful on its own.)
- Once Q1–Q6 are answered, spin up `milady-feature-coordinator` to drive the cross-layer implementation.
