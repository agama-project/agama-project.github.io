---
sidebar_position: 6
---

# Software

Depending on the [product you are installing](./product), Agama will select a set of repositories,
patterns and packages to install. However, it is possible to add your own list of repositories,
patterns and packages using the `software` section.

This section supports following keys:

- `patterns`: list of patterns to install (e.g., `gnome`, `kde`, `fips`, etc.). You can find a list
  of patterns for your distribution using `zypper se --type pattern`. If you specify a list of
  patterns, pre-selected patterns (e.g., `selinux`) will not get installed unless they are included
  in the list. If you just want to add a set of patterns to the default selection, check the
  [Adding and removing patterns](#adding-and-removing-patterns) section.
- `packages`: list of packages to install (e.g., `neovim`).
- `extraRepositories`: list of additional repositories that will be used as installation source. See
  the [User-defined repositories](#user-defined-repositories) for further information.
- `onlyRequired`: flag that sets if agama should install only mandatory dependencies or also
  optional one. If omited, it will use libzypp defaults which is false.

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
    ],
    onlyRequired: false
  }
}
```

## Adding and removing patterns

If you specify a list of patterns, pre-selected patterns like `selinux` will not get installed
unless they are included in the list. So the following list will disable `selinux`:

```jsonnet
{
  software: {
    patterns: ["gnome", "office"]
  }
}
```

If you want to keep the pre-selected patterns, it might be better to use the `add` key:

```jsonnet
{
  software: {
    patterns: {
      add: ["gnome", "office"]
    }
  }
}
```

Additionally, there is an special `remove` that it is useful when you want to remove an specific set
of patterns:

```jsonnet
{
  software: {
    patterns: {
      remove: ["selinux"]
    }
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
  signature (e.g., repositories created with `createrepo` without a signature). This can be useful
  for your own repositories. It's not set by default.
  **Note**: This only applies to the repository metadata itself. If an individual package is
  unsigned or signed with an unknown key, its installation will still fail. To bypass package
  signature errors (not recommended), you can use the [questions](./answers) section to
  automatically answer `"Ignore"` to the `software.package_error.provide_error` question.

  ```json
  {
    "questions": {
      "answers": [
        {
          "class": "software.package_error.provide_error",
          "answer": "Ignore",
          "data": {
            "package": "my-unsigned-pkg"
          }
        }
      ]
    }
  }
  ```
- `gpgFingerprints`: A list of accepted GPG fingerprints for the repository. This is helpful if the
  repository is signed by a GPG key not included in your installation medium. This list is empty by
  default.
  **Note**: This feature requires the repository to provide a `.key` file (e.g., `repomd.xml.key`).
  If the repository lacks this file, it will report an unknown key ID, which `gpgFingerprints` cannot
  match. In such cases, use the [questions](./answers) section to answer `"Yes"` to the
  `software.unknown_gpg` question. Furthermore, this setting does not import the key for package
  verification. To globally trust a key for packages, include it in your installation medium (see
  [SUSE Manager documentation](https://documentation.suse.com/suma/4.3/en/suse-manager/client-configuration/autoinst-owngpgkey.html)).

  ```json
  {
    "questions": {
      "answers": [
        {
          "class": "software.unknown_gpg",
          "answer": "Yes",
          "data": {
            "filename": "repomd.xml"
          }
        }
      ]
    }
  }
  ```
