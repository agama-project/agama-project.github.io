# Search condition Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/condition
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## condition Type

`object` ([Search condition](storage-1-defs-advancedsearch-properties-search-condition.md))

# condition Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                 |
| :------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name) | `string` | Required | cannot be null | [Config](storage-1-defs-advancedsearch-properties-search-condition-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/condition/properties/name") |

## name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-advancedsearch-properties-search-condition-properties-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/advancedSearch/properties/condition/properties/name")

### name Type

`string`

### name Examples

```json
"/dev/vda"
```

```json
"/dev/disk/by-id/ata-WDC_WD3200AAKS-75L9"
```
