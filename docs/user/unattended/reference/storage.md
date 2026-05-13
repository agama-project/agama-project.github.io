# Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json
```

Config model

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json](storage.model.schema.json "open original schema") |

## Config Type

`object` ([Config](storage.md))

# Config Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                           |
| :---------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [boot](#boot)                 | `object` | Optional | cannot be null | [Config](storage-defs-boot.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/properties/boot")                       |
| [encryption](#encryption)     | `object` | Optional | cannot be null | [Config](storage-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/properties/encryption")           |
| [drives](#drives)             | `array`  | Optional | cannot be null | [Config](storage-properties-drives.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/properties/drives")             |
| [volumeGroups](#volumegroups) | `array`  | Optional | cannot be null | [Config](storage-properties-volumegroups.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/properties/volumeGroups") |

## boot



`boot`

* is optional

* Type: `object` ([Details](storage-defs-boot.md))

* cannot be null

* defined in: [Config](storage-defs-boot.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/properties/boot")

### boot Type

`object` ([Details](storage-defs-boot.md))

## encryption



`encryption`

* is optional

* Type: `object` ([Details](storage-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/properties/encryption")

### encryption Type

`object` ([Details](storage-defs-encryption.md))

## drives



`drives`

* is optional

* Type: `object[]` ([Details](storage-defs-drive.md))

* cannot be null

* defined in: [Config](storage-properties-drives.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/properties/drives")

### drives Type

`object[]` ([Details](storage-defs-drive.md))

## volumeGroups



`volumeGroups`

* is optional

* Type: `object[]` ([Details](storage-defs-volumegroup.md))

* cannot be null

* defined in: [Config](storage-properties-volumegroups.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/properties/volumeGroups")

### volumeGroups Type

`object[]` ([Details](storage-defs-volumegroup.md))

# Config Definitions

## Definitions group boot

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot"}
```

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                          |
| :---------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [configure](#configure) | `boolean` | Required | cannot be null | [Config](storage-defs-boot-properties-configure.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot/properties/configure") |
| [device](#device)       | `object`  | Optional | cannot be null | [Config](storage-defs-bootdevice.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot/properties/device")                   |

### configure



`configure`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-boot-properties-configure.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot/properties/configure")

#### configure Type

`boolean`

### device



`device`

* is optional

* Type: `object` ([Details](storage-defs-bootdevice.md))

* cannot be null

* defined in: [Config](storage-defs-bootdevice.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot/properties/device")

#### device Type

`object` ([Details](storage-defs-bootdevice.md))

## Definitions group bootDevice

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/bootDevice"}
```

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [default](#default) | `boolean` | Required | cannot be null | [Config](storage-defs-bootdevice-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/bootDevice/properties/default") |
| [name](#name)       | `string`  | Optional | cannot be null | [Config](storage-defs-bootdevice-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/bootDevice/properties/name")       |

### default



`default`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-bootdevice-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/bootDevice/properties/default")

#### default Type

`boolean`

### name



`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-bootdevice-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/bootDevice/properties/name")

#### name Type

`string`

## Definitions group encryption

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption"}
```

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :-------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [method](#method)     | Not specified | Required | cannot be null | [Config](storage-defs-encryption-properties-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption/properties/method")     |
| [password](#password) | `string`      | Optional | cannot be null | [Config](storage-defs-encryption-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption/properties/password") |

### method



`method`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-encryption-properties-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption/properties/method")

#### method Type

unknown

#### method Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"luks1"`  |             |
| `"luks2"`  |             |
| `"tpmFde"` |             |

### password



`password`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-encryption-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption/properties/password")

#### password Type

`string`

## Definitions group encryptionMethod

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryptionMethod"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group drive

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive"}
```

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                |
| :-------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)             | `string`      | Required | cannot be null | [Config](storage-defs-drive-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/name")               |
| [mountPath](#mountpath)     | `string`      | Optional | cannot be null | [Config](storage-defs-drive-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/mountPath")     |
| [filesystem](#filesystem)   | `object`      | Optional | cannot be null | [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/filesystem")                    |
| [spacePolicy](#spacepolicy) | Not specified | Optional | cannot be null | [Config](storage-defs-drive-properties-spacepolicy.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/spacePolicy") |
| [ptableType](#ptabletype)   | Not specified | Optional | cannot be null | [Config](storage-defs-drive-properties-ptabletype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/ptableType")   |
| [partitions](#partitions)   | `array`       | Optional | cannot be null | [Config](storage-defs-drive-properties-partitions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/partitions")   |

### name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-drive-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/name")

#### name Type

`string`

### mountPath



`mountPath`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-drive-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/mountPath")

#### mountPath Type

`string`

### filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/filesystem")

#### filesystem Type

`object` ([Details](storage-defs-filesystem.md))

### spacePolicy



`spacePolicy`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-drive-properties-spacepolicy.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/spacePolicy")

#### spacePolicy Type

unknown

#### spacePolicy Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"delete"` |             |
| `"resize"` |             |
| `"keep"`   |             |
| `"custom"` |             |

### ptableType



`ptableType`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-drive-properties-ptabletype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/ptableType")

#### ptableType Type

unknown

#### ptableType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"gpt"`   |             |
| `"msdos"` |             |
| `"dasd"`  |             |

### partitions



`partitions`

* is optional

* Type: `object[]` ([Details](storage-defs-partition.md))

* cannot be null

* defined in: [Config](storage-defs-drive-properties-partitions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/drive/properties/partitions")

#### partitions Type

`object[]` ([Details](storage-defs-partition.md))

## Definitions group partition

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition"}
```

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :-------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name-2)                   | `string`      | Optional | cannot be null | [Config](storage-defs-partition-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/name")                     |
| [id](#id)                         | Not specified | Optional | cannot be null | [Config](storage-defs-partition-properties-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/id")                         |
| [mountPath](#mountpath-1)         | `string`      | Optional | cannot be null | [Config](storage-defs-partition-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/mountPath")           |
| [filesystem](#filesystem-1)       | `object`      | Optional | cannot be null | [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/filesystem")                              |
| [size](#size)                     | `object`      | Optional | cannot be null | [Config](storage-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/size")                                          |
| [delete](#delete)                 | `boolean`     | Optional | cannot be null | [Config](storage-defs-partition-properties-delete.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/delete")                 |
| [deleteIfNeeded](#deleteifneeded) | `boolean`     | Optional | cannot be null | [Config](storage-defs-partition-properties-deleteifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/deleteIfNeeded") |
| [resize](#resize)                 | `boolean`     | Optional | cannot be null | [Config](storage-defs-partition-properties-resize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/resize")                 |
| [resizeIfNeeded](#resizeifneeded) | `boolean`     | Optional | cannot be null | [Config](storage-defs-partition-properties-resizeifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/resizeIfNeeded") |

### name



`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/name")

#### name Type

`string`

### id



`id`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-partition-properties-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/id")

#### id Type

unknown

#### id Constraints

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

### mountPath



`mountPath`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/mountPath")

#### mountPath Type

`string`

### filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/filesystem")

#### filesystem Type

`object` ([Details](storage-defs-filesystem.md))

### size



`size`

* is optional

* Type: `object` ([Details](storage-defs-size.md))

* cannot be null

* defined in: [Config](storage-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/size")

#### size Type

`object` ([Details](storage-defs-size.md))

### delete



`delete`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-delete.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/delete")

#### delete Type

`boolean`

### deleteIfNeeded



`deleteIfNeeded`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-deleteifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/deleteIfNeeded")

#### deleteIfNeeded Type

`boolean`

### resize



`resize`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-resize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/resize")

#### resize Type

`boolean`

### resizeIfNeeded



`resizeIfNeeded`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-partition-properties-resizeifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partition/properties/resizeIfNeeded")

#### resizeIfNeeded Type

`boolean`

## Definitions group volumeGroup

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup"}
```

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                  |
| :-------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vgName](#vgname)                 | `string`  | Required | cannot be null | [Config](storage-defs-volumegroup-properties-vgname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/vgName")                 |
| [extentSize](#extentsize)         | `integer` | Optional | cannot be null | [Config](storage-defs-volumegroup-properties-extentsize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/extentSize")         |
| [targetDevices](#targetdevices)   | `array`   | Optional | cannot be null | [Config](storage-defs-volumegroup-properties-targetdevices.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/targetDevices")   |
| [logicalVolumes](#logicalvolumes) | `array`   | Optional | cannot be null | [Config](storage-defs-volumegroup-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/logicalVolumes") |

### vgName



`vgName`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-volumegroup-properties-vgname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/vgName")

#### vgName Type

`string`

### extentSize



`extentSize`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-volumegroup-properties-extentsize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/extentSize")

#### extentSize Type

`integer`

### targetDevices



`targetDevices`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-defs-volumegroup-properties-targetdevices.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/targetDevices")

#### targetDevices Type

`string[]`

### logicalVolumes



`logicalVolumes`

* is optional

* Type: `object[]` ([Details](storage-defs-logicalvolume.md))

* cannot be null

* defined in: [Config](storage-defs-volumegroup-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/volumeGroup/properties/logicalVolumes")

#### logicalVolumes Type

`object[]` ([Details](storage-defs-logicalvolume.md))

## Definitions group logicalVolume

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume"}
```

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :-------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [lvName](#lvname)           | `string`  | Optional | cannot be null | [Config](storage-defs-logicalvolume-properties-lvname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/lvName")         |
| [mountPath](#mountpath-2)   | `string`  | Optional | cannot be null | [Config](storage-defs-logicalvolume-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/mountPath")   |
| [filesystem](#filesystem-2) | `object`  | Optional | cannot be null | [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/filesystem")                          |
| [size](#size-1)             | `object`  | Optional | cannot be null | [Config](storage-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/size")                                      |
| [stripes](#stripes)         | `integer` | Optional | cannot be null | [Config](storage-defs-logicalvolume-properties-stripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/stripes")       |
| [stripeSize](#stripesize)   | `integer` | Optional | cannot be null | [Config](storage-defs-logicalvolume-properties-stripesize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/stripeSize") |

### lvName



`lvName`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-logicalvolume-properties-lvname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/lvName")

#### lvName Type

`string`

### mountPath



`mountPath`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-logicalvolume-properties-mountpath.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/mountPath")

#### mountPath Type

`string`

### filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/filesystem")

#### filesystem Type

`object` ([Details](storage-defs-filesystem.md))

### size



`size`

* is optional

* Type: `object` ([Details](storage-defs-size.md))

* cannot be null

* defined in: [Config](storage-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/size")

#### size Type

`object` ([Details](storage-defs-size.md))

### stripes



`stripes`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-logicalvolume-properties-stripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/stripes")

#### stripes Type

`integer`

### stripeSize



`stripeSize`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-logicalvolume-properties-stripesize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/logicalVolume/properties/stripeSize")

#### stripeSize Type

`integer`

## Definitions group spacePolicy

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/spacePolicy"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ptableType

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/ptableType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group partitionId

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/partitionId"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group filesystem

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem"}
```

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :---------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [reuse](#reuse)         | `boolean`     | Optional | cannot be null | [Config](storage-defs-filesystem-properties-reuse.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/reuse")         |
| [default](#default-1)   | `boolean`     | Required | cannot be null | [Config](storage-defs-filesystem-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/default")     |
| [type](#type)           | Not specified | Optional | cannot be null | [Config](storage-defs-filesystem-properties-type.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/type")           |
| [snapshots](#snapshots) | `boolean`     | Optional | cannot be null | [Config](storage-defs-filesystem-properties-snapshots.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/snapshots") |
| [label](#label)         | `string`      | Optional | cannot be null | [Config](storage-defs-filesystem-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/label")         |

### reuse



`reuse`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-reuse.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/reuse")

#### reuse Type

`boolean`

### default



`default`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/default")

#### default Type

`boolean`

### type



`type`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-type.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/type")

#### type Type

unknown

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"bcachefs"` |             |
| `"btrfs"`    |             |
| `"exfat"`    |             |
| `"ext2"`     |             |
| `"ext3"`     |             |
| `"ext4"`     |             |
| `"f2fs"`     |             |
| `"jfs"`      |             |
| `"nfs"`      |             |
| `"nilfs2"`   |             |
| `"ntfs"`     |             |
| `"reiserfs"` |             |
| `"swap"`     |             |
| `"tmpfs"`    |             |
| `"vfat"`     |             |
| `"xfs"`      |             |

### snapshots



`snapshots`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-snapshots.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/snapshots")

#### snapshots Type

`boolean`

### label



`label`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/label")

#### label Type

`string`

## Definitions group filesystemType

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystemType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group size

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size"}
```

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                      |
| :-------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [default](#default-2) | `boolean` | Required | cannot be null | [Config](storage-defs-size-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/default") |
| [min](#min)           | `integer` | Required | cannot be null | [Config](storage-defs-size-properties-min.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/min")         |
| [max](#max)           | `integer` | Optional | cannot be null | [Config](storage-defs-size-properties-max.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/max")         |

### default



`default`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-size-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/default")

#### default Type

`boolean`

### min



`min`

* is required

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-size-properties-min.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/min")

#### min Type

`integer`

#### min Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### max



`max`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-size-properties-max.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/max")

#### max Type

`integer`

#### max Constraints

**minimum**: the value of this number must greater than or equal to: `0`
