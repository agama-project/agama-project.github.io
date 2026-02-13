# List of EAP methods used Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/eap/items
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## items Type

`string` ([List of EAP methods used](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-eap-list-of-eap-methods-used.md))

## items Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"leap"` |             |
| `"md5"`  |             |
| `"tls"`  |             |
| `"peap"` |             |
| `"ttls"` |             |
| `"pwd"`  |             |
| `"fast"` |             |
