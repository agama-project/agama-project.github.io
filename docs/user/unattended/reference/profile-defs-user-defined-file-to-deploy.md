# User-defined file to deploy Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## file Type

`object` ([User-defined file to deploy](profile-defs-user-defined-file-to-deploy.md))

one (and only one) of

* [Untitled undefined type in Profile](profile-defs-user-defined-file-to-deploy-oneof-0.md "check type definition")

* [Untitled undefined type in Profile](profile-defs-user-defined-file-to-deploy-oneof-1.md "check type definition")

# file Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                     |
| :-------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [destination](#destination) | `string`      | Required | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-destination.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/destination")      |
| [content](#content)         | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/content")         |
| [url](#url)                 | Not specified | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/url")                 |
| [permissions](#permissions) | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-permissions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/permissions") |
| [user](#user)               | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-owner-user.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/user")         |
| [group](#group)             | `string`      | Optional | cannot be null | [Profile](profile-defs-user-defined-file-to-deploy-properties-file-owner-group.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/group")       |

## destination

path where file should be deployed

`destination`

* is required

* Type: `string`

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-destination.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/destination")

### destination Type

`string`

## content

File content

`content`

* is optional

* Type: `string` ([File content](profile-defs-user-defined-file-to-deploy-properties-file-content.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-content.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/content")

### content Type

`string` ([File content](profile-defs-user-defined-file-to-deploy-properties-file-content.md))

## url

URL to fetch the file from

`url`

* is optional

* Type: unknown ([File URL](profile-defs-user-defined-file-to-deploy-properties-file-url.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-url.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/url")

### url Type

unknown ([File URL](profile-defs-user-defined-file-to-deploy-properties-file-url.md))

## permissions

file permissions on installed system

`permissions`

* is optional

* Type: `string` ([File permissions](profile-defs-user-defined-file-to-deploy-properties-file-permissions.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-permissions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/permissions")

### permissions Type

`string` ([File permissions](profile-defs-user-defined-file-to-deploy-properties-file-permissions.md))

## user

User owning the file on installed system. User has to already exist

`user`

* is optional

* Type: `string` ([File owner user](profile-defs-user-defined-file-to-deploy-properties-file-owner-user.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-owner-user.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/user")

### user Type

`string` ([File owner user](profile-defs-user-defined-file-to-deploy-properties-file-owner-user.md))

## group

Group owning the file on installed system. User has to already exist

`group`

* is optional

* Type: `string` ([File owner group](profile-defs-user-defined-file-to-deploy-properties-file-owner-group.md))

* cannot be null

* defined in: [Profile](profile-defs-user-defined-file-to-deploy-properties-file-owner-group.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/$defs/file/properties/group")

### group Type

`string` ([File owner group](profile-defs-user-defined-file-to-deploy-properties-file-owner-group.md))
