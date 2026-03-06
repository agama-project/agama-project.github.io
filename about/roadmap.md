---
sidebar_position: 3
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 18 (latest released version)

- Installer self-update functionality for SLE 16.
- Improved initialization of iBFT.
- Support for installing alpha versions of SLE 16.1.
- Removed support to install openSUSE Kalpa, since Agama offers too many configuration possibilities.
- Officially dropped support for i586 (at least in the short term).
- Web-based graphical user interface:
    - Rearranged information in the storage configuration page.
    - Allow sorting devices by name or size when choosing a disk.
    - Improved handling of wired connections.
    - Enhanced interface to manage DASD devices.
- Profile-based (unattended) installation:
    - Ability to validate a JSON profile locally, with no Agama instance running.
    - Allow to add and remove patterns to install, in addition to replacing the full list.
    - Support to manage answers to Agama questions directly in the profile.

## Agama 19 (~ March 16th)

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
- Improve the experience when installing over existing MD RAIDs (detection of boot device).

## Agama 20 (~ April 13th)

- Better error reporting and handling for invalid profiles and other configuration errors.
- Improvements in the installation of transactional systems like openSUSE Kalpa or SLE Micro.
- Support to select which boot loader to install: grub2 or systemd-boot (and maybe also grub2-bls).
- Agama-live installation media:
    - Disable remote web-server access during installation.
- Web-based graphical user interface:
    - Possibility to reuse pre-existing LVM volume groups.
    - More understandable configuration of multi-disk LVM volume groups.
    - Usability fixes for the network configuration.

## Agama 21 (~ May 15th)

- Dedicated setting to configure remote access to the installed system (SSH, Cockpit, etc.)
- Web-based graphical user interface: enhancements in the management of file systems including
  labels, formatting and mounting options, etc.
- Profile-based (unattended) installation: more possibilities for the `search` option in the
  `storage` section.

## Mid term plans (summer 2026)

- Improved desktop selection for openSUSE.
- Support for NVMeOF.
- Ability to configure DNS search domains per interface.
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
