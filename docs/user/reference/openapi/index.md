---
title: OpenAPI Overview
sidebar_position: 1
---

# Agama OpenAPI & Schemas

Agama exposes an HTTP REST API for remote installation management, status reporting, and
configuration. The API is formally described using the
[OpenAPI Specification 3.1](https://spec.openapis.org/oas/v3.1.0).

## Available Specifications

- [**Nightly (master)**](./openapi/nightly): Interactive API documentation generated from the latest
  `master` branch.
- [**16.1 (SLE 16.1 / Leap 16.1)**](./openapi/16.1): Interactive API documentation for the
  `SLE-16.1` release branch.

## Downloads and Standalone Schemas

### Nightly

- **OpenAPI Specification (Modular)**: [`openapi.json`](/openapi/nightly/openapi.json) |
  [`openapi.yaml`](/openapi/nightly/openapi.yaml)
- **OpenAPI Specification (Full / Monolithic)**:
  [`openapi_full.json`](/openapi/nightly/openapi_full.json) |
  [`openapi_full.yaml`](/openapi/nightly/openapi_full.yaml)
- **Autoinstallation Profile Schema**:
  [`config.schema.json`](/openapi/nightly/schemas/config.schema.json)
- **Proposal Schema**: [`proposal.schema.json`](/openapi/nightly/schemas/proposal.schema.json)
- **System Schema**: [`system.schema.json`](/openapi/nightly/schemas/system.schema.json)

### Version 16.1

- **OpenAPI Specification**: [`openapi.json`](/openapi/16.1/openapi.json) |
  [`openapi.yaml`](/openapi/16.1/openapi.yaml)
