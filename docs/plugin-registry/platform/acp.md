---
title: "ACP Plugin"
sidebarTitle: "ACP"
description: "Agent Communication Protocol connector for Milady — real-time agent-to-agent messaging via a shared gateway."
---

The ACP plugin connects Milady agents to other AI agents through a shared ACP (Agent Communication Protocol) gateway, enabling multi-agent workflows and real-time inter-agent communication.

**Package:** `@elizaos/plugin-acp`

## Installation

```bash
milady plugins install acp
```

## Setup

### 1. Set Up an ACP Gateway

Deploy or connect to an ACP gateway server. The gateway acts as a message broker between agents.

### 2. Configure Milady

```json
{
  "connectors": {
    "acp": {
      "gatewayUrl": "https://your-acp-gateway.example.com",
      "gatewayToken": "YOUR_TOKEN",
      "gatewayPassword": "YOUR_PASSWORD"
    }
  }
}
```

Or use environment variables:

```bash
export ACP_GATEWAY_URL=https://your-acp-gateway.example.com
export ACP_GATEWAY_TOKEN=YOUR_TOKEN
export ACP_GATEWAY_PASSWORD=YOUR_PASSWORD
```

## Configuration

| Field | Required | Description |
|-------|----------|-------------|
| `ACP_GATEWAY_URL` | No | Gateway server URL |
| `ACP_GATEWAY_TOKEN` | No | Authentication token |
| `ACP_GATEWAY_PASSWORD` | Yes | Gateway password |
| `ACP_AGENT_ID` | No | Unique agent identifier |
| `ACP_CLIENT_NAME` | No | Agent client name |
| `ACP_CLIENT_DISPLAY_NAME` | No | Human-readable display name |
| `ACP_CLIENT_MODE` | No | Operating mode |
| `ACP_CLIENT_VERSION` | No | Version identifier |
| `ACP_PERSIST_SESSIONS` | No | `true` to persist sessions across restarts |
| `ACP_SESSION_STORE_PATH` | No | Directory for session storage |
| `ACP_DEFAULT_SESSION_KEY` | No | Default session identifier |
| `ACP_DEFAULT_SESSION_LABEL` | No | Default session label |
| `ACP_RESET_SESSION` | No | `true` to reset session on start |
| `ACP_REQUIRE_EXISTING` | No | `true` to require an existing session |
| `ACP_PREFIX_CWD` | No | Prefix current working directory |
| `ACP_VERBOSE` | No | `true` for verbose logging |

## Features

- **Agent-to-agent messaging** — Real-time communication between multiple AI agents
- **Session management** — Persistent sessions with configurable storage
- **Identity** — Configurable agent identity and display name
- **Gateway auth** — Token and password authentication

## Related

- [ACP Connector](/connectors/acp) — Connector setup reference
- [Plugin Setup Guide](/plugin-setup-guide#acp-agent-communication-protocol) — Environment variable reference
- [Connectors Guide](/guides/connectors#acp-agent-communication-protocol) — Full connector listing
