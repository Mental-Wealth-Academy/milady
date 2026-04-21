---
title: Twilio Connector
sidebarTitle: Twilio
description: Connect your agent to Twilio for SMS and voice using the @elizaos/plugin-twilio package.
---

Connect your agent to Twilio for SMS messaging and voice call capabilities.

## Overview

The Twilio connector is an elizaOS plugin that bridges your agent to Twilio's communication APIs. It supports inbound and outbound SMS, as well as programmable voice calls with configurable policies. Auto-enabled when `TWILIO_AUTH_TOKEN` is set.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-twilio` |
| Config key | `connectors.twilio` |
| Auto-enable trigger | `TWILIO_AUTH_TOKEN` env var |
| Install | `milady plugins install twilio` |

## Setup Requirements

- Twilio Account SID and Auth Token from [twilio.com/console](https://www.twilio.com/console)
- A Twilio phone number

## Configuration

```json
{
  "connectors": {
    "twilio": {
      "enabled": true
    }
  }
}
```

## Environment Variables

### Required

| Variable | Description |
|----------|-------------|
| `TWILIO_ACCOUNT_SID` | Twilio Account SID |
| `TWILIO_AUTH_TOKEN` | Twilio Auth Token |
| `TWILIO_PHONE_NUMBER` | Twilio phone number for sending/receiving |

### Webhook Configuration

| Variable | Description |
|----------|-------------|
| `TWILIO_WEBHOOK_URL` | Full webhook URL for inbound messages |
| `TWILIO_WEBHOOK_PORT` | Port for the webhook listener |

### Voice Call Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `VOICE_CALL_ENABLED` | — | Enable voice call capabilities |
| `VOICE_CALL_PROVIDER` | — | Voice provider selection |
| `VOICE_CALL_FROM_NUMBER` | — | Phone number for outbound calls |
| `VOICE_CALL_TO_NUMBER` | — | Default destination number |
| `VOICE_CALL_PUBLIC_URL` | — | Public URL for voice webhooks |
| `VOICE_CALL_WEBHOOK_PATH` | — | Webhook path for voice events |
| `VOICE_CALL_WEBHOOK_PORT` | — | Port for voice webhook listener |
| `VOICE_CALL_ALLOW_FROM` | — | Comma-separated list of allowed caller numbers |
| `VOICE_CALL_INBOUND_POLICY` | — | Policy for inbound calls |
| `VOICE_CALL_INBOUND_GREETING` | — | Greeting message for inbound callers |
| `VOICE_CALL_MAX_CONCURRENT_CALLS` | — | Maximum concurrent voice calls |
| `VOICE_CALL_MAX_DURATION_SECONDS` | — | Maximum call duration in seconds |

## Features

- SMS messaging (send and receive)
- Programmable voice calls (inbound and outbound)
- Webhook-based inbound message and call handling
- Configurable call policies and limits
- Multi-number support

## Related

- [Connectors overview](/guides/connectors#twilio)
