# Wireless network mode Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/mode
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## mode Type

`string` ([Wireless network mode](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-network-mode.md))

## mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"infrastructure"` |             |
| `"adhoc"`          |             |
| `"mesh"`           |             |
| `"ap"`             |             |
