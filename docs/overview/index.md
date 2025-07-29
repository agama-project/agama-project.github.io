---
sidebar_position: 1
---

# Getting started

The best way to try Agama is to boot your computer or virtual machine with any Live ISO image
designed for that purpose, like the Agama Live ISO available from the [download page](/download) or
the SUSE Linux Enterprise 16 installation media. That way Agama should automatically run as soon as
the booting process is finished. In the Agama Live ISO that booting process can be started by
choosing the option "install openSUSE".

![Boot loader menu for the official Agama Live ISO](/img/user/iso-boot.png)

If a script or configuration profile was placed at a given location or specified during the boot
process, Agama will perform some steps or even the whole installation automatically, in an
unattended way. That is an option for advanced scenarios and probably what you are looking for if
you are currently an AutoYaST user. If that is the case, check the section about [unattended
instalation](./overview/unattended).

In any other case, Agama will just run and wait for your instructions before proceeding. The whole
interactive process can be controlled using an HTTP API (for developers), a set of [command-line
tools](./overview/cli) (suitable for advanced users) or with a web-based graphical user interface.
The latter method is definitely the way to go for new or casual users. You just have to browse
through the pages displayed at the screen and described in the [next section](./overview/webui)
of this guide.

![Product selection screen offering openSUSE Leap, MicroOS and
Tumbleweed](/img/user/product-selection.png)

If the computer or virtual machine does not have graphical capabilities (eg. no screen is attached
to the system), you can access the interface from any other system in the same network using a
regular web browser. Check the [corresponding section](./overview/remote) of this guide if you need
to do so.
