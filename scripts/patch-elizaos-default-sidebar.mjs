#!/usr/bin/env node
/**
 * Whitelabel (Project Azul): turn the chat overlay's single centered column
 * into a full product shell that matches the references:
 *
 *   - a left sidebar with a collapse + search header, a nav row
 *     (New agent / Skills / Messaging / Artifacts), then the conversation list
 *     (ConversationsSidebar in `embedded` mode — no internal collapse/resize
 *     chrome; the overlay owns the shell);
 *   - a chat top bar with Settings + a collapse-right toggle.
 *
 * Collapse is owned by the overlay: it removes the whole sidebar and gives the
 * room back to the chat, with an expand button surfacing in the top bar.
 *
 * eliza/ is gitignored, so re-apply on every install. The ui dist is rebuilt by
 * local-mode setup (app-core closure build) after this patch runs, so the
 * change reaches the renderer. Idempotent.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LOG = "[patch-elizaos-default-sidebar]";
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appFile = path.join(repoRoot, "eliza/packages/ui/src/App.tsx");
const sidebarFile = path.join(
  repoRoot,
  "eliza/packages/ui/src/components/conversations/ConversationsSidebar.tsx",
);

// ── App.tsx: imports ────────────────────────────────────────────────────────

const LUCIDE_IMPORT_FROM = `import { Keyboard } from "@capacitor/keyboard";
import "./components/chat/chat-source-registration";`;
const LUCIDE_IMPORT_TO = `import { Keyboard } from "@capacitor/keyboard";
import {
  Bot,
  FileText,
  MessageSquare,
  PanelLeft,
  PanelRight,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";
import "./components/chat/chat-source-registration";`;

const SIDEBAR_IMPORT_FROM =
  'import { HomePill } from "./components/shell/HomePill";';
const SIDEBAR_IMPORT_TO = `import { HomePill } from "./components/shell/HomePill";
import { ConversationsSidebar } from "./components/conversations/ConversationsSidebar";`;

// ── App.tsx: GlobalChatOverlay (whole function) ─────────────────────────────

const OVERLAY_FROM = `function GlobalChatOverlay(): ReactNode {
  return (
    <div
      className="pointer-events-none fixed inset-0 flex justify-center"
      data-testid="global-chat-overlay"
      style={{ zIndex: Z_OVERLAY }}
    >
      <div className="pointer-events-auto flex h-full w-full min-w-0 max-w-[54rem] flex-col bg-bg">
        <ChatView />
      </div>
    </div>
  );
}`;

const OVERLAY_TO = `const AZUL_NAV_ICON_CLASS =
  "inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-strong transition-colors hover:bg-bg-hover hover:text-txt";
const AZUL_NAV_ITEM_CLASS =
  "group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-sm font-medium text-txt transition-colors hover:bg-bg-hover";

function GlobalChatOverlay(): ReactNode {
  const { setTab, setState, handleNewConversation } = useApp();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNewAgent = useCallback(() => {
    setState("activeInboxChat", null);
    setTab("chat");
    void handleNewConversation();
  }, [handleNewConversation, setState, setTab]);

  return (
    <div
      className="pointer-events-none fixed inset-0 flex"
      data-testid="global-chat-overlay"
      style={{ zIndex: Z_OVERLAY }}
    >
      {sidebarCollapsed ? null : (
        <aside
          className="pointer-events-auto flex h-full w-[244px] shrink-0 flex-col overflow-hidden border-r border-border bg-bg-accent"
          data-testid="global-chat-sidebar"
        >
          <div className="flex items-center justify-between px-3 pb-1 pt-3">
            <button
              type="button"
              aria-label="Collapse sidebar"
              onClick={() => setSidebarCollapsed(true)}
              className={AZUL_NAV_ICON_CLASS}
              data-testid="azul-sidebar-collapse"
            >
              <PanelLeft className="size-[18px]" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Search conversations"
              onClick={() => setTab("skills")}
              className={AZUL_NAV_ICON_CLASS}
            >
              <Search className="size-[18px]" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-col gap-0.5 px-2 pb-2 pt-1">
            <button
              type="button"
              onClick={handleNewAgent}
              className={AZUL_NAV_ITEM_CLASS}
              data-testid="azul-nav-new-agent"
            >
              <Bot className="size-[18px] text-muted-strong" aria-hidden />
              <span>New agent</span>
            </button>
            <button
              type="button"
              onClick={() => setTab("skills")}
              className={AZUL_NAV_ITEM_CLASS}
              data-testid="azul-nav-skills"
            >
              <Sparkles className="size-[18px] text-muted-strong" aria-hidden />
              <span>Skills</span>
            </button>
            <button
              type="button"
              onClick={() => setTab("messages")}
              className={AZUL_NAV_ITEM_CLASS}
              data-testid="azul-nav-messaging"
            >
              <MessageSquare
                className="size-[18px] text-muted-strong"
                aria-hidden
              />
              <span>Messaging</span>
            </button>
            <button
              type="button"
              onClick={() => setTab("documents")}
              className={AZUL_NAV_ITEM_CLASS}
              data-testid="azul-nav-artifacts"
            >
              <FileText className="size-[18px] text-muted-strong" aria-hidden />
              <span>Artifacts</span>
            </button>
          </nav>
          <div className="min-h-0 flex-1 overflow-hidden border-t border-border/60">
            <ConversationsSidebar embedded />
          </div>
        </aside>
      )}
      <div className="pointer-events-auto flex h-full min-w-0 flex-1 flex-col bg-bg">
        <div
          className="flex shrink-0 items-center justify-between px-3 py-2"
          data-testid="global-chat-topbar"
        >
          <div className="flex items-center gap-1">
            {sidebarCollapsed ? (
              <button
                type="button"
                aria-label="Expand sidebar"
                onClick={() => setSidebarCollapsed(false)}
                className={AZUL_NAV_ICON_CLASS}
                data-testid="azul-sidebar-expand"
              >
                <PanelLeft className="size-[18px]" aria-hidden />
              </button>
            ) : null}
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Settings"
              onClick={() => setTab("settings")}
              className={AZUL_NAV_ICON_CLASS}
              data-testid="azul-nav-settings"
            >
              <Settings className="size-[18px]" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Toggle sidebar"
              onClick={() => setSidebarCollapsed((value) => !value)}
              className={AZUL_NAV_ICON_CLASS}
              data-testid="azul-sidebar-toggle"
            >
              <PanelRight className="size-[18px]" aria-hidden />
            </button>
          </div>
        </div>
        <div className="flex min-h-0 flex-1 flex-col items-center">
          <div className="flex h-full w-full min-w-0 max-w-[48rem] flex-col">
            <ChatView />
          </div>
        </div>
      </div>
    </div>
  );
}`;

// ── ConversationsSidebar.tsx: embedded mode ─────────────────────────────────

const PROPS_FROM = `interface ConversationsSidebarProps {
  mobile?: boolean;
  onClose?: () => void;
  variant?: ConversationsSidebarVariant;
}`;
const PROPS_TO = `interface ConversationsSidebarProps {
  mobile?: boolean;
  onClose?: () => void;
  variant?: ConversationsSidebarVariant;
  /**
   * Embedded mode: render the conversation list as plain content with no
   * collapse/resize chrome, filling the parent width. The host owns the
   * sidebar shell (header, nav, collapse) — used by the chat overlay.
   */
  embedded?: boolean;
}`;

const DESTRUCTURE_FROM = `export function ConversationsSidebar({
  mobile = false,
  onClose,
  variant = "default",
}: ConversationsSidebarProps) {`;
const DESTRUCTURE_TO = `export function ConversationsSidebar({
  mobile = false,
  onClose,
  variant = "default",
  embedded = false,
}: ConversationsSidebarProps) {`;

const CHROME_FROM = `  const isGameModal = variant === "game-modal";`;
const CHROME_TO = `  const isGameModal = variant === "game-modal";
  // Collapse/resize chrome only when this component owns the shell. In
  // embedded mode the host (chat overlay) provides the header + collapse.
  const chromeEnabled = !mobile && !isGameModal && !embedded;`;

const APPSIDEBAR_FROM = `        collapsible={!mobile && !isGameModal}
        collapsed={!mobile && !isGameModal ? sidebarCollapsed : undefined}
        onCollapsedChange={
          !mobile && !isGameModal ? setSidebarCollapsed : undefined
        }
        resizable={!mobile && !isGameModal}
        width={!mobile && !isGameModal ? sidebarWidth : undefined}
        minWidth={CHAT_SIDEBAR_MIN_WIDTH}
        maxWidth={CHAT_SIDEBAR_MAX_WIDTH}
        onWidthChange={handleSidebarWidthChange}
        onCollapseRequest={() => setSidebarCollapsed(true)}`;
const APPSIDEBAR_TO = `        collapsible={chromeEnabled}
        collapsed={chromeEnabled ? sidebarCollapsed : undefined}
        onCollapsedChange={chromeEnabled ? setSidebarCollapsed : undefined}
        resizable={chromeEnabled}
        width={chromeEnabled ? sidebarWidth : undefined}
        minWidth={CHAT_SIDEBAR_MIN_WIDTH}
        maxWidth={CHAT_SIDEBAR_MAX_WIDTH}
        onWidthChange={handleSidebarWidthChange}
        onCollapseRequest={
          chromeEnabled ? () => setSidebarCollapsed(true) : undefined
        }`;

function applyReplace(src, from, to, label, changes) {
  if (src.includes(to)) return src; // already applied
  if (!src.includes(from)) {
    console.log(`${LOG} anchor not found: ${label} (upstream changed?)`);
    return src;
  }
  changes.n += 1;
  return src.replace(from, to);
}

function patchApp() {
  if (!fs.existsSync(appFile)) {
    console.log(`${LOG} App.tsx not present (packages mode); skipping.`);
    return;
  }
  let src = fs.readFileSync(appFile, "utf8");
  if (src.includes('data-testid="azul-sidebar-collapse"')) {
    console.log(`${LOG} App.tsx already-applied`);
    return;
  }
  const changes = { n: 0 };
  src = applyReplace(src, LUCIDE_IMPORT_FROM, LUCIDE_IMPORT_TO, "lucide import", changes);
  src = applyReplace(src, SIDEBAR_IMPORT_FROM, SIDEBAR_IMPORT_TO, "sidebar import", changes);
  src = applyReplace(src, OVERLAY_FROM, OVERLAY_TO, "GlobalChatOverlay", changes);
  if (changes.n > 0) {
    fs.writeFileSync(appFile, src);
    console.log(`${LOG} patched App.tsx (${changes.n} edit(s))`);
  } else {
    console.log(`${LOG} App.tsx: nothing to patch`);
  }
}

function patchSidebar() {
  if (!fs.existsSync(sidebarFile)) {
    console.log(`${LOG} ConversationsSidebar.tsx not present; skipping.`);
    return;
  }
  let src = fs.readFileSync(sidebarFile, "utf8");
  if (src.includes("embedded?: boolean")) {
    console.log(`${LOG} ConversationsSidebar.tsx already-applied`);
    return;
  }
  const changes = { n: 0 };
  src = applyReplace(src, PROPS_FROM, PROPS_TO, "props", changes);
  src = applyReplace(src, DESTRUCTURE_FROM, DESTRUCTURE_TO, "destructure", changes);
  src = applyReplace(src, CHROME_FROM, CHROME_TO, "chromeEnabled", changes);
  src = applyReplace(src, APPSIDEBAR_FROM, APPSIDEBAR_TO, "AppPageSidebar props", changes);
  if (changes.n > 0) {
    fs.writeFileSync(sidebarFile, src);
    console.log(`${LOG} patched ConversationsSidebar.tsx (${changes.n} edit(s))`);
  } else {
    console.log(`${LOG} ConversationsSidebar.tsx: nothing to patch`);
  }
}

patchApp();
patchSidebar();
console.log(`${LOG} done — rebuild @elizaos/ui to apply`);
