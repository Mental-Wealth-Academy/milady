#!/usr/bin/env node
/**
 * Whitelabel (Project Azul): render a default left sidebar in the global chat
 * overlay. Upstream's GlobalChatOverlay is a single centered chat column with
 * no nav; we render the existing ConversationsSidebar (conversation history +
 * new chat + terminal) to its left so the shell matches the product references.
 *
 * eliza/ is gitignored, so re-apply on every install. The ui dist is rebuilt
 * by the local-mode setup (app-core closure build) after this patch runs, so
 * the change reaches the renderer. Idempotent.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LOG = "[patch-elizaos-default-sidebar]";
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(repoRoot, "eliza/packages/ui/src/App.tsx");

const IMPORT_FROM = 'import { HomePill } from "./components/shell/HomePill";';
const IMPORT_TO = `import { HomePill } from "./components/shell/HomePill";
import { ConversationsSidebar } from "./components/conversations/ConversationsSidebar";`;

const OVERLAY_FROM = `    <div
      className="pointer-events-none fixed inset-0 flex justify-center"
      data-testid="global-chat-overlay"
      style={{ zIndex: Z_OVERLAY }}
    >
      <div className="pointer-events-auto flex h-full w-full min-w-0 max-w-[54rem] flex-col bg-bg">
        <ChatView />
      </div>
    </div>`;
const OVERLAY_TO = `    <div
      className="pointer-events-none fixed inset-0 flex"
      data-testid="global-chat-overlay"
      style={{ zIndex: Z_OVERLAY }}
    >
      <aside
        className="pointer-events-auto flex h-full w-[264px] shrink-0 flex-col overflow-hidden border-r border-border bg-bg-accent"
        data-testid="global-chat-sidebar"
      >
        <ConversationsSidebar />
      </aside>
      <div className="pointer-events-auto flex h-full min-w-0 flex-1 flex-col items-center bg-bg">
        <div className="flex h-full w-full min-w-0 max-w-[48rem] flex-col">
          <ChatView />
        </div>
      </div>
    </div>`;

if (!fs.existsSync(file)) {
  console.log(`${LOG} App.tsx not present (packages mode); skipping.`);
  process.exit(0);
}
let src = fs.readFileSync(file, "utf8");
if (src.includes('data-testid="global-chat-sidebar"')) {
  console.log(`${LOG} already-applied`);
  process.exit(0);
}
let changed = 0;
if (src.includes(IMPORT_TO)) {
  // import already present
} else if (src.includes(IMPORT_FROM)) {
  src = src.replace(IMPORT_FROM, IMPORT_TO);
  changed++;
}
if (src.includes(OVERLAY_FROM)) {
  src = src.replace(OVERLAY_FROM, OVERLAY_TO);
  changed++;
} else {
  console.log(`${LOG} GlobalChatOverlay anchor not found (upstream changed?); skipping overlay edit.`);
}
if (changed > 0) {
  fs.writeFileSync(file, src);
  console.log(`${LOG} patched App.tsx (${changed} edit(s)) — rebuild @elizaos/ui to apply`);
} else {
  console.log(`${LOG} nothing to patch`);
}
