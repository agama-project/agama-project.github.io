# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json\*](storage.model.schema.json "open original schema") |

## partition Type

`object` ([Details](storage-defs-partition.md))

# partition Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :-------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)                     | `string`      | Optional | cannot be null | [Config](storage-defs-partition-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/name")                     |
| [id](#id)                         | Not specified | Optional | cannot be null | [Config](storage-defs-partition-properties-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/id")                         |
| [mountPath](#mountpath)           | `string`      | Optional | cannot be null | [Config](storage-defs-partition-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/mountPath")           |
| [filesystem](#filesystem)         | `object`      | Optional | cannot be null | [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/filesystem")                              |
| [size](#size)                     | `object`      | Optional | cannot be null | [Config](storage-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/size")                                          |
| [delete](#delete)                 | `boolean`     | Optional | cannot be null | [Config](storage-defs-partition-properties-delete.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/delete")                 |
| [deleteIfNeeded](#deleteifneeded) | `boolean`     | Optional | cannot be null | [Config](storage-defs-partition-properties-deleteifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/deleteIfNeeded") |
| [resize](#resize)                 | `boolean`     | Optional | cannot be null | [Config](storage-defs-partition-properties-resize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/resize")                 |
| [resizeIfNeeded](#resizeifneeded) | `boolean`     | Optional | cannot be null | [Config](storage-defs-partition-properties-resizeifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/resizeIfNeeded") |

## name



`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/name")

### name Type

`string`

## id



`id`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-partition-properties-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/id")

### id Type

unknown

### id Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"linux"`     |             |
| `"swap"`      |             |
| `"lvm"`       |             |
| `"raid"`      |             |
| `"esp"`       |             |
| `"prep"`      |             |
| `"bios_boot"` |             |

## mountPath



`mountPath`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/mountPath")

### mountPath Type

`string`

## filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/filesystem")

### filesystem Type

`object` ([Details](storage-defs-filesystem.md))

## size



`size`

* is optional

* Type: `object` ([Details](storage-defs-size.md))

* cannot be null

* defined in: [Config](storage-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/size")

### size Type

`object` ([Details](storage-defs-size.md))

## delete



`delete`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-delete.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/delete")

### delete Type

`boolean`

## deleteIfNeeded



`deleteIfNeeded`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-deleteifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/deleteIfNeeded")

### deleteIfNeeded Type

`boolean`

## resize



`resize`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-resize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/resize")

### resize Type

`boolean`

## resizeIfNeeded



`resizeIfNeeded`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-resizeifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/resizeIfNeeded")

### resizeIfNeeded Type

`boolean`
