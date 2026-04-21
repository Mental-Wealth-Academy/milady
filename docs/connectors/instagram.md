---
title: Instagram Connector
sidebarTitle: Instagram
description: Connect your agent to Instagram using the @elizaos/plugin-instagram package.
---

Connect your agent to Instagram for media posting, comment monitoring, and DM handling.

## Overview

The Instagram connector is an elizaOS plugin that bridges your agent to Instagram. It supports media posting with caption generation, comment response, and direct message handling. This connector is available from the plugin registry.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-instagram` |
| Config key | `connectors.instagram` |
| Install | `milady plugins install instagram` |

## Setup Requirements

- Instagram account credentials (username and password)
- Optional: proxy URL for API requests
- Optional: 2FA verification code if two-factor authentication is enabled

## Configuration

```json
{
  "connectors": {
    "instagram": {
      "enabled": true
    }
  }
}
```

## Environment Variables

### Required

| Variable | Description |
|----------|-------------|
| `INSTAGRAM_USERNAME` | Instagram username |
| `INSTAGRAM_PASSWORD` | Instagram password |

### Optional

| Variable | Description |
|----------|-------------|
| `INSTAGRAM_PROXY` | Proxy URL for Instagram API requests |
| `INSTAGRAM_VERIFICATION_CODE` | Two-factor authentication verification code |

## Features

- Media posting with caption generation
- Comment monitoring and response
- DM handling
- Proxy support for API requests
- Two-factor authentication support

## Related

- [Connectors overview](/guides/connectors#instagram)
