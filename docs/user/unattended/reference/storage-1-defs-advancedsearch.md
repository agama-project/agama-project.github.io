# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch
```

Advanced options for searching devices.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## advancedSearch Type

`object` ([Details](storage-1-defs-advancedsearch.md))

# advancedSearch Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [condition](#condition)   | `object`      | Optional | cannot be null | [Config](storage-1-defs-advancedsearch-properties-search-condition.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/condition") |
| [max](#max)               | `integer`     | Optional | cannot be null | [Config](storage-1-defs-advancedsearch-properties-max.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/max")                    |
| [ifNotFound](#ifnotfound) | Not specified | Optional | cannot be null | [Config](storage-1-defs-advancedsearch-properties-search-action.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/ifNotFound")   |

## condition



`condition`

* is optional

* Type: `object` ([Search condition](storage-1-defs-advancedsearch-properties-search-condition.md))

* cannot be null

* defined in: [Config](storage-1-defs-advancedsearch-properties-search-condition.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/condition")

### condition Type

`object` ([Search condition](storage-1-defs-advancedsearch-properties-search-condition.md))

## max

Maximum devices to match.

`max`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-1-defs-advancedsearch-properties-max.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/max")

### max Type

`integer`

### max Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## ifNotFound

How to handle the section if the device is not found.

`ifNotFound`

* is optional

* Type: unknown ([Search action](storage-1-defs-advancedsearch-properties-search-action.md))

* cannot be null

* defined in: [Config](storage-1-defs-advancedsearch-properties-search-action.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/ifNotFound")

### ifNotFound Type

unknown ([Search action](storage-1-defs-advancedsearch-properties-search-action.md))

### ifNotFound Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"skip"`  |             |
| `"error"` |             |

### ifNotFound Default Value

The default value is:

```json
"error"
```
