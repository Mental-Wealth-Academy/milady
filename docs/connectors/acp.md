---
title: ACP Connector
sidebarTitle: ACP
description: Connect your agent to other AI agents using the Agent Communication Protocol (ACP) via @elizaos/plugin-acp.
---

Connect your agent to other AI agents through a shared ACP gateway for real-time agent-to-agent messaging.

## Overview

The ACP (Agent Communication Protocol) connector bridges your agent to other elizaOS agents through a gateway server. It enables multi-agent workflows where agents can communicate, delegate tasks, and share context in real time.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-acp` |
| Config key | `connectors.acp` |
| Registry | Yes (`milady plugins install acp`) |

## Installation

```bash
milady plugins install acp
```

## Minimal Configuration

In `~/.milady/milady.json`:

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

| Variable | Required | Description |
|----------|----------|-------------|
| `ACP_GATEWAY_URL` | No | Gateway server URL |
| `ACP_GATEWAY_TOKEN` | No | Authentication token (sensitive) |
| `ACP_GATEWAY_PASSWORD` | Yes | Gateway password (sensitive) |
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

- Real-time agent-to-agent communication via a shared gateway
- Session persistence across restarts
- Configurable agent identity and display name
- Multiple operating modes

## Related

- [Connectors Guide](/guides/connectors#acp-agent-communication-protocol) — Full connector listing
- [Plugin Setup Guide](/plugin-setup-guide#acp-agent-communication-protocol) — Environment variable reference
