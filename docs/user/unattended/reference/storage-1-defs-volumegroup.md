# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup
```

LVM volume group.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## volumeGroup Type

`object` ([Details](storage-1-defs-volumegroup.md))

# volumeGroup Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :---------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                       | `string` | Required | cannot be null | [Config](storage-1-defs-volumegroup-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/name")                       |
| [extentSize](#extentsize)           | Merged   | Optional | cannot be null | [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/extentSize")                                   |
| [physicalVolumes](#physicalvolumes) | `array`  | Optional | cannot be null | [Config](storage-1-defs-volumegroup-properties-physicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/physicalVolumes") |
| [logicalVolumes](#logicalvolumes)   | `array`  | Optional | cannot be null | [Config](storage-1-defs-volumegroup-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/logicalVolumes")   |

## name

Volume group name.

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-volumegroup-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/name")

### name Type

`string`

### name Examples

```json
"vg0"
```

## extentSize



`extentSize`

* is optional

* Type: merged type ([Details](storage-1-defs-sizevalue.md))

* cannot be null

* defined in: [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/extentSize")

### extentSize Type

merged type ([Details](storage-1-defs-sizevalue.md))

any of

* [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

* [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")

## physicalVolumes

Devices to use as physical volumes.

`physicalVolumes`

* is optional

* Type: an array of merged types ([Details](storage-1-defs-physicalvolumeelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-volumegroup-properties-physicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/physicalVolumes")

### physicalVolumes Type

an array of merged types ([Details](storage-1-defs-physicalvolumeelement.md))

## logicalVolumes



`logicalVolumes`

* is optional

* Type: an array of merged types ([Details](storage-1-defs-volumegroup-properties-logicalvolumes-items.md))

* cannot be null

* defined in: [Config](storage-1-defs-volumegroup-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/logicalVolumes")

### logicalVolumes Type

an array of merged types ([Details](storage-1-defs-volumegroup-properties-logicalvolumes-items.md))
