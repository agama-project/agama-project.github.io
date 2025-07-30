---
sidebar_position: 6
---

# Running scripts

Agama allows to execute scripts at the following points of the installation process:

- Previous to any installation work (pre-installation scripts).
- After the system is installed (post-installation scripts).
- During the first boot of the installed system (init scripts).

This section describes how to specify a script and goes through some use-cases.

:::note `inst.script`

For a more general script feature wrapping the whole installation process, see [Fully scripted
installation](/docs/overview/unattended#fully-scripted-installation) at the starter's guide.

:::

## Scripts definition

User scripts are defined in the `scripts` section of the Agama profile. There is a key for each of
the three scripts types, and each key can contain a list of scripts.

```jsonnet
{
  scripts: {
    pre: [
      {
        name: "activate-multipath",
        content: |||
          #!/usr/bin/bash
          systemctl start multipathd.socket multipathd.service
        |||
      }
    ],
    post: [
      {
        name: "enable-sshd",
        chroot: true,
        content: |||
          #!/usr/bin/bash
          systemctl enable sshd.service
        |||
      }
    ],
    init: [
      {
        name: "run-ansible",
        url: "https://192.168.1.1/provisioning.sh"
      }
    ]
  }
}
```

:::note Better use Jsonnet for profiles containing scripts

JSON does not allow multiline strings, so it might be better to use Jsonnet instead. However, you
need to pay attention to the indentation, because it matters.

If you prefer JSON, you can write the `\n` to separate lines.

```json
{
  "name": "enable-sshd",
  "chroot": true,
  "content": "#!/usr/bin/bash\nsystemctl enable sshd.service"
}
```

:::

## The common parts

All scripts share the same elements:

- `name`: a name to identify the script. It makes it easier to find the script logs.
- `content`: the content of the script. It is important to include the _shebang_ as the first line
  of the script.
- `url`: alternatively to the `content`, you can define a URL to fetch the file from. The scripts
  are downloaded and written to the disk when loading the profile. In addition to the
  [supported URLs](../../urls) you can use a URL relative to the profile (e.g., "/my-script.sh").

:::note Working with relative URLs

If you use the `inst.auto` boot option to specify the URL of the profile, any relative URL will use
the URL of the profile as its base.

However, loading the profile using the `agama config load` will not work in the same way. Check the
[Manually loading a profile](../working-with-profiles#manually-loading-a-profile) section for
further information.

:::

Check the following sections to find out the differences between the script types.

## Pre-installation scripts

The pre-installation scripts are executed before the system is analyzed. They are useful for
enabling hardware, tweaking the installation media, etc.

:::warning Pre-installation scripts cannot modify the current profile

Unlike AutoYaST, the pre-installation scripts cannot modify the current profile. We recommend using
Jsonnet to build a dynamic profile. If you need something that behaves exactly like AutoYaST, you
can still use an AutoYaST profile with its own pre-scripts section.

:::

## Post-partitioning scripts

The post-partitioning scripts are executed during the installation, after the storage is set up. A
typical use case is to create configuration files that can modify the behavior of the RPM scripts.

## Post-installation scripts

The post-installation scripts are executed after the system is installed. They are helpful for
enabling services, adjusting system configuration, installing or removing software, etc. These
scripts have an additional option, `chroot`, that determines _where_ to run:

- On the installation media (`chroot` is set to `false`), which is the behavior by default. You can
  find the installed system mounted at `/mnt`.
- On the installed system (`chroot` is set to `true`). Beware that systemd is not running on the
  installed system. For that reason, some commands might not work. If that's a problem, check the
  init scripts.

## Init scripts

The init scripts run during the first boot of the installed system. They are special because Agama
is not present at that point. However, if they are included in a profile, Agama will install a
special `agama-scripts` service which takes care of running them. Once the scripts run, the service
is disabled.

They are a good alternative for those cases where a post-script falls short. The system is fully
operational in this case, so there are no limitations.

## Troubleshooting

You can find the scripts and their logs at `/var/log/agama-installation/scripts` after the
installation has finished. There is a directory for each kind of script (`pre`, `post` and `init`).
Each folder contains the scripts (named according to the `name` element) and their corresponding
standard output (`[name].log`), standard error (`[name].err`) and exit status (`[name].out`).

If you need to debug a problem during installation, you can find those files at
`/run/agama/scripts`.
