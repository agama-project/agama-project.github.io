---
sidebar_position: 2
---

# Additional software

Depending on the [product you are installing](./product), Agama will select a set of patterns and
packages to install. However, it is possible to add your own list of patterns and packages using the
`software` section.

This section supports two keys:

- `patterns`: list of patterns to install (e.g., `gnome`, `kde`, `fips`, etc.). You can find a list
  of patterns for your distribution using `zypper`.
- `packages`: list of packages to install (e.g., `neovim`).

```
{
  patterns: ["gnome", "office"],
  packages: ["neovim", "emacs"]
}
```

:::note Custom repositories
Adding custom repositories will be supported soon.
:::
