---
title: OpenAPI Overview
sidebar_position: 1
---

# Agama OpenAPI & Schemas

Agama exposes an HTTP REST API for remote installation management, status reporting, and configuration. The API is formally described using the [OpenAPI Specification 3.1](https://spec.openapis.org/oas/v3.1.0).

All specifications and standalone JSON schemas are hosted at stable URLs directly on this site.

## Available Specifications

* [**Nightly (master)**](./openapi/nightly): Specifications and standalone schemas generated from the latest `master` branch of Agama.
* [**Version 16.1 (SLE 16.1)**](./openapi/16.1): Specifications corresponding to the `SLE-16.1` release branch.

---

## Stable Schema URLs

You can reference the JSON Schema directly in your Agama profile (JSON or YAML) for editor auto-completion and validation:

```json
{
  "$schema": "https://agama-project.github.io/openapi/nightly/schemas/config.schema.json",
  "product": {
    "id": "Tumbleweed"
  }
}
```

Or for YAML:

```yaml
# yaml-language-server: $schema=https://agama-project.github.io/openapi/nightly/schemas/config.schema.json
product:
  id: Tumbleweed
```

---

## Downloads

| Version | Format | Specification | Standalone Schemas |
|---|---|---|---|
| **Nightly** | JSON | [`openapi.json`](/openapi/nightly/openapi.json)<br/>[`openapi_full.json`](/openapi/nightly/openapi_full.json) | [`config.schema.json`](/openapi/nightly/schemas/config.schema.json)<br/>[`proposal.schema.json`](/openapi/nightly/schemas/proposal.schema.json)<br/>[`system.schema.json`](/openapi/nightly/schemas/system.schema.json) |
| **Nightly** | YAML | [`openapi.yaml`](/openapi/nightly/openapi.yaml)<br/>[`openapi_full.yaml`](/openapi/nightly/openapi_full.yaml) | — |
| **16.1** | JSON | [`openapi.json`](/openapi/16.1/openapi.json) | — |
| **16.1** | YAML | [`openapi.yaml`](/openapi/16.1/openapi.yaml) | — |
