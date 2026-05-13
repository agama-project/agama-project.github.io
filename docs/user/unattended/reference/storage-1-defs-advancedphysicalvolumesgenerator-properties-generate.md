# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPhysicalVolumesGenerator/properties/generate
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## generate Type

`object` ([Details](storage-1-defs-advancedphysicalvolumesgenerator-properties-generate.md))

# generate Properties

| Property                        | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                              |
| :------------------------------ | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [targetDevices](#targetdevices) | `array` | Required | cannot be null | [Config](storage-1-defs-advancedphysicalvolumesgenerator-properties-generate-properties-targetdevices.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPhysicalVolumesGenerator/properties/generate/properties/targetDevices") |
| [encryption](#encryption)       | Merged  | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPhysicalVolumesGenerator/properties/generate/properties/encryption")                                                                       |

## targetDevices



`targetDevices`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-1-defs-advancedphysicalvolumesgenerator-properties-generate-properties-targetdevices.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPhysicalVolumesGenerator/properties/generate/properties/targetDevices")

### targetDevices Type

`string[]`

## encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedPhysicalVolumesGenerator/properties/generate/properties/encryption")

### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryption-anyof-4.md "check type definition")
