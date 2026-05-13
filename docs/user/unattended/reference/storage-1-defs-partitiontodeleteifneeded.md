# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## PartitionToDeleteIfNeeded Type

`object` ([Details](storage-1-defs-partitiontodeleteifneeded.md))

# PartitionToDeleteIfNeeded Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                          |
| :-------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search)                 | Merged        | Required | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/search")                                               |
| [deleteIfNeeded](#deleteifneeded) | Not specified | Required | cannot be null | [Config](storage-1-defs-partitiontodeleteifneeded-properties-deleteifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/deleteIfNeeded") |
| [size](#size)                     | Merged        | Optional | cannot be null | [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/size")                                                          |

## search



`search`

* is required

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/search")

### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-searchelement-anyof-0.md "check type definition")

* [Untitled string in Config](storage-1-defs-searchelement-anyof-1.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

## deleteIfNeeded

Delete the partition if needed to make space.

`deleteIfNeeded`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-partitiontodeleteifneeded-properties-deleteifneeded.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/deleteIfNeeded")

### deleteIfNeeded Type

unknown

### deleteIfNeeded Constraints

**constant**: the value of this property must be equal to:

```json
true
```

## size



`size`

* is optional

* Type: merged type ([Size](storage-1-defs-size.md))

* cannot be null

* defined in: [Config](storage-1-defs-size.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/PartitionToDeleteIfNeeded/properties/size")

### size Type

merged type ([Size](storage-1-defs-size.md))

any of

* any of

  * [Untitled string in Config](storage-1-defs-sizevalue-anyof-0.md "check type definition")

  * [Untitled integer in Config](storage-1-defs-sizevalue-anyof-1.md "check type definition")

* [Size tuple](storage-1-defs-size-anyof-size-tuple.md "check type definition")

* [Size range](storage-1-defs-size-anyof-size-range.md "check type definition")
