---
title: Zalo User Connector
sidebarTitle: Zalo User
description: Connect your agent to Zalo personal accounts using the @elizaos/plugin-zalouser package.
---

Connect your agent to Zalo personal accounts for one-to-one messaging workflows.

## Overview

The Zalo User connector is an elizaOS plugin that bridges your agent to Zalo personal accounts (as opposed to the [Zalo OA connector](/connectors/zalo) which uses Official Accounts). It enables one-to-one messaging through a personal Zalo account using cookie-based authentication.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-zalouser` |
| Config key | `connectors.zalouser` |
| Install | `milady plugins install zalouser` |

## Setup Requirements

- A Zalo personal account
- Exported Zalo session cookies

## Configuration

```json
{
  "connectors": {
    "zalouser": {
      "enabled": true
    }
  }
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `ZALOUSER_ENABLED` | Enable or disable the connector |
| `ZALOUSER_IMEI` | Device IMEI identifier for session |
| `ZALOUSER_USER_AGENT` | User agent string for requests |
| `ZALOUSER_COOKIE_PATH` | Path to the Zalo session cookie file |
| `ZALOUSER_PROFILES` | Profile configuration |
| `ZALOUSER_DEFAULT_PROFILE` | Default profile to use |
| `ZALOUSER_DM_POLICY` | DM access policy (e.g., `allow`, `deny`, `allowlist`) |
| `ZALOUSER_GROUP_POLICY` | Group message policy (e.g., `allow`, `deny`) |
| `ZALOUSER_ALLOWED_THREADS` | Comma-separated list of allowed thread/conversation IDs |
| `ZALOUSER_LISTEN_TIMEOUT` | Connection listen timeout in milliseconds |

## Features

- One-to-one messaging via personal Zalo account
- Cookie-based session authentication
- Multi-profile support
- Configurable DM and group policies
- Thread allowlist filtering

## Related

- [Zalo OA connector](/connectors/zalo) (Official Account approach)
- [Connectors overview](/guides/connectors)
