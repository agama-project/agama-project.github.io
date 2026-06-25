---
sidebar_position: 3
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 22 (latest released version)

- Dedicated setting to configure remote access to the installed system (SSH, Cockpit, etc.)
- Better adjusted sizes in the partitions for booting.
- Improvements in network management.
- Command-line interface:
  - Answer questions directly from the monitor
  - Usability improvements
- Web-based graphical user interface:
  - Redesigned header and toolbar
  - Dark and light modes
  - Usability improvements downloading the installer logs and configuration.
  - Management of VLAN connections.
  - More understandable configuration of multi-disk LVM volume groups.
  - Advanced settings for file systems
  - Improvements to configure authentication.

## Agama 23 (~ July 20th)

- Cleanup of the HTTP API.
- Web-based graphical user interface:
  - Improved i18n configuration
  - Integrate a command-line terminal.
- Profile-based (unattended) installation:
  - More possibilities for the `search` option in the `storage` section.

## Mid term plans

- Introduce the concept of security profiles.
- Support for NVMeOF.
- Improve integration with other tools.
- Profile-based (unattended) installation:
  - Specify the boot loader to install.
  - Allow to configure a password for the boot loader.
  - More convenient encryption settings.

## Long term plans

- Showing individual licenses of packages.
- Improve mechanism to ask existing encryption passwords (allow to reuse the password).
- Re-evaluate some aspects of storage handling:
  - Support for GPT IDs (fstab-less systems).
  - Reconsider version of RAID metadata.
  - Better logic for automatically calculated file system sizes.
- Extend the "Storage" section of the user interface:
  - Management of MD RAID devices.
  - Advanced handling of Btrfs.
  - Option to re-install a system (equivalent to YaST's "import mount points").
- Profile-based (unattended) installation:
  - Management of Btrfs subvolumes.
  - Define multi-device Btrfs file systems (RAID).
