---
title: BlueBubbles Connector
sidebarTitle: BlueBubbles
description: Connect your agent to iMessage via BlueBubbles using the @elizaos/plugin-bluebubbles package.
---

Connect your agent to iMessage through a local BlueBubbles server.

## Overview

The BlueBubbles connector is an elizaOS plugin that bridges your agent to iMessage via a local [BlueBubbles](https://bluebubbles.app/) server. BlueBubbles runs on a Mac and exposes the iMessage API over HTTP, allowing your agent to send and receive iMessages without direct access to macOS.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-bluebubbles` |
| Config key | `connectors.bluebubbles` |
| Install | `milady plugins install bluebubbles` |

## Setup Requirements

- A Mac running the [BlueBubbles](https://bluebubbles.app/) server
- The BlueBubbles server password
- Network access from your agent to the BlueBubbles server

## Configuration

```json
{
  "connectors": {
    "bluebubbles": {
      "enabled": true
    }
  }
}
```

## Environment Variables

### Required

| Variable | Description |
|----------|-------------|
| `BLUEBUBBLES_PASSWORD` | Password for the BlueBubbles server |

### Optional

| Variable | Description |
|----------|-------------|
| `BLUEBUBBLES_ENABLED` | Enable or disable the connector |
| `BLUEBUBBLES_SERVER_URL` | URL of the BlueBubbles server |
| `BLUEBUBBLES_WEBHOOK_PATH` | Webhook endpoint path for inbound messages |
| `BLUEBUBBLES_DM_POLICY` | DM access policy (e.g., `allow`, `deny`, `allowlist`) |
| `BLUEBUBBLES_ALLOW_FROM` | Comma-separated list of allowed contacts |
| `BLUEBUBBLES_GROUP_POLICY` | Group message policy (e.g., `allow`, `deny`) |
| `BLUEBUBBLES_GROUP_ALLOW_FROM` | Comma-separated list of allowed group chats |
| `BLUEBUBBLES_SEND_READ_RECEIPTS` | Send read receipts (`true`/`false`) |

## Features

- Send and receive iMessages via BlueBubbles
- DM and group chat support
- Configurable access policies
- Read receipt handling
- Webhook-based inbound message processing

## Related

- [iMessage connector](/connectors/imessage) (direct macOS approach)
- [Blooio connector](/connectors/blooio) (cloud iMessage/SMS bridge)
- [Connectors overview](/guides/connectors)
