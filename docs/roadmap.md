---
sidebar_position: 4
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 12 (latest released version)

- New user interface based on PatternFly v6.
- Revamped "Storage" section at the UI. Support for LVM is temporarily removed.
- First version of a new "Authentication" section at the UI replacing the previous "Users" one.
- Better information about AutoYaST compatibility offered at runtime.
- Improved handling of failed integrity checks for software packages.
- Support to register against a SUSE Customer Center proxy.
- Post-partitioning scripts.
- Improvements at Agama-live (the default installation media).
  - Better configuration for the underlying IceWM.
  - Possibility to open xterm (ctrl+alt+t).
  - Disable power-saving and screensaver.

## Agama 13 (~ March 21st)

- Ability to define the hostname.
- Restore support for LVM at the "Storage" section of the user interface.
- Allow to solve conflicts for patterns at the user interface.
- Improvements in the i18n architecture.
- Reorganize the commands `config` and `profile` at the command-line interface.
- Enhancements on registration.
  - Support for extensions.
  - Self-signed certificates for RMT and SCC proxy.
- Improvements at unattended installation.
  - Support to select individual software packages (beyond patterns).
  - Support for AutoYaST/SUSE-specific URLs.
  - Automatically search for the configuration (profile) at same locations than AutoYaST.
  - New configuration section analogous to the `<files />` AutoYaST element.

## Agama 14 (~ April 21st)

- Welcome screen for local installation.
- Improvements at unattended installation.
  - Importing ask-lists from AutoYaST profiles (at least partially).
  - Defining MD RAIDs at the `storage` section.
  - Configuring DASD, zFCP and iSCSI.
  - Services management.
- Enhancements at the command-line interface
  - Implement a `monitor` command.
  - Finish support to interact remotely.
  - Usability improvements.

## Mid term plans (~ September)

- Ability to adjust some simple settings related to security.
- Basic management of Kdump configuration.
- Use Wayland instead of X11 at Agama-live (the default installation media).
- Improvements in network configuration.
  - Usability fixes of the user interface.
  - Ability to configure DNS search domains per interface.
- Improvements at unattended installation.
  - Configure connection to NFS shares.
  - Define multi-device Btrfs file systems and Btrfs subvolumes.
- Re-evaluate some aspects of storage handling.
  - Support for GPT IDs (fstab-less systems).
  - Reconsider version of RAID metadata.
  - Support for LVM use of system/devices.
  - Better logic for automatically calculated file system sizes.
- iSCSI offloading and better support for iBFT.

## Long term plans (after September)

- Introduce the concept of security profiles.
- Extend the "Software" section of the user interface.
  - Management of MD RAID devices.
  - Advanced handling of Btrfs.
  - Option to re-install a system (equivalent to YaST's "import mount points").
- Rewrite some components in Rust (instead of the current Ruby).
- Improve integration with other tools.
