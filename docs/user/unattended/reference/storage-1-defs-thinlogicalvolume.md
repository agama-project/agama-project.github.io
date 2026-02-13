# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## thinLogicalVolume Type

`object` ([Details](storage-1-defs-thinlogicalvolume.md))

# thinLogicalVolume Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)             | `string` | Optional | cannot be null | [Config](storage-1-defs-thinlogicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/name")         |
| [size](#size)             | Merged   | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/size")                                      |
| [usedPool](#usedpool)     | `string` | Required | cannot be null | [Config](storage-1-defs-thinlogicalvolume-properties-usedpool.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/usedPool") |
| [encryption](#encryption) | Merged   | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/encryption")                          |
| [filesystem](#filesystem) | `object` | Optional | cannot be null | [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/filesystem")                          |

## name

Thin logical volume name.

`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-thinlogicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/name")

### name Type

`string`

### name Examples

```json
"lv0"
```

## size



`size`

* is optional

* Type: merged type ([Size](storage-1-defs-size.md))

* cannot be null

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/size")

### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")

## usedPool

Alias used to reference a device.

`usedPool`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-thinlogicalvolume-properties-usedpool.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/usedPool")

### usedPool Type

`string`

## encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/encryption")

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

* defined in: [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinLogicalVolume/properties/filesystem")

### filesystem Type

`object` ([Details](storage-1-defs-filesystem.md))
