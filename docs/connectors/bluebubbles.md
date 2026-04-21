---
title: BlueBubbles Connector
sidebarTitle: BlueBubbles
description: Connect your agent to iMessage and SMS via a local BlueBubbles server using @elizaos/plugin-bluebubbles.
---

Connect your agent to iMessage and SMS through a local BlueBubbles server running on macOS.

## Overview

The BlueBubbles connector bridges your agent to Apple's iMessage and SMS networks through a [BlueBubbles](https://bluebubbles.app/) server running on a Mac. Unlike the native iMessage connector (which requires direct macOS shell access), BlueBubbles exposes iMessage over an HTTP API, so your agent can run on any platform that can reach the BlueBubbles server.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-bluebubbles` |
| Config key | `connectors.bluebubbles` |
| Registry | Yes (`milady plugins install bluebubbles`) |

## Installation

```bash
milady plugins install bluebubbles
```

## Prerequisites

1. A Mac running the [BlueBubbles server](https://bluebubbles.app/)
2. iMessage signed in on that Mac
3. The BlueBubbles server password

## Minimal Configuration

In `~/.milady/milady.json`:

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

| Variable | Required | Description |
|----------|----------|-------------|
| `BLUEBUBBLES_SERVER_URL` | No | BlueBubbles server URL (default: local) |
| `BLUEBUBBLES_PASSWORD` | Yes | Server password (sensitive) |
| `BLUEBUBBLES_ENABLED` | No | `true`/`false` to toggle connector |
| `BLUEBUBBLES_DM_POLICY` | No | DM acceptance policy (`allow`, `deny`, `allowlist`) |
| `BLUEBUBBLES_ALLOW_FROM` | No | Comma-separated allowed contacts |
| `BLUEBUBBLES_GROUP_POLICY` | No | Group message policy |
| `BLUEBUBBLES_GROUP_ALLOW_FROM` | No | Comma-separated allowed group IDs |
| `BLUEBUBBLES_WEBHOOK_PATH` | No | Webhook path for incoming messages |
| `BLUEBUBBLES_SEND_READ_RECEIPTS` | No | `true` to send read receipts |

## Features

- iMessage and SMS messaging via BlueBubbles server
- DM and group chat support
- Read receipts
- DM and group allowlist policies
- Webhook-based message delivery

## Related

- [iMessage Connector](/connectors/imessage) — Native macOS iMessage connector (alternative)
- [Blooio Connector](/connectors/blooio) — Another iMessage/SMS bridge
- [Connectors Guide](/guides/connectors#bluebubbles) — Full connector listing
