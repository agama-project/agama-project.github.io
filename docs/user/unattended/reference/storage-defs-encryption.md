# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json\*](storage.model.schema.json "open original schema") |

## encryption Type

`object` ([Details](storage-defs-encryption.md))

# encryption Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :-------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [method](#method)     | Not specified | Required | cannot be null | [Config](storage-defs-encryption-properties-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption/properties/method")     |
| [password](#password) | `string`      | Optional | cannot be null | [Config](storage-defs-encryption-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption/properties/password") |

## method



`method`

* is required

* Type: unknown

* cannot be null

* defined in: [Config](storage-defs-encryption-properties-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption/properties/method")

### method Type

unknown

### method Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"luks1"`  |             |
| `"luks2"`  |             |
| `"tpmFde"` |             |

## password



`password`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-defs-encryption-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/encryption/properties/password")

### password Type

`string`
