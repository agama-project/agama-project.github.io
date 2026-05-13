# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json\*](storage.model.schema.json "open original schema") |

## filesystem Type

`object` ([Details](storage-defs-filesystem.md))

# filesystem Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :---------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [reuse](#reuse)         | `boolean`     | Optional | cannot be null | [Config](storage-defs-filesystem-properties-reuse.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/reuse")         |
| [default](#default)     | `boolean`     | Required | cannot be null | [Config](storage-defs-filesystem-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/default")     |
| [type](#type)           | Not specified | Optional | cannot be null | [Config](storage-defs-filesystem-properties-type.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/type")           |
| [snapshots](#snapshots) | `boolean`     | Optional | cannot be null | [Config](storage-defs-filesystem-properties-snapshots.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/snapshots") |
| [label](#label)         | `string`      | Optional | cannot be null | [Config](storage-defs-filesystem-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/label")         |

## reuse



`reuse`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-reuse.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/reuse")

### reuse Type

`boolean`

## default



`default`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/default")

### default Type

`boolean`

## type



`type`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-type.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/type")

### type Type

unknown

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"bcachefs"` |             |
| `"btrfs"`    |             |
| `"exfat"`    |             |
| `"ext2"`     |             |
| `"ext3"`     |             |
| `"ext4"`     |             |
| `"f2fs"`     |             |
| `"jfs"`      |             |
| `"nfs"`      |             |
| `"nilfs2"`   |             |
| `"ntfs"`     |             |
| `"reiserfs"` |             |
| `"swap"`     |             |
| `"tmpfs"`    |             |
| `"vfat"`     |             |
| `"xfs"`      |             |

## snapshots



`snapshots`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-snapshots.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/snapshots")

### snapshots Type

`boolean`

## label



`label`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-filesystem-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/filesystem/properties/label")

### label Type

`string`
