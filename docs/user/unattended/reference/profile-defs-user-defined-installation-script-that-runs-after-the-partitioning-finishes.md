# User-defined installation script that runs after the partitioning finishes Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## postPartitioning Type

`object` ([User-defined installation script that runs after the partitioning finishes](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes.md))

one (and only one) of

* [Untitled undefined type in Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-oneof-0.md "check type definition")

* [Untitled undefined type in Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-oneof-1.md "check type definition")

* [Untitled undefined type in Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-oneof-2.md "check type definition")

# postPartitioning Properties

| Property            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                            |
| :------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)       | `string`      | Required | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/name")                |
| [body](#body)       | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/body")      |
| [content](#content) | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/content") |
| [url](#url)         | Not specified | Optional | cannot be null | [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/url")           |

## name

Script name, to be used as file name

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/name")

### name Type

`string`

## body

Script content, starting with the shebang. DEPRECATED: replaced by 'content'

`body`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/body")

### body Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content.md))

## content

Script content, starting with the shebang.

`content`

* is optional

* Type: `string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content-1.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/content")

### content Type

`string` ([Script content](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-content-1.md))

## url

URL to fetch the script from

`url`

* is optional

* Type: unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-url.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/postPartitioning/properties/url")

### url Type

unknown ([Script URL](profile-defs-user-defined-installation-script-that-runs-after-the-partitioning-finishes-properties-script-url.md))
