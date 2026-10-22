---
sidebar_position: 3
---

# Roadmap

Agama is a project under constant development and priorities are re-evaluated every few weeks. This
page offers an overview on the current state of the ever-changing development plans.

## Agama 25 (latest released version)

- Embed a terminal in the web user interface.
- Add an action to exit during the configuration phase.
- Enhance bridge and bond ports selection and expose more device information.
- Polish and publish the OpenAPI and JSON schema specifications.
- Add support for 32-bit and riscv64 architectures.
- Add support for specifying multiple licenses for the same product, although it is not used yet.

## Agama 26 (~ November 16th)

- Finish the changes so Agama can be used as the Tumbleweed installer.
- Improve the compatibility between different versions of the Agama server and command-line
  interface.
- Reduce the dependencies on YaST packages.
- Use online repositories if possible when using the offline medium.
- Better management of network connections and ports.
- New user interface for storage management.
- Improve the automatic generation of GPT GUIDs and LUKS device-mapper names.

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
