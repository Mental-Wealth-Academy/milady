import fs from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import type { AgentRuntime } from "@elizaos/core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { startApiServer } from "./server";

vi.mock("../../app-core/src/services/mcp-marketplace", () => ({
  searchMcpMarketplace: vi.fn().mockResolvedValue({ results: [] }),
  getMcpServerDetails: vi.fn().mockResolvedValue(null),
}));

function request(
  port: number,
  method: string,
  reqPath: string,
  body?: Record<string, unknown>,
): Promise<{ status: number; data: Record<string, unknown> }> {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : undefined;
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port,
        path: reqPath,
        method,
        headers: bodyStr
          ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(bodyStr) }
          : undefined,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk: Buffer) => chunks.push(chunk));
        res.on("end", () => {
          const raw = Buffer.concat(chunks).toString("utf-8");
          try {
            resolve({ status: res.statusCode ?? 0, data: JSON.parse(raw) });
          } catch {
            resolve({ status: res.statusCode ?? 0, data: { raw } });
          }
        });
      },
    );
    req.on("error", reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

describe("HITL control routes", () => {
  let server: { port: number; close: () => Promise<void> };
  let tempDir: string;

  const ENV_KEYS = ["ELIZA_STATE_DIR", "MILADY_STATE_DIR", "MILADY_CONFIG_PATH"] as const;
  const savedEnv = new Map<string, string | undefined>();

  beforeEach(async () => {
    for (const key of ENV_KEYS) savedEnv.set(key, process.env[key]);

    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "milady-hitl-"));
    process.env.ELIZA_STATE_DIR = tempDir;
    process.env.MILADY_STATE_DIR = tempDir;
    await fs.writeFile(
      path.join(tempDir, "eliza.json"),
      JSON.stringify({ logging: { level: "error" } }),
    );

    const runtime = {
      agentId: "00000000-0000-0000-0000-000000000001",
      character: { name: "Eliza", settings: {}, secrets: {} },
      plugins: [],
      getService: () => null,
      hasService: () => false,
      setSetting: vi.fn(),
      updateAgent: vi.fn(async () => undefined),
      getRoomsByWorld: async () => [],
      getMemories: async () => [],
      getCache: async () => null,
      setCache: async () => {},
    } as unknown as AgentRuntime;

    server = await startApiServer({ port: 0, runtime });
  });

  afterEach(async () => {
    // Reset the control bus to "running" so tests are independent
    await request(server.port, "POST", "/api/coding-agents/control/resume");
    await server.close();
    for (const key of ENV_KEYS) {
      const original = savedEnv.get(key);
      if (original === undefined) delete process.env[key];
      else process.env[key] = original;
    }
    await fs.rm(tempDir, { recursive: true, force: true }).catch(() => {});
  });

  it("GET /status returns running by default", async () => {
    const res = await request(server.port, "GET", "/api/coding-agents/control/status");
    expect(res.status).toBe(200);
    expect(res.data.state).toBe("running");
    expect(res.data.reason).toBeNull();
  });

  it("POST /pause transitions to paused with reason", async () => {
    const res = await request(server.port, "POST", "/api/coding-agents/control/pause", {
      reason: "hold on",
    });
    expect(res.status).toBe(200);
    expect(res.data.state).toBe("paused");
    expect(res.data.reason).toBe("hold on");
  });

  it("POST /resume from paused returns to running", async () => {
    await request(server.port, "POST", "/api/coding-agents/control/pause");
    const res = await request(server.port, "POST", "/api/coding-agents/control/resume");
    expect(res.status).toBe(200);
    expect(res.data.state).toBe("running");
  });

  it("POST /abort with no PTY sessions transitions to aborting", async () => {
    const res = await request(server.port, "POST", "/api/coding-agents/control/abort", {
      reason: "emergency",
    });
    expect(res.status).toBe(200);
    expect(res.data.state).toBe("aborting");
    expect(res.data.reason).toBe("emergency");
  });

  it("POST /resume from aborting returns to running", async () => {
    await request(server.port, "POST", "/api/coding-agents/control/abort");
    const res = await request(server.port, "POST", "/api/coding-agents/control/resume");
    expect(res.status).toBe(200);
    expect(res.data.state).toBe("running");
  });

  it("double pause is idempotent", async () => {
    await request(server.port, "POST", "/api/coding-agents/control/pause", { reason: "first" });
    const res = await request(server.port, "POST", "/api/coding-agents/control/pause", {
      reason: "second",
    });
    expect(res.status).toBe(200);
    expect(res.data.state).toBe("paused");
  });

  it("resume when already running is a no-op", async () => {
    const res = await request(server.port, "POST", "/api/coding-agents/control/resume");
    expect(res.status).toBe(200);
    expect(res.data.state).toBe("running");
  });

  it("pause → abort escalates to aborting", async () => {
    await request(server.port, "POST", "/api/coding-agents/control/pause");
    const res = await request(server.port, "POST", "/api/coding-agents/control/abort");
    expect(res.status).toBe(200);
    expect(res.data.state).toBe("aborting");
  });

  it("full lifecycle: running → pause → resume → abort → resume", async () => {
    let res = await request(server.port, "GET", "/api/coding-agents/control/status");
    expect(res.data.state).toBe("running");

    res = await request(server.port, "POST", "/api/coding-agents/control/pause");
    expect(res.data.state).toBe("paused");

    res = await request(server.port, "POST", "/api/coding-agents/control/resume");
    expect(res.data.state).toBe("running");

    res = await request(server.port, "POST", "/api/coding-agents/control/abort");
    expect(res.data.state).toBe("aborting");

    res = await request(server.port, "POST", "/api/coding-agents/control/resume");
    expect(res.data.state).toBe("running");
  });
});
