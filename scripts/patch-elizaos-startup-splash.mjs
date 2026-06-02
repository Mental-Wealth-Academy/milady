#!/usr/bin/env node
/**
 * Whitelabel patch (Project Azura): rebrand @elizaos/ui first-run surfaces.
 *
 * eliza/ is gitignored in this fork, so this committable patch re-applies the
 * Azura branding + local-only onboarding on every install — across both the
 * local-mode src checkout and any built/published dist.
 *
 *  1. StartupShell boot splash: "elizaOS" wordmark + favicon + elizaOS-blue
 *     palette  →  "Azura" wordmark + /splashlogo.png + Azura blue (#5168FF).
 *  2. CompactOnboarding "Use Local": pin localInference="all-local" so Local
 *     runs fully on-device (no Eliza Cloud login / elizacloud-hybrid fallback).
 *
 * Idempotent: every rule no-ops once applied.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LOG = "[patch-elizaos-startup-splash]";
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function uiFileVariants(relFromSrc, relFromDist) {
  const out = [];
  const local = path.join(repoRoot, "eliza", "packages", "ui");
  out.push(path.join(local, "src", relFromSrc), path.join(local, "dist", relFromDist));
  const bunStore = path.join(repoRoot, "node_modules", ".bun");
  if (fs.existsSync(bunStore)) {
    for (const entry of fs.readdirSync(bunStore)) {
      if (!entry.startsWith("@elizaos+ui@")) continue;
      out.push(
        path.join(bunStore, entry, "node_modules/@elizaos/ui/dist", relFromDist),
      );
    }
  }
  return out;
}

/** @type {{label:string,files:string[],guard:string,edits:[string,string][]}[]} */
const targets = [
  {
    label: "StartupShell splash",
    files: uiFileVariants(
      "components/shell/StartupShell.tsx",
      "components/shell/StartupShell.js",
    ),
    guard: "startup-shell-loading",
    edits: [
      ["./brand/favicons/favicon.svg", "/splashlogo.png"],
      ["elizaOS", "Azura"],
      ["#0B35F1", "#5168FF"],
      ["#F7F9FF", "#F4F5FE"],
    ],
  },
  {
    label: "CompactOnboarding local-only",
    files: uiFileVariants(
      "first-run/CompactOnboarding.tsx",
      "first-run/CompactOnboarding.js",
    ),
    guard: 'updateDraft("runtime"',
    edits: [
      [
        'c.updateDraft("runtime", runtime);\n      void c.finishRuntime();',
        'c.updateDraft("runtime", runtime);\n      if (runtime === "local") { c.updateDraft("localInference", "all-local"); }\n      void c.finishRuntime();',
      ],
    ],
  },
];

let patched = 0;
let alreadyApplied = 0;
for (const target of targets) {
  for (const file of target.files) {
    if (!fs.existsSync(file)) continue;
    const original = fs.readFileSync(file, "utf8");
    if (!original.includes(target.guard)) continue;
    let next = original;
    for (const [from, to] of target.edits) next = next.split(from).join(to);
    if (next === original) {
      alreadyApplied += 1;
      continue;
    }
    fs.writeFileSync(file, next);
    patched += 1;
    console.log(`${LOG} patched ${path.relative(repoRoot, file)} (${target.label})`);
  }
}

console.log(`${LOG} patched=${patched} already-applied=${alreadyApplied}`);
