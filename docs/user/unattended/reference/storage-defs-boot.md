# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json\*](storage.model.schema.json "open original schema") |

## boot Type

`object` ([Details](storage-defs-boot.md))

# boot Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                          |
| :---------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [configure](#configure) | `boolean` | Required | cannot be null | [Config](storage-defs-boot-properties-configure.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot/properties/configure") |
| [device](#device)       | `object`  | Optional | cannot be null | [Config](storage-defs-bootdevice.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot/properties/device")                   |

## configure



`configure`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-boot-properties-configure.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot/properties/configure")

### configure Type

`boolean`

## device



`device`

* is optional

* Type: `object` ([Details](storage-defs-bootdevice.md))

* cannot be null

* defined in: [Config](storage-defs-bootdevice.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/boot/properties/device")

### device Type

`object` ([Details](storage-defs-bootdevice.md))
