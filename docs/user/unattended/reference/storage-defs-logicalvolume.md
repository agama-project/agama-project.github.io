# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json\*](storage.model.schema.json "open original schema") |

## logicalVolume Type

`object` ([Details](storage-defs-logicalvolume.md))

# logicalVolume Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [lvName](#lvname)         | `string`  | Optional | cannot be null | [Config](storage-defs-logicalvolume-properties-lvname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/lvName")         |
| [mountPath](#mountpath)   | `string`  | Optional | cannot be null | [Config](storage-defs-logicalvolume-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/mountPath")   |
| [filesystem](#filesystem) | `object`  | Optional | cannot be null | [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/filesystem")                          |
| [size](#size)             | `object`  | Optional | cannot be null | [Config](storage-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/size")                                      |
| [stripes](#stripes)       | `integer` | Optional | cannot be null | [Config](storage-defs-logicalvolume-properties-stripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/stripes")       |
| [stripeSize](#stripesize) | `integer` | Optional | cannot be null | [Config](storage-defs-logicalvolume-properties-stripesize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/stripeSize") |

## lvName



`lvName`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-logicalvolume-properties-lvname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/lvName")

### lvName Type

`string`

## mountPath



`mountPath`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-logicalvolume-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/mountPath")

### mountPath Type

`string`

## filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/filesystem")

### filesystem Type

`object` ([Details](storage-defs-filesystem.md))

## size



`size`

* is optional

* Type: `object` ([Details](storage-defs-size.md))

* cannot be null

* defined in: [Config](storage-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/size")

### size Type

`object` ([Details](storage-defs-size.md))

## stripes



`stripes`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-logicalvolume-properties-stripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/stripes")

### stripes Type

`integer`

## stripeSize



`stripeSize`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-logicalvolume-properties-stripesize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/stripeSize")

### stripeSize Type

`integer`
