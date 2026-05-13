# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## partitionedDrive Type

`object` ([Details](storage-1-defs-partitioneddrive.md))

# partitionedDrive Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :------------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search)         | Merged        | Optional | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/search")                              |
| [alias](#alias)           | `string`      | Optional | cannot be null | [Config](storage-1-defs-partitioneddrive-properties-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/alias")           |
| [ptableType](#ptabletype) | Not specified | Optional | cannot be null | [Config](storage-1-defs-partitioneddrive-properties-ptabletype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/ptableType") |
| [partitions](#partitions) | `array`       | Optional | cannot be null | [Config](storage-1-defs-partitioneddrive-properties-partitions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/partitions") |

## search



`search`

* is optional

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/search")

### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-searchelement-anyof-0.md "check type definition")

* [Untitled string in Config](storage-1-defs-searchelement-anyof-1.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

## alias

Alias used to reference a device.

`alias`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-partitioneddrive-properties-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/alias")

### alias Type

`string`

## ptableType

Partition table type.

> The partition table is created only if all the current partitions are deleted.

`ptableType`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-partitioneddrive-properties-ptabletype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/ptableType")

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

* Type: an array of merged types ([Details](storage-1-defs-partitioneddrive-properties-partitions-items.md))

* cannot be null

* defined in: [Config](storage-1-defs-partitioneddrive-properties-partitions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/partitions")

### partitions Type

an array of merged types ([Details](storage-1-defs-partitioneddrive-properties-partitions-items.md))
