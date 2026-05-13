# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json\*](storage.model.schema.json "open original schema") |

## drive Type

`object` ([Details](storage-defs-drive.md))

# drive Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                |
| :-------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)               | `string`      | Required | cannot be null | [Config](storage-defs-drive-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/name")               |
| [mountPath](#mountpath)     | `string`      | Optional | cannot be null | [Config](storage-defs-drive-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/mountPath")     |
| [filesystem](#filesystem)   | `object`      | Optional | cannot be null | [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/filesystem")                    |
| [spacePolicy](#spacepolicy) | Not specified | Optional | cannot be null | [Config](storage-defs-drive-properties-spacepolicy.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/spacePolicy") |
| [ptableType](#ptabletype)   | Not specified | Optional | cannot be null | [Config](storage-defs-drive-properties-ptabletype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/ptableType")   |
| [partitions](#partitions)   | `array`       | Optional | cannot be null | [Config](storage-defs-drive-properties-partitions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/partitions")   |

## name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-drive-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/name")

### name Type

`string`

## mountPath



`mountPath`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-drive-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/mountPath")

### mountPath Type

`string`

## filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/filesystem")

### filesystem Type

`object` ([Details](storage-defs-filesystem.md))

## spacePolicy



`spacePolicy`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-drive-properties-spacepolicy.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/spacePolicy")

### spacePolicy Type

unknown

### spacePolicy Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"delete"` |             |
| `"resize"` |             |
| `"keep"`   |             |
| `"custom"` |             |

## ptableType



`ptableType`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-drive-properties-ptabletype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/ptableType")

### ptableType Type

unknown

### ptableType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"gpt"`   |             |
| `"msdos"` |             |
| `"dasd"`  |             |

## partitions



`partitions`

* is optional

* Type: `object[]` ([Details](storage-defs-partition.md))

* cannot be null

* defined in: [Config](storage-defs-drive-properties-partitions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/partitions")

### partitions Type

`object[]` ([Details](storage-defs-partition.md))
