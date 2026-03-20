---
sidebar_position: 3
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 19 (latest released version)

- Architectural revamp:
    - New improved version of the HTTP API, to be supported through the whole lifecyle of
      SLE 16.X and the corresponding openSUSE Leap versions.
    - More consistent handling of iSCSI and DASD between web UI and JSON profile.
    - Both official user interfaces (web and command-line) fully adapted to the new HTTP API.
    - Improvements in the i18n architecture of Agama.
- Web-based graphical user interface:
    - More useful overview page.
    - Improved navigation.
    - Option to easily download the current installer configuration.
    - Possibility to add or remove network connections.
- Profile-based (unattended) installation:
    - Possibility to reuse pre-existing LVM structures.
    - New option to prevent the boot loader update of the persistent RAM (NVRAM).
    - Support to specify SSH public keys for the non-root user.
- Agama-live installation media:
    - Unified kernel and initramfs location among architectures.
    - Several improvements in the boot menu.
    - Dropped the option "Boot from Disk” on all archs except legacy (non-UEFI) x86.
    - New boot option `live.net_config=1` to interactively configure network settings during boot.
- Both software management and users management reimplemented to not longer rely on YaST.
- Some other internal components also rewriten in Rust.
- Support to install SLE in standard or immutable modes.
- Honor the boot argument `inst.finish` also in interactive installation.
- Ability to configure DNS search domains per interface.
- Improve the experience when installing over existing MD RAIDs (detection of boot device).

## Agama 20 (~ April 13th)

- Improved usability of the command-line tools.
- Better error reporting and handling for invalid profiles and other configuration errors.
- Improvements when installing a system in immutable mode.
- Initial support for different boot loaders like systemd-boot.
- Web-based graphical user interface:
    - Possibility to reuse pre-existing LVM volume groups.
    - Management of non-ethernet network connections like bonding, bridges or VLAN.
    - Usability fixes for the network configuration.
- Profile-based (unattended) installation:
    - Customize APQNs and key type when defining PAES-encrypted volumes.
- Agama-live installation media:
    - Disable remote web-server access during installation.

## Agama 21 (~ May 15th)

- Dedicated setting to configure remote access to the installed system (SSH, Cockpit, etc.)
- Compatibility with several boot loaders including at least Grub2 and systemd-boot.
- Web-based graphical user interface:
    - Improved software section.
    - A more guided desktop selection for openSUSE.
    - More understandable configuration of multi-disk LVM volume groups.
    - Enhancements in the management of file systems including labels, formatting and mounting
      options, etc.
- Profile-based (unattended) installation:
  - More possibilities for the `search` option in the `storage` section.

## Mid term plans (summer 2026)

- Usability improvements downloading the installer logs and configuration
- Support for NVMeOF.
- Profile-based (unattended) installation:
    - Allow to configure a password for the boot loader.
    - More convenient encryption settings.

## Long term plans (end of 2026)

- Introduce the concept of security profiles.
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
  - Configure connection to NFS shares.
  - Management of Btrfs subvolumes.
  - Define multi-device Btrfs file systems (RAID).
