# A list of allowed WPA protocol versions Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/wpaProtocolVersions/items
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## items Type

`string` ([A list of allowed WPA protocol versions](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wpaprotocolversions-a-list-of-allowed-wpa-protocol-versions.md))

## items Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"wpa"` |             |
| `"rsn"` |             |
