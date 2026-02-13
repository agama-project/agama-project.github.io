# A list of group/broadcast encryption algorithms Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/groupAlgorithms/items
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## items Type

`string` ([A list of group/broadcast encryption algorithms](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-groupalgorithms-a-list-of-groupbroadcast-encryption-algorithms.md))

## items Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"wep40"`  |             |
| `"wep104"` |             |
| `"tkip"`   |             |
| `"ccmp"`   |             |
