/**
 * Conversation CRUD routes extracted from server.ts.
 *
 * Handles:
 *   POST   /api/conversations            – create
 *   GET    /api/conversations             – list
 *   GET    /api/conversations/:id/messages – get messages
 *   POST   /api/conversations/:id/messages/truncate – truncate
 *   POST   /api/conversations/:id/messages/stream   – stream message
 *   POST   /api/conversations/:id/messages           – send message
 *   POST   /api/conversations/:id/greeting            – get/store greeting
 *   PATCH  /api/conversations/:id         – update/rename
 *   DELETE /api/conversations/:id         – delete
 */

import crypto from "node:crypto";
import fs from "node:fs";
import type http from "node:http";
import path from "node:path";
import {
  type AgentRuntime,
  ChannelType,
  type Content,
  createMessageMemory,
  logger,
  ModelType,
  stringToUuid,
  type UUID,
} from "@elizaos/core";
import type { ElizaConfig } from "../config/config.js";
import { resolveStateDir } from "../config/paths.js";
import type {
  ChatGenerateOptions,
  ChatGenerationResult,
  ChatImageAttachment,
  LogEntry,
} from "./chat-routes.js";
import {
  generateChatResponse,
  generateConversationTitle,
  getChatFailureReply,
  initSse,
  normalizeChatResponseText,
  persistAssistantConversationMemory,
  persistConversationMemory,
  readChatRequestPayload,
  resolveNoResponseFallback,
  writeChatTokenSse,
  writeSse,
  writeSseJson,
} from "./chat-routes.js";
import type { ReadJsonBodyOptions } from "./http-helpers.js";
import { evictOldestConversation } from "./memory-bounds.js";
import type { RouteRequestContext } from "./route-helpers.js";
import {
  buildUserMessages,
  type ConversationMeta,
  getErrorMessage,
  isUuidLike,
  persistConversationRoomTitle,
  resolveAppUserName,
  resolveConversationGreetingText,
  resolveWalletModeGuidanceReply,
} from "./server.js";

// ---------------------------------------------------------------------------
// Deleted-conversations state persistence
// ---------------------------------------------------------------------------

const DELETED_CONVERSATIONS_FILENAME = "deleted-conversations.v1.json";
const MAX_DELETED_CONVERSATION_IDS = 5000;

interface DeletedConversationsStateFile {
  version: 1;
  updatedAt: string;
  ids: string[];
}

function readDeletedConversationIdsFromState(): Set<string> {
  const filePath = path.join(resolveStateDir(), DELETED_CONVERSATIONS_FILENAME);
  if (!fs.existsSync(filePath)) return new Set();
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw) as Partial<DeletedConversationsStateFile>;
    const ids = Array.isArray(parsed.ids) ? parsed.ids : [];
    return new Set(
      ids
        .map((id) => (typeof id === "string" ? id.trim() : ""))
        .filter((id) => id.length > 0),
    );
  } catch (err) {
    logger.warn(
      `[eliza-api] Failed to read deleted conversations state: ${err instanceof Error ? err.message : String(err)}`,
    );
    return new Set();
  }
}

function persistDeletedConversationIdsToState(ids: Set<string>): void {
  const dir = resolveStateDir();
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
  }

  const normalized = Array.from(ids)
    .map((id) => id.trim())
    .filter((id) => id.length > 0)
    .slice(-MAX_DELETED_CONVERSATION_IDS);

  const payload: DeletedConversationsStateFile = {
    version: 1,
    updatedAt: new Date().toISOString(),
    ids: normalized,
  };

  fs.writeFileSync(
    path.join(dir, DELETED_CONVERSATIONS_FILENAME),
    JSON.stringify(payload, null, 2),
    { encoding: "utf-8", mode: 0o600 },
  );
}

// ---------------------------------------------------------------------------
// State interface required by conversation routes
// ---------------------------------------------------------------------------

export interface ConversationRouteState {
  runtime: AgentRuntime | null;
  config: ElizaConfig;
  agentName: string;
  adminEntityId: UUID | null;
  chatUserId: UUID | null;
  logBuffer: LogEntry[];
  conversations: Map<string, ConversationMeta>;
  conversationRestorePromise: Promise<void> | null;
  deletedConversationIds: Set<string>;
  broadcastWs: ((data: Record<string, unknown>) => void) | null;
  /** Wallet trade permission mode for wallet-mode guidance replies. */
  tradePermissionMode?: string;
}

export interface ConversationRouteContext extends RouteRequestContext {
  state: ConversationRouteState;
}

// ---------------------------------------------------------------------------
// Closure-lifted helpers
// ---------------------------------------------------------------------------

function ensureAdminEntityId(state: ConversationRouteState): UUID {
  if (state.adminEntityId) {
    return state.adminEntityId;
  }
  const configured = (
    state.config as any
  ).agents?.defaults?.adminEntityId?.trim();
  const nextAdminEntityId =
    configured && isUuidLike(configured)
      ? configured
      : (stringToUuid(`${state.agentName}-admin-entity`) as UUID);
  if (configured && !isUuidLike(configured)) {
    logger.warn(
      `[eliza-api] Invalid agents.defaults.adminEntityId "${configured}", using deterministic fallback`,
    );
  }
  state.adminEntityId = nextAdminEntityId;
  state.chatUserId = state.adminEntityId;
  return nextAdminEntityId;
}

async function ensureWorldOwnershipAndRoles(
  runtime: AgentRuntime,
  worldId: UUID,
  ownerId: UUID,
): Promise<void> {
  const world = await runtime.getWorld(worldId);
  if (!world) return;
  let needsUpdate = false;
  if (!world.metadata) {
    world.metadata = {};
    needsUpdate = true;
  }
  if (
    !world.metadata.ownership ||
    typeof world.metadata.ownership !== "object" ||
    (world.metadata.ownership as { ownerId?: string }).ownerId !== ownerId
  ) {
    world.metadata.ownership = { ownerId };
    needsUpdate = true;
  }
  const metadataWithRoles = world.metadata as {
    roles?: Record<string, string>;
  };
  const roles = metadataWithRoles.roles ?? {};
  if (roles[ownerId] !== "OWNER") {
    roles[ownerId] = "OWNER";
    metadataWithRoles.roles = roles;
    needsUpdate = true;
  }
  if (needsUpdate) {
    await runtime.updateWorld(world);
  }
}

function markConversationDeleted(
  state: ConversationRouteState,
  conversationId: string,
): void {
  const normalizedId = conversationId.trim();
  if (!normalizedId) return;
  if (state.deletedConversationIds.has(normalizedId)) return;

  state.deletedConversationIds.add(normalizedId);
  while (state.deletedConversationIds.size > MAX_DELETED_CONVERSATION_IDS) {
    const oldest = state.deletedConversationIds.values().next().value;
    if (!oldest) break;
    state.deletedConversationIds.delete(oldest);
  }

  try {
    persistDeletedConversationIdsToState(state.deletedConversationIds);
  } catch (err) {
    logger.warn(
      `[conversations] Failed to persist deleted conversation tombstones: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

async function deleteConversationRoomData(
  runtime: AgentRuntime,
  roomId: UUID,
): Promise<void> {
  const runtimeWithDelete = runtime as AgentRuntime & {
    deleteRoom?: (id: UUID) => Promise<unknown>;
    adapter?: {
      db?: {
        deleteRoom?: (id: UUID) => Promise<unknown>;
      };
    };
  };

  if (typeof runtimeWithDelete.deleteRoom === "function") {
    await runtimeWithDelete.deleteRoom(roomId);
    return;
  }

  const dbDeleteRoom = runtimeWithDelete.adapter?.db?.deleteRoom;
  if (typeof dbDeleteRoom === "function") {
    await dbDeleteRoom.call(runtimeWithDelete.adapter?.db, roomId);
  }
}

async function deleteConversationMemories(
  runtime: AgentRuntime,
  memoryIds: UUID[],
): Promise<number> {
  if (memoryIds.length === 0) return 0;

  const runtimeWithDelete = runtime as AgentRuntime & {
    deleteManyMemories?: (memoryIds: UUID[]) => Promise<unknown>;
    deleteMemory?: (memoryId: UUID) => Promise<unknown>;
    removeMemory?: (memoryId: UUID) => Promise<unknown>;
    adapter?: {
      db?: {
        deleteManyMemories?: (memoryIds: UUID[]) => Promise<unknown>;
        deleteMemory?: (memoryId: UUID) => Promise<unknown>;
        removeMemory?: (memoryId: UUID) => Promise<unknown>;
      };
    };
  };

  if (typeof runtimeWithDelete.deleteManyMemories === "function") {
    await runtimeWithDelete.deleteManyMemories(memoryIds);
    return memoryIds.length;
  }

  const dbDeleteMany = runtimeWithDelete.adapter?.db?.deleteManyMemories;
  if (typeof dbDeleteMany === "function") {
    await dbDeleteMany.call(runtimeWithDelete.adapter?.db, memoryIds);
    return memoryIds.length;
  }

  let deletedCount = 0;
  for (const memoryId of memoryIds) {
    if (typeof runtimeWithDelete.deleteMemory === "function") {
      await runtimeWithDelete.deleteMemory(memoryId);
    } else if (typeof runtimeWithDelete.removeMemory === "function") {
      await runtimeWithDelete.removeMemory(memoryId);
    } else if (
      typeof runtimeWithDelete.adapter?.db?.deleteMemory === "function"
    ) {
      await runtimeWithDelete.adapter.db.deleteMemory.call(
        runtimeWithDelete.adapter.db,
        memoryId,
      );
    } else if (
      typeof runtimeWithDelete.adapter?.db?.removeMemory === "function"
    ) {
      await runtimeWithDelete.adapter.db.removeMemory.call(
        runtimeWithDelete.adapter.db,
        memoryId,
      );
    } else {
      const unsupportedError = new Error(
        "Conversation message deletion is not supported by this runtime",
      ) as Error & { status?: number };
      unsupportedError.status = 501;
      throw unsupportedError;
    }
    deletedCount += 1;
  }

  return deletedCount;
}

async function ensureConversationRoom(
  state: ConversationRouteState,
  conv: ConversationMeta,
): Promise<void> {
  if (!state.runtime) return;
  const runtime = state.runtime;
  const agentName = runtime.character.name ?? "Eliza";
  const userId = ensureAdminEntityId(state);
  const worldId = stringToUuid(`${agentName}-web-chat-world`);
  const messageServerId = stringToUuid(`${agentName}-web-server`) as UUID;
  await runtime.ensureConnection({
    entityId: userId,
    roomId: conv.roomId,
    worldId,
    userName: resolveAppUserName(state.config),
    source: "client_chat",
    channelId: `web-conv-${conv.id}`,
    type: ChannelType.DM,
    messageServerId,
    metadata: { ownership: { ownerId: userId } },
  });
  await ensureWorldOwnershipAndRoles(runtime, worldId as UUID, userId);
}

async function syncConversationRoomTitle(
  state: ConversationRouteState,
  conv: ConversationMeta,
): Promise<void> {
  try {
    await persistConversationRoomTitle(state.runtime, conv);
  } catch (err) {
    logger.debug(
      `[conversations] Failed to persist room title for ${conv.id}: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

async function waitForConversationRestore(
  state: ConversationRouteState,
): Promise<void> {
  const pending = state.conversationRestorePromise;
  if (!pending) return;
  try {
    const timeout = new Promise<void>((_, reject) =>
      setTimeout(
        () => reject(new Error("Conversation restore timed out after 5000ms")),
        5000,
      ),
    );
    await Promise.race([pending, timeout]);
  } catch {
    // Restore failures are logged at the source.
  }
}

async function getConversationWithRestore(
  state: ConversationRouteState,
  convId: string,
): Promise<ConversationMeta | undefined> {
  const existing = state.conversations.get(convId);
  if (existing) return existing;
  await waitForConversationRestore(state);
  return state.conversations.get(convId);
}

async function ensureConversationGreetingStored(
  state: ConversationRouteState,
  conv: ConversationMeta,
  lang: string,
): Promise<{
  text: string;
  agentName: string;
  generated: boolean;
  persisted: boolean;
}> {
  const runtime = state.runtime;
  const agentName = runtime?.character.name ?? state.agentName ?? "Eliza";
  if (!runtime) {
    return {
      text: "",
      agentName,
      generated: false,
      persisted: false,
    };
  }

  let memories: Awaited<ReturnType<AgentRuntime["getMemories"]>>;
  try {
    memories = await runtime.getMemories({
      roomId: conv.roomId,
      tableName: "messages",
      count: 12,
    });
  } catch (err) {
    throw new Error(
      `Failed to inspect existing conversation messages: ${getErrorMessage(err)}`,
    );
  }

  memories.sort((a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0));
  const existingGreeting = memories.find((memory) => {
    const content = memory.content as Record<string, unknown> | undefined;
    return (
      memory.entityId === runtime.agentId &&
      content?.source === "agent_greeting" &&
      typeof content.text === "string" &&
      content.text.trim().length > 0
    );
  });
  if (existingGreeting) {
    return {
      text: String(
        (existingGreeting.content as Record<string, unknown> | undefined)
          ?.text ?? "",
      ),
      agentName,
      generated: true,
      persisted: false,
    };
  }

  if (memories.length > 0) {
    return {
      text: "",
      agentName,
      generated: false,
      persisted: false,
    };
  }

  const greeting = resolveConversationGreetingText(
    runtime,
    lang,
    state.config.ui,
  ).trim();
  if (!greeting) {
    return {
      text: "",
      agentName,
      generated: false,
      persisted: false,
    };
  }

  try {
    await persistConversationMemory(
      runtime,
      createMessageMemory({
        id: crypto.randomUUID() as UUID,
        entityId: runtime.agentId,
        roomId: conv.roomId,
        content: {
          text: greeting,
          source: "agent_greeting",
          channelType: ChannelType.DM,
        },
      }),
    );
  } catch (err) {
    throw new Error(
      `Failed to store greeting message: ${getErrorMessage(err)}`,
    );
  }

  conv.updatedAt = new Date().toISOString();
  return {
    text: greeting,
    agentName,
    generated: true,
    persisted: true,
  };
}

async function truncateConversationMessages(
  runtime: AgentRuntime,
  conv: ConversationMeta,
  messageId: string,
  options?: { inclusive?: boolean },
): Promise<{ deletedCount: number }> {
  const memories = await runtime.getMemories({
    roomId: conv.roomId,
    tableName: "messages",
    count: 1000,
  });

  memories.sort((a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0));
  const targetIndex = memories.findIndex((memory) => memory.id === messageId);
  if (targetIndex < 0) {
    const notFoundError = new Error(
      "Conversation message not found",
    ) as Error & {
      status?: number;
    };
    notFoundError.status = 404;
    throw notFoundError;
  }

  const deleteStartIndex =
    options?.inclusive === true ? targetIndex : targetIndex + 1;
  const memoryIds = memories
    .slice(deleteStartIndex)
    .map((memory) => memory.id)
    .filter(
      (memoryId): memoryId is UUID =>
        typeof memoryId === "string" && memoryId.trim().length > 0,
    );

  const deletedCount = await deleteConversationMemories(runtime, memoryIds);
  return { deletedCount };
}

// ---------------------------------------------------------------------------
// Server-side /plan command handler
// ---------------------------------------------------------------------------

/**
 * Handle /plan commands server-side so they work even if the client-side
 * handler in useChatSend.ts didn't intercept them (e.g. stale UI, connector
 * messages). Returns the response text to short-circuit with, or null if the
 * message isn't a plan command.
 */
async function handleServerSidePlanCommand(
  trimmedPrompt: string,
  conversationId: string,
): Promise<string | null> {
  if (!trimmedPrompt.startsWith("/plan")) return null;

  const body = trimmedPrompt.slice(5).trim(); // strip "/plan"

  const {
    enterPlanMode,
    exitPlanMode,
    getActivePlan,
    readActivePlan,
  } = await import("../services/coding-agent-plan-mode.js");

  // /plan exit [discard]
  if (body.startsWith("exit")) {
    const arg = body.slice(4).trim().toLowerCase();
    const decision = arg === "discard" || arg === "cancel" ? "discard" : "approve";
    const result = await exitPlanMode({ conversationId, decision });
    if (!result.plan && decision === "approve") {
      return "Not currently in plan mode for this conversation.";
    }
    return decision === "discard"
      ? "Plan discarded. What would you like to do instead?"
      : `Plan approved! Executing now.`;
  }

  // /plan status
  if (body === "status") {
    const entry = getActivePlan(conversationId);
    if (!entry) {
      return "Not currently in plan mode for this conversation.";
    }
    const plan = await readActivePlan(conversationId);
    if (!plan) return "Plan mode active but plan file could not be loaded.";
    return `Plan mode active: "${plan.title}"\nFile: ${plan.filePath}`;
  }

  // /plan [title] — enter plan mode
  const title = body || "New Plan";

  // Idempotent — if already planning, acknowledge
  const existing = getActivePlan(conversationId);
  if (existing) {
    return `Already in plan mode for this conversation. Continue refining the plan or say "approve" when ready.`;
  }

  await enterPlanMode({ conversationId, title });

  if (body) {
    // User provided a description: acknowledge and start planning
    return `Entered plan mode. I'll explore the codebase and build a plan for: "${body}"\n\nI'll ask clarifying questions as needed. When you're happy with the plan, say "approve" and I'll execute it.`;
  }
  // Bare /plan — ask what they want to work on
  return `Entered plan mode. What would you like to plan?`;
}

// ---------------------------------------------------------------------------
// Main handler
// ---------------------------------------------------------------------------

export async function handleConversationRoutes(
  ctx: ConversationRouteContext,
): Promise<boolean> {
  const { req, res, method, pathname, readJsonBody, json, error, state } = ctx;

  if (
    !pathname.startsWith("/api/conversations") ||
    pathname.startsWith("/api/conversations/")
      ? !/^\/api\/conversations\/[^/]/.test(pathname)
      : pathname !== "/api/conversations"
  ) {
    // Quick exit: not a conversation route
    if (!pathname.startsWith("/api/conversations")) return false;
  }

  // ── GET /api/conversations ──────────────────────────────────────────
  if (method === "GET" && pathname === "/api/conversations") {
    await waitForConversationRestore(state);
    const convos = Array.from(state.conversations.values())
      .filter((c) => !state.deletedConversationIds.has(c.id))
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
    json(res, { conversations: convos });
    return true;
  }

  // ── POST /api/conversations ─────────────────────────────────────────
  if (method === "POST" && pathname === "/api/conversations") {
    const body = await readJsonBody<{
      title?: string;
      includeGreeting?: boolean;
      lang?: string;
    }>(req, res);
    if (!body) return true;
    await waitForConversationRestore(state);
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    const roomId = stringToUuid(`web-conv-${id}`);
    const conv: ConversationMeta = {
      id,
      title: body.title?.trim() || "New Chat",
      roomId,
      createdAt: now,
      updatedAt: now,
    };
    state.conversations.set(id, conv);
    let greeting:
      | {
          text: string;
          agentName: string;
          generated: boolean;
          persisted: boolean;
        }
      | undefined;

    // Soft cap: evict the oldest conversation when the map exceeds 500
    evictOldestConversation(state.conversations, 500);

    if (state.runtime) {
      try {
        await ensureConversationRoom(state, conv);
        await syncConversationRoomTitle(state, conv);
        if (body.includeGreeting === true) {
          const storedGreeting = await ensureConversationGreetingStored(
            state,
            conv,
            typeof body.lang === "string" ? body.lang : "en",
          );
          if (storedGreeting.text.trim()) {
            greeting = {
              text: storedGreeting.text,
              agentName: storedGreeting.agentName,
              generated: storedGreeting.generated,
              persisted: storedGreeting.persisted,
            };
          }
        }
      } catch (err) {
        error(
          res,
          `Failed to initialize conversation: ${getErrorMessage(err)}`,
          500,
        );
        return true;
      }
    }
    json(res, { conversation: conv, ...(greeting ? { greeting } : {}) });
    return true;
  }

  // ── GET /api/conversations/:id/messages ─────────────────────────────
  if (
    method === "GET" &&
    /^\/api\/conversations\/[^/]+\/messages$/.test(pathname)
  ) {
    const convId = decodeURIComponent(pathname.split("/")[3]);
    const conv = await getConversationWithRestore(state, convId);
    if (!conv) {
      error(res, "Conversation not found", 404);
      return true;
    }
    if (!state.runtime) {
      json(res, { messages: [] });
      return true;
    }
    const runtime = state.runtime;
    try {
      const memories = await runtime.getMemories({
        roomId: conv.roomId,
        tableName: "messages",
        count: 200,
      });
      // Sort by createdAt ascending
      memories.sort((a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0));
      const agentId = runtime.agentId;
      const messages = memories
        .map((m) => {
          const contentSource = (m.content as Record<string, unknown>)?.source;
          const content = m.content as Record<string, unknown>;
          const meta = m.metadata as Record<string, unknown> | undefined;
          const entityName = meta?.entityName;
          const replyToAuthor =
            meta?.replyToAuthor && typeof meta.replyToAuthor === "object"
              ? (meta.replyToAuthor as Record<string, unknown>)
              : null;
          const normalizedSource =
            typeof contentSource === "string" &&
            contentSource.length > 0 &&
            contentSource !== "client_chat"
              ? contentSource
              : undefined;
          return {
            id: m.id ?? "",
            role: m.entityId === agentId ? "assistant" : "user",
            text: (m.content as { text?: string })?.text ?? "",
            timestamp: m.createdAt ?? 0,
            source: normalizedSource,
            from:
              typeof entityName === "string" && entityName.length > 0
                ? entityName
                : undefined,
            fromUserName:
              typeof meta?.entityUserName === "string" &&
              meta.entityUserName.length > 0
                ? meta.entityUserName
                : undefined,
            avatarUrl:
              typeof meta?.entityAvatarUrl === "string" &&
              meta.entityAvatarUrl.length > 0
                ? meta.entityAvatarUrl
                : undefined,
            replyToMessageId:
              typeof content.inReplyTo === "string" &&
              content.inReplyTo.length > 0
                ? content.inReplyTo
                : typeof meta?.replyToMessageId === "string" &&
                    meta.replyToMessageId.length > 0
                  ? meta.replyToMessageId
                  : undefined,
            replyToSenderName:
              typeof meta?.replyToSenderName === "string" &&
              meta.replyToSenderName.length > 0
                ? meta.replyToSenderName
                : typeof replyToAuthor?.displayName === "string" &&
                    replyToAuthor.displayName.length > 0
                  ? replyToAuthor.displayName
                  : typeof replyToAuthor?.username === "string" &&
                      replyToAuthor.username.length > 0
                    ? replyToAuthor.username
                    : undefined,
            replyToSenderUserName:
              typeof meta?.replyToSenderUserName === "string" &&
              meta.replyToSenderUserName.length > 0
                ? meta.replyToSenderUserName
                : typeof replyToAuthor?.username === "string" &&
                    replyToAuthor.username.length > 0
                  ? replyToAuthor.username
                  : undefined,
          };
        })
        // Drop action-log memories that have no visible text (e.g.
        // plugin action logs with only `thought` / `actions` fields).
        // Without this filter they appear as blank chat bubbles.
        .filter((m) => m.text.trim().length > 0);
      json(res, { messages });
    } catch (err) {
      logger.warn(
        `[conversations] Failed to fetch messages: ${err instanceof Error ? err.message : String(err)}`,
      );
      json(res, { messages: [], error: "Failed to fetch messages" }, 500);
    }
    return true;
  }

  // ── POST /api/conversations/:id/messages/truncate ──────────────────
  if (
    method === "POST" &&
    /^\/api\/conversations\/[^/]+\/messages\/truncate$/.test(pathname)
  ) {
    const convId = decodeURIComponent(pathname.split("/")[3]);
    const conv = await getConversationWithRestore(state, convId);
    if (!conv) {
      error(res, "Conversation not found", 404);
      return true;
    }

    const body = await readJsonBody<{
      messageId?: string;
      inclusive?: boolean;
    }>(req, res);
    if (!body) return true;

    const messageId =
      typeof body.messageId === "string" ? body.messageId.trim() : "";
    if (!messageId) {
      error(res, "messageId is required", 400);
      return true;
    }

    const runtime = state.runtime;
    if (!runtime) {
      error(res, "Agent is not running", 503);
      return true;
    }

    try {
      const result = await truncateConversationMessages(
        runtime,
        conv,
        messageId,
        {
          inclusive: body.inclusive === true,
        },
      );
      conv.updatedAt = new Date().toISOString();
      state.broadcastWs?.({
        type: "conversation-updated",
        conversation: conv,
      });
      json(res, { ok: true, deletedCount: result.deletedCount });
    } catch (err) {
      const status =
        typeof (err as { status?: number }).status === "number"
          ? (err as { status: number }).status
          : 500;
      error(res, getErrorMessage(err), status);
    }
    return true;
  }

  // ── POST /api/conversations/:id/messages/stream ─────────────────────
  if (
    method === "POST" &&
    /^\/api\/conversations\/[^/]+\/messages\/stream$/.test(pathname)
  ) {
    const convId = decodeURIComponent(pathname.split("/")[3]);
    const conv = await getConversationWithRestore(state, convId);
    if (!conv) {
      error(res, "Conversation not found", 404);
      return true;
    }

    const chatPayload = await readChatRequestPayload(req, res, {
      readJsonBody,
      error,
    });
    if (!chatPayload) return true;
    const {
      prompt,
      channelType,
      images,
      conversationMode,
      preferredLanguage,
      source,
      metadata: chatMetadata,
    } = chatPayload;

    const runtime = state.runtime;
    if (!runtime) {
      error(res, "Agent is not running", 503);
      return true;
    }

    const userId = ensureAdminEntityId(state);
    const turnStartedAt = Date.now();

    try {
      await ensureConversationRoom(state, conv);
    } catch (err) {
      error(
        res,
        `Failed to initialize conversation room: ${getErrorMessage(err)}`,
        500,
      );
      return true;
    }

    const { userMessage, messageToStore } = buildUserMessages({
      images,
      prompt,
      userId,
      agentId: runtime.agentId,
      roomId: conv.roomId,
      channelType,
      conversationMode,
      messageSource: source,
      metadata: chatMetadata,
    });

    try {
      await persistConversationMemory(runtime, messageToStore);
    } catch (err) {
      error(res, `Failed to store user message: ${getErrorMessage(err)}`, 500);
      return true;
    }

    // ── Server-side /plan command interceptor ────────────────
    // Handles /plan even if the client-side handler didn't catch it
    // (e.g. connector messages, stale UI). Short-circuits before LLM.
    if (prompt.trim().startsWith("/plan")) {
      try {
        const planResult = await handleServerSidePlanCommand(
          prompt.trim(),
          conv.roomId,
        );
        if (planResult) {
          initSse(res);
          writeChatTokenSse(res, planResult, planResult);
          try {
            await persistAssistantConversationMemory(
              runtime,
              conv.roomId,
              planResult,
              channelType,
              turnStartedAt,
            );
            conv.updatedAt = new Date().toISOString();
          } catch {
            // Best effort.
          }
          writeSseJson(res, {
            type: "done",
            fullText: planResult,
            agentName: state.agentName,
          });
          res.end();
          return true;
        }
      } catch {
        // Fall through to normal chat if plan handling fails.
      }
    }

    // ── HITL Control Intent ─────────────────────────────────
    // Check if the user's message is a colloquial pause/stop/resume
    // ("hold on", "STOP!!!", "go ahead"). If so, short-circuit and
    // reply with the control response without entering generation.
    // Skip when plan mode is active — messages like "sounds good"
    // should route to the model so it can invoke EXIT_PLAN_MODE.
    // ── Phased plan: check for waiting execution ────────────
    // If a phased plan is waiting for user approval to advance,
    // intercept approval messages and resume the next phase.
    try {
      const { getActiveExecution, resumePhasedExecution } = await import(
        "../services/coding-agent-plan-phases.js"
      );
      const execution = getActiveExecution(conv.roomId);
      if (execution?.status === "waiting_for_user") {
        const approvalPattern =
          /\b(proceed|go ahead|yes|do it|continue|next|looks good|lgtm|approved?)\b/i;
        if (approvalPattern.test(prompt)) {
          const result = await resumePhasedExecution(
            runtime,
            conv.roomId,
            userMessage,
          );
          if (result) {
            initSse(res);
            writeChatTokenSse(res, result.text, result.text);
            try {
              await persistAssistantConversationMemory(
                runtime,
                conv.roomId,
                result.text,
                channelType,
                turnStartedAt,
              );
            } catch {
              // Best effort.
            }
            writeSse(res, {
              type: "done",
              fullText: result.text,
              agentName: runtime.character?.name ?? "Agent",
            });
            return true;
          }
        }
      }
    } catch {
      // Non-fatal.
    }

    let skipControlIntent = false;
    try {
      const { getActivePlan, hasPendingPlanExecution } = await import(
        "../services/coding-agent-plan-mode.js"
      );
      // Skip control intent when in plan mode (messages route to model for EXIT_PLAN_MODE)
      // or when a pending plan execution exists (user approval should trigger dispatch,
      // not get intercepted as a "resume" control intent).
      skipControlIntent =
        getActivePlan(conv.roomId) !== null ||
        hasPendingPlanExecution(conv.roomId);
    } catch {
      // Non-fatal.
    }
    if (!skipControlIntent) try {
      const { maybeHandleControlIntent } = await import(
        "../services/coding-agent-control-handler.js"
      );
      const ptyService = runtime.getService("PTY_SERVICE") as unknown as
        | import("../services/coding-agent-control-bus.js").PTYServiceLike
        | null;
      const controlResult = await maybeHandleControlIntent(
        runtime,
        prompt,
        ptyService,
        convId,
      );
      if (controlResult) {
        initSse(res);
        writeChatTokenSse(
          res,
          controlResult.responseText,
          controlResult.responseText,
        );
        try {
          await persistAssistantConversationMemory(
            runtime,
            conv.roomId,
            controlResult.responseText,
            channelType,
            turnStartedAt,
          );
          conv.updatedAt = new Date().toISOString();
        } catch {
          // Best effort — don't block the response.
        }
        writeSseJson(res, {
          type: "done",
          fullText: controlResult.responseText,
          agentName: state.agentName,
        });
        res.end();
        return true;
      }
    } catch {
      // Fail open — never block normal chat on classifier errors.
    }

    // ── Plan Mode prompt injection ────────────────────��──────
    // If this conversation is currently in plan mode, we'll inject
    // the plan-mode system block into the user message text so the
    // model stays constrained to the interview workflow.
    let planModePrefix = "";
    try {
      const { getActivePlan, readActivePlan } = await import(
        "../services/coding-agent-plan-mode.js"
      );
      const planEntry = getActivePlan(conv.roomId);
      if (planEntry) {
        const plan = await readActivePlan(conv.roomId);
        if (plan) {
          const { buildPlanModePromptBlock } = await import(
            "../services/coding-agent-plan-mode-prompt.js"
          );
          planModePrefix = buildPlanModePromptBlock(plan) + "\n\n";
        }
      }
    } catch {
      // Non-fatal — proceed without plan context.
    }

    const walletModeGuidance = resolveWalletModeGuidanceReply(state, prompt);
    if (walletModeGuidance) {
      initSse(res);
      let aborted = false;
      req.on("close", () => {
        aborted = true;
      });
      if (!aborted) {
        writeChatTokenSse(res, walletModeGuidance, walletModeGuidance);
        try {
          await persistAssistantConversationMemory(
            runtime,
            conv.roomId,
            walletModeGuidance,
            channelType,
            turnStartedAt,
          );
          conv.updatedAt = new Date().toISOString();
        } catch (persistErr) {
          writeSse(res, {
            type: "error",
            message: getErrorMessage(persistErr),
          });
          res.end();
          return true;
        }
        writeSseJson(res, {
          type: "done",
          fullText: walletModeGuidance,
          agentName: state.agentName,
        });
      }
      res.end();
      return true;
    }

    // ── Local runtime path (streaming) ─────────────��─────────

    // If plan mode is active, prepend the plan-mode system block to
    // the user message so the model sees it as context for this turn.
    const effectiveMessage =
      planModePrefix && userMessage.content?.text
        ? {
            ...userMessage,
            content: {
              ...userMessage.content,
              text: planModePrefix + userMessage.content.text,
            },
          }
        : userMessage;

    initSse(res);
    let aborted = false;
    req.on("close", () => {
      aborted = true;
    });

    // SSE heartbeat to keep connection alive during long generation
    const heartbeatInterval = setInterval(() => {
      if (!aborted && !res.writableEnded) {
        res.write(": heartbeat\n\n");
      }
    }, 5000);

    let streamedText = "";
    // Append-only accumulator for plan mode. Snapshots (which replace
    // streamedText) happen when action callbacks fire — the callback
    // text replaces the prior text. For plan mode, we need the FULL
    // model output (the plan) even if a follow-up replaces it.
    let planModeAccumulated = "";

    try {
      const result = await generateChatResponse(
        runtime,
        effectiveMessage,
        state.agentName,
        {
          isAborted: () => aborted,
          onChunk: (chunk) => {
            if (!chunk) return;
            streamedText += chunk;
            if (planModePrefix) planModeAccumulated += chunk;
            writeChatTokenSse(res, chunk, streamedText);
          },
          onSnapshot: (text) => {
            if (!text) return;
            streamedText = text;
            writeChatTokenSse(res, text, streamedText);
          },
          resolveNoResponseText: () =>
            resolveNoResponseFallback(state.logBuffer, runtime),
          preferredLanguage,
          // In plan mode, skip fallback action recovery — the model is
          // interviewing/planning, not executing wallet/balance actions.
          skipFallbackActions: Boolean(planModePrefix),
          // In plan mode, disable post-action continuation. The model
          // sometimes outputs NONE despite the prompt, and NONE isn't
          // in the core's terminal action set — causing an infinite
          // "No additional action taken" loop.
          ...(planModePrefix ? { continueAfterActions: false } : {}),
        },
      );

      if (!aborted) {
        conv.updatedAt = new Date().toISOString();
        if (result.noResponseReason !== "ignored") {
          const resolvedText = normalizeChatResponseText(
            result.text,
            state.logBuffer,
            runtime,
          );

          // In plan mode, persist the model's response to the plan file
          // so it's available when the user approves. We update the plan's
          // raw markdown with the model's response — the parser will
          // extract structure from it (title, recommended execution, steps).
          // In plan mode, save the full accumulated plan text (not
          // resolvedText, which may have been replaced by a follow-up
          // via snapshot). planModeAccumulated is append-only.
          const planTextToSave = planModePrefix
            ? (planModeAccumulated.trim() || resolvedText.trim())
            : "";
          if (planTextToSave) {
            try {
              const { updateActivePlan } = await import(
                "../services/coding-agent-plan-mode.js"
              );
              await updateActivePlan(conv.roomId, planTextToSave);
            } catch {
              // Best effort — don't block the response.
            }
          }

          // The upstream message service already
          // persists the response via runtime.createMemory inside
          // handleMessage. Extra persist would create a duplicate bubble.
          writeSseJson(res, {
            type: "done",
            fullText: resolvedText,
            agentName: result.agentName,
            ...(result.usage ? { estimatedUsage: result.usage } : {}),
          });
        } else {
          writeSseJson(res, {
            type: "done",
            fullText: "",
            agentName: result.agentName,
            noResponseReason: "ignored",
            ...(result.usage ? { estimatedUsage: result.usage } : {}),
          });
        }

        // ── Post-action plan execution ────────────────────────
        // If EXIT_PLAN_MODE just approved a plan, dispatch agents now
        // that the core's action processing is finished. This avoids
        // nested CREATE_TASK calls inside action handlers which confuse
        // the core's continuation logic.
        try {
          const { consumePendingPlanExecution } = await import(
            "../services/coding-agent-plan-mode.js"
          );
          const approvedPlan = consumePendingPlanExecution(conv.roomId);
          if (approvedPlan) {
            // If the model auto-approved during plan generation (same turn),
            // the plan file wasn't updated yet because exitPlanMode removed
            // the activePlans entry before updateActivePlan could write.
            // Use the append-only accumulated text which has the full plan.
            if (
              planModeAccumulated?.trim() &&
              planModeAccumulated.trim().length > (approvedPlan.raw?.trim().length ?? 0)
            ) {
              approvedPlan.raw = planModeAccumulated.trim();
            }

            const { executePlan } = await import(
              "../services/coding-agent-plan-executor.js"
            );
            const execResult = await executePlan(
              runtime,
              approvedPlan,
              userMessage,
              // Send execution updates via SSE before the stream closes
              async (content: { text?: string }) => {
                if (!aborted && !res.writableEnded) {
                  writeChatTokenSse(
                    res,
                    content.text ?? "",
                    (streamedText += content.text ?? ""),
                  );
                }
                return [];
              },
              { conversationId: conv.roomId },
            );
            if (!aborted && !res.writableEnded) {
              writeChatTokenSse(res, execResult.text, (streamedText += execResult.text));
            }
          }
        } catch (planExecErr) {
          logger.warn(
            { err: getErrorMessage(planExecErr) },
            "[conversation-routes] Plan execution failed after approval",
          );
        }
      }
    } catch (err) {
      if (!aborted) {
        // If text was already streamed to the client (e.g. the initial
        // response succeeded but a post-action continuation failed), use the
        // streamed text as the final reply instead of replacing it with a
        // generic fallback.
        if (streamedText) {
          logger.warn(
            { err: getErrorMessage(err), streamedTextLength: streamedText.length },
            "Post-generation error after text was already streamed — using streamed text",
          );
          // The message service already persisted the response before the
          // post-action continuation failed. Skip persist to avoid a
          // duplicate memory that surfaces as a second chat bubble.
          conv.updatedAt = new Date().toISOString();
          writeSseJson(res, {
            type: "done",
            fullText: streamedText,
            agentName: state.agentName,
          });
        } else {
          logger.warn(
            { err: getErrorMessage(err) },
            "Chat generation failed with no streamed text",
          );
          const providerIssueReply = getChatFailureReply(err, state.logBuffer);
          try {
            await persistAssistantConversationMemory(
              runtime,
              conv.roomId,
              providerIssueReply,
              channelType,
            );
            conv.updatedAt = new Date().toISOString();
            writeSse(res, {
              type: "done",
              fullText: providerIssueReply,
              agentName: state.agentName,
            });
          } catch (persistErr) {
            writeSse(res, {
              type: "error",
              message: getErrorMessage(persistErr),
            });
          }
        }
      }
    } finally {
      clearInterval(heartbeatInterval);
      res.end();
    }
    return true;
  }

  // ── POST /api/conversations/:id/messages ────────────────────────────
  if (
    method === "POST" &&
    /^\/api\/conversations\/[^/]+\/messages$/.test(pathname)
  ) {
    const convId = decodeURIComponent(pathname.split("/")[3]);
    const conv = await getConversationWithRestore(state, convId);
    if (!conv) {
      error(res, "Conversation not found", 404);
      return true;
    }
    const chatPayload = await readChatRequestPayload(req, res, {
      readJsonBody,
      error,
    });
    if (!chatPayload) return true;
    const {
      prompt,
      channelType,
      images,
      conversationMode,
      preferredLanguage,
      source,
      metadata: restMetadata,
    } = chatPayload;
    const runtime = state.runtime;
    if (!runtime) {
      error(res, "Agent is not running", 503);
      return true;
    }
    const userId = ensureAdminEntityId(state);
    const turnStartedAt = Date.now();

    try {
      await ensureConversationRoom(state, conv);
    } catch (err) {
      error(
        res,
        `Failed to initialize conversation room: ${getErrorMessage(err)}`,
        500,
      );
      return true;
    }

    const { userMessage, messageToStore } = buildUserMessages({
      images,
      prompt,
      userId,
      agentId: runtime.agentId,
      roomId: conv.roomId,
      channelType,
      conversationMode,
      messageSource: source,
      metadata: restMetadata,
    });

    try {
      await persistConversationMemory(runtime, messageToStore);
    } catch (err) {
      error(res, `Failed to store user message: ${getErrorMessage(err)}`, 500);
      return true;
    }

    // ── Server-side /plan command interceptor (non-streaming) ──
    if (prompt.trim().startsWith("/plan")) {
      try {
        const planResult = await handleServerSidePlanCommand(
          prompt.trim(),
          conv.roomId,
        );
        if (planResult) {
          try {
            await persistAssistantConversationMemory(
              runtime,
              conv.roomId,
              planResult,
              channelType,
              turnStartedAt,
            );
            conv.updatedAt = new Date().toISOString();
          } catch {
            // Best effort.
          }
          json(res, { text: planResult, agentName: state.agentName });
          return true;
        }
      } catch {
        // Fall through.
      }
    }

    // ── HITL Control Intent (non-streaming) ─────────────────
    // Skip when plan mode is active (same rationale as streaming path).
    let skipControlIntentNonStream = false;
    try {
      const { getActivePlan, hasPendingPlanExecution } = await import(
        "../services/coding-agent-plan-mode.js"
      );
      skipControlIntentNonStream =
        getActivePlan(conv.roomId) !== null ||
        hasPendingPlanExecution(conv.roomId);
    } catch {
      // Non-fatal.
    }
    if (!skipControlIntentNonStream) try {
      const { maybeHandleControlIntent } = await import(
        "../services/coding-agent-control-handler.js"
      );
      const ptyService = runtime.getService("PTY_SERVICE") as unknown as
        | import("../services/coding-agent-control-bus.js").PTYServiceLike
        | null;
      const controlResult = await maybeHandleControlIntent(
        runtime,
        prompt,
        ptyService,
        convId,
      );
      if (controlResult) {
        try {
          await persistAssistantConversationMemory(
            runtime,
            conv.roomId,
            controlResult.responseText,
            channelType,
            turnStartedAt,
          );
          conv.updatedAt = new Date().toISOString();
        } catch {
          // Best effort.
        }
        json(res, {
          text: controlResult.responseText,
          agentName: state.agentName,
        });
        return true;
      }
    } catch {
      // Fail open.
    }

    // ── Plan Mode prompt injection (non-streaming) ──────────
    let planModePrefix = "";
    try {
      const { getActivePlan, readActivePlan } = await import(
        "../services/coding-agent-plan-mode.js"
      );
      const planEntry = getActivePlan(conv.roomId);
      if (planEntry) {
        const plan = await readActivePlan(conv.roomId);
        if (plan) {
          const { buildPlanModePromptBlock } = await import(
            "../services/coding-agent-plan-mode-prompt.js"
          );
          planModePrefix = buildPlanModePromptBlock(plan) + "\n\n";
        }
      }
    } catch {
      // Non-fatal.
    }

    const effectiveMessage =
      planModePrefix && userMessage.content?.text
        ? {
            ...userMessage,
            content: {
              ...userMessage.content,
              text: planModePrefix + userMessage.content.text,
            },
          }
        : userMessage;

    const walletModeGuidance = resolveWalletModeGuidanceReply(state, prompt);
    if (walletModeGuidance) {
      try {
        await persistAssistantConversationMemory(
          runtime,
          conv.roomId,
          walletModeGuidance,
          channelType,
          turnStartedAt,
        );
        conv.updatedAt = new Date().toISOString();
        json(res, {
          text: walletModeGuidance,
          agentName: state.agentName,
        });
      } catch (persistErr) {
        error(res, getErrorMessage(persistErr), 500);
      }
      return true;
    }

    try {
      const result = await generateChatResponse(
        runtime,
        effectiveMessage,
        state.agentName,
        {
          resolveNoResponseText: () =>
            resolveNoResponseFallback(state.logBuffer, runtime),
          preferredLanguage,
          skipFallbackActions: Boolean(planModePrefix),
          ...(planModePrefix ? { continueAfterActions: false } : {}),
        },
      );

      conv.updatedAt = new Date().toISOString();
      if (result.noResponseReason !== "ignored") {
        const resolvedText = normalizeChatResponseText(
          result.text,
          state.logBuffer,
          runtime,
        );

        // In plan mode, persist model's response to the plan file.
        if (planModePrefix && resolvedText.trim()) {
          try {
            const { readActivePlan, updateActivePlan } = await import(
              "../services/coding-agent-plan-mode.js"
            );
            await updateActivePlan(conv.roomId, resolvedText);
          } catch {
            // Best effort.
          }
        }

        // Post-action plan execution (non-streaming)
        let planExecText = "";
        try {
          const { consumePendingPlanExecution } = await import(
            "../services/coding-agent-plan-mode.js"
          );
          const approvedPlan = consumePendingPlanExecution(conv.roomId);
          if (approvedPlan) {
            // If model auto-approved during plan generation, the plan file
            // wasn't updated. Use the resolved text as the plan content.
            if (
              planModePrefix &&
              resolvedText.trim() &&
              resolvedText.trim().length > (approvedPlan.raw?.trim().length ?? 0)
            ) {
              approvedPlan.raw = resolvedText.trim();
            }

            const { executePlan } = await import(
              "../services/coding-agent-plan-executor.js"
            );
            const execResult = await executePlan(
              runtime,
              approvedPlan,
              userMessage,
              undefined,
              { conversationId: conv.roomId },
            );
            planExecText = execResult.text;
          }
        } catch {
          // Best effort.
        }

        // Skip persist — upstream message service already stored the response.
        json(res, {
          text: planExecText
            ? `${resolvedText}\n\n${planExecText}`
            : resolvedText,
          agentName: result.agentName,
        });
      } else {
        json(res, {
          text: "",
          agentName: result.agentName,
          noResponseReason: "ignored",
        });
      }
    } catch (err) {
      logger.warn(
        `[conversations] POST /messages failed: ${err instanceof Error ? err.message : String(err)}`,
      );
      const providerIssueReply = getChatFailureReply(err, state.logBuffer);
      try {
        await persistAssistantConversationMemory(
          runtime,
          conv.roomId,
          providerIssueReply,
          channelType,
        );
        conv.updatedAt = new Date().toISOString();
        json(res, {
          text: providerIssueReply,
          agentName: state.agentName,
        });
      } catch (persistErr) {
        error(res, getErrorMessage(persistErr), 500);
      }
    }
    return true;
  }

  // ── POST /api/conversations/:id/greeting ───────────────────────────
  if (
    method === "POST" &&
    /^\/api\/conversations\/[^/]+\/greeting$/.test(pathname)
  ) {
    const convId = decodeURIComponent(pathname.split("/")[3]);
    const conv = await getConversationWithRestore(state, convId);
    if (!conv) {
      error(res, "Conversation not found", 404);
      return true;
    }

    const runtime = state.runtime;
    if (!runtime) {
      error(res, "Agent is not running", 503);
      return true;
    }
    const url = new URL(req.url ?? "", `http://${req.headers.host}`);
    const lang = url.searchParams.get("lang") ?? "en";

    try {
      await ensureConversationRoom(state, conv);
    } catch (err) {
      error(
        res,
        `Failed to initialize conversation room: ${getErrorMessage(err)}`,
        500,
      );
      return true;
    }

    try {
      const greeting = await ensureConversationGreetingStored(
        state,
        conv,
        lang,
      );
      json(res, {
        text: greeting.text,
        agentName: greeting.agentName,
        generated: greeting.generated,
        persisted: greeting.persisted,
      });
    } catch (err) {
      error(res, getErrorMessage(err), 500);
    }
    return true;
  }

  // ── PATCH /api/conversations/:id ────────────────────────────────────
  if (
    method === "PATCH" &&
    /^\/api\/conversations\/[^/]+$/.test(pathname) &&
    !pathname.endsWith("/messages")
  ) {
    const convId = decodeURIComponent(pathname.split("/")[3]);
    const conv = await getConversationWithRestore(state, convId);
    if (!conv) {
      error(res, "Conversation not found", 404);
      return true;
    }
    const body = await readJsonBody<{
      title?: string;
      generate?: boolean;
    }>(req, res);
    if (!body) return true;

    if (body.generate) {
      if (!state.runtime) {
        error(res, "Agent is not running", 503);
        return true;
      }
      // Get the last user message to use as the prompt for generation
      let prompt = "A generic conversation";
      try {
        const memories = await state.runtime.getMemories({
          roomId: conv.roomId,
          tableName: "messages",
          count: 5,
        });
        const lastUserMemory = memories.find(
          (m) => m.entityId !== state.runtime?.agentId,
        );
        if (lastUserMemory?.content?.text) {
          prompt = String(lastUserMemory.content.text);
        }
      } catch (err) {
        logger.warn(
          `[conversations] Failed to fetch context for title generation: ${err instanceof Error ? err.message : String(err)}`,
        );
      }

      const newTitle = await generateConversationTitle(
        state.runtime,
        prompt,
        state.agentName,
      );

      const fallbackTitle = prompt
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .slice(0, 5)
        .join(" ")
        .trim();
      const resolvedTitle = newTitle ?? fallbackTitle;

      if (resolvedTitle) {
        conv.title = resolvedTitle;
        conv.updatedAt = new Date().toISOString();
        await syncConversationRoomTitle(state, conv);
      }
    } else if (body.title?.trim()) {
      conv.title = body.title.trim();
      conv.updatedAt = new Date().toISOString();
      await syncConversationRoomTitle(state, conv);
    }
    json(res, { conversation: conv });
    return true;
  }

  // ── DELETE /api/conversations/:id ───────────────────────────────────
  if (
    method === "DELETE" &&
    /^\/api\/conversations\/[^/]+$/.test(pathname) &&
    !pathname.endsWith("/messages")
  ) {
    const convId = decodeURIComponent(pathname.split("/")[3]);
    const conv = await getConversationWithRestore(state, convId);
    if (conv?.roomId && state.runtime) {
      try {
        const memories = await state.runtime.getMemories({
          roomId: conv.roomId,
          tableName: "messages",
          count: 1000,
        });
        const memoryIds = memories
          .map((memory) => memory.id)
          .filter(
            (memoryId): memoryId is UUID =>
              typeof memoryId === "string" && memoryId.trim().length > 0,
          );
        if (memoryIds.length > 0) {
          await deleteConversationMemories(state.runtime, memoryIds);
        }
      } catch (err) {
        logger.debug(
          `[conversations] Failed to delete messages for ${convId}: ${err instanceof Error ? err.message : String(err)}`,
        );
      }
      try {
        await deleteConversationRoomData(state.runtime, conv.roomId);
      } catch (err) {
        logger.debug(
          `[conversations] Failed to delete room data for ${convId}: ${err instanceof Error ? err.message : String(err)}`,
        );
      }
    }
    state.conversations.delete(convId);
    markConversationDeleted(state, convId);
    json(res, { ok: true });
    return true;
  }

  return false;
}
