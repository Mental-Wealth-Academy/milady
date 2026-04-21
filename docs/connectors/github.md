---
title: GitHub Connector
sidebarTitle: GitHub
description: Connect your agent to GitHub using the @elizaos/plugin-github package.
---

Connect your agent to GitHub for repository management, issue tracking, and pull request workflows.

## Overview

The GitHub connector is an elizaOS plugin that bridges your agent to the GitHub API. It supports repository management, issue tracking, pull request creation and review, code search, and webhook-driven workflows. It can authenticate via personal access token or as a GitHub App.

## Package Info

| Field | Value |
|-------|-------|
| Package | `@elizaos/plugin-github` |
| Config key | `connectors.github` |
| Auto-enable trigger | `GITHUB_API_TOKEN` env var |
| Install | `milady plugins install github` |

## Setup Requirements

Choose one authentication method:

**Personal Access Token (simplest):**
- Generate a [personal access token](https://github.com/settings/tokens) with appropriate scopes

**GitHub App (recommended for production):**
- Create a [GitHub App](https://github.com/settings/apps) and install it on your target repos
- Note the App ID and Installation ID
- Generate and download a private key

## Configuration

```json
{
  "connectors": {
    "github": {
      "enabled": true
    }
  }
}
```

## Environment Variables

### Authentication (Token)

| Variable | Description |
|----------|-------------|
| `GITHUB_API_TOKEN` | Personal access token for API authentication (required) |

### Authentication (GitHub App)

| Variable | Description |
|----------|-------------|
| `GITHUB_APP_ID` | GitHub App ID |
| `GITHUB_APP_PRIVATE_KEY` | GitHub App private key (PEM format) |
| `GITHUB_INSTALLATION_ID` | GitHub App installation ID |

### Repository Defaults

| Variable | Default | Description |
|----------|---------|-------------|
| `GITHUB_OWNER` | — | Default repository owner (username or org) |
| `GITHUB_REPO` | — | Default repository name |
| `GITHUB_BRANCH` | `main` | Default branch name |

### Webhooks

| Variable | Description |
|----------|-------------|
| `GITHUB_WEBHOOK_SECRET` | Secret for validating incoming webhook payloads |

## Features

- Repository management
- Issue tracking and creation
- Pull request workflows (create, review, merge)
- Code search and file access
- Webhook-driven event handling
- GitHub App authentication

## Related

- [Connectors overview](/guides/connectors#github)
