---
sidebar_position: 2
---

# Additional software

Depending on the [product you are installing](./product), Agama will select a set of repositories,
patterns and packages to install. However, it is possible to add your own list of repositories,
patterns and packages using the `software` section.

This section supports three keys:

- `patterns`: list of patterns to install (e.g., `gnome`, `kde`, `fips`, etc.). You can find a list
  of patterns for your distribution using `zypper se --type pattern`.
- `packages`: list of packages to install (e.g., `neovim`).
- `extraRepositories`: list of additional repositories that will be used as installation source. See
  the [User-defined repositories](#user-defined-repositories) for further information.

```jsonnet
{
  software: {
    patterns: ["gnome", "office"],
    packages: ["neovim", "emacs"],
    extraRepositories: [
      {
        alias: "games",
        url: "https://download.opensuse.org/repositories/games/openSUSE_Tumbleweed/",
        gpgFingerprints: ["AEF1 EE83 0A27 90AB ABC2 CDA2 8F91 B0E6 C862 B42C"]
      }
    ]
  }
}
```

## User-defined repositories

The `software` section allows you to define custom repositories using a list under the
`extraRepositories` key. Each repository in the list can have the following properties:

- `alias`: A unique identifier for the repository. Mandatory property.
- `url`: The repository's URL, recognized by `libzypp`. Mandatory property.
- `priority`: Sets the priority for using this repository. A lower number means higher precedence.
  If you don't specify this, it'll use the same default priority as other repositories.
- `name` (string): A user-friendly name for the repository. If omitted, it defaults to the `alias`.
- `productDir`: A path to a specific product related to the URL. This is mainly used for
  multi-product media and isn't used by default.
- `enabled`: Controls whether the repository is active. This is handy for pre-defining repositories
  you plan to enable later. By default, repositories are enabled.
- `allowUnsigned`: If set to `true`, the repository will be accepted even if it lacks a GPG
  signature. This can be useful for your own repositories. It's not set by default.
- `gpgFingerprints`: A list of accepted GPG fingerprints for the repository. This is helpful if the
  repository is signed by a GPG key not included in your installation medium. This list is empty by
  default.
