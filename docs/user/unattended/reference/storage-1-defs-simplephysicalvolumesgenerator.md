# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simplePhysicalVolumesGenerator
```

Automatically creates the needed physical volumes in the indicated devices.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## simplePhysicalVolumesGenerator Type

`object` ([Details](storage-1-defs-simplephysicalvolumesgenerator.md))

# simplePhysicalVolumesGenerator Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :-------------------- | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generate](#generate) | `array` | Required | cannot be null | [Config](storage-1-defs-simplephysicalvolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simplePhysicalVolumesGenerator/properties/generate") |

## generate



`generate`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Config](storage-1-defs-simplephysicalvolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simplePhysicalVolumesGenerator/properties/generate")

### generate Type

`string[]`
