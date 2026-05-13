# IPv4 configuration method Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/method4
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## method4 Type

`string` ([IPv4 configuration method](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv4-configuration-method.md))

## method4 Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"auto"`       |             |
| `"manual"`     |             |
| `"link-local"` |             |
| `"disabled"`   |             |
