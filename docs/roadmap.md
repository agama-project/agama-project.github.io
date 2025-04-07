---
sidebar_position: 4
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 13 (latest released version)

- Ability to define the hostname.
- Improvements in the i18n architecture.
- Initial support for LVM at the "Storage" section of the user interface.
- User interface to specify file system labels.
- Improvements at unattended installation.
  - Configuration of SUSE Customer Center extensions
  - Selection of individual software packages (beyond patterns).
  - Support for AutoYaST/SUSE-specific URLs.
  - Automatically search for the configuration (profile) at same locations as AutoYaST.
  - New configuration section analogous to the `<files />` AutoYaST element.

## Agama 14 (~ April 21st)

- Use Wayland instead of X11 at Agama-live (the default installation media).
- Handling of self-signed certificates for RMT and SCC proxy.
- User interface for managing extensions.
- Revamped user interface for network configuration.
- Enhancements on remote operation using the command-line interface.
- Changes at LVM management
  - Improvements in the user interface.
  - Handling of the LVM devices file.
- Improvements at unattended installation.
  - Configuration of iSCSI connections.
  - Definition of network bridges.
  - Configurable timeout and extra boot arguments for boot loader.

## Agama 15 (~ May 26th)

- Allow to solve conflicts for patterns at the user interface.
- Enhancements at the command-line interface
  - Implement a `monitor` command.
  - Finish support to interact remotely.
  - Usability improvements.
- Improvements at unattended installation.
  - Importing ask-lists from AutoYaST profiles (at least partially).
  - Setting network VLANs.
  - Defining MD RAIDs at the `storage` section.
  - Configuring DASD and zFCP.
  - Managing services.

## Mid term plans (~ September)

- Welcome screen for local installation.
- Reorganize the commands `config` and `profile` at the command-line interface.
- Ability to adjust some simple settings related to security.
- Basic management of Kdump configuration.
- Deal with multiple real-time clocks.
- Improvements in network configuration.
  - Usability fixes of the user interface.
  - Ability to configure DNS search domains per interface.
- Improvements at unattended installation.
  - Configure connection to NFS shares.
  - Define multi-device Btrfs file systems and Btrfs subvolumes.
- Re-evaluate some aspects of storage handling.
  - Support for GPT IDs (fstab-less systems).
  - Reconsider version of RAID metadata.
  - Better logic for automatically calculated file system sizes.
- iSCSI offloading and better support for iBFT.
- Automatically import the registration code from a USB device.
- Automatically import the SSH key from a USB device.
- Passwords strength check.

## Long term plans (after September)

- Introduce the concept of security profiles.
- Extend the "Storage" section of the user interface.
  - Management of MD RAID devices.
  - Advanced handling of Btrfs.
  - Option to re-install a system (equivalent to YaST's "import mount points").
- Rewrite some components in Rust (instead of the current Ruby).
- Improve integration with other tools.
