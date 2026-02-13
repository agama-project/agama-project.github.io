# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot
```

Allows configuring boot partitions automatically.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.schema.json\*](storage.schema.json "open original schema") |

## boot Type

`object` ([Details](storage-1-defs-boot.md))

# boot Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                      |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [configure](#configure) | `boolean` | Required | cannot be null | [Config](storage-1-defs-boot-properties-configure.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot/properties/configure") |
| [device](#device)       | `string`  | Optional | cannot be null | [Config](storage-1-defs-boot-properties-device.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot/properties/device")       |

## configure

Whether to configure partitions for booting.

`configure`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-1-defs-boot-properties-configure.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot/properties/configure")

### configure Type

`boolean`

## device

Alias used to reference a device.

`device`

* is optional

* Type: `string`

* cannot be null

* defined in: [Config](storage-1-defs-boot-properties-device.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.schema.json#/$defs/boot/properties/device")

### device Type

`string`
