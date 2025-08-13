---
description: Updating Agama, adding kernel modules, etc.
---

# Patching the Agama live ISO

There are some scenarios where you might need to modify an Agama live image. For instance, to apply
a bug fix or if you want to add your own kernel module. You could rebuild the image but, usually, it
is much easier to just patch an existing one.

Agama implements a mechanism which is pretty similar to the one used by YaST to update the
installation image, although it does not support all the features. Agama understands two formats:

- Plain RPM packages (only to modify the Agama live image).
- A Driver Update Disk (although it is not necessarily a "disk"), which is described in the
  [Update Media Howto](https://ftp.suse.com/pub/people/hvogel/Update-Media-HOWTO/Update-Media-HOWTO.html).
  It is more flexible and powerful than using just RPM packages. You can create them manually or
  using [mkdud](https://github.com/openSUSE/mkdud).

:::note A note about the Driver Update Disk format

Agama relies on the Driver Update Disk but it ignores some parts, like the
[scripts](#running-scripts) or the "dist" (the `sle16` part in `linux/suse/x86_64-sle16`).

In this document, when we talk about the content of the update, we will be referring to the files
below `linux/suse/ARCH-*` (where `ARCH` is the architecture, like `x86_64`). Bear in mind that there
might be multiple updates in a single file, each with a numeric prefix
(`0/linux/suse/x86_64-sles16`, `1/linux/suse/x86_64-sles16`, etc.).

:::

## Applying an update

To load an update, you must specify the URL using the `inst.dud` kernel option. You can set this
option multiple times and each URL will be processed in the given order. The supported URL formats
are described in the [Agama URLs](/docs/user/reference/urls) section.

Updates are applied by a [dracut](https://github.com/dracut-ng/dracut-ng) module before Agama's live
system boots so it gives us the chance to modify almost anything from the live system.

## Features

There are several things you can do with an update. It is possible to:

- Modify the Agama live image. It allows applying bug fixes to Agama or any related tool, changing
  the configuration of the live image, etc.
- Add packages for installation. You could install a patched version of a package instead of the one
  included in the repositories.
- Add or update kernel modules. It enables you to use an updated kernel module (unloading the old
  one automatically) or adding your own modules.

If you are familiar with Driver Update Disks, you might be wondering how to run your own scripts.
The [Running scripts](#running-scripts) section explains how you do it.

### Modifying the image

You can modify the Agama live image using an RPM package or a Driver Update Disk. If you use an RPM,
it is unpacked to the live image (without running any package script). If you prefer a Driver Update
Disk, the files under the
[inst-sys directory](https://ftp.suse.com/pub/people/hvogel/Update-Media-HOWTO/Update-Media-HOWTO.html#id_inst_sys)
will be copied to the live image.

### Adding packages for installation

If you want to replace a package (or add a new one), you can place them under the `install`
directory of your Driver Update Disk. Those packages will be copied to a special repository that
Agama will use during installation. That repository will have higher priority than the product
repositories, so those packages will be preferred.

The purpose of this feature is replacing existing packages with updated or patched versions. If you
want to add packages that are not in the distribution, you might need to
[tell Agama about those packages](/docs/user/reference/profile/software) using a profile. Check the
[Running scripts](#running-scripts) to learn how to use a profile as part of the update process.

### Adding or updating kernel modules

The `modules` directory of your Driver Update Disk might contain a set of kernel modules. Agama will
copy them to the live image (under the `updates` directory of the kernel modules path), unloading
the old version of the replaced modules if needed.

If you want to make sure that a module is unloaded (e.g., because it is a dependency of an updated
module) or loaded, you can add its name to the `module.order` file. Agama will unload those modules
in reverse order and it will make sure that systemd loads them when booting the live system.

## Running scripts

Agama update mechanism will ignore the `update.*` scripts included in the Driver Update Disk. There
are two reasons for this:

1. Agama already offers a mechanism to run scripts.
2. Most of those scripts will not work because the installation media has changed quite a lot.

However, you can run scripts (and do many more things) if you include a partial Agama profile as
part of the update. Place the file (`autoinst.jsonnet`, `autoinst.json` or `autoinst.xml`) in the
`inst-sys` directory. It will be copied and automatically processed by Agama later.

Please, refer to the
[Starting the installation](/docs/overview/unattended#starting-the-installation) for further
information.

## Skipping security checks

Although it is not recommended, you might want to skip security checks in some situations. You can
use the following kernel arguments:

- `inst.dud_insecure`: ignores SSL/TLS problems like a self-signed certificate when downloading the
  update from an HTTPS server.
- `inst.dud_packages.gpg`: enables/disables GPG signatures check when installing the packages
  included in the DUD to the target system. The check is enable by default; set
  `inst.dud_packages.gpg=0` to disable it.

## Debugging

If the update was not applied as you expected, you can switch to a console (e.g., pressing
`ctrl+alt+f8`) and check the logs with the following command:

```sh
journalctl -u dracut-pre-pivot
```
