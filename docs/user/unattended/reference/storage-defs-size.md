# Untitled object in Config Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [storage.model.schema.json\*](storage.model.schema.json "open original schema") |

## size Type

`object` ([Details](storage-defs-size.md))

# size Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                                      |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [default](#default) | `boolean` | Required | cannot be null | [Config](storage-defs-size-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/default") |
| [min](#min)         | `integer` | Required | cannot be null | [Config](storage-defs-size-properties-min.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/min")         |
| [max](#max)         | `integer` | Optional | cannot be null | [Config](storage-defs-size-properties-max.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/max")         |

## default



`default`

* is required

* Type: `boolean`

* cannot be null

* defined in: [Config](storage-defs-size-properties-default.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/default")

### default Type

`boolean`

## min



`min`

* is required

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-size-properties-min.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/min")

### min Type

`integer`

### min Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## max



`max`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Config](storage-defs-size-properties-max.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/storage.model.schema.json#/$defs/size/properties/max")

### max Type

`integer`

### max Constraints

**minimum**: the value of this number must greater than or equal to: `0`
