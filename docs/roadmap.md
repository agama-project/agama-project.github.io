---
sidebar_position: 4
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 15 (latest released version)

- Handling of self-signed certificates for RMT and SCC proxy.
- User interface for managing extensions.
- Revamped user interface for network configuration.
- Enhancements at the command-line interface.
  - Implement a `monitor` command.
  - Finish support to interact remotely.
  - Usability improvements.
- Improvements at unattended installation.
  - Relative URLs at the configuration (profile).
  - Setting network bridges.
  - Defining MD RAIDs at the `storage` section.
  - Configuring iSCSI and DASD.
  - More options to configure the boot loader.


## Agama 16 (~ June 23rd)

- Use Wayland instead of X11 at Agama-live (the default installation media).
- Support in the web interface to install over existing software RAIDs
- iSCSI and DASD: better communication between web UI and config-based installation.
- Improve the possibilities to patch the installer and the installation media.
- Reorganize the commands `config` and `profile` at the command-line interface.
- Report the installation status via
  [IPMI](https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface).
- Enhancements at config-based (unattended) installation.
    - Importing ask-lists from AutoYaST profiles (at least partially).
    - Option to not install recommended packages.
    - Possibility to extend the installation with user-defined repositories.
    - Setting network VLANs and IP forwarding.

## Agama 17 (~ July 21st)

- Web UI: possibility to directly use a disk without partitions.
- Improvements in the i18n architecture of Agama.
- Automatically import the registration keys from a USB device.
- Unattended installation
    - Re-evaluate the current concept of installer "questions" and the mechanisms to answer them.
    - Improve matching and sorting of storage devices.
    - Allow to configure a password for the boot loader.

## Mid term plans (~ September)

- Welcome screen for local installation.
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
