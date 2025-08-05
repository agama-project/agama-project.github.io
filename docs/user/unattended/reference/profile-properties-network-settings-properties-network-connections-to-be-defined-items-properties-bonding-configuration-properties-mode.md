# Untitled string in Profile Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond/properties/mode
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## mode Type

`string`

## mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"balance-rr"`    |             |
| `"active-backup"` |             |
| `"balance-xor"`   |             |
| `"broadcast"`     |             |
| `"802.3ad"`       |             |
| `"balance-tlb"`   |             |
| `"balance-alb"`   |             |
