---
title: Zalo User Connector
sidebarTitle: Zalo User
description: Connect your agent to Zalo personal accounts for one-to-one messaging using @elizaos/plugin-zalouser.
---

Connect your agent to Zalo using a personal account for one-to-one and group messaging.

## Overview

The Zalo User connector enables your agent to communicate through a personal Zalo account, as opposed to the [Zalo OA (Official Account) connector](/connectors/zalo) which uses the official Zalo bot API. This connector authenticates using exported session cookies and a device IMEI, making it suitable for personal-account messaging workflows.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-zalouser` |
| Config key | `connectors.zalouser` |
| Registry | Yes (`milady plugins install zalouser`) |

## Installation

```bash
milady plugins install zalouser
```

## Minimal Configuration

In `~/.milady/milady.json`:

```json
{
  "connectors": {
    "zalouser": {
      "cookiePath": "/path/to/zalo-cookies",
      "imei": "YOUR_DEVICE_IMEI"
    }
  }
}
```

Or use environment variables:

```bash
export ZALOUSER_COOKIE_PATH=/path/to/zalo-cookies
export ZALOUSER_IMEI=YOUR_DEVICE_IMEI
```

## Configuration

| Variable | Required | Description |
|----------|----------|-------------|
| `ZALOUSER_COOKIE_PATH` | No | Path to exported Zalo session cookies |
| `ZALOUSER_IMEI` | No | Device IMEI for session binding |
| `ZALOUSER_USER_AGENT` | No | Browser user agent string |
| `ZALOUSER_ENABLED` | No | `true`/`false` to toggle connector |
| `ZALOUSER_PROFILES` | No | Multiple account profiles (JSON) |
| `ZALOUSER_DEFAULT_PROFILE` | No | Default profile to use |
| `ZALOUSER_ALLOWED_THREADS` | No | Comma-separated allowed thread IDs |
| `ZALOUSER_DM_POLICY` | No | DM acceptance policy |
| `ZALOUSER_GROUP_POLICY` | No | Group message policy |
| `ZALOUSER_LISTEN_TIMEOUT` | No | Timeout for message listener |

## Features

- Personal Zalo account messaging (not Official Account)
- DM and group chat support
- Multi-profile support for multiple accounts
- Thread-level allowlisting
- Configurable message policies

## Related

- [Zalo Connector](/connectors/zalo) — Official Zalo OA (bot) connector
- [Connectors Guide](/guides/connectors#zalo-user) — Full connector listing
- [Plugin Setup Guide](/plugin-setup-guide#zalo-user-personal) — Environment variable reference
