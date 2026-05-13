# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystemTypeBtrfs/properties/btrfs
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## btrfs Type

`object` ([Details](storage-1-defs-filesystemtypebtrfs-properties-btrfs.md))

# btrfs Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                      |
| :---------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [snapshots](#snapshots) | `boolean` | Optional | cannot be null | [Config](storage-1-defs-filesystemtypebtrfs-properties-btrfs-properties-snapshots.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystemTypeBtrfs/properties/btrfs/properties/snapshots") |

## snapshots

Whether to configrue Btrfs snapshots.

`snapshots`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-1-defs-filesystemtypebtrfs-properties-btrfs-properties-snapshots.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/filesystemTypeBtrfs/properties/btrfs/properties/snapshots")

### snapshots Type

`boolean`
