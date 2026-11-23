---
title: "The first AI-ready OS installer"
discussion_id: 205
tags:
  - agama
  - auto-installation
  - rust
  - systems-management
  - mcp
---

AI agents are increasingly driving real-world tasks, from writing code to managing infrastructure,
and installing an operating system is no exception. One of the core ideas behind Agama's design is
to make it possible to integrate the installation process into your workflow, combining it with
other tools like Uyuni, Ansible, etc. So it was a natural step to extend that same integration
philosophy towards AI.

{/* truncate */}

Starting in version 26, Agama will ship a Model Context Protocol (MCP) server, giving AI assistants
and orchestrators a safe, structured way to drive an installation. Agama will expose hardware
information, configuration validation, proposal calculation and monitoring tools, so external
agents can inspect hardware, prepare valid configurations and monitor the installation process
under strict and deterministic guardrails.

:::info Disabled by default

The MCP server *is disabled by default* so, if you are not into AI, you will not notice any difference.

:::

## Describing your system

Taking advantage of Agama's MCP server, an AI agent could turn the following description into a
working system:

> Set up an openSUSE Tumbleweed machine with the GNOME desktop, using Btrfs on the NVMe disk and
> with a user called "tux" with password "nots3cr3t".

From that single sentence, the agent can work out the product selection, the Btrfs-based storage
proposal targeting the NVMe disk, the desktop pattern and the user definition — exactly the fields
you would otherwise fill in by hand through the UI forms.

Sure, the AI could already do this using Agama's web UI or its HTTP API, but the MCP offers a
purpose-built, safer interface: a curated set of tools, designed for how an AI actually operates,
that validate everything before it happens instead of trusting the model to click the right button
or craft the right HTTP request on its own.

## Human-in-the-loop vs full automation

In order to fulfill different use cases, Agama's MCP server is able to operate in two different
modes:

- **Configuration mode.** Destructive operations like formatting, rebooting or running
  pre-installation scripts are disabled. In this mode, the human operator remains in control and
  reviews the resulting proposal before starting the installation.
- **Full mode.** Enables the AI to perform any operation, including the destructive ones disabled in
  Configuration mode. An external orchestrator, such as Uyuni or an automated bare-metal pipeline,
  can drive the deployment end-to-end. In this case, the human trusts the orchestrator to do the
  right thing.

Depending on your use case, you might want to use one mode or the other. What changes between modes
is the scope of what the AI is allowed to do; the deterministic guardrails described next apply
regardless of the mode you choose.

## Deterministic guardrails {#guardrails}

Operating system installation is an inherently destructive operation. Because language models can
hallucinate (e.g., device names), Agama does not grant shell access or run raw partitioning tools.
Instead, all interactions pass through a set of deterministic safety layers.

- **Schema validation.** Every profile submitted by an AI client must strictly conform to Agama's
  JSON Schema. Unknown keys or invalid types are rejected immediately.
- **Proposal verification.** If the agent requests an invalid configuration (e.g., allocating more
  disk space than available), Agama informs the agent with a clear error description.
- **Token isolation.** To force the AI to go through the MCP server when interacting with Agama, it
  will use a specific token which does not allow interacting with the rest of the HTTP API.
- **Observability.** To keep external agents informed without flooding their context with raw
  console output, the server provides targeted diagnostic tools.

## Try it out {#try-it-out}

The MCP server will be included in the upcoming Agama 26. But if you cannot wait, you can use
[our nightly image](/download) and point your favorite MCP client at it. Although the documentation
is still a work in progress, [the agama-mcp
README](https://github.com/agama-project/agama/tree/master/rust/agama-mcp) should include all the
information you need to get started.

As usual, we would love to read your feedback on [GitHub
Discussions](https://github.com/agama-project/agama/discussions) or via [GitHub
Issues](https://github.com/agama-project/agama/issues)!
