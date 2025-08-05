# Size range Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/size/anyOf/2
```

Size range.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## 2 Type

`object` ([Size range](storage-1-defs-size-anyof-size-range.md))

# 2 Properties

| Property    | Type   | Required | Nullable       | Defined by                                                                                                                                                                   |
| :---------- | :----- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [min](#min) | Merged | Required | cannot be null | [Config](storage-1-defs-sizevaluewithcurrent.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/size/anyOf/2/properties/min") |
| [max](#max) | Merged | Optional | cannot be null | [Config](storage-1-defs-sizevaluewithcurrent.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/size/anyOf/2/properties/max") |

## min



`min`

* is required

* Type: merged type ([Details](storage-1-defs-sizevaluewithcurrent.md))

* cannot be null

* defined in: [Config](storage-1-defs-sizevaluewithcurrent.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/size/anyOf/2/properties/min")

### min Type

merged type ([Details](storage-1-defs-sizevaluewithcurrent.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")

* [Size current](storage-1-defs-sizevaluewithcurrent-anyof-size-current.md "check type definition")

## max



`max`

* is optional

* Type: merged type ([Details](storage-1-defs-sizevaluewithcurrent.md))

* cannot be null

* defined in: [Config](storage-1-defs-sizevaluewithcurrent.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/size/anyOf/2/properties/max")

### max Type

merged type ([Details](storage-1-defs-sizevaluewithcurrent.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")

* [Size current](storage-1-defs-sizevaluewithcurrent-anyof-size-current.md "check type definition")
