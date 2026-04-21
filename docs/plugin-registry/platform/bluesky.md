---
title: "Bluesky Plugin"
sidebarTitle: "Bluesky"
description: "Bluesky connector for Milady — post, reply, and interact on the AT Protocol network."
---

The Bluesky plugin connects Milady agents to the Bluesky social network via the AT Protocol, enabling posting, replying, and social interactions.

**Package:** `@elizaos/plugin-bluesky`

## Installation

```bash
milady plugins install bluesky
```

## Setup

### 1. Get Your Bluesky Credentials

1. Go to [bsky.app](https://bsky.app) and create an account (or use an existing one)
2. Note your handle (e.g., `yourname.bsky.social`)
3. Generate an app password at [bsky.app/settings/app-passwords](https://bsky.app/settings/app-passwords)

### 2. Configure Milady

```json
{
  "connectors": {
    "bluesky": {
      "enabled": true
    }
  }
}
```

Set credentials via environment variables:

```bash
export BLUESKY_HANDLE=yourname.bsky.social
export BLUESKY_PASSWORD=your-app-password
```

## Configuration

| Environment Variable | Required | Description |
|---------------------|----------|-------------|
| `BLUESKY_HANDLE` | Yes | Bluesky handle (e.g., `yourname.bsky.social`) |
| `BLUESKY_PASSWORD` | Yes | App password (not your main account password) |
| `BLUESKY_ENABLED` | No | Set to `true` to enable (default: `true`) |
| `BLUESKY_SERVICE` | No | PDS instance URL (default: `https://bsky.social`) |
| `BLUESKY_DRY_RUN` | No | Set to `true` for testing without posting |
| `BLUESKY_ENABLE_POSTING` | No | Enable automated posting (default: `true`) |
| `BLUESKY_ENABLE_DMS` | No | Enable direct message processing (default: `true`) |
| `BLUESKY_POST_INTERVAL_MIN` | No | Minimum seconds between posts (default: `1800`) |
| `BLUESKY_POST_INTERVAL_MAX` | No | Maximum seconds between posts (default: `3600`) |
| `BLUESKY_POLL_INTERVAL` | No | Seconds between polling for notifications (default: `60`) |

## Related

- [Connectors Guide](/guides/connectors) — General connector documentation
