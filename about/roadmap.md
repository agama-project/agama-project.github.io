---
sidebar_position: 3
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 17 (latest released version)

- More possibilities to patch the installer and the installation media.
- Allow to de-select the default LSM (eg. SElinux).
- Make "boot from hard disk" the default option at the Agama Live ISO.
- Web-based graphical user interface:
    - Define the URL of the RMT server.
    - Possibility to directly use a disk without partitions.
    - Usability improvements managing the storage configuration.
    - Alert the user when the storage interface needs a refresh.
- Unattended installation:
    - Proper error reporting when the given profile is not found.
    - Support to configure zFCP disks.
    - Configuration of VLAN.
    - Managing questions directly from the Agama profile.
    - Allow to add and remove patterns to install, in addition to replacing the full list.

## Mid term plans (2025)

- Ability to validate a JSON profile locally (no Agama instance running).
- Better handling of errors during software management.
- Showing individual licenses of packages.
- Partial support for importing ask-lists from AutoYaST profiles.
- Better management of encrypted devices.
- More consistent handling of iSCSI and DASD between web UI and JSON profile.
- Automatically import the SSH and registration keys from a USB device.
- Improvements in network configuration.
  - Usability fixes of the user interface.
  - Ability to configure DNS search domains per interface.
- Improvements at unattended installation.
  - Allow to configure a password for the boot loader.
  - Configure connection to NFS shares.
  - Define multi-device Btrfs file systems and Btrfs subvolumes.

## Long term plans (2026)

- Welcome screen for local installation.
- Introduce the concept of security profiles.
- Deal with multiple real-time clocks.
- Support for NVMeOF.
- Rewrite some components in Rust (instead of the current Ruby).
- Improve integration with other tools.
- Extend the "Storage" section of the user interface.
  - Management of MD RAID devices.
  - Advanced handling of Btrfs.
  - Option to re-install a system (equivalent to YaST's "import mount points").
- Re-evaluate some aspects of storage handling.
  - Support for GPT IDs (fstab-less systems).
  - Reconsider version of RAID metadata.
  - Better logic for automatically calculated file system sizes.
- Improvements at unattended installation.
  - Allow to configure a password for the boot loader.
  - Configure connection to NFS shares.
  - Define multi-device Btrfs file systems and Btrfs subvolumes.
