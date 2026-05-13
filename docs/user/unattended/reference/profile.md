# Profile Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json
```

Profile definition for automated installation

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json](profile.schema.json "open original schema") |

## Profile Type

`object` ([Profile](profile.md))

# Profile Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                   |
| :---------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [files](#files)                                 | `array`  | Optional | cannot be null | [Profile](profile-properties-user-defined-files-to-deploy.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/files")                     |
| [scripts](#scripts)                             | `object` | Optional | cannot be null | [Profile](profile-properties-user-defined-installation-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts")              |
| [bootloader](#bootloader)                       | Merged   | Optional | cannot be null | [Profile](profile-properties-bootloader-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/bootloader")                         |
| [hostname](#hostname)                           | `object` | Optional | cannot be null | [Profile](profile-properties-hostname-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/hostname")                             |
| [software](#software)                           | `object` | Optional | cannot be null | [Profile](profile-properties-software-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/software")                             |
| [product](#product)                             | `object` | Optional | cannot be null | [Profile](profile-properties-product-to-install.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product")                             |
| [network](#network)                             | `object` | Optional | cannot be null | [Profile](profile-properties-network-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network")                               |
| [user](#user)                                   | `object` | Optional | cannot be null | [Profile](profile-properties-first-user-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user")                               |
| [root](#root)                                   | `object` | Optional | cannot be null | [Profile](profile-properties-root-authentication-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root")                      |
| [localization](#localization)                   | `object` | Optional | cannot be null | [Profile](profile-properties-localization-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization")                     |
| [storage](#storage)                             | `object` | Optional | cannot be null | [Profile](storage-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/properties/storage")                                                         |
| [legacyAutoyastStorage](#legacyautoyaststorage) | `array`  | Optional | cannot be null | [Profile](profile-properties-legacy-autoyast-storage-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/legacyAutoyastStorage") |

## files

User-defined files to deploy after installation just before post install scripts

`files`

* is optional

* Type: `object[]` ([User-defined file to deploy](profile-defs-user-defined-file-to-deploy.md))

* cannot be null

* defined in: [Profile](profile-properties-user-defined-files-to-deploy.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/files")

### files Type

`object[]` ([User-defined file to deploy](profile-defs-user-defined-file-to-deploy.md))

## scripts

User-defined scripts to run at different points of the installation

`scripts`

* is optional

* Type: `object` ([User-defined installation scripts](profile-properties-user-defined-installation-scripts.md))

* cannot be null

* defined in: [Profile](profile-properties-user-defined-installation-scripts.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/scripts")

### scripts Type

`object` ([User-defined installation scripts](profile-properties-user-defined-installation-scripts.md))

## bootloader



`bootloader`

* is optional

* Type: `object` ([Bootloader settings](profile-properties-bootloader-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-bootloader-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/bootloader")

### bootloader Type

`object` ([Bootloader settings](profile-properties-bootloader-settings.md))

one (and only one) of

* [Untitled undefined type in Profile](profile-properties-bootloader-settings-oneof-0.md "check type definition")

* [Untitled undefined type in Profile](profile-properties-bootloader-settings-oneof-1.md "check type definition")

* not

  * any of

    * [Untitled undefined type in Profile](profile-properties-bootloader-settings-oneof-2-not-anyof-0.md "check type definition")

    * [Untitled undefined type in Profile](profile-properties-bootloader-settings-oneof-2-not-anyof-1.md "check type definition")

## hostname



`hostname`

* is optional

* Type: `object` ([Hostname settings](profile-properties-hostname-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-hostname-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/hostname")

### hostname Type

`object` ([Hostname settings](profile-properties-hostname-settings.md))

## software



`software`

* is optional

* Type: `object` ([Software settings](profile-properties-software-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-software-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/software")

### software Type

`object` ([Software settings](profile-properties-software-settings.md))

## product



`product`

* is optional

* Type: `object` ([Product to install](profile-properties-product-to-install.md))

* cannot be null

* defined in: [Profile](profile-properties-product-to-install.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product")

### product Type

`object` ([Product to install](profile-properties-product-to-install.md))

## network



`network`

* is optional

* Type: `object` ([Network settings](profile-properties-network-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network")

### network Type

`object` ([Network settings](profile-properties-network-settings.md))

## user



`user`

* is optional

* Type: `object` ([First user settings](profile-properties-first-user-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-first-user-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user")

### user Type

`object` ([First user settings](profile-properties-first-user-settings.md))

## root



`root`

* is optional

* Type: `object` ([Root authentication settings](profile-properties-root-authentication-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-root-authentication-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root")

### root Type

`object` ([Root authentication settings](profile-properties-root-authentication-settings.md))

## localization



`localization`

* is optional

* Type: `object` ([Localization settings](profile-properties-localization-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-localization-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization")

### localization Type

`object` ([Localization settings](profile-properties-localization-settings.md))

## storage

Storage config.

> Based on doc/auto\_storage.md

`storage`

* is optional

* Type: `object` ([Config](storage-1.md))

* cannot be null

* defined in: [Profile](storage-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/properties/storage")

### storage Type

`object` ([Config](storage-1.md))

## legacyAutoyastStorage

Accepts all options of the AutoYaST partitioning section (i.e., XML to JSON)

`legacyAutoyastStorage`

* is optional

* Type: `object[]` ([Details](profile-properties-legacy-autoyast-storage-settings-items.md))

* cannot be null

* defined in: [Profile](profile-properties-legacy-autoyast-storage-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/legacyAutoyastStorage")

### legacyAutoyastStorage Type

`object[]` ([Details](profile-properties-legacy-autoyast-storage-settings-items.md))

# Profile Definitions

## Definitions group preScript

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript"}
```

| Property            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                    |
| :------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)       | `string`      | Required | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript/properties/name")                |
| [body](#body)       | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript/properties/body")      |
| [content](#content) | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript/properties/content") |
| [url](#url)         | Not specified | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript/properties/url")           |

### name

Script name, to be used as file name

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript/properties/name")

#### name Type

`string`

### body

Script content, starting with the shebang. DEPRECATED: replaced by 'content'

`body`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-content.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript/properties/body")

#### body Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-content.md))

### content

Script content, starting with the shebang.

`content`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-content-1.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript/properties/content")

#### content Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-content-1.md))

### url

URL to fetch the script from

`url`

* is optional

* Type: unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-url.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/preScript/properties/url")

#### url Type

unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-before-the-installation-starts-properties-script-url.md))

## Definitions group postPartitioning

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning"}
```

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                            |
| :-------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)       | `string`      | Required | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/name")                |
| [body](#body-1)       | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/body")      |
| [content](#content-1) | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/content") |
| [url](#url-1)         | Not specified | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/url")           |

### name

Script name, to be used as file name

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/name")

#### name Type

`string`

### body

Script content, starting with the shebang. DEPRECATED: replaced by 'content'

`body`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/body")

#### body Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content.md))

### content

Script content, starting with the shebang.

`content`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content-1.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/content")

#### content Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content-1.md))

### url

URL to fetch the script from

`url`

* is optional

* Type: unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-url.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/url")

#### url Type

unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-url.md))

## Definitions group postScript

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript"}
```

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                             |
| :-------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-2)       | `string`      | Required | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/name")                                                                       |
| [body](#body-2)       | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/body")                                                             |
| [content](#content-2) | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/content")                                                        |
| [url](#url-2)         | Not specified | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/url")                                                                  |
| [chroot](#chroot)     | `boolean`     | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-whether-it-should-run-in-the-installed-system-using-a-chroot-environment.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/chroot") |

### name

Script name, to be used as file name

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/name")

#### name Type

`string`

### body

Script content, starting with the shebang. DEPRECATED: replaced by 'content'

`body`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-content.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/body")

#### body Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-content.md))

### content

Script content, starting with the shebang.

`content`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-content-1.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/content")

#### content Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-content-1.md))

### url

URL to fetch the script from

`url`

* is optional

* Type: unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-url.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/url")

#### url Type

unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-script-url.md))

### chroot

whether to chroot to the target system (default: yes) or not

`chroot`

* is optional

* Type: `boolean` ([Whether it should run in the installed system using a chroot environment](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-whether-it-should-run-in-the-installed-system-using-a-chroot-environment.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-whether-it-should-run-in-the-installed-system-using-a-chroot-environment.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postScript/properties/chroot")

#### chroot Type

`boolean` ([Whether it should run in the installed system using a chroot environment](profile-defs-user-defined-installation-script-that-runs-after-the-installation-finishes-properties-whether-it-should-run-in-the-installed-system-using-a-chroot-environment.md))

## Definitions group initScript

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript"}
```

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                   |
| :-------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-3)       | `string`      | Required | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/name")                |
| [body](#body-3)       | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/body")      |
| [content](#content-3) | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/content") |
| [url](#url-3)         | Not specified | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/url")           |

### name

Script name, to be used as file name

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/name")

#### name Type

`string`

### body

Script content, starting with the shebang. DEPRECATED: replaced by 'content'

`body`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/body")

#### body Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content.md))

### content

Script content, starting with the shebang.

`content`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content-1.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/content")

#### content Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content-1.md))

### url

URL to fetch the script from

`url`

* is optional

* Type: unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-url.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/url")

#### url Type

unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-url.md))

## Definitions group file

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file"}
```

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                     |
| :-------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [destination](#destination) | `string`      | Required | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-destination.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/destination")      |
| [content](#content-4)       | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/content")         |
| [url](#url-4)               | Not specified | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/url")                 |
| [permissions](#permissions) | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-permissions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/permissions") |
| [user](#user-1)             | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-owner-user.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/user")         |
| [group](#group)             | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-owner-group.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/group")       |

### destination

path where file should be deployed

`destination`

* is required

* Type: `string`

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-destination.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/destination")

#### destination Type

`string`

### content

File content

`content`

* is optional

* Type: `string` ([File content](profile-defs-user-defined-file-to-deploy-properties-file-content.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/content")

#### content Type

`string` ([File content](profile-defs-user-defined-file-to-deploy-properties-file-content.md))

### url

URL to fetch the file from

`url`

* is optional

* Type: unknown ([File URL](profile-defs-user-defined-file-to-deploy-properties-file-url.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/url")

#### url Type

unknown ([File URL](profile-defs-user-defined-file-to-deploy-properties-file-url.md))

### permissions

file permissions on installed system

`permissions`

* is optional

* Type: `string` ([File permissions](profile-defs-user-defined-file-to-deploy-properties-file-permissions.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-permissions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/permissions")

#### permissions Type

`string` ([File permissions](profile-defs-user-defined-file-to-deploy-properties-file-permissions.md))

### user

User owning the file on installed system. User has to already exist

`user`

* is optional

* Type: `string` ([File owner user](profile-defs-user-defined-file-to-deploy-properties-file-owner-user.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-owner-user.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/user")

#### user Type

`string` ([File owner user](profile-defs-user-defined-file-to-deploy-properties-file-owner-user.md))

### group

Group owning the file on installed system. User has to already exist

`group`

* is optional

* Type: `string` ([File owner group](profile-defs-user-defined-file-to-deploy-properties-file-owner-group.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-owner-group.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/group")

#### group Type

`string` ([File owner group](profile-defs-user-defined-file-to-deploy-properties-file-owner-group.md))
