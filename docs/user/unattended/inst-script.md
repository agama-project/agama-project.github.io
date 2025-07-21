---
sidebar_position: 4
---

# Fully scripted installation

In some cases even Jsonnet evaluation may not be enough to fully support complex installation decision making.

To replace the regular installation process, use the
`inst.script` [boot option](../boot_options). You can use any of the
[URLs that Agama supports](../urls). It can be used repeatedly.

It downloads a file, makes it executable and runs it. It is suggested to run these
commands as part of the script:
- `agama config load`
- `agama install`

If `inst.auto` is also present, it is processed after `inst.script`.

:::warning Experimental feature

With [`inst.auto`](working-with-profiles) we commit to backward compatibility, but
with `inst.script`, as it is a last minute feature, we reserve the freedom to evolve
Agama even in ways that may break this year's `inst.script` programs.

We plan to specify this feature better and stabilize it by SP1, the first service pack.

:::

:::note In-profile scripts

For scripts more limited in scope, specified as part of the JSON profile, see [Running scripts](profile/scripts).

:::