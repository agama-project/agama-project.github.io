# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## partitionToDelete Type

`object` ([Details](storage-1-defs-partitiontodelete.md))

# partitionToDelete Properties

| Property          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :---------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [search](#search) | Merged        | Required | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete/properties/search")                       |
| [delete](#delete) | Not specified | Required | cannot be null | [Config](storage-1-defs-partitiontodelete-properties-delete.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete/properties/delete") |

## search



`search`

* is required

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete/properties/search")

### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-searchelement-anyof-0.md "check type definition")

* [Untitled string in Config](storage-1-defs-searchelement-anyof-1.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

## delete

Delete the partition.

`delete`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-partitiontodelete-properties-delete.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/partitionToDelete/properties/delete")

### delete Type

unknown

### delete Constraints

**constant**: the value of this property must be equal to:

```json
true
```
