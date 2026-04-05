# Security method/key management Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/security
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## security Type

`string` ([Security method/key management](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-security-methodkey-management.md))

## security Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"none"`                |             |
| `"owe"`                 |             |
| `"ieee8021x"`           |             |
| `"wpa-psk"`             |             |
| `"sae"`                 |             |
| `"wpa-eap"`             |             |
| `"wpa-eap-suite-b-192"` |             |
