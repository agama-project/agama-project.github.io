# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simpleVolumesGenerator
```

Automatically creates the default or mandatory volumes configured by the selected product.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## simpleVolumesGenerator Type

`object` ([Details](storage-1-defs-simplevolumesgenerator.md))

# simpleVolumesGenerator Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                        |
| :-------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generate](#generate) | Not specified | Required | cannot be null | [Config](storage-1-defs-simplevolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simpleVolumesGenerator/properties/generate") |

## generate



`generate`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-simplevolumesgenerator-properties-generate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/simpleVolumesGenerator/properties/generate")

### generate Type

unknown

### generate Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"default"`   |             |
| `"mandatory"` |             |
