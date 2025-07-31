---
sidebar_position: 9
---

# Unattended installation

Agama is able to install a system without user interaction. The user provides a definition of the
system, known as a "profile", that describes how the system should look like (partitioning,
networking, software selection, etc.) and Agama takes care of installing the system. This approach
might sound familiar to AutoYaST users.

## Configuration profiles

Agama configuration profiles can use either [JSON](https://www.json.org) or
[Jsonnet](https://jsonnet.org). That allows writing readable and concise profiles, like the following
example instructing Agama to install _Tumbleweed_ and create a first user so you can log in.

```jsonnet
{
  product: {
    id: "Tumbleweed"
  },
  user: {
    fullName: "Jane Doe",
    userName: "jane.doe",
    password: "123456"
  }
}
```

It is possible to define the storage layout, which software to install, the network configuration,
etc. Check the [profile format](../user/unattended/profile) section of Agama's user documentation to
learn more.

It is worth to mention that, although Agama defines its own profile format, it is able to partially
handle AutoYaST profiles. Check the [AutoYaST support section](../user/unattended/autoyast) for
further information.

## Starting the installation

Once you have your first profile, you just need to boot an Agama Live ISO telling Agama where to find
the profile. That can be done setting the `inst.auto` [boot option](../user/boot_options). You can use
any of the [URLs that Agama supports](../user/urls).

```
inst.auto=http://mydomain.org/tumbleweed.jsonnet
```

If you do not specify any profile, Agama will automatically search for it in a few predefined
locations. Agama expects a file named `autoinst.jsonnet`, `autoinst.json` or `autoinst.xml` (in that
order) to be located on:

- The root of a file system named `OEMDRV`.
- Or the root (`/`) of the installation environment.

The first file found is used as the profile, starting the installation right away. If no profile is
found, Agama will fall back to the interactive installation.

## Fully scripted installation

Specifying [custom scripts](../user/unattended/profile/scripts) at the profile and using Jsonnet can
provide a great level of flexibility to define complex rules that are evaluated during the
installation process.  But sometimes that may not be enough and you may want to go one step further
in order to implement a complex decision making process.

You can redefine the whole regular installation process using the `inst.script` [boot
option](../user/boot_options), which can even be used repeatedly.

```
inst.script=http://mydomain.org/custom-installation.sh
```

Agama will download the file, make it executable and run it. It is suggested to run these commands
as part of the script:
- `agama config load`
- `agama install`

If `inst.auto` is also present, it is processed after `inst.script`.

:::warning Experimental feature

Long term backward compatibility is guaranteed for `inst.auto`, but `inst.script` is considered a
last minute feature for SUSE Linux Enterprise 16.0 and openSUSE Leap 16.0. It may evolve in the
following months, even in ways that may break recent `inst.script` programs.

We plan to specify this feature better and stabilize it by SLE 16.1 and the corresponding Leap
version.

:::
