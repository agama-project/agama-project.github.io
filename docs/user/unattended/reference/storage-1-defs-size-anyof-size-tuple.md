# Size tuple Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/size/anyOf/1
```

Lower size limit and optionally upper size limit.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## 1 Type

an array of merged types ([Details](storage-1-defs-size-anyof-size-tuple-items.md))

## 1 Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `1`

## 1 Examples

```json
[
  1024,
  "current"
]
```

```json
[
  "1 GiB",
  "5 GiB"
]
```

```json
[
  1024,
  "2 GiB"
]
```

```json
[
  "2 GiB"
]
```
