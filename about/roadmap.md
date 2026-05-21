---
sidebar_position: 3
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 21 (latest released version)

- Improved usability of the command-line tools.
- Compatibility with Systemd-boot.
- Configuration of NTP sources.
- Web-based graphical user interface:
  - Improved software section.
  - A more guided desktop selection for openSUSE.
  - Management of non-ethernet network connections like bonding and bridges.
- Profile-based (unattended) installation:
  - Customize APQNs and key type when defining PAES-encrypted volumes.
- Agama-live installation media:
  - Disable remote web-server access during installation.

## Agama 22 (~ June 15th)

- Dedicated setting to configure remote access to the installed system (SSH, Cockpit, etc.)
- Better adjusted sizes in the partitions for booting.
- Improvements in network management.
- Web-based graphical user interface:
  - Improvements to configure authentication.
  - Management of VLAN connections.
  - More understandable configuration of multi-disk LVM volume groups.

## Agama 23 (~ July 20th)

- Improvements when installing a system in immutable mode.
- Better error reporting and handling for invalid profiles and other configuration errors.
- Cleanup of the HTTP API.
- Web-based graphical user interface:
  - Integrate a command-line terminal.
  - Usability improvements downloading the installer logs and configuration.
  - Enhancements in the management of file systems including labels, formatting and mounting
    options, etc.
- Profile-based (unattended) installation:
  - More possibilities for the `search` option in the `storage` section.
- Command-line interface:
  - Usability improvements, especially regarding questions.
  - Allow to get both the explicit config and the extended one.

## Mid term plans (autumn 2026)

- Introduce the concept of security profiles.
- Support for NVMeOF.
- Profile-based (unattended) installation:
  - Specify the boot loader to install.
  - Allow to configure a password for the boot loader.
  - More convenient encryption settings.
  - Configure connection to NFS shares.

## Long term plans (2027)

- Deal with multiple real-time clocks.
- Partial support for importing ask-lists from AutoYaST profiles.
- Improve integration with other tools.
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
