---
title: "Plugin Bluesky"
sidebarTitle: "Bluesky"
description: "Connecteur Bluesky pour Milady — publiez, répondez et interagissez sur le réseau du Protocole AT."
---

Le plugin Bluesky connecte les agents Milady au réseau social Bluesky via le Protocole AT, permettant de publier, répondre et interagir socialement.

**Package :** `@elizaos/plugin-bluesky`

<div id="installation">

## Installation

</div>

```bash
milady plugins install bluesky
```

<div id="setup">

## Configuration

</div>

<div id="1-get-your-bluesky-credentials">

### 1. Obtenez vos identifiants Bluesky

</div>

1. Allez sur [bsky.app](https://bsky.app) et créez un compte (ou utilisez un compte existant)
2. Notez votre handle (par exemple, `yourname.bsky.social`)
3. Utilisez votre nom d'utilisateur et mot de passe de compte (ou générez un mot de passe d'application dans Paramètres → Mots de passe d'App)

<div id="2-configure-milady">

### 2. Configurez Milady

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

Définir les identifiants via des variables d'environnement :

```bash
export BLUESKY_HANDLE=yourname.bsky.social
export BLUESKY_PASSWORD=your-app-password
```

<div id="configuration">

## Configuration

</div>

| Variable d'environnement | Requis | Description |
|--------------------------|--------|-------------|
| `BLUESKY_HANDLE` | Oui | Handle Bluesky (par exemple, `yourname.bsky.social`) |
| `BLUESKY_PASSWORD` | Oui | Mot de passe d'application (pas votre mot de passe principal) |
| `BLUESKY_ENABLED` | Non | Définir à `true` pour activer (par défaut : `true`) |
| `BLUESKY_SERVICE` | Non | URL de l'instance PDS (par défaut : `https://bsky.social`) |
| `BLUESKY_DRY_RUN` | Non | Définir à `true` pour tester sans publier |

<div id="related">

## Associé

</div>

- [Guide des connecteurs](/fr/guides/connectors) — Documentation générale des connecteurs
