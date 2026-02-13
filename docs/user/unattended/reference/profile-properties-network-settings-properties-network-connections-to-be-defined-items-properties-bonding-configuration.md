# Bonding configuration Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## bond Type

`object` ([Bonding configuration](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration.md))

# bond Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                            |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [mode](#mode)       | `string` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration-properties-mode.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond/properties/mode")       |
| [options](#options) | `string` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration-properties-options.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond/properties/options") |
| [ports](#ports)     | `array`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration-properties-ports.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond/properties/ports")     |

## mode



`mode`

* is optional

* Type: `string`

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration-properties-mode.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond/properties/mode")

### mode Type

`string`

### mode Constraints

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

## options



`options`

* is optional

* Type: `string`

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration-properties-options.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond/properties/options")

### options Type

`string`

## ports



`ports`

* is optional

* Type: `string[]` ([A list of the interfaces or connections to be bonded](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration-properties-ports-a-list-of-the-interfaces-or-connections-to-be-bonded.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration-properties-ports.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond/properties/ports")

### ports Type

`string[]` ([A list of the interfaces or connections to be bonded](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration-properties-ports-a-list-of-the-interfaces-or-connections-to-be-bonded.md))
