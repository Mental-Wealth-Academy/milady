---
title: LINE Connector
sidebarTitle: LINE
description: Connect your agent to LINE using the @elizaos/plugin-line package.
---

Connect your agent to LINE for bot messaging and customer conversations.

## Overview

The LINE connector is an elizaOS plugin that bridges your agent to LINE Messaging API. It supports rich message types, group chat, and webhook-based event handling. Auto-enabled when `LINE_CHANNEL_ACCESS_TOKEN` is set.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-line` |
| Config key | `connectors.line` |
| Auto-enable trigger | `LINE_CHANNEL_ACCESS_TOKEN` env var |
| Install | `milady plugins install line` |

## Setup Requirements

- LINE Channel access token
- LINE Channel secret
- Create a Messaging API channel at [developers.line.biz](https://developers.line.biz)

## Configuration

```json
{
  "connectors": {
    "line": {
      "enabled": true
    }
  }
}
```

## Environment Variables

### Required

| Variable | Description |
|----------|-------------|
| `LINE_CHANNEL_ACCESS_TOKEN` | Channel access token from LINE Developer Console |
| `LINE_CHANNEL_SECRET` | Channel secret for webhook verification |

### Optional

| Variable | Description |
|----------|-------------|
| `LINE_ENABLED` | Enable or disable the connector |
| `LINE_WEBHOOK_PATH` | Custom webhook endpoint path |
| `LINE_DM_POLICY` | DM access policy (e.g., `allow`, `deny`, `allowlist`) |
| `LINE_ALLOW_FROM` | Comma-separated list of allowed user IDs |
| `LINE_GROUP_POLICY` | Group message policy (e.g., `allow`, `deny`) |

## Features

- Bot messaging and customer conversations
- Rich message types (text, sticker, image, video)
- Group chat support
- Webhook-based event handling
- Configurable DM and group policies

## Related

- [Connectors overview](/guides/connectors#line)
