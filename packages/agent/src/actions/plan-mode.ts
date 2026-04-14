/**
 * Plan Mode actions — ENTER_PLAN_MODE and EXIT_PLAN_MODE.
 *
 * These let the model organically enter plan mode when it detects a
 * complex task, and exit (approve/discard) when the user confirms.
 * The model can invoke these directly without the user needing to
 * type `/plan`.
 */

import type { Action, HandlerCallback, IAgentRuntime, Memory } from "@elizaos/core";
import { hasOwnerAccess } from "../security/access.js";

export const enterPlanModeAction: Action = {
  name: "ENTER_PLAN_MODE",
  similes: [
    "CREATE_PLAN",
    "START_PLANNING",
    "MAKE_A_PLAN",
    "PLAN_THIS",
  ],
  description:
    "Enter plan mode for the current conversation. Use this when the user's request is complex enough to benefit from upfront planning before execution — e.g. multi-file features, architectural changes, or tasks that could be parallelized across multiple coding agents. Creates a plan file and pauses coding agents until the plan is approved.",
  validate: async (runtime, message) => {
    if (!(await hasOwnerAccess(runtime, message))) return false;
    // Don't offer ENTER_PLAN_MODE when already in plan mode.
    const { getActivePlan } = await import(
      "../services/coding-agent-plan-mode.js"
    );
    return getActivePlan(message.roomId) === null;
  },

  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    _state: unknown,
    _options: unknown,
    callback?: HandlerCallback,
  ) => {
    if (!(await hasOwnerAccess(runtime, message))) {
      const text = "Permission denied: only the owner may enter plan mode.";
      await callback?.({ text });
      return { text, success: false };
    }

    const conversationId = message.roomId;
    if (!conversationId) {
      const text = "Cannot enter plan mode: no conversation context.";
      await callback?.({ text });
      return { text, success: false };
    }

    // Extract title from the original user message or use default
    const userText = typeof message.content?.text === "string"
      ? message.content.text
      : "";
    // Use a short summary as the plan title — first 60 chars of user text
    const title = userText.slice(0, 60).trim() || "Untitled Plan";

    try {
      const { enterPlanMode, getActivePlan } = await import(
        "../services/coding-agent-plan-mode.js"
      );

      // Idempotent — if already planning, just acknowledge
      const existing = getActivePlan(conversationId);
      if (existing) {
        const text = `Already in plan mode for this conversation. Continue refining the plan or say "approve" when ready.`;
        await callback?.({ text });
        return { text, success: true };
      }

      const result = await enterPlanMode({ conversationId, title });
      const text = `Entered plan mode. I'll explore the codebase and build a plan before writing any code. What would you like to work on?`;
      await callback?.({ text });
      return { text, success: true };
    } catch (err) {
      const text = `Failed to enter plan mode: ${err instanceof Error ? err.message : String(err)}`;
      await callback?.({ text });
      return { text, success: false };
    }
  },

  parameters: [],
  examples: [
    [
      {
        name: "{{user1}}",
        content: { text: "Build a complete authentication system with OAuth, email/password, and 2FA" },
      },
      {
        name: "{{agentName}}",
        content: {
          text: "This is a complex feature that touches multiple files and systems. Let me create a plan first so we can align on the approach before I start coding.",
          actions: ["ENTER_PLAN_MODE"],
        },
      },
    ],
    [
      {
        name: "{{user1}}",
        content: { text: "Refactor the entire database layer to use a new ORM" },
      },
      {
        name: "{{agentName}}",
        content: {
          text: "A full ORM migration is a big undertaking — let me plan this out so we can break it into safe, parallelizable steps.",
          actions: ["ENTER_PLAN_MODE"],
        },
      },
    ],
  ],
};

export const exitPlanModeAction: Action & { suppressPostActionContinuation?: boolean } = {
  name: "EXIT_PLAN_MODE",
  suppressPostActionContinuation: true,
  similes: [
    "APPROVE_PLAN",
    "EXECUTE_PLAN",
    "DISCARD_PLAN",
    "CANCEL_PLAN",
  ],
  description:
    'Exit plan mode for the current conversation. Call with decision="approve" when the user confirms the plan (e.g. "looks good", "do it", "go ahead") — this resumes coding agents and triggers execution of the recommended assignments. Call with decision="discard" when the user wants to cancel (e.g. "never mind", "cancel the plan").',
  validate: async (runtime, message) => {
    if (!(await hasOwnerAccess(runtime, message))) return false;
    // Only valid when plan mode is active for this conversation
    const { getActivePlan } = await import(
      "../services/coding-agent-plan-mode.js"
    );
    if (getActivePlan(message.roomId) === null) return false;

    // Guard: don't allow EXIT_PLAN_MODE on the same turn the plan is
    // being generated. The model must wait for user approval on a
    // SUBSEQUENT turn. Detect the generation turn by checking if the
    // user's text is a task description (long) rather than a short
    // approval phrase. The plan-mode prefix is stripped to get the
    // actual user text.
    const rawText = typeof message.content?.text === "string"
      ? message.content.text : "";
    const planFileMarker = "[plan-mode:file-ref]";
    let userText = rawText;
    if (rawText.includes("[plan-mode]")) {
      const fileRefIdx = rawText.lastIndexOf(planFileMarker);
      if (fileRefIdx !== -1) {
        const afterRef = rawText.indexOf("\n\n", fileRefIdx);
        userText = afterRef !== -1 ? rawText.slice(afterRef + 2) : rawText;
      }
    }
    // If the user text is longer than a typical approval phrase, this
    // is the plan generation turn — don't allow exit.
    if (userText.trim().length > 80) return false;

    return true;
  },

  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    _state: unknown,
    _options: unknown,
    callback?: HandlerCallback,
  ) => {
    if (!(await hasOwnerAccess(runtime, message))) {
      const text = "Permission denied.";
      await callback?.({ text });
      return { text, success: false };
    }

    const conversationId = message.roomId;
    if (!conversationId) {
      const text = "Cannot exit plan mode: no conversation context.";
      await callback?.({ text });
      return { text, success: false };
    }

    // Determine decision from the user's message intent.
    // Strip the plan-mode prefix (if present) so we only check the
    // user's actual words, not the system instruction text which
    // contains "cancel" as an example.
    const rawText = typeof message.content?.text === "string"
      ? message.content.text
      : "";
    const planModeMarker = "[plan-mode]";
    const planFileMarker = "[plan-mode:file-ref]";
    let userText = rawText;
    if (rawText.includes(planModeMarker)) {
      // The user's actual text comes after the plan-mode block.
      // Find the last marker section and take everything after it.
      const fileRefIdx = rawText.lastIndexOf(planFileMarker);
      if (fileRefIdx !== -1) {
        const afterRef = rawText.indexOf("\n\n", fileRefIdx);
        userText = afterRef !== -1 ? rawText.slice(afterRef + 2) : rawText;
      } else {
        const afterReminder = rawText.indexOf("\n\n", rawText.indexOf(planModeMarker));
        userText = afterReminder !== -1 ? rawText.slice(afterReminder + 2) : rawText;
      }
    }
    const isDiscard =
      /\b(cancel|discard|never\s*mind|forget\s*it|nah|nope)\b/i.test(userText);
    const decision = isDiscard ? "discard" : "approve";

    try {
      const { exitPlanMode } = await import(
        "../services/coding-agent-plan-mode.js"
      );
      const result = await exitPlanMode({ conversationId, decision });

      if (decision === "discard") {
        const text = "Plan discarded. What would you like to do instead?";
        await callback?.({ text });
        return { text, success: true };
      }

      // Approved — return the plan so the outer layer (conversation-routes)
      // can dispatch agents AFTER the core's action processing finishes.
      // We do NOT call executePlan/CREATE_TASK here because doing so
      // inside an action handler creates nested action invocations that
      // confuse the core's continuation logic.
      if (result.plan) {
        const text = `Plan approved! Preparing to launch agents...`;
        await callback?.({ text });
        return { text, success: true, plan: result.plan };
      }

      const text = "Plan approved but no plan file found to execute.";
      await callback?.({ text });
      return { text, success: false };
    } catch (err) {
      const text = `Failed to exit plan mode: ${err instanceof Error ? err.message : String(err)}`;
      await callback?.({ text });
      return { text, success: false };
    }
  },

  parameters: [],
  examples: [
    [
      {
        name: "{{user1}}",
        content: { text: "Looks good, go ahead and do it" },
      },
      {
        name: "{{agentName}}",
        content: {
          text: "Plan approved! Executing now.",
          actions: ["EXIT_PLAN_MODE"],
        },
      },
    ],
    [
      {
        name: "{{user1}}",
        content: { text: "Never mind, cancel that" },
      },
      {
        name: "{{agentName}}",
        content: {
          text: "Plan discarded. What would you like to do instead?",
          actions: ["EXIT_PLAN_MODE"],
        },
      },
    ],
  ],
};
