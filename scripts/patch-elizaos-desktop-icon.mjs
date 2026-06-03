#!/usr/bin/env node
/**
 * Whitelabel (Project Azul): replace the Electrobun desktop app icon (the
 * upstream orange "eliza" mark) with the Azul portrait.
 *
 * Source of truth is committed at apps/app/public/azule.png. eliza/ is
 * gitignored, so regenerate the platform iconset + .icns + .png on install.
 * macOS-only (uses sips + iconutil); no-ops elsewhere or if tools/files are
 * missing. Idempotent via an mtime freshness check.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LOG = "[patch-elizaos-desktop-icon]";
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(repoRoot, "apps/app/public/azule.png");
const assets = path.join(
  repoRoot,
  "eliza/packages/app-core/platforms/electrobun/assets",
);
const iconset = path.join(assets, "appIcon.iconset");
const icns = path.join(assets, "appIcon.icns");

function has(cmd) {
  try {
    execFileSync("command", ["-v", cmd], { shell: "/bin/sh", stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

if (process.platform !== "darwin") {
  console.log(`${LOG} non-macOS; skipping (sips/iconutil unavailable).`);
  process.exit(0);
}
if (!fs.existsSync(source) || !fs.existsSync(iconset)) {
  console.log(`${LOG} source or iconset missing; skipping.`);
  process.exit(0);
}
// Freshness: skip if the icns is already newer than the source.
try {
  if (
    fs.existsSync(icns) &&
    fs.statSync(icns).mtimeMs >= fs.statSync(source).mtimeMs
  ) {
    console.log(`${LOG} already-applied (icns newer than source).`);
    process.exit(0);
  }
} catch {}

const sips = (args) =>
  execFileSync("sips", args, { stdio: "ignore" });
try {
  for (const s of [16, 32, 128, 256, 512]) {
    sips(["-z", String(s), String(s), source, "--out", path.join(iconset, `icon_${s}x${s}.png`)]);
    const d = s * 2;
    sips(["-z", String(d), String(d), source, "--out", path.join(iconset, `icon_${s}x${s}@2x.png`)]);
  }
  sips(["-z", "512", "512", source, "--out", path.join(assets, "appIcon.png")]);
  execFileSync("iconutil", ["-c", "icns", iconset, "-o", icns], { stdio: "ignore" });
  console.log(`${LOG} regenerated appIcon.{iconset,icns,png} from azule.png`);
} catch (err) {
  console.warn(`${LOG} failed: ${err instanceof Error ? err.message : String(err)}`);
}
