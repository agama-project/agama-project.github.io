# Untitled string in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/sizeValue/anyOf/0
```

Human readable size.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## 0 Type

`string`

## 0 Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[0-9]+(\.[0-9]+)?(\s*([KkMmGgTtPpEeZzYy][iI]?)?[Bb])?$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9%5D%2B\(%5C.%5B0-9%5D%2B\)%3F\(%5Cs*\(%5BKkMmGgTtPpEeZzYy%5D%5BiI%5D%3F\)%3F%5BBb%5D\)%3F%24 "try regular expression with regexr.com")

## 0 Examples

```json
"2 GiB"
```

```json
"1.5 TB"
```

```json
"1TIB"
```

```json
"1073741824 b"
```

```json
"1073741824"
```
