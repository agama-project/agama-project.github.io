# User-defined installation script that runs during the first boot of the target system, once the installation is finished Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## initScript Type

`object` ([User-defined installation script that runs during the first boot of the target system, once the installation is finished](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished.md))

one (and only one) of

* [Untitled undefined type in Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-oneof-0.md "check type definition")

* [Untitled undefined type in Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-oneof-1.md "check type definition")

* [Untitled undefined type in Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-oneof-2.md "check type definition")

# initScript Properties

| Property            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                   |
| :------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)       | `string`      | Required | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/name")                |
| [body](#body)       | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/body")      |
| [content](#content) | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/content") |
| [url](#url)         | Not specified | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/url")           |

## name

Script name, to be used as file name

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/name")

### name Type

`string`

## body

Script content, starting with the shebang. DEPRECATED: replaced by 'content'

`body`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/body")

### body Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content.md))

## content

Script content, starting with the shebang.

`content`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content-1.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/content")

### content Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-content-1.md))

## url

URL to fetch the script from

`url`

* is optional

* Type: unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-url.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/initScript/properties/url")

### url Type

unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-during-the-first-boot-of-the-target-system-once-the-installation-is-finished-properties-script-url.md))
