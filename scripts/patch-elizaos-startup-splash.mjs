#!/usr/bin/env node
/**
 * Whitelabel patch: rebrand the @elizaos/ui StartupShell boot splash to "Blue".
 *
 * Upstream `StartupShell.tsx` hardcodes an "elizaOS" wordmark, a favicon logo,
 * and an elizaOS-blue palette. eliza/ is gitignored in this fork, so this
 * committable patch re-applies the Blue branding on every install — across both
 * the local-mode src checkout and any built/published dist.
 *
 * Idempotent: replacements no-op once applied.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LOG = "[patch-elizaos-startup-splash]";
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Literal replacements that work on both .tsx source and compiled .js dist.
const REPLACEMENTS = [
  ["./brand/favicons/favicon.svg", "/splashlogo.png"],
  ["elizaOS", "Blue"],
  ["#0B35F1", "#5168FF"],
  ["#F7F9FF", "#F4F5FE"],
];

function candidatePaths() {
  const out = [];
  const local = path.join(repoRoot, "eliza", "packages", "ui");
  out.push(
    path.join(local, "src/components/shell/StartupShell.tsx"),
    path.join(local, "dist/components/shell/StartupShell.js"),
  );
  // packages-mode: published @elizaos/ui in the bun store
  const bunStore = path.join(repoRoot, "node_modules", ".bun");
  if (fs.existsSync(bunStore)) {
    for (const entry of fs.readdirSync(bunStore)) {
      if (!entry.startsWith("@elizaos+ui@")) continue;
      out.push(
        path.join(
          bunStore,
          entry,
          "node_modules/@elizaos/ui/dist/components/shell/StartupShell.js",
        ),
      );
    }
  }
  return out;
}

let patched = 0;
let alreadyApplied = 0;
for (const file of candidatePaths()) {
  if (!fs.existsSync(file)) continue;
  const original = fs.readFileSync(file, "utf8");
  // Only touch the splash file; bail if it isn't the StartupShell.
  if (!original.includes("startup-shell-loading")) continue;
  let next = original;
  for (const [from, to] of REPLACEMENTS) next = next.split(from).join(to);
  if (next === original) {
    alreadyApplied += 1;
    continue;
  }
  fs.writeFileSync(file, next);
  patched += 1;
  console.log(`${LOG} patched ${path.relative(repoRoot, file)}`);
}

console.log(
  `${LOG} patched=${patched} already-applied=${alreadyApplied}`,
);
