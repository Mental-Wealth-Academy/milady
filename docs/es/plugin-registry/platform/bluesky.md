---
title: "Plugin de Bluesky"
sidebarTitle: "Bluesky"
description: "Conector de Bluesky para Milady — publica, responde e interactúa en la red del Protocolo AT."
---

El plugin de Bluesky conecta agentes de Milady a la red social Bluesky a través del Protocolo AT, permitiendo publicar, responder e interactuar socialmente.

**Package:** `@elizaos/plugin-bluesky`

<div id="installation">

## Instalación

</div>

```bash
milady plugins install bluesky
```

<div id="setup">

## Configuración

</div>

<div id="1-get-your-bluesky-credentials">

### 1. Obtén tus credenciales de Bluesky

</div>

1. Ve a [bsky.app](https://bsky.app) y crea una cuenta (o usa una existente)
2. Anota tu handle (por ejemplo, `yourname.bsky.social`)
3. Usa tu nombre de usuario y contraseña de cuenta (o genera una contraseña de aplicación en Configuración → Contraseñas de App)

<div id="2-configure-milady">

### 2. Configura Milady

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

Establecer credenciales mediante variables de entorno:

```bash
export BLUESKY_HANDLE=yourname.bsky.social
export BLUESKY_PASSWORD=your-app-password
```

<div id="configuration">

## Configuración

</div>

| Variable de entorno | Requerido | Descripción |
|--------------------|-----------|-------------|
| `BLUESKY_HANDLE` | Sí | Handle de Bluesky (por ejemplo, `yourname.bsky.social`) |
| `BLUESKY_PASSWORD` | Sí | Contraseña de aplicación (no tu contraseña principal) |
| `BLUESKY_ENABLED` | No | Establecer a `true` para habilitar (por defecto: `true`) |
| `BLUESKY_SERVICE` | No | URL de la instancia PDS (por defecto: `https://bsky.social`) |
| `BLUESKY_DRY_RUN` | No | Establecer a `true` para pruebas sin publicar |

<div id="related">

## Relacionado

</div>

- [Guía de conectores](/es/guides/connectors) — Documentación general de conectores
