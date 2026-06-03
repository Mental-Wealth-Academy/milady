#!/usr/bin/env node
/**
 * Whitelabel fix (Project Azura / nested layout): correct the Electrobun
 * bundler's @elizaos/shared source path.
 *
 * electrobun.config.ts computes `sharedSourceDir = repoRoot + "packages/shared/src"`.
 * `repoRoot` resolves to the whitelabel root (milady), whose renderer lives at
 * apps/app — but @elizaos/shared lives at eliza/packages/shared, so the build
 * dies with `File not found "<root>/packages/shared/src/index.ts"`. eliza/ is
 * gitignored, so re-apply the fallback on every install. Idempotent.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LOG = "[patch-elizaos-electrobun-shared-path]";
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(
  repoRoot,
  "eliza/packages/app-core/platforms/electrobun/electrobun.config.ts",
);

const FROM = 'const sharedSourceDir = path.join(repoRoot, "packages/shared/src");';
const TO = `const sharedSourceDir = fs.existsSync(path.join(repoRoot, "packages/shared/src"))
  ? path.join(repoRoot, "packages/shared/src")
  : path.join(repoRoot, "eliza/packages/shared/src");`;

if (!fs.existsSync(file)) {
  console.log(`${LOG} electrobun.config.ts not present (packages mode); skipping.`);
  process.exit(0);
}
const original = fs.readFileSync(file, "utf8");
if (original.includes('"eliza/packages/shared/src"')) {
  console.log(`${LOG} already-applied`);
  process.exit(0);
}
if (!original.includes(FROM)) {
  console.log(`${LOG} anchor not found (upstream changed?); skipping.`);
  process.exit(0);
}
fs.writeFileSync(file, original.replace(FROM, TO));
console.log(`${LOG} patched ${path.relative(repoRoot, file)}`);
