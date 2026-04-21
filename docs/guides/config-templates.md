---
title: "Configuration Templates"
sidebarTitle: "Config Templates"
description: "Ready-to-use configuration templates for common Milady deployment scenarios"
---

## Overview

These templates are complete, copy-paste examples for `~/.milady/milady.json`.
Each uses the actual config schema — see the [Config Schema Reference](/config-schema) for all available fields.

<Warning>
Replace all placeholder values before deploying. Never commit real API keys or credentials to version control — use the `env` section or shell environment variables instead.
</Warning>

## 1. Minimal Setup

The simplest configuration for getting started with a single model provider.

```json5
{
  // ~/.milady/milady.json
  env: {
    OPENAI_API_KEY: "<YOUR_OPENAI_API_KEY>",
  },

  agents: {
    defaults: {
      name: "assistant",
    },
  },
}
```

**Use this template if you:**
- Are just getting started with Milady
- Want to test with a single model provider
- Don't need connectors or plugins yet

---

## 2. Discord Bot

A Discord bot with agent configuration and model selection.

```json5
{
  env: {
    DISCORD_APPLICATION_ID: "<YOUR_DISCORD_APP_ID>",
    DISCORD_API_TOKEN: "<YOUR_DISCORD_BOT_TOKEN>",
    OPENAI_API_KEY: "<YOUR_OPENAI_API_KEY>",
  },

  connectors: {
    discord: {
      enabled: true,
    },
  },

  agents: {
    defaults: {
      name: "discord-bot",
    },
  },
}
```

**Use this template if you:**
- Want to deploy a Discord community bot
- Need message handling and slash commands
- Require per-guild conversation memory

---

## 3. Telegram Bot

Telegram bot with webhook or polling-based updates.

```json5
{
  env: {
    TELEGRAM_BOT_TOKEN: "<YOUR_TELEGRAM_BOT_TOKEN>",
    OPENAI_API_KEY: "<YOUR_OPENAI_API_KEY>",
  },

  connectors: {
    telegram: {
      enabled: true,
    },
  },

  agents: {
    defaults: {
      name: "telegram-bot",
    },
  },
}
```

**Use this template if you:**
- Want a Telegram bot for instant messaging
- Need mobile-first interactions
- Want webhook or polling-based updates

---

## 4. Multi-Connector Setup

Run your agent across Discord, Telegram, and Slack simultaneously.

```json5
{
  env: {
    DISCORD_APPLICATION_ID: "<YOUR_DISCORD_APP_ID>",
    DISCORD_API_TOKEN: "<YOUR_DISCORD_BOT_TOKEN>",
    TELEGRAM_BOT_TOKEN: "<YOUR_TELEGRAM_BOT_TOKEN>",
    SLACK_BOT_TOKEN: "<YOUR_SLACK_BOT_TOKEN>",
    SLACK_APP_TOKEN: "<YOUR_SLACK_APP_TOKEN>",
    OPENAI_API_KEY: "<YOUR_OPENAI_API_KEY>",
  },

  connectors: {
    discord: { enabled: true },
    telegram: { enabled: true },
    slack: { enabled: true },
  },

  agents: {
    defaults: {
      name: "multi-bot",
    },
  },
}
```

**Use this template if you:**
- Need your agent available on multiple platforms
- Want a unified agent identity across channels
- Require cross-platform conversation continuity

---

## 5. Privacy-First / Ollama (Fully Local)

Local-only configuration using Ollama. No external API calls.

```json5
{
  env: {
    OLLAMA_SERVER_URL: "http://localhost:11434",
  },

  models: {
    providers: {
      ollama: {
        enabled: true,
      },
    },
  },

  agents: {
    defaults: {
      name: "local-assistant",
    },
  },
}
```

**Use this template if you:**
- Need maximum privacy and data protection
- Want zero external API calls
- Are running in isolated or offline environments
- Have sensitive data that must stay local

---

## 6. Eliza Cloud Deployment

Deploy your agent to Eliza Cloud for managed hosting.

```json5
{
  deploymentTarget: {
    runtime: "cloud",
    provider: "elizacloud",
  },

  serviceRouting: {
    llmText: {
      backend: "anthropic",
      transport: "cloud-proxy",
    },
    tts: {
      backend: "elizacloud",
      transport: "cloud-proxy",
    },
  },

  connectors: {
    discord: { enabled: true },
    telegram: { enabled: true },
  },

  agents: {
    defaults: {
      name: "cloud-agent",
    },
  },

  cloud: {
    enabled: true,
  },
}
```

**Use this template if you:**
- Want managed hosting without infrastructure concerns
- Need built-in auth, billing, and usage tracking
- Want to publish your agent to the Eliza Cloud marketplace

---

## 7. Trading Agent

Agent with DeFi plugins for on-chain operations.

```json5
{
  env: {
    OPENAI_API_KEY: "<YOUR_OPENAI_API_KEY>",
    EVM_PRIVATE_KEY: "<YOUR_EVM_PRIVATE_KEY>",
    EVM_PROVIDER_URL: "<YOUR_RPC_URL>",
  },

  plugins: {
    allow: [
      "@elizaos/plugin-evm",
    ],
  },

  connectors: {
    discord: { enabled: true },
  },

  agents: {
    defaults: {
      name: "trading-agent",
    },
  },
}
```

**Use this template if you:**
- Want to build an autonomous trading or DeFi agent
- Need wallet and on-chain transaction support
- Want market monitoring and analysis

---

## 8. Custom Actions

Add user-defined actions to extend your agent's capabilities.

```json5
{
  env: {
    OPENAI_API_KEY: "<YOUR_OPENAI_API_KEY>",
  },

  customActions: [
    {
      name: "CHECK_WEATHER",
      description: "Check the weather for a location",
      similes: ["WEATHER", "FORECAST"],
      template: "Check the weather for {{location}}",
    },
  ],

  agents: {
    defaults: {
      name: "custom-agent",
    },
  },
}
```

**Use this template if you:**
- Want to extend agent capabilities without writing a plugin
- Need simple action definitions
- Are prototyping new agent behaviors

---

## Customizing Templates

### Common Customization Points

**Model Provider** — set via `env` or `models`:
```json5
{
  env: {
    ANTHROPIC_API_KEY: "<KEY>",   // Anthropic
    OPENAI_API_KEY: "<KEY>",      // OpenAI
    OPENROUTER_API_KEY: "<KEY>",  // OpenRouter
  },
}
```

**Connectors** — add or remove entries in `connectors`:
```json5
{
  connectors: {
    discord: { enabled: true },
    telegram: { enabled: true },
    slack: { enabled: true },
    // See /docs/connectors/ for all available connectors
  },
}
```

**Plugins** — use `plugins.allow` to load specific plugins:
```json5
{
  plugins: {
    allow: ["@elizaos/plugin-evm", "@elizaos/plugin-browser"],
  },
}
```

### Environment Variables

Always use `env` or shell environment variables for sensitive values:

```json5
{
  env: {
    OPENAI_API_KEY: "<YOUR_KEY>",
    DISCORD_API_TOKEN: "<YOUR_TOKEN>",
    TELEGRAM_BOT_TOKEN: "<YOUR_TOKEN>",
  },
}
```

Or export them in your shell:

```bash
export OPENAI_API_KEY="sk-..."
export DISCORD_API_TOKEN="MTA..."
export TELEGRAM_BOT_TOKEN="123456:ABC..."
milady start
```

---

## Next Steps

1. **Choose a template** that matches your use case
2. **Save it** as `~/.milady/milady.json`
3. **Replace all placeholder values** with your actual credentials
4. **Start Milady** with `milady start`
5. **Configure further** with `milady configure` or the dashboard

See the [Config Schema Reference](/config-schema) for all available options, and the [Connectors overview](/guides/connectors) for platform-specific setup guides.
