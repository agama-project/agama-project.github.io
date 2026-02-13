# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## generate Type

`object` ([Details](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate.md))

# generate Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                              |
| :-------------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [logicalVolumes](#logicalvolumes) | Not specified | Required | cannot be null | [Config](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate/properties/logicalVolumes") |
| [encryption](#encryption)         | Merged        | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate/properties/encryption")                                                                        |
| [stripes](#stripes)               | `integer`     | Optional | cannot be null | [Config](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate-properties-stripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate/properties/stripes")               |
| [stripeSize](#stripesize)         | Merged        | Optional | cannot be null | [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate/properties/stripeSize")                                                                         |

## logicalVolumes



`logicalVolumes`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate-properties-logicalvolumes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate/properties/logicalVolumes")

### logicalVolumes Type

unknown

### logicalVolumes Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"default"`   |             |
| `"mandatory"` |             |

## encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate/properties/encryption")

### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryption-anyof-4.md "check type definition")

## stripes

Number of stripes.

`stripes`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-1-defs-advancedlogicalvolumesgenerator-properties-generate-properties-stripes.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate/properties/stripes")

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

* defined in: [Config](storage-1-defs-sizevalue.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedLogicalVolumesGenerator/properties/generate/properties/stripeSize")

### stripeSize Type

merged type ([Details](storage-1-defs-sizevalue.md))

any of

* [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

* [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")
