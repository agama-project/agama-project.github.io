# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## regularPartition Type

`object` ([Details](storage-1-defs-regularpartition.md))

# regularPartition Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :------------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search)         | Merged        | Optional | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/search")                        |
| [alias](#alias)           | `string`      | Optional | cannot be null | [Config](storage-1-defs-regularpartition-properties-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/alias")     |
| [id](#id)                 | Not specified | Optional | cannot be null | [Config](storage-1-defs-regularpartition-properties-partition-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/id") |
| [size](#size)             | Merged        | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/size")                                   |
| [encryption](#encryption) | Merged        | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/encryption")                       |
| [filesystem](#filesystem) | `object`      | Optional | cannot be null | [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/filesystem")                       |

## search



`search`

* is optional

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/search")

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

* defined in: [Config](storage-1-defs-regularpartition-properties-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/alias")

### alias Type

`string`

## id



`id`

* is optional

* Type: unknown ([Partition id](storage-1-defs-regularpartition-properties-partition-id.md))

* cannot be null

* defined in: [Config](storage-1-defs-regularpartition-properties-partition-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/id")

### id Type

unknown ([Partition id](storage-1-defs-regularpartition-properties-partition-id.md))

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

## size



`size`

* is optional

* Type: merged type ([Size](storage-1-defs-size.md))

* cannot be null

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/size")

### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")

## encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/encryption")

### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryption-anyof-4.md "check type definition")

## filesystem



`filesystem`

* is optional

* Type: `object` ([Details](storage-1-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/filesystem")

### filesystem Type

`object` ([Details](storage-1-defs-filesystem.md))
