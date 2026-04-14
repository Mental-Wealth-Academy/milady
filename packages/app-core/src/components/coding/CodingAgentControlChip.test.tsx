/**
 * @vitest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CodingAgentControlChip } from "./CodingAgentControlChip";

/**
 * The chip polls `/api/coding-agents/control/status` and conditionally
 * renders. We stub `fetch` and assert the visible state for each
 * snapshot the bus might return.
 */

vi.mock("../../state", () => ({
  useApp: () => ({
    t: (_key: string, opts?: { defaultValue?: string }) =>
      opts?.defaultValue ?? "",
  }),
}));

const originalFetch = globalThis.fetch;

function mockStatus(snapshot: {
  state: "running" | "paused" | "aborting";
  reason?: string | null;
}) {
  globalThis.fetch = vi.fn(async (url: string) => {
    if (typeof url === "string" && url.endsWith("/control/status")) {
      return new Response(
        JSON.stringify({
          state: snapshot.state,
          changedAt: new Date().toISOString(),
          reason: snapshot.reason ?? null,
          targetedSessionIds: [],
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }
    return new Response("{}", { status: 200 });
  }) as unknown as typeof fetch;
}

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
});

afterEach(() => {
  vi.useRealTimers();
  globalThis.fetch = originalFetch;
});

describe("CodingAgentControlChip", () => {
  it("renders nothing while the bus is running", async () => {
    mockStatus({ state: "running" });
    const { container } = render(<CodingAgentControlChip />);
    // Wait for the initial fetch to settle.
    await waitFor(() => {
      expect(
        (globalThis.fetch as ReturnType<typeof vi.fn>).mock.calls.length,
      ).toBeGreaterThan(0);
    });
    expect(container.firstChild).toBeNull();
  });

  it("renders the paused banner with the reason when state=paused", async () => {
    mockStatus({ state: "paused", reason: "user said hold on" });
    render(<CodingAgentControlChip />);
    expect(await screen.findByText("Coding agents paused")).toBeTruthy();
    expect(screen.getByText(/user said hold on/)).toBeTruthy();
    expect(screen.getByRole("button", { name: "Resume" })).toBeTruthy();
  });

  it("renders the aborting banner when state=aborting", async () => {
    mockStatus({ state: "aborting", reason: null });
    render(<CodingAgentControlChip />);
    expect(
      await screen.findByText("Coding agents stopped"),
    ).toBeTruthy();
  });

  it("hides if the API returns a non-200", async () => {
    globalThis.fetch = vi.fn(
      async () => new Response("nope", { status: 500 }),
    ) as unknown as typeof fetch;
    const { container } = render(<CodingAgentControlChip />);
    await waitFor(() => {
      expect(
        (globalThis.fetch as ReturnType<typeof vi.fn>).mock.calls.length,
      ).toBeGreaterThan(0);
    });
    expect(container.firstChild).toBeNull();
  });
});
