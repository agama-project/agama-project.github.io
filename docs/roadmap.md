---
sidebar_position: 4
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 16 (latest released version)

- Use Wayland instead of X11 at Agama-live (the default installation media).
- Support in the web interface to install over existing software RAIDs.
- Improve the possibilities to patch the installer and the installation media.
- Reorganize the commands `config` and `profile` at the command-line interface.
- Report the installation status via
  [IPMI](https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface).
- Improve error reporting on registration.
- Visible conflict resolution for patterns.
- Passwords strength check.
- Notify the machine is rebooting to remote browsers.
- Improvements in the user interface for network configuration.
    - Associate connections to a given MAC address.
    - Configure persistent vs non-persistent connections.
- Enhancements at config-based (unattended) installation.
    - Option to not install recommended packages.
    - Possibility to extend the installation with user-defined repositories.
    - Use sorting as part of the criteria to match storage devices

## Agama 17 (~ July 21st)

- Even more possibilities to patch the installer and the installation media.
- Polish the Wayland-based Live image.
- Support the new libzypp singletrans feature.
- Web-based graphical user interface.
    - Define the URL of the RMT server.
    - Possibility to directly use a disk without partitions.
- Unattended installation.
    - Support to configure zFCP disks.
    - Explicit support in the profile to enable (or not) multipath.
    - Proper error reporting when the given profile is not found.

## Agama 18 (~ August 18th)

- Stabilization release: mainly bug fixes and documentation.
- Unattended installation
    - Improve matching and sorting of storage devices.
    - Re-evaluate the current concept of installer "questions" and the mechanisms to answer them.

## Mid term plans (end of 2025)

- Welcome screen for local installation.
- Ability to adjust some simple settings related to security.
- Basic management of Kdump configuration.
- Deal with multiple real-time clocks.
- Improvements in network configuration.
  - Usability fixes of the user interface.
  - Ability to configure DNS search domains per interface.
- Improvements at unattended installation.
  - Allow to configure a password for the boot loader.
  - Configure connection to NFS shares.
  - Define multi-device Btrfs file systems and Btrfs subvolumes.
- Re-evaluate some aspects of storage handling.
  - Support for GPT IDs (fstab-less systems).
  - Reconsider version of RAID metadata.
  - Better logic for automatically calculated file system sizes.
- Automatically import the SSH and registration keys from a USB device.

## Long term plans (during 2026)

- Introduce the concept of security profiles.
- Extend the "Storage" section of the user interface.
  - Management of MD RAID devices.
  - Advanced handling of Btrfs.
  - Option to re-install a system (equivalent to YaST's "import mount points").
- Rewrite some components in Rust (instead of the current Ruby).
- Improve integration with other tools.
