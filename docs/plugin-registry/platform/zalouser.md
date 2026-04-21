---
title: "Zalo User Plugin"
sidebarTitle: "Zalo User"
description: "Zalo personal-account connector for Milady — one-to-one messaging from personal Zalo accounts."
---

The Zalo User plugin connects Milady agents to Zalo using a personal account, enabling one-to-one and group messaging without requiring an Official Account (OA).

**Package:** `@elizaos/plugin-zalouser`

## Installation

```bash
milady plugins install zalouser
```

## Overview

Unlike the [Zalo OA connector](/plugin-registry/platform/zalo) which uses the official Zalo bot API with an Official Account, the Zalo User connector authenticates with exported session cookies and a device IMEI from a personal Zalo account.

## Setup

### 1. Export Zalo Session

Export your Zalo session cookies from the official Zalo app or web client.

### 2. Configure Milady

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

| Field | Required | Description |
|-------|----------|-------------|
| `ZALOUSER_COOKIE_PATH` | No | Path to exported Zalo session cookies |
| `ZALOUSER_IMEI` | No | Device IMEI for session binding |
| `ZALOUSER_USER_AGENT` | No | Browser user agent string |
| `ZALOUSER_ENABLED` | No | `true`/`false` to toggle |
| `ZALOUSER_PROFILES` | No | Multiple account profiles (JSON) |
| `ZALOUSER_DEFAULT_PROFILE` | No | Default profile to use |
| `ZALOUSER_ALLOWED_THREADS` | No | Comma-separated allowed thread IDs |
| `ZALOUSER_DM_POLICY` | No | DM acceptance policy |
| `ZALOUSER_GROUP_POLICY` | No | Group message policy |
| `ZALOUSER_LISTEN_TIMEOUT` | No | Timeout for message listener |

## Features

- **Personal account messaging** — Send and receive from a personal Zalo account
- **DM and group chats** — Support for both conversation types
- **Multi-profile** — Configure multiple accounts via profiles
- **Thread allowlisting** — Restrict to specific conversation threads
- **Configurable policies** — DM and group access control

## Related

- [Zalo User Connector](/connectors/zalouser) — Connector setup reference
- [Zalo Plugin](/plugin-registry/platform/zalo) — Official Zalo OA connector (alternative)
- [Plugin Setup Guide](/plugin-setup-guide#zalo-user-personal) — Environment variable reference
