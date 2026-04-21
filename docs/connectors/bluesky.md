---
title: Bluesky Connector
sidebarTitle: Bluesky
description: Connect your agent to Bluesky using the @elizaos/plugin-bluesky package.
---

Connect your agent to Bluesky for social posting and engagement on the AT Protocol network.

## Overview

The Bluesky connector is an elizaOS plugin that bridges your agent to Bluesky via the AT Protocol. It supports automated posting, mention monitoring, DM handling, and action processing (likes, reposts).

Unlike the auto-enabled connectors (Discord, Telegram, etc.), Bluesky is a **registry plugin** that must be installed manually before use.

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
      "postIntervalMin": 1800,
      "postIntervalMax": 3600
    }
  }
}
```

## Environment Variables

### Required

| Variable | Description |
|----------|-------------|
| `BLUESKY_HANDLE` | Bluesky handle (e.g., `yourname.bsky.social`) |
| `BLUESKY_PASSWORD` | App password (not your main password) |

### Optional

| Variable | Default | Description |
|----------|---------|-------------|
| `BLUESKY_ENABLED` | `true` | Enable or disable the plugin |
| `BLUESKY_SERVICE` | `https://bsky.social` | Bluesky service URL (PDS instance) |
| `BLUESKY_DRY_RUN` | `false` | Simulate operations without executing |
| `BLUESKY_ENABLE_POSTING` | `true` | Enable automated posting |
| `BLUESKY_POST_IMMEDIATELY` | `false` | Post immediately on startup |
| `BLUESKY_POST_INTERVAL_MIN` | `1800` | Minimum seconds between automated posts |
| `BLUESKY_POST_INTERVAL_MAX` | `3600` | Maximum seconds between automated posts |
| `BLUESKY_MAX_POST_LENGTH` | `300` | Maximum characters per post |
| `BLUESKY_ENABLE_DMS` | `true` | Enable direct message processing |
| `BLUESKY_POLL_INTERVAL` | `60` | Seconds between polling for notifications |
| `BLUESKY_ENABLE_ACTION_PROCESSING` | `true` | Enable automated action processing (likes, reposts) |
| `BLUESKY_ACTION_INTERVAL` | `120` | Seconds between action-processing cycles |
| `BLUESKY_MAX_ACTIONS_PROCESSING` | `5` | Max actions to process per batch |

## Features

- Post creation at configurable intervals
- Mention and reply monitoring
- Direct message handling
- Action processing (likes, reposts)
- Dry run mode for testing
- AT Protocol-based decentralized social networking

## Related

- [Connectors overview](/guides/connectors#bluesky)
