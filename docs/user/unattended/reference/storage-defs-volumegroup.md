# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json\*](storage.model.schema.json "open original schema") |

## volumeGroup Type

`object` ([Details](storage-defs-volumegroup.md))

# volumeGroup Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                  |
| :-------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vgName](#vgname)                 | `string`  | Required | cannot be null | [Config](storage-defs-volumegroup-properties-vgname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/vgName")                 |
| [extentSize](#extentsize)         | `integer` | Optional | cannot be null | [Config](storage-defs-volumegroup-properties-extentsize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/extentSize")         |
| [targetDevices](#targetdevices)   | `array`   | Optional | cannot be null | [Config](storage-defs-volumegroup-properties-targetdevices.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/targetDevices")   |
| [logicalVolumes](#logicalvolumes) | `array`   | Optional | cannot be null | [Config](storage-defs-volumegroup-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/logicalVolumes") |

## vgName



`vgName`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-volumegroup-properties-vgname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/vgName")

### vgName Type

`string`

## extentSize



`extentSize`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-volumegroup-properties-extentsize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/extentSize")

### extentSize Type

`integer`

## targetDevices



`targetDevices`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-defs-volumegroup-properties-targetdevices.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/targetDevices")

### targetDevices Type

`string[]`

## logicalVolumes



`logicalVolumes`

* is optional

* Type: `object[]` ([Details](storage-defs-logicalvolume.md))

* cannot be null

* defined in: [Config](storage-defs-volumegroup-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/logicalVolumes")

### logicalVolumes Type

`object[]` ([Details](storage-defs-logicalvolume.md))
