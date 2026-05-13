# Wireless configuration Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## wireless Type

`object` ([Wireless configuration](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration.md))

# wireless Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------------------------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [password](#password)                       | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-password-of-the-wireless-network.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/password")                                            |
| [security](#security)                       | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-security-methodkey-management.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/security")                                               |
| [ssid](#ssid)                               | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-ssid-of-the-wireless-network.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/ssid")                                                    |
| [mode](#mode)                               | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-network-mode.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/mode")                                                           |
| [hidden](#hidden)                           | `boolean` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-indicates-that-the-wireless-network-is-not-broadcasting-its-ssid.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/hidden")              |
| [band](#band)                               | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-frequency-band-of-the-wireless-network.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/band")                                          |
| [channel](#channel)                         | `integer` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-channel-of-the-wireless-network.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/channel")                                     |
| [bssid](#bssid)                             | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-only-allow-connection-to-this-mac-address.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/bssid")                                      |
| [groupAlgorithms](#groupalgorithms)         | `array`   | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-groupalgorithms.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/groupAlgorithms")                                                      |
| [pairwiseAlgorithms](#pairwisealgorithms)   | `array`   | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-pairwisealgorithms.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/pairwiseAlgorithms")                                                |
| [wpaProtocolVersions](#wpaprotocolversions) | `array`   | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wpaprotocolversions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/wpaProtocolVersions")                                              |
| [pmf](#pmf)                                 | `integer` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-indicates-whether-protected-management-frames-must-be-enabled-for-the-connection.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/pmf") |

## password



`password`

* is optional

* Type: `string` ([Password of the wireless network](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-password-of-the-wireless-network.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-password-of-the-wireless-network.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/password")

### password Type

`string` ([Password of the wireless network](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-password-of-the-wireless-network.md))

## security



`security`

* is optional

* Type: `string` ([Security method/key management](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-security-methodkey-management.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-security-methodkey-management.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/security")

### security Type

`string` ([Security method/key management](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-security-methodkey-management.md))

### security Constraints

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

## ssid



`ssid`

* is optional

* Type: `string` ([SSID of the wireless network](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-ssid-of-the-wireless-network.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-ssid-of-the-wireless-network.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/ssid")

### ssid Type

`string` ([SSID of the wireless network](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-ssid-of-the-wireless-network.md))

## mode



`mode`

* is optional

* Type: `string` ([Wireless network mode](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-network-mode.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-network-mode.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/mode")

### mode Type

`string` ([Wireless network mode](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-network-mode.md))

### mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"infrastructure"` |             |
| `"adhoc"`          |             |
| `"mesh"`           |             |
| `"ap"`             |             |

## hidden



`hidden`

* is optional

* Type: `boolean` ([Indicates that the wireless network is not broadcasting its SSID](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-indicates-that-the-wireless-network-is-not-broadcasting-its-ssid.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-indicates-that-the-wireless-network-is-not-broadcasting-its-ssid.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/hidden")

### hidden Type

`boolean` ([Indicates that the wireless network is not broadcasting its SSID](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-indicates-that-the-wireless-network-is-not-broadcasting-its-ssid.md))

## band



`band`

* is optional

* Type: `string` ([Frequency band of the wireless network](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-frequency-band-of-the-wireless-network.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-frequency-band-of-the-wireless-network.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/band")

### band Type

`string` ([Frequency band of the wireless network](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-frequency-band-of-the-wireless-network.md))

### band Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"a"`  |             |
| `"bg"` |             |

## channel



`channel`

* is optional

* Type: `integer` ([Wireless channel of the wireless network](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-channel-of-the-wireless-network.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-channel-of-the-wireless-network.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/channel")

### channel Type

`integer` ([Wireless channel of the wireless network](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wireless-channel-of-the-wireless-network.md))

### channel Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## bssid



`bssid`

* is optional

* Type: `string` ([Only allow connection to this mac address](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-only-allow-connection-to-this-mac-address.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-only-allow-connection-to-this-mac-address.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/bssid")

### bssid Type

`string` ([Only allow connection to this mac address](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-only-allow-connection-to-this-mac-address.md))

## groupAlgorithms



`groupAlgorithms`

* is optional

* Type: `string[]` ([A list of group/broadcast encryption algorithms](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-groupalgorithms-a-list-of-groupbroadcast-encryption-algorithms.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-groupalgorithms.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/groupAlgorithms")

### groupAlgorithms Type

`string[]` ([A list of group/broadcast encryption algorithms](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-groupalgorithms-a-list-of-groupbroadcast-encryption-algorithms.md))

## pairwiseAlgorithms



`pairwiseAlgorithms`

* is optional

* Type: `string[]` ([A list of pairwise encryption algorithms](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-pairwisealgorithms-a-list-of-pairwise-encryption-algorithms.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-pairwisealgorithms.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/pairwiseAlgorithms")

### pairwiseAlgorithms Type

`string[]` ([A list of pairwise encryption algorithms](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-pairwisealgorithms-a-list-of-pairwise-encryption-algorithms.md))

## wpaProtocolVersions



`wpaProtocolVersions`

* is optional

* Type: `string[]` ([A list of allowed WPA protocol versions](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wpaprotocolversions-a-list-of-allowed-wpa-protocol-versions.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wpaprotocolversions.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/wpaProtocolVersions")

### wpaProtocolVersions Type

`string[]` ([A list of allowed WPA protocol versions](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-wpaprotocolversions-a-list-of-allowed-wpa-protocol-versions.md))

## pmf



`pmf`

* is optional

* Type: `integer` ([Indicates whether Protected Management Frames must be enabled for the connection](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-indicates-whether-protected-management-frames-must-be-enabled-for-the-connection.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-indicates-whether-protected-management-frames-must-be-enabled-for-the-connection.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless/properties/pmf")

### pmf Type

`integer` ([Indicates whether Protected Management Frames must be enabled for the connection](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration-properties-indicates-whether-protected-management-frames-must-be-enabled-for-the-connection.md))
