# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionPervasiveLuks2/properties/pervasiveLuks2
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## pervasiveLuks2 Type

`object` ([Details](storage-1-defs-encryptionpervasiveluks2-properties-pervasiveluks2.md))

# pervasiveLuks2 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [password](#password) | `string` | Required | cannot be null | [Config](storage-1-defs-encryptionpervasiveluks2-properties-pervasiveluks2-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionPervasiveLuks2/properties/pervasiveLuks2/properties/password") |

## password

Password to use when creating a new encryption device.

`password`

* is required

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-encryptionpervasiveluks2-properties-pervasiveluks2-properties-password.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/encryptionPervasiveLuks2/properties/pervasiveLuks2/properties/password")

### password Type

`string`
