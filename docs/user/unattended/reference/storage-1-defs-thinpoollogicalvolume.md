# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## thinPoolLogicalVolume Type

`object` ([Details](storage-1-defs-thinpoollogicalvolume.md))

# thinPoolLogicalVolume Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                    |
| :------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [pool](#pool)             | Not specified | Required | cannot be null | [Config](storage-1-defs-thinpoollogicalvolume-properties-pool.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/pool")       |
| [alias](#alias)           | `string`      | Optional | cannot be null | [Config](storage-1-defs-thinpoollogicalvolume-properties-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/alias")     |
| [name](#name)             | `string`      | Optional | cannot be null | [Config](storage-1-defs-thinpoollogicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/name")       |
| [size](#size)             | Merged        | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/size")                                        |
| [stripes](#stripes)       | `integer`     | Optional | cannot be null | [Config](storage-1-defs-thinpoollogicalvolume-properties-stripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/stripes") |
| [stripeSize](#stripesize) | Merged        | Optional | cannot be null | [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/stripeSize")                             |
| [encryption](#encryption) | Merged        | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/encryption")                            |

## pool

LVM thin pool.

`pool`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-thinpoollogicalvolume-properties-pool.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/pool")

### pool Type

unknown

### pool Constraints

**constant**: the value of this property must be equal to:

```json
true
```

## alias

Alias used to reference a device.

`alias`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-thinpoollogicalvolume-properties-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/alias")

### alias Type

`string`

## name

Logical volume name.

`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-thinpoollogicalvolume-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/name")

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

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/size")

### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")

## stripes

Number of stripes.

`stripes`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-1-defs-thinpoollogicalvolume-properties-stripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/stripes")

### stripes Type

`integer`

### stripes Constraints

**maximum**: the value of this number must smaller than or equal to: `128`

**minimum**: the value of this number must greater than or equal to: `1`

## stripeSize



`stripeSize`

* is optional

* Type: merged type ([Details](storage-1-defs-sizevalue.md))

* cannot be null

* defined in: [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/stripeSize")

### stripeSize Type

merged type ([Details](storage-1-defs-sizevalue.md))

any of

* [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

* [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")

## encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/thinPoolLogicalVolume/properties/encryption")

### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryption-anyof-4.md "check type definition")
