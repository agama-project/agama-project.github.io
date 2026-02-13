# Search action Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/ifNotFound
```

How to handle the section if the device is not found.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## ifNotFound Type

unknown ([Search action](storage-1-defs-advancedsearch-properties-search-action.md))

## ifNotFound Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"skip"`  |             |
| `"error"` |             |

## ifNotFound Default Value

The default value is:

```json
"error"
```
