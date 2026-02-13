# Partition id Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/regularPartition/properties/id
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## id Type

unknown ([Partition id](storage-1-defs-regularpartition-properties-partition-id.md))

## id Constraints

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
