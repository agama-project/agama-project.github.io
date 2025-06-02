---
sidebar_position: 1
---

# Working with profiles

To start an unattended installation, you just need to tell Agama where to find the profile, usually
through the `inst.auto` boot option. In an ideal work, Agama should get the profile and perform the
installation without your intervention.

However, getting your profile right is not always easy. For that reason, it might be interesting to
learn how to work with profiles using [Agama's commad-line interface](/.cli). This tool is a
valuable help when you are writing or debugging your profile, and it allows validating, loading and
exporting a profile.

## Starting the installation

Before jumping into the usage of the command-line interface, let's have a look at the regular way of
starting the unattended installation. To tell Agama where to find the profile, you usually set the
`inst.auto` [boot option](../boot_options). You can use any of the
[URLs that Agama supports](./urls).

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
1. Evaluate the Jsonnet code and resolve relative URLs, generating the final JSON file.
1. Load the JSON file into the Agama service.

These steps are handled by the `agama config generate` (steps 1 and 2) and `agama config load`
(step 3) subcommands.

```console
agama config generate http://example.lan/agama.jsonnet > agama.json
agama config load < agama.json
```

Or if you prefer, you can use this one-liner:

```
agama config generate http://example.lan/agama.jsonnet | agama config load
```

:::tip `agama config load` does not start the installation

The `agama config load` just loads the configuration. You can use the web user interface to check
that everything looks as you expect.

:::

## Validating a profile

You can validate a JSON profile using the command-line tool. Bear in mind that you can only validate
JSON profiles, not Jsonnet ones.

```console
agama config validate my-profile.json
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
