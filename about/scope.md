---
sidebar_position: 2
---

# Mission and scope

Agama is a Linux installer intended as the evolution of YaST. But it is not designed as a direct
replacement for all the YaST functionality. Instead, it comes with an important mindset change.

## A Linux installer...

From a very simplistic and high level view, there are basically two methods to deploy a
Linux operating system - using a pre-built image and performing an installation.

The first method is direct and simple, but it cannot address all scenarios. On the other hand,
an installer can always be used to deploy a new Linux system through some general steps.

  - Configure the network and the storage setup, potentially including remote storage, partitioning,
    LVM, encryption, etc.
  - Deploy the target system over that storage setup, eg. installing the appropriate set of RPM
    packages.
  - Customize the aspects of the system needed for the first boot, like boot loader, kdump,
    authentication, etc.
  - Give control to the new system, via kexec or hardware reboot.

Agama turns that process into a seamless experience.

## ... and just an installer

Unlike its predecessor YaST, known for been both a Linux installer and a general configuration
tool, Agama focuses on system installation.

As a pure deployment tool, Agama takes care of those aspects that:
  - can only be handled during installation itself or
  - are needed to get a minimal functional system that can be booted and configured in a secure way.

As such, Agama is not present at the final installed system and minimizes overlapping with more
general configuration tools.

![Deploy and configuration tools](/img/deploy-configure.png)
