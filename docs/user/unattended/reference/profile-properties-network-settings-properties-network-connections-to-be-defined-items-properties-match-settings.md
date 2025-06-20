# Match settings Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match
```

Identifies the network interface to apply the connection settings to

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## match Type

`object` ([Match settings](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings.md))

# match Properties

| Property                | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                          |
| :---------------------- | :------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [kernel](#kernel)       | `array` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-kernel.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match/properties/kernel")       |
| [interface](#interface) | `array` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-interface.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match/properties/interface") |
| [driver](#driver)       | `array` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-driver.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match/properties/driver")       |
| [path](#path)           | `array` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-path.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match/properties/path")           |

## kernel



`kernel`

* is optional

* Type: `string[]` ([A list of kernel command line arguments to match](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-kernel-a-list-of-kernel-command-line-arguments-to-match.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-kernel.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match/properties/kernel")

### kernel Type

`string[]` ([A list of kernel command line arguments to match](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-kernel-a-list-of-kernel-command-line-arguments-to-match.md))

## interface



`interface`

* is optional

* Type: `string[]` ([A list of interface names to match](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-interface-a-list-of-interface-names-to-match.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-interface.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match/properties/interface")

### interface Type

`string[]` ([A list of interface names to match](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-interface-a-list-of-interface-names-to-match.md))

## driver



`driver`

* is optional

* Type: `string[]` ([A list of driver names to match](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-driver-a-list-of-driver-names-to-match.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-driver.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match/properties/driver")

### driver Type

`string[]` ([A list of driver names to match](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-driver-a-list-of-driver-names-to-match.md))

## path



`path`

* is optional

* Type: `string[]` ([A list of paths to match against the ID\_PATH udev property of devices](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-path-a-list-of-paths-to-match-against-the-id_path-udev-property-of-devices.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-path.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match/properties/path")

### path Type

`string[]` ([A list of paths to match against the ID\_PATH udev property of devices](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings-properties-path-a-list-of-paths-to-match-against-the-id_path-udev-property-of-devices.md))
