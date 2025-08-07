---
sidebar_position: 3
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 17 (latest released version)

- More possibilities to patch the installer and the installation media.
- Allow to de-select the default LSM (eg. SElinux).
- Web-based graphical user interface:
    - Define the URL of the RMT server.
    - Possibility to directly use a disk without partitions.
    - Usability improvements managing the storage configuration.
- Unattended installation:
    - Support to configure zFCP disks.
    - Configuration of VLAN.
    - Proper error reporting when the given profile is not found.

## Agama 18 (~ August 18th)

- Stabilization release: mainly bug fixes and documentation.
- Make "boot from hard disk" the default option at the Agama Live ISO.
- Ability to validate a JSON profile locally (no Agama instance running).
- Alert the user when the storage web user interface needs a refresh.
- Unattended installation:
    - Managing questions directly from the Agama profile.
    - Allow to add and remove patterns to install, in addition to replacing the full list.

## Mid term plans (end of 2025)

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

- Welcome screen for local installation.
- Introduce the concept of security profiles.
- Extend the "Storage" section of the user interface.
  - Management of MD RAID devices.
  - Advanced handling of Btrfs.
  - Option to re-install a system (equivalent to YaST's "import mount points").
- Rewrite some components in Rust (instead of the current Ruby).
- Improve integration with other tools.
