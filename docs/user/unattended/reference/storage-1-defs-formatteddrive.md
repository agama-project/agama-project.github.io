# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive
```

Drive without a partition table (e.g., directly formatted).

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## formattedDrive Type

`object` ([Details](storage-1-defs-formatteddrive.md))

# formattedDrive Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [search](#search)         | Merged   | Optional | cannot be null | [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/search")                  |
| [alias](#alias)           | `string` | Optional | cannot be null | [Config](storage-1-defs-formatteddrive-properties-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/alias") |
| [encryption](#encryption) | Merged   | Optional | cannot be null | [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/encryption")                 |
| [filesystem](#filesystem) | `object` | Required | cannot be null | [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/filesystem")                 |

## search



`search`

* is optional

* Type: merged type ([Details](storage-1-defs-searchelement.md))

* cannot be null

* defined in: [Config](storage-1-defs-searchelement.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/search")

### search Type

merged type ([Details](storage-1-defs-searchelement.md))

any of

* [Untitled undefined type in Config](storage-1-defs-searchelement-anyof-0.md "check type definition")

* [Untitled string in Config](storage-1-defs-searchelement-anyof-1.md "check type definition")

* [Untitled object in Config](storage-1-defs-advancedsearch.md "check type definition")

## alias

Alias used to reference a device.

`alias`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-formatteddrive-properties-alias.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/alias")

### alias Type

`string`

## encryption



`encryption`

* is optional

* Type: merged type ([Details](storage-1-defs-encryption.md))

* cannot be null

* defined in: [Config](storage-1-defs-encryption.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/encryption")

### encryption Type

merged type ([Details](storage-1-defs-encryption.md))

any of

* [Untitled object in Config](storage-1-defs-encryptionluks1.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptionpervasiveluks2.md "check type definition")

* [Untitled object in Config](storage-1-defs-encryptiontpm.md "check type definition")

* [Untitled undefined type in Config](storage-1-defs-encryption-anyof-4.md "check type definition")

## filesystem



`filesystem`

* is required

* Type: `object` ([Details](storage-1-defs-filesystem.md))

* cannot be null

* defined in: [Config](storage-1-defs-filesystem.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/formattedDrive/properties/filesystem")

### filesystem Type

`object` ([Details](storage-1-defs-filesystem.md))
