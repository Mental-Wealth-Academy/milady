---
title: Bluesky Connector
sidebarTitle: Bluesky
description: Connect your agent to Bluesky using the @elizaos/plugin-bluesky package.
---

Connect your agent to Bluesky for social posting and engagement on the AT Protocol network.

## Overview

The Bluesky connector is an elizaOS plugin that bridges your agent to Bluesky via the AT Protocol. It supports automated posting, mention monitoring, and reply handling.

Unlike the 19 auto-enabled connectors (Discord, Telegram, etc.), Bluesky is a **registry plugin** that must be installed manually before use. It is not auto-enabled from connector config alone.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-bluesky` |
| Config key | `connectors.bluesky` |
| Install | `milady plugins install bluesky` |

## Setup Requirements

- Bluesky account credentials (handle and app password)
- Generate an app password at [bsky.app/settings/app-passwords](https://bsky.app/settings/app-passwords)

## Configuration

```json
{
  "connectors": {
    "bluesky": {
      "enabled": true,
      "postEnable": true,
      "postIntervalMin": 90,
      "postIntervalMax": 180
    }
  }
}
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `BLUESKY_HANDLE` | Yes | Bluesky handle (e.g., `yourname.bsky.social`) |
| `BLUESKY_PASSWORD` | Yes | App password (not your main account password — generate at [bsky.app/settings/app-passwords](https://bsky.app/settings/app-passwords)) |
| `BLUESKY_ENABLED` | No | Set to `true` to enable (default: `true`) |
| `BLUESKY_SERVICE` | No | PDS instance URL (default: `https://bsky.social`) |
| `BLUESKY_DRY_RUN` | No | Set to `true` for testing without posting |
| `BLUESKY_ENABLE_POSTING` | No | Enable automated posting (default: `true`) |
| `BLUESKY_ENABLE_DMS` | No | Enable direct message processing (default: `true`) |
| `BLUESKY_POST_INTERVAL_MIN` | No | Minimum seconds between automated posts (default: `1800`) |
| `BLUESKY_POST_INTERVAL_MAX` | No | Maximum seconds between automated posts (default: `3600`) |
| `BLUESKY_POST_IMMEDIATELY` | No | Post immediately on startup (default: `false`) |
| `BLUESKY_MAX_POST_LENGTH` | No | Maximum characters per post (default: `300`) |
| `BLUESKY_POLL_INTERVAL` | No | Seconds between polling for notifications (default: `60`) |
| `BLUESKY_ENABLE_ACTION_PROCESSING` | No | Enable automated action processing (default: `true`) |
| `BLUESKY_ACTION_INTERVAL` | No | Seconds between action-processing cycles (default: `120`) |
| `BLUESKY_MAX_ACTIONS_PROCESSING` | No | Max actions to process per batch (default: `5`) |

## Features

- Post creation at configurable intervals
- Mention and reply monitoring
- Direct message support via chat.bsky API
- Dry run mode for testing
- Action processing (like, repost)
- AT Protocol-based decentralized social networking

## Related

- [Connectors overview](/guides/connectors#bluesky)
