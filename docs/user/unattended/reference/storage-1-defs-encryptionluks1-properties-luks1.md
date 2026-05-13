# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## luks1 Type

`object` ([Details](storage-1-defs-encryptionluks1-properties-luks1.md))

# luks1 Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                            |
| :-------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [password](#password) | `string`  | Required | cannot be null | [Config](storage-1-defs-encryptionluks1-properties-luks1-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1/properties/password") |
| [cipher](#cipher)     | `string`  | Optional | cannot be null | [Config](storage-1-defs-encryptionluks1-properties-luks1-properties-cipher.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1/properties/cipher")     |
| [keySize](#keysize)   | `integer` | Optional | cannot be null | [Config](storage-1-defs-encryptionluks1-properties-luks1-properties-keysize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1/properties/keySize")   |

## password

Password to use when creating a new encryption device.

`password`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks1-properties-luks1-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1/properties/password")

### password Type

`string`

## cipher

The value must be compatible with the --cipher argument of the command cryptsetup.

`cipher`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks1-properties-luks1-properties-cipher.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1/properties/cipher")

### cipher Type

`string`

## keySize

The value (in bits) has to be a multiple of 8. The possible key sizes are limited by the used cipher.

`keySize`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks1-properties-luks1-properties-keysize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks1/properties/luks1/properties/keySize")

### keySize Type

`integer`
