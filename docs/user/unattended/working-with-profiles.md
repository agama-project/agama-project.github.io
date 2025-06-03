---
sidebar_position: 1
---

# Working with profiles

To start an unattended installation, you just need to tell Agama where to find the profile, usually
through the `inst.auto` boot option. In an ideal work, Agama should get the profile and perform the
installation without your intervention.

However, getting your profile right is not always easy. For that reason, it might be interesting to
learn how to work with profiles using [Agama's commad-line interface](../cli). This tool is a
valuable help when you are writing or debugging your profile, and it allows validating, loading and
exporting a profile from a running Agama instance.

## Starting the installation

Before jumping into the usage of the command-line interface, let's have a look at the regular way of
starting the unattended installation. To tell Agama where to find the profile, you usually set the
`inst.auto` [boot option](../boot_options). You can use any of the
[URLs that Agama supports](../urls).

If you do not specify any profile, Agama will automatically search for it in a few predefined
locations. Agama expects a file named `autoinst.jsonnet`, `autoinst.json` or `autoinst.xml` (in that
order) to be located on:

- The root of a file system named `OEMDRV`.
- Or the root (`/`) of the installation environment.

The first file found is used as the profile, starting the installation right away.

Keep reading if you want to learn more about how profiles are processed.

## Manually loading a profile

An Agama profile is written in Jsonnet, which is a superset of JSON. It means that any valid JSON
file is a valid Jsonnet file too.

However, a profile (either Jsonnet or JSON) should be converted to plain JSON before it is processed
by Agama internals. For that reason, we might consider that loading a profile is a three steps
process:

1. Fetch the profile from the given URL.
2. Evaluate the Jsonnet code to generate the final JSON file. If you are using
   [files](./profile/files) or [scripts](./profile/scripts), any relative URL will be resolved in
   this stage. It will use the URL of the profile as the base URL.
3. Load the JSON file into the Agama service.

These steps are handled by the `agama config generate` (steps 1 and 2) and `agama config load`
(step 3) subcommands.

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

If you are using relative URLs (for instance, within the [files](./profile/files) or the
[scripts](./profile/scripts) section), the `agama config load` might not work as you expect. As
`agama config load` only receives a piece of JSON, it does not know which is the base URL and it
will use, as a fallback, the path to the working directory (the one where you are executing the
command from). For that reason, it is usually a good idea to pre-process the profile using the
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
