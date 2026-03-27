# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## luks2 Type

`object` ([Details](storage-1-defs-encryptionluks2-properties-luks2.md))

# luks2 Properties

| Property                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                    |
| :---------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [password](#password)         | `string`      | Required | cannot be null | [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/password")         |
| [cipher](#cipher)             | `string`      | Optional | cannot be null | [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-cipher.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/cipher")             |
| [keySize](#keysize)           | `integer`     | Optional | cannot be null | [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-keysize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/keySize")           |
| [pbkdFunction](#pbkdfunction) | Not specified | Optional | cannot be null | [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-pbkdfunction.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/pbkdFunction") |
| [label](#label)               | `string`      | Optional | cannot be null | [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/label")               |

## password

Password to use when creating a new encryption device.

`password`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/password")

### password Type

`string`

## cipher

The value must be compatible with the --cipher argument of the command cryptsetup.

`cipher`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-cipher.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/cipher")

### cipher Type

`string`

## keySize

The value (in bits) has to be a multiple of 8. The possible key sizes are limited by the used cipher.

`keySize`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-keysize.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/keySize")

### keySize Type

`integer`

## pbkdFunction



`pbkdFunction`

* is optional

* Type: unknown

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-pbkdfunction.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/pbkdFunction")

### pbkdFunction Type

unknown

### pbkdFunction Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"pbkdf2"`   |             |
| `"argon2i"`  |             |
| `"argon2id"` |             |

## label

LUKS2 label.

`label`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-encryptionluks2-properties-luks2-properties-label.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionLuks2/properties/luks2/properties/label")

### label Type

`string`
