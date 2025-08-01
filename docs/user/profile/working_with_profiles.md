---
sidebar_position: 1
---

# Working with profiles

Configuration profiles are key for [unattended installation](/docs/overview/unattended) and to
perform [advanced configuration](/docs/overview/cli) of Agama. However, getting your profile
right is not always easy.

Fortunatelly, Agama's command-line interface offers [several commands](/docs/user/reference/cli) to
validate, load and export configurations, becoming a very valuable tool for writing and debugging
your profile.

## Manually loading a profile

An Agama profile is written in Jsonnet, which is a superset of JSON. It means that any valid JSON
file is a valid Jsonnet file too.

However, a profile (either Jsonnet or JSON) should be converted to plain JSON before it is processed
by Agama internals. For that reason, we might consider that loading a profile is a three steps
process:

1. Fetch the profile from the given URL.
2. Evaluate the Jsonnet code to generate the final JSON file. If you are using
   [files](../reference/profile/files) or [scripts](../reference/profile/scripts), any relative URL
   will be resolved in this stage. It will use the URL of the profile as the base URL.
3. Load the JSON file into the Agama service.

The whole process is automatically performed by Agama when `inst.auto` is used. Internally, the
mentioned steps are handled by the `agama config generate` (steps 1 and 2) and `agama config load`
(step 3) subcommands. Thus, the process can be replicated manually.

```console
$ agama config generate http://example.lan/agama.jsonnet > agama.json
$ agama config load < agama.json
```

Or if you prefer, you can use this one-liner:

```
$ agama config generate http://example.lan/agama.jsonnet | agama config load
```

:::tip `agama config load` does not start the installation

The `agama config load` just loads the configuration but it does not start the installation. You can
use the web user interface to check that everything looks as you expect. If you want to start the
installation from the command-line, you can issue the `agama install` command.

:::

If you are using relative URLs (for instance, within the [files](../reference/profile/files) or the
[scripts](../reference/profile/scripts) section), the `agama config load` might not work as you
expect. As `agama config load` only receives a piece of JSON, it does not know which is the base URL
and it will use, as a fallback, the path to the working directory (the one where you are executing
the command from). For that reason, it is usually a good idea to pre-process the profile using the
`agama config generate` command.

## Validating a profile

You can validate a JSON profile using the command-line tool.

```console
$ agama config validate my-profile.json
```

Bear in mind that you can only validate JSON profiles, not Jsonnet ones. So if you have a Jsonnet
file, you need to convert it to JSON using the `agama config generate` subcommand.

```console
$ agama config generate my-profile.jsonnet > my-profile.json
$ agama config validate my-profile.json
```

:::note Automatic validation

All of the `agama config` subcommands validate the profile automatically.

:::

### Exporting a profile

Writing the profile by hand is relatively easy. However, you might want to ask Agama to do it for
you. You can boot the installation, use the web interface to tweak all the values and, from the
terminal, generate the file by running the following command:

```console
agama config show > profile.json
```

Bear in mind that using `agama config show` you might discover some options that are not available
using the web-based user interface.
