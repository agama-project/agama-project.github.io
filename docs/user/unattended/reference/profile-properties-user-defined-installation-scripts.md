# User-defined installation scripts Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts
```

User-defined scripts to run at different points of the installation

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## scripts Type

`object` ([User-defined installation scripts](profile-properties-user-defined-installation-scripts.md))

# scripts Properties

| Property                              | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                       |
| :------------------------------------ | :------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [pre](#pre)                           | `array` | Optional | cannot be null | [Profile](profile-properties-user-defined-installation-scripts-properties-pre-installation-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts/properties/pre")               |
| [postPartitioning](#postpartitioning) | `array` | Optional | cannot be null | [Profile](profile-properties-user-defined-installation-scripts-properties-post-partitioning-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts/properties/postPartitioning") |
| [post](#post)                         | `array` | Optional | cannot be null | [Profile](profile-properties-user-defined-installation-scripts-properties-post-installation-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts/properties/post")             |
| [init](#init)                         | `array` | Optional | cannot be null | [Profile](profile-properties-user-defined-installation-scripts-properties-init-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts/properties/init")                          |

## pre

User-defined scripts to run before the installation starts

`pre`

* is optional

* Type: `object[]` ([User-defined installation script that runs before the installation starts](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts.md))

* cannot be null

* defined in: [Profile](profile-properties-user-defined-installation-scripts-properties-pre-installation-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts/properties/pre")

### pre Type

`object[]` ([User-defined installation script that runs before the installation starts](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts.md))

## postPartitioning

User-defined scripts to run after the partitioning finishes

`postPartitioning`

* is optional

* Type: `object[]` ([User-defined installation script that runs after the partitioning finishes](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes.md))

* cannot be null

* defined in: [Profile](profile-properties-user-defined-installation-scripts-properties-post-partitioning-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts/properties/postPartitioning")

### postPartitioning Type

`object[]` ([User-defined installation script that runs after the partitioning finishes](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes.md))

## post

User-defined scripts to run after the installation finishes

`post`

* is optional

* Type: `object[]` ([User-defined installation script that runs after the installation finishes](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes.md))

* cannot be null

* defined in: [Profile](profile-properties-user-defined-installation-scripts-properties-post-installation-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts/properties/post")

### post Type

`object[]` ([User-defined installation script that runs after the installation finishes](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes.md))

## init

User-defined scripts to run booting the installed system

`init`

* is optional

* Type: `object[]` ([User-defined installation script that runs during the first boot of the target system, once the installation is finished](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished.md))

* cannot be null

* defined in: [Profile](profile-properties-user-defined-installation-scripts-properties-init-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts/properties/init")

### init Type

`object[]` ([User-defined installation script that runs during the first boot of the target system, once the installation is finished](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished.md))
