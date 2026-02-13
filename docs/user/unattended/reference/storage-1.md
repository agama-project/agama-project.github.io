# Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json
```

Storage config.

> Based on doc/auto\_storage.md

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json](storage.schema.json "open original schema") |

## Config Type

`object` ([Config](storage-1.md))

# Config Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :---------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [boot](#boot)                 | `object` | Optional | cannot be null | [Config](storage-1-defs-boot.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/properties/boot")                       |
| [drives](#drives)             | `array`  | Optional | cannot be null | [Config](storage-1-properties-drives.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/properties/drives")             |
| [volumeGroups](#volumegroups) | `array`  | Optional | cannot be null | [Config](storage-1-properties-volumegroups.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/properties/volumeGroups") |

## boot

Allows configuring boot partitions automatically.

`boot`

* is optional

* Type: `object` ([Details](storage-1-defs-boot.md))

* cannot be null

* defined in: [Config](storage-1-defs-boot.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/properties/boot")

### boot Type

`object` ([Details](storage-1-defs-boot.md))

## drives

Drives (disks, BIOS RAIDs and multipath devices).

`drives`

* is optional

* Type: an array of merged types ([Details](storage-1-defs-driveelement.md))

* cannot be null

* defined in: [Config](storage-1-properties-drives.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/properties/drives")

### drives Type

an array of merged types ([Details](storage-1-defs-driveelement.md))

## volumeGroups

LVM volume groups.

`volumeGroups`

* is optional

* Type: `object[]` ([Details](storage-1-defs-volumegroup.md))

* cannot be null

* defined in: [Config](storage-1-properties-volumegroups.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/properties/volumeGroups")

### volumeGroups Type

`object[]` ([Details](storage-1-defs-volumegroup.md))

# Config Definitions

## Definitions group boot

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot"}
```

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                      |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [configure](#configure) | `boolean` | Required | cannot be null | [Config](storage-1-defs-boot-properties-configure.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot/properties/configure") |
| [device](#device)       | `string`  | Optional | cannot be null | [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot/properties/device")                        |

### configure

Whether to configure partitions for booting.

`configure`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-1-defs-boot-properties-configure.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot/properties/configure")

#### configure Type

`boolean`

### device

Alias used to reference a device.

`device`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot/properties/device")

#### device Type

`string`

## Definitions group driveElement

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/driveElement"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group formattedDrive

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                  |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search)         | Merged   | Optional | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/search")  |
| [alias](#alias)           | `string` | Optional | cannot be null | [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/alias")           |
| [encryption](#encryption) | Merged   | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/encryption") |
| [filesystem](#filesystem) | `object` | Required | cannot be null | [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/filesystem") |

### search



`search`

* is optional

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/search")

#### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-simplesearchall.md "check type definition")

* [Untitled string in Config](storage-1-defs-simplesearchbyname.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

### alias

Alias used to reference a device.

`alias`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/alias")

#### alias Type

`string`

### encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/encryption")

#### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryptionswap.md "check type definition")

### filesystem



`filesystem`

* is required

* Type: `object` ([Details](storage-1-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/filesystem")

#### filesystem Type

`object` ([Details](storage-1-defs-filesystem.md))

## Definitions group partitionedDrive

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive"}
```

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :------------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search-1)       | Merged        | Optional | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/search")                              |
| [alias](#alias-1)         | `string`      | Optional | cannot be null | [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/alias")                                       |
| [ptableType](#ptabletype) | Not specified | Optional | cannot be null | [Config](storage-1-defs-ptabletype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/ptableType")                             |
| [partitions](#partitions) | `array`       | Optional | cannot be null | [Config](storage-1-defs-partitioneddrive-properties-partitions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/partitions") |

### search



`search`

* is optional

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/search")

#### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-simplesearchall.md "check type definition")

* [Untitled string in Config](storage-1-defs-simplesearchbyname.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

### alias

Alias used to reference a device.

`alias`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/alias")

#### alias Type

`string`

### ptableType

Partition table type.

> The partition table is created only if all the current partitions are deleted.

`ptableType`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-ptabletype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/ptableType")

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

* Type: an array of merged types ([Details](storage-1-defs-partitionelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-partitioneddrive-properties-partitions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionedDrive/properties/partitions")

#### partitions Type

an array of merged types ([Details](storage-1-defs-partitionelement.md))

## Definitions group ptableType

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/ptableType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group partitionElement

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionElement"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group simpleVolumesGenerator

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simpleVolumesGenerator"}
```

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                        |
| :-------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generate](#generate) | Not specified | Required | cannot be null | [Config](storage-1-defs-simplevolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simpleVolumesGenerator/properties/generate") |

### generate



`generate`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-simplevolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simpleVolumesGenerator/properties/generate")

#### generate Type

unknown

#### generate Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"default"`   |             |
| `"mandatory"` |             |

## Definitions group advancedPartitionsGenerator

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPartitionsGenerator"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                  |
| :---------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generate](#generate-1) | `object` | Required | cannot be null | [Config](storage-1-defs-advancedpartitionsgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPartitionsGenerator/properties/generate") |

### generate



`generate`

* is required

* Type: `object` ([Details](storage-1-defs-advancedpartitionsgenerator-properties-generate.md))

* cannot be null

* defined in: [Config](storage-1-defs-advancedpartitionsgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPartitionsGenerator/properties/generate")

#### generate Type

`object` ([Details](storage-1-defs-advancedpartitionsgenerator-properties-generate.md))

## Definitions group regularPartition

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition"}
```

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :-------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search-2)         | Merged        | Optional | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/search")                        |
| [alias](#alias-2)           | `string`      | Optional | cannot be null | [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/alias")                                 |
| [id](#id)                   | Not specified | Optional | cannot be null | [Config](storage-1-defs-regularpartition-properties-partition-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/id") |
| [size](#size)               | Merged        | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/size")                                   |
| [encryption](#encryption-1) | Merged        | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/encryption")                       |
| [filesystem](#filesystem-1) | `object`      | Optional | cannot be null | [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/filesystem")                       |

### search



`search`

* is optional

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/search")

#### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-simplesearchall.md "check type definition")

* [Untitled string in Config](storage-1-defs-simplesearchbyname.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

### alias

Alias used to reference a device.

`alias`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/alias")

#### alias Type

`string`

### id



`id`

* is optional

* Type: unknown ([Partition id](storage-1-defs-regularpartition-properties-partition-id.md))

* cannot be null

* defined in: [Config](storage-1-defs-regularpartition-properties-partition-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/id")

#### id Type

unknown ([Partition id](storage-1-defs-regularpartition-properties-partition-id.md))

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

### size



`size`

* is optional

* Type: merged type ([Size](storage-1-defs-size.md))

* cannot be null

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/size")

#### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizestring.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizebytes.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")

### encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/encryption")

#### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryptionswap.md "check type definition")

### filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-1-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/filesystem")

#### filesystem Type

`object` ([Details](storage-1-defs-filesystem.md))

## Definitions group partitionToDelete

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete"}
```

| Property            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search-3) | Merged        | Required | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete/properties/search")                       |
| [delete](#delete)   | Not specified | Required | cannot be null | [Config](storage-1-defs-partitiontodelete-properties-delete.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete/properties/delete") |

### search



`search`

* is required

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete/properties/search")

#### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-simplesearchall.md "check type definition")

* [Untitled string in Config](storage-1-defs-simplesearchbyname.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

### delete

Delete the partition.

`delete`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-partitiontodelete-properties-delete.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete/properties/delete")

#### delete Type

unknown

#### delete Constraints

**constant**: the value of this property must be equal to:

```json
true
```

## Definitions group PartitionToDeleteIfNeeded

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded"}
```

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                          |
| :-------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search-4)               | Merged        | Required | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/search")                                               |
| [deleteIfNeeded](#deleteifneeded) | Not specified | Required | cannot be null | [Config](storage-1-defs-partitiontodeleteifneeded-properties-deleteifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/deleteIfNeeded") |
| [size](#size-1)                   | Merged        | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/size")                                                          |

### search



`search`

* is required

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/search")

#### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-simplesearchall.md "check type definition")

* [Untitled string in Config](storage-1-defs-simplesearchbyname.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

### deleteIfNeeded

Delete the partition if needed to make space.

`deleteIfNeeded`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-partitiontodeleteifneeded-properties-deleteifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/deleteIfNeeded")

#### deleteIfNeeded Type

unknown

#### deleteIfNeeded Constraints

**constant**: the value of this property must be equal to:

```json
true
```

### size



`size`

* is optional

* Type: merged type ([Size](storage-1-defs-size.md))

* cannot be null

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/size")

#### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizestring.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizebytes.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")

## Definitions group volumeGroup

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup"}
```

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :---------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                       | `string` | Required | cannot be null | [Config](storage-1-defs-volumegroup-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/name")                       |
| [extentSize](#extentsize)           | Merged   | Optional | cannot be null | [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/extentSize")                                   |
| [physicalVolumes](#physicalvolumes) | `array`  | Optional | cannot be null | [Config](storage-1-defs-volumegroup-properties-physicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/physicalVolumes") |
| [logicalVolumes](#logicalvolumes)   | `array`  | Optional | cannot be null | [Config](storage-1-defs-volumegroup-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/logicalVolumes")   |

### name

Volume group name.

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-volumegroup-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/name")

#### name Type

`string`

#### name Examples

```json
"vg0"
```

### extentSize



`extentSize`

* is optional

* Type: merged type ([Details](storage-1-defs-sizevalue.md))

* cannot be null

* defined in: [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/extentSize")

#### extentSize Type

merged type ([Details](storage-1-defs-sizevalue.md))

any of

* [Untitled string in Config](storage-1-defs-sizestring.md "check type definition")

* [Untitled integer in Config](storage-1-defs-sizebytes.md "check type definition")

### physicalVolumes

Devices to use as physical volumes.

`physicalVolumes`

* is optional

* Type: an array of merged types ([Details](storage-1-defs-physicalvolumeelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-volumegroup-properties-physicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/physicalVolumes")

#### physicalVolumes Type

an array of merged types ([Details](storage-1-defs-physicalvolumeelement.md))

### logicalVolumes



`logicalVolumes`

* is optional

* Type: an array of merged types ([Details](storage-1-defs-logicalvolumeelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-volumegroup-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/volumeGroup/properties/logicalVolumes")

#### logicalVolumes Type

an array of merged types ([Details](storage-1-defs-logicalvolumeelement.md))

## Definitions group physicalVolumeElement

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/physicalVolumeElement"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group simplePhysicalVolumesGenerator

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simplePhysicalVolumesGenerator"}
```

| Property                | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :---------------------- | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generate](#generate-2) | `array` | Required | cannot be null | [Config](storage-1-defs-simplephysicalvolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simplePhysicalVolumesGenerator/properties/generate") |

### generate



`generate`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-1-defs-simplephysicalvolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simplePhysicalVolumesGenerator/properties/generate")

#### generate Type

`string[]`

## Definitions group advancedPhysicalVolumesGenerator

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPhysicalVolumesGenerator"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                            |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [generate](#generate-3) | `object` | Required | cannot be null | [Config](storage-1-defs-advancedphysicalvolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPhysicalVolumesGenerator/properties/generate") |

### generate



`generate`

* is required

* Type: `object` ([Details](storage-1-defs-advancedphysicalvolumesgenerator-properties-generate.md))

* cannot be null

* defined in: [Config](storage-1-defs-advancedphysicalvolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPhysicalVolumesGenerator/properties/generate")

#### generate Type

`object` ([Details](storage-1-defs-advancedphysicalvolumesgenerator-properties-generate.md))

## Definitions group logicalVolumeElement

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolumeElement"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group advancedLogicalVolumesGenerator

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                          |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generate](#generate-4) | `object` | Required | cannot be null | [Config](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate") |

### generate



`generate`

* is required

* Type: `object` ([Details](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate.md))

* cannot be null

* defined in: [Config](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate")

#### generate Type

`object` ([Details](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate.md))

## Definitions group logicalVolume

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume"}
```

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                              |
| :-------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)             | `string`  | Optional | cannot be null | [Config](storage-1-defs-logicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/name") |
| [size](#size-2)             | Merged    | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/size")                          |
| [stripes](#stripes)         | `integer` | Optional | cannot be null | [Config](storage-1-defs-logicalvolumestripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/stripes")       |
| [stripeSize](#stripesize)   | Merged    | Optional | cannot be null | [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/stripeSize")               |
| [encryption](#encryption-2) | Merged    | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/encryption")              |
| [filesystem](#filesystem-2) | `object`  | Optional | cannot be null | [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/filesystem")              |

### name

Logical volume name.

`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-logicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/name")

#### name Type

`string`

#### name Examples

```json
"lv0"
```

### size



`size`

* is optional

* Type: merged type ([Size](storage-1-defs-size.md))

* cannot be null

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/size")

#### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizestring.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizebytes.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")

### stripes

Number of stripes.

`stripes`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-1-defs-logicalvolumestripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/stripes")

#### stripes Type

`integer`

#### stripes Constraints

**maximum**: the value of this number must smaller than or equal to: `128`

**minimum**: the value of this number must greater than or equal to: `1`

### stripeSize



`stripeSize`

* is optional

* Type: merged type ([Details](storage-1-defs-sizevalue.md))

* cannot be null

* defined in: [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/stripeSize")

#### stripeSize Type

merged type ([Details](storage-1-defs-sizevalue.md))

any of

* [Untitled string in Config](storage-1-defs-sizestring.md "check type definition")

* [Untitled integer in Config](storage-1-defs-sizebytes.md "check type definition")

### encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/encryption")

#### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryptionswap.md "check type definition")

### filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-1-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolume/properties/filesystem")

#### filesystem Type

`object` ([Details](storage-1-defs-filesystem.md))

## Definitions group thinPoolLogicalVolume

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume"}
```

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :-------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [pool](#pool)               | Not specified | Required | cannot be null | [Config](storage-1-defs-thinpoollogicalvolume-properties-pool.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/pool") |
| [alias](#alias-3)           | `string`      | Optional | cannot be null | [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/alias")                                |
| [name](#name-2)             | `string`      | Optional | cannot be null | [Config](storage-1-defs-thinpoollogicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/name") |
| [size](#size-3)             | Merged        | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/size")                                  |
| [stripes](#stripes-1)       | `integer`     | Optional | cannot be null | [Config](storage-1-defs-logicalvolumestripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/stripes")               |
| [stripeSize](#stripesize-1) | Merged        | Optional | cannot be null | [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/stripeSize")                       |
| [encryption](#encryption-3) | Merged        | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/encryption")                      |

### pool

LVM thin pool.

`pool`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-thinpoollogicalvolume-properties-pool.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/pool")

#### pool Type

unknown

#### pool Constraints

**constant**: the value of this property must be equal to:

```json
true
```

### alias

Alias used to reference a device.

`alias`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/alias")

#### alias Type

`string`

### name

Logical volume name.

`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-thinpoollogicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/name")

#### name Type

`string`

#### name Examples

```json
"lv0"
```

### size



`size`

* is optional

* Type: merged type ([Size](storage-1-defs-size.md))

* cannot be null

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/size")

#### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizestring.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizebytes.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")

### stripes

Number of stripes.

`stripes`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-1-defs-logicalvolumestripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/stripes")

#### stripes Type

`integer`

#### stripes Constraints

**maximum**: the value of this number must smaller than or equal to: `128`

**minimum**: the value of this number must greater than or equal to: `1`

### stripeSize



`stripeSize`

* is optional

* Type: merged type ([Details](storage-1-defs-sizevalue.md))

* cannot be null

* defined in: [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/stripeSize")

#### stripeSize Type

merged type ([Details](storage-1-defs-sizevalue.md))

any of

* [Untitled string in Config](storage-1-defs-sizestring.md "check type definition")

* [Untitled integer in Config](storage-1-defs-sizebytes.md "check type definition")

### encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/encryption")

#### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryptionswap.md "check type definition")

## Definitions group thinLogicalVolume

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-3)             | `string` | Optional | cannot be null | [Config](storage-1-defs-thinlogicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/name") |
| [size](#size-4)             | Merged   | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/size")                              |
| [usedPool](#usedpool)       | `string` | Required | cannot be null | [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/usedPool")                         |
| [encryption](#encryption-4) | Merged   | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/encryption")                  |
| [filesystem](#filesystem-3) | `object` | Optional | cannot be null | [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/filesystem")                  |

### name

Thin logical volume name.

`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-thinlogicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/name")

#### name Type

`string`

#### name Examples

```json
"lv0"
```

### size



`size`

* is optional

* Type: merged type ([Size](storage-1-defs-size.md))

* cannot be null

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/size")

#### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizestring.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizebytes.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")

### usedPool

Alias used to reference a device.

`usedPool`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/usedPool")

#### usedPool Type

`string`

### encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/encryption")

#### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryptionswap.md "check type definition")

### filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-1-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/filesystem")

#### filesystem Type

`object` ([Details](storage-1-defs-filesystem.md))

## Definitions group logicalVolumeStripes

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/logicalVolumeStripes"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group searchElement

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/searchElement"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group simpleSearchAll

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simpleSearchAll"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group simpleSearchByName

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simpleSearchByName"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group advancedSearch

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch"}
```

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [condition](#condition)   | `object`      | Optional | cannot be null | [Config](storage-1-defs-advancedsearch-properties-search-condition.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/condition") |
| [max](#max)               | `integer`     | Optional | cannot be null | [Config](storage-1-defs-advancedsearch-properties-max.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/max")                    |
| [ifNotFound](#ifnotfound) | Not specified | Optional | cannot be null | [Config](storage-1-defs-advancedsearch-properties-search-action.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/ifNotFound")   |

### condition



`condition`

* is optional

* Type: `object` ([Search condition](storage-1-defs-advancedsearch-properties-search-condition.md))

* cannot be null

* defined in: [Config](storage-1-defs-advancedsearch-properties-search-condition.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/condition")

#### condition Type

`object` ([Search condition](storage-1-defs-advancedsearch-properties-search-condition.md))

### max

Maximum devices to match.

`max`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-1-defs-advancedsearch-properties-max.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/max")

#### max Type

`integer`

#### max Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### ifNotFound

How to handle the section if the device is not found.

`ifNotFound`

* is optional

* Type: unknown ([Search action](storage-1-defs-advancedsearch-properties-search-action.md))

* cannot be null

* defined in: [Config](storage-1-defs-advancedsearch-properties-search-action.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/ifNotFound")

#### ifNotFound Type

unknown ([Search action](storage-1-defs-advancedsearch-properties-search-action.md))

#### ifNotFound Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"skip"`  |             |
| `"error"` |             |

#### ifNotFound Default Value

The default value is:

```json
"error"
```

## Definitions group alias

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/alias"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group size

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/size"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group sizeValue

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/sizeValue"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group sizeValueWithCurrent

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/sizeValueWithCurrent"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group sizeString

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/sizeString"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group sizeBytes

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/sizeBytes"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group encryption

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryption"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group encryptionLuks1

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [luks1](#luks1) | `object` | Required | cannot be null | [Config](storage-1-defs-encryptionluks1-properties-luks1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1") |

### luks1



`luks1`

* is required

* Type: `object` ([Details](storage-1-defs-encryptionluks1-properties-luks1.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks1-properties-luks1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1")

#### luks1 Type

`object` ([Details](storage-1-defs-encryptionluks1-properties-luks1.md))

## Definitions group encryptionLuks2

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [luks2](#luks2) | `object` | Required | cannot be null | [Config](storage-1-defs-encryptionluks2-properties-luks2.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2") |

### luks2



`luks2`

* is required

* Type: `object` ([Details](storage-1-defs-encryptionluks2-properties-luks2.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks2-properties-luks2.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2")

#### luks2 Type

`object` ([Details](storage-1-defs-encryptionluks2-properties-luks2.md))

## Definitions group encryptionPervasiveLuks2

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionPervasiveLuks2"}
```

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :-------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [pervasiveLuks2](#pervasiveluks2) | `object` | Required | cannot be null | [Config](storage-1-defs-encryptionpervasiveluks2-properties-pervasiveluks2.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionPervasiveLuks2/properties/pervasiveLuks2") |

### pervasiveLuks2



`pervasiveLuks2`

* is required

* Type: `object` ([Details](storage-1-defs-encryptionpervasiveluks2-properties-pervasiveluks2.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryptionpervasiveluks2-properties-pervasiveluks2.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionPervasiveLuks2/properties/pervasiveLuks2")

#### pervasiveLuks2 Type

`object` ([Details](storage-1-defs-encryptionpervasiveluks2-properties-pervasiveluks2.md))

## Definitions group encryptionTPM

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionTPM"}
```

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :---------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [tpmFde](#tpmfde) | `object` | Required | cannot be null | [Config](storage-1-defs-encryptiontpm-properties-tpmfde.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionTPM/properties/tpmFde") |

### tpmFde



`tpmFde`

* is required

* Type: `object` ([Details](storage-1-defs-encryptiontpm-properties-tpmfde.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryptiontpm-properties-tpmfde.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionTPM/properties/tpmFde")

#### tpmFde Type

`object` ([Details](storage-1-defs-encryptiontpm-properties-tpmfde.md))

## Definitions group encryptionSwap

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionSwap"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group encryptionPassword

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionPassword"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group encryptionCipher

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionCipher"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group encryptionKeySize

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionKeySize"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group encryptionPbkdFunction

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionPbkdFunction"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group filesystem

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem"}
```

| Property                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :---------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [reuseIfPossible](#reuseifpossible) | `boolean`     | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-reuseifpossible.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/reuseIfPossible") |
| [type](#type)                       | Merged        | Optional | cannot be null | [Config](storage-1-defs-filesystemtype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/type")                                   |
| [label](#label)                     | `string`      | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/label")                     |
| [path](#path)                       | `string`      | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-path.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/path")                       |
| [mountBy](#mountby)                 | Not specified | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-mount-by.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountBy")                |
| [mkfsOptions](#mkfsoptions)         | `array`       | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-mkfsoptions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mkfsOptions")         |
| [mountOptions](#mountoptions)       | `array`       | Optional | cannot be null | [Config](storage-1-defs-filesystem-properties-mountoptions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountOptions")       |

### reuseIfPossible

Try to reuse the existing file system. In some cases the file system could not be reused, for example, if the device is re-encrypted.

`reuseIfPossible`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-reuseifpossible.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/reuseIfPossible")

#### reuseIfPossible Type

`boolean`

### type



`type`

* is optional

* Type: merged type ([Details](storage-1-defs-filesystemtype.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystemtype.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/type")

#### type Type

merged type ([Details](storage-1-defs-filesystemtype.md))

any of

* [Untitled undefined type in Config](storage-1-defs-filesystemtypeany.md "check type definition")

* [Untitled object in Config](storage-1-defs-filesystemtypebtrfs.md "check type definition")

### label

File system label.

`label`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/label")

#### label Type

`string`

### path

Mount path.

`path`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-path.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/path")

#### path Type

`string`

#### path Examples

```json
"/var/log"
```

### mountBy

How to mount the device.

`mountBy`

* is optional

* Type: unknown ([Mount by](storage-1-defs-filesystem-properties-mount-by.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-mount-by.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountBy")

#### mountBy Type

unknown ([Mount by](storage-1-defs-filesystem-properties-mount-by.md))

#### mountBy Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"device"` |             |
| `"id"`     |             |
| `"label"`  |             |
| `"path"`   |             |
| `"uuid"`   |             |

### mkfsOptions

Options for creating the file system.

`mkfsOptions`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-mkfsoptions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mkfsOptions")

#### mkfsOptions Type

`string[]`

### mountOptions

Options to add to the fourth field of fstab.

`mountOptions`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-1-defs-filesystem-properties-mountoptions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountOptions")

#### mountOptions Type

`string[]`

## Definitions group filesystemType

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystemType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group filesystemTypeAny

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystemTypeAny"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group filesystemTypeBtrfs

Reference this group by using

```json
{"$ref":"https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystemTypeBtrfs"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :-------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [btrfs](#btrfs) | `object` | Required | cannot be null | [Config](storage-1-defs-filesystemtypebtrfs-properties-btrfs.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystemTypeBtrfs/properties/btrfs") |

### btrfs



`btrfs`

* is required

* Type: `object` ([Details](storage-1-defs-filesystemtypebtrfs-properties-btrfs.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystemtypebtrfs-properties-btrfs.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystemTypeBtrfs/properties/btrfs")

#### btrfs Type

`object` ([Details](storage-1-defs-filesystemtypebtrfs-properties-btrfs.md))
