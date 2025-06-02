---
sidebar_position: 7
---

# Copying files

In many cases, you might need to copy some files to the installed system. This feature is especially
useful when you want to tweak your system configuration (for instance, dropping a file to
`/etc/sysctl.d`), but it can be used in other situations too.

## File properties

Agama provides a `files` key where you can define the source (the content or an URL to fetch the
file from), the permissions, the owner and the destination of the file.

- `content`: the content of the file.
- `url`: alternatively to the `content`, you can define a URL to fetch the file from. The files are
  downloaded and written to the disk at the end of the installation. In addition to the
  [supported URLs](../../urls) you can use a URL relative to the profile (e.g., "/motd").
- `destination`: the location of the file in the installed system.
- `permissions`: a string describing the file permissions in numeric mode (e.g.: `"0640"`). By
  default it is set to `"0644"`).
- `user`: user owner of the file (`"root"` by default).
- `group`: group owner of the file (`"root"` by default).

## Example

The example below adds a welcome message to the system and registers a new user by deploying a file
in `/etc

```jsonnet
{
  files: [
    {
      url: "/motd",
      destination: "/etc/issue.d/welcome.issue",
      permissions: "0644",
    },
    {
      destination: "/etc/sysusers.d/myapp.conf",
      content: |||
        # Type Name ID GECOS Home
        u      myapp - "My Application" /var/lib/myapp
      |||
    }
  ]
}
```

## Binary files

Although the intention is to work with text files, Agama does not impose any limitation of the kind
of files you can deploy. So using a URL to a binary file should work too.

:::note
Unlike AutoYaST, Agama does not allow to generate the file using an script. For that use
case, you might use the [scripts](./scripts) section.
:::
