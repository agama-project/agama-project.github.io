# Mount by Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystem/properties/mountBy
```

How to mount the device.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## mountBy Type

unknown ([Mount by](storage-1-defs-filesystem-properties-mount-by.md))

## mountBy Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"device"` |             |
| `"id"`     |             |
| `"label"`  |             |
| `"path"`   |             |
| `"uuid"`   |             |
