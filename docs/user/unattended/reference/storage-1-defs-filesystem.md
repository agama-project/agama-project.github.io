# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## filesystem Type

`object` ([Details](storage-1-defs-filesystem.md))

# filesystem Properties

| Property                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :---------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [reuseIfPossible](#reuseifpossible) | `boolean`     | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-reuseifpossible.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/reuseIfPossible") |
| [type](#type)                       | Merged        | Optional | cannot be null | [Config](storage-1-defs-filesystemtype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/type")                                   |
| [label](#label)                     | `string`      | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/label")                     |
| [path](#path)                       | `string`      | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-path.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/path")                       |
| [mountBy](#mountby)                 | Not specified | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-mount-by.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountBy")                |
| [mkfsOptions](#mkfsoptions)         | `array`       | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-mkfsoptions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mkfsOptions")         |
| [mountOptions](#mountoptions)       | `array`       | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-mountoptions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountOptions")       |

## reuseIfPossible

Try to reuse the existing file system. In some cases the file system could not be reused, for example, if the device is re-encrypted.

`reuseIfPossible`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-reuseifpossible.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/reuseIfPossible")

### reuseIfPossible Type

`boolean`

## type



`type`

* is optional

* Type: merged type ([Details](storage-1-defs-filesystemtype.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystemtype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/type")

### type Type

merged type ([Details](storage-1-defs-filesystemtype.md))

any of

* [Untitled undefined type in Config](storage-1-defs-filesystemtype-anyof-0.md "check type definition")

* [Untitled object in Config](storage-1-defs-filesystemtypebtrfs.md "check type definition")

## label

File system label.

`label`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/label")

### label Type

`string`

## path

Mount path.

`path`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-path.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/path")

### path Type

`string`

### path Examples

```json
"/var/log"
```

## mountBy

How to mount the device.

`mountBy`

* is optional

* Type: unknown ([Mount by](storage-1-defs-filesystem-properties-mount-by.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-mount-by.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountBy")

### mountBy Type

unknown ([Mount by](storage-1-defs-filesystem-properties-mount-by.md))

### mountBy Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"device"` |             |
| `"id"`     |             |
| `"label"`  |             |
| `"path"`   |             |
| `"uuid"`   |             |

## mkfsOptions

Options for creating the file system.

`mkfsOptions`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-mkfsoptions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mkfsOptions")

### mkfsOptions Type

`string[]`

## mountOptions

Options to add to the fourth field of fstab.

`mountOptions`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-mountoptions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountOptions")

### mountOptions Type

`string[]`
