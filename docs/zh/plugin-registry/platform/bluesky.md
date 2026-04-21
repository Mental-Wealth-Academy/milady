---
title: "Bluesky 插件"
sidebarTitle: "Bluesky"
description: "Milady 的 Bluesky 连接器 — 在 AT 协议网络上发布、回复和互动。"
---

Bluesky 插件通过 AT 协议将 Milady 代理连接到 Bluesky 社交网络，实现发布、回复和社交互动。

**Package:** `@elizaos/plugin-bluesky`

<div id="installation">

## 安装

</div>

```bash
milady plugins install bluesky
```

<div id="setup">

## 设置

</div>

<div id="1-get-your-bluesky-credentials">

### 1. 获取你的 Bluesky 凭据

</div>

1. 前往 [bsky.app](https://bsky.app) 创建账户（或使用现有账户）
2. 记下你的 handle（例如 `yourname.bsky.social`）
3. 使用你的账户用户名和密码（或在设置 → 应用密码中生成应用密码）

<div id="2-configure-milady">

### 2. 配置 Milady

</div>

```json
{
  "connectors": {
    "bluesky": {
      "enabled": true
    }
  }
}
```

通过环境变量设置凭据：

```bash
export BLUESKY_HANDLE=yourname.bsky.social
export BLUESKY_PASSWORD=your-app-password
```

<div id="configuration">

## 配置

</div>

| 环境变量 | 必填 | 描述 |
|----------|------|------|
| `BLUESKY_HANDLE` | 是 | Bluesky handle（例如 `yourname.bsky.social`） |
| `BLUESKY_PASSWORD` | 是 | 应用密码（不是你的主账户密码） |
| `BLUESKY_ENABLED` | 否 | 设置为 `true` 以启用（默认：`true`） |
| `BLUESKY_SERVICE` | 否 | PDS 实例 URL（默认：`https://bsky.social`） |
| `BLUESKY_DRY_RUN` | 否 | 设置为 `true` 以测试而不发布 |

<div id="related">

## 相关内容

</div>

- [连接器指南](/zh/guides/connectors) — 连接器通用文档
