# Phase 2 inner auth method Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/phase2Auth
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## phase2Auth Type

`string` ([Phase 2 inner auth method](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-phase-2-inner-auth-method.md))

## phase2Auth Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"pap"`      |             |
| `"chap"`     |             |
| `"mschap"`   |             |
| `"mschapv2"` |             |
| `"gtc"`      |             |
| `"otp"`      |             |
| `"md5"`      |             |
| `"tls"`      |             |
