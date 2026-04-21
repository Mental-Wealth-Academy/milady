---
title: "BlueBubbles Plugin"
sidebarTitle: "BlueBubbles"
description: "BlueBubbles connector for Milady — iMessage and SMS via a local BlueBubbles server."
---

The BlueBubbles plugin connects Milady agents to Apple's iMessage and SMS networks through a local [BlueBubbles](https://bluebubbles.app/) server running on macOS.

**Package:** `@elizaos/plugin-bluebubbles`

## Installation

```bash
milady plugins install bluebubbles
```

## Prerequisites

- A Mac with iMessage signed in
- [BlueBubbles server](https://bluebubbles.app/) running on that Mac
- The server password

## Setup

### 1. Install BlueBubbles Server

Download and configure the [BlueBubbles](https://bluebubbles.app/) server on a Mac with iMessage enabled.

### 2. Configure Milady

```json
{
  "connectors": {
    "bluebubbles": {
      "serverUrl": "http://localhost:1234",
      "password": "YOUR_BLUEBUBBLES_PASSWORD"
    }
  }
}
```

Or use environment variables:

```bash
export BLUEBUBBLES_SERVER_URL=http://localhost:1234
export BLUEBUBBLES_PASSWORD=YOUR_BLUEBUBBLES_PASSWORD
```

## Configuration

| Field | Required | Description |
|-------|----------|-------------|
| `BLUEBUBBLES_SERVER_URL` | No | Server URL (default: local) |
| `BLUEBUBBLES_PASSWORD` | Yes | Server password |
| `BLUEBUBBLES_ENABLED` | No | `true`/`false` to toggle |
| `BLUEBUBBLES_DM_POLICY` | No | DM acceptance policy |
| `BLUEBUBBLES_ALLOW_FROM` | No | Comma-separated allowed contacts |
| `BLUEBUBBLES_GROUP_POLICY` | No | Group message policy |
| `BLUEBUBBLES_GROUP_ALLOW_FROM` | No | Comma-separated allowed group IDs |
| `BLUEBUBBLES_WEBHOOK_PATH` | No | Webhook path for incoming messages |
| `BLUEBUBBLES_SEND_READ_RECEIPTS` | No | `true` to send read receipts |

## Features

- **iMessage and SMS** — Full messaging through BlueBubbles server
- **DM and group chats** — Support for both individual and group conversations
- **Read receipts** — Configurable read receipt sending
- **Allowlists** — Fine-grained DM and group access control
- **Cross-platform** — Works from any platform that can reach the BlueBubbles server

## Related

- [BlueBubbles Connector](/connectors/bluebubbles) — Connector setup reference
- [iMessage Plugin](/plugin-registry/platform/imessage) — Native macOS iMessage connector (alternative)
- [Blooio Plugin](/plugin-registry/platform/blooio) — Another iMessage/SMS bridge
- [Plugin Setup Guide](/plugin-setup-guide#bluebubbles-imessage-via-server) — Environment variable reference
