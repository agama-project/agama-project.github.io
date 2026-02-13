# Untitled object in Profile Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## items Type

`object` ([Details](profile-properties-network-settings-properties-network-connections-to-be-defined-items.md))

# items Properties

| Property                           | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                |
| :--------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                          | `string`  | Required | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/id")                                                     |
| [interface](#interface)            | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-the-name-of-the-network-interface-bound-to-this-connection.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/interface") |
| [macAddress](#macaddress)          | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-custom-mac-address.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/macAddress")                                        |
| [mtu](#mtu)                        | `integer` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-mtu.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/mtu")                                                              |
| [method4](#method4)                | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv4-configuration-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/method4")                                    |
| [method6](#method6)                | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv6-configuration-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/method6")                                    |
| [gateway4](#gateway4)              | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-gateway-address.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/gateway4")                                  |
| [gateway6](#gateway6)              | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-gateway-address-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/gateway6")                                |
| [addresses](#addresses)            | `array`   | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-addresses.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/addresses")                                                  |
| [nameservers](#nameservers)        | `array`   | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-nameservers.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/nameservers")                                              |
| [dns\_searchlist](#dns_searchlist) | `array`   | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-dns_searchlist.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/dns_searchlist")                                        |
| [ignoreAutoDns](#ignoreautodns)    | `boolean` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ignoreautodns.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ignoreAutoDns")                                          |
| [status](#status)                  | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-status.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/status")                                             |
| [autoconnect](#autoconnect)        | `boolean` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-auto-connected.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/autoconnect")                                           |
| [wireless](#wireless)              | `object`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless")                                      |
| [bond](#bond)                      | `object`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond")                                           |
| [match](#match)                    | `object`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match")                                                 |
| [ieee-8021x](#ieee-8021x)          | `object`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x")                                   |

## id



`id`

* is required

* Type: `string` ([Connection ID](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-id.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/id")

### id Type

`string` ([Connection ID](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-id.md))

## interface



`interface`

* is optional

* Type: `string` ([The name of the network interface bound to this connection](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-the-name-of-the-network-interface-bound-to-this-connection.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-the-name-of-the-network-interface-bound-to-this-connection.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/interface")

### interface Type

`string` ([The name of the network interface bound to this connection](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-the-name-of-the-network-interface-bound-to-this-connection.md))

## macAddress

Can also be 'preserve', 'permanent', 'random' or 'stable'.

`macAddress`

* is optional

* Type: `string` ([Custom MAC address](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-custom-mac-address.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-custom-mac-address.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/macAddress")

### macAddress Type

`string` ([Custom MAC address](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-custom-mac-address.md))

## mtu

Connection MTU

`mtu`

* is optional

* Type: `integer`

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-mtu.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/mtu")

### mtu Type

`integer`

### mtu Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## method4



`method4`

* is optional

* Type: `string` ([IPv4 configuration method](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv4-configuration-method.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv4-configuration-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/method4")

### method4 Type

`string` ([IPv4 configuration method](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv4-configuration-method.md))

### method4 Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"auto"`       |             |
| `"manual"`     |             |
| `"link-local"` |             |
| `"disabled"`   |             |

## method6



`method6`

* is optional

* Type: `string` ([IPv6 configuration method](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv6-configuration-method.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv6-configuration-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/method6")

### method6 Type

`string` ([IPv6 configuration method](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ipv6-configuration-method.md))

### method6 Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"auto"`       |             |
| `"manual"`     |             |
| `"link-local"` |             |
| `"disabled"`   |             |

## gateway4



`gateway4`

* is optional

* Type: `string` ([Connection gateway address](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-gateway-address.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-gateway-address.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/gateway4")

### gateway4 Type

`string` ([Connection gateway address](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-gateway-address.md))

### gateway4 Examples

```json
"192.168.122.1"
```

## gateway6



`gateway6`

* is optional

* Type: `string` ([Connection gateway address](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-gateway-address-1.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-gateway-address-1.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/gateway6")

### gateway6 Type

`string` ([Connection gateway address](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-gateway-address-1.md))

### gateway6 Examples

```json
"::ffff:c0a8:7a01"
```

## addresses



`addresses`

* is optional

* Type: `string[]` ([Connection addresses](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-addresses-connection-addresses.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-addresses.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/addresses")

### addresses Type

`string[]` ([Connection addresses](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-addresses-connection-addresses.md))

## nameservers



`nameservers`

* is optional

* Type: `string[]` ([Nameservers](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-nameservers-nameservers.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-nameservers.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/nameservers")

### nameservers Type

`string[]` ([Nameservers](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-nameservers-nameservers.md))

## dns\_searchlist



`dns_searchlist`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-dns_searchlist.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/dns_searchlist")

### dns\_searchlist Type

`string[]`

## ignoreAutoDns

Whether DNS options provided via DHCP are used or not

`ignoreAutoDns`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ignoreautodns.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ignoreAutoDns")

### ignoreAutoDns Type

`boolean`

## status

The status of the connection

`status`

* is optional

* Type: `string` ([Connection status](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-status.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-status.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/status")

### status Type

`string` ([Connection status](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-connection-status.md))

### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"up"`      |             |
| `"down"`    |             |
| `"removed"` |             |

## autoconnect

Whether the connection should be automatically connected

`autoconnect`

* is optional

* Type: `boolean` ([Auto-connected](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-auto-connected.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-auto-connected.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/autoconnect")

### autoconnect Type

`boolean` ([Auto-connected](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-auto-connected.md))

## wireless



`wireless`

* is optional

* Type: `object` ([Wireless configuration](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/wireless")

### wireless Type

`object` ([Wireless configuration](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-wireless-configuration.md))

## bond



`bond`

* is optional

* Type: `object` ([Bonding configuration](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/bond")

### bond Type

`object` ([Bonding configuration](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-bonding-configuration.md))

## match

Identifies the network interface to apply the connection settings to

`match`

* is optional

* Type: `object` ([Match settings](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/match")

### match Type

`object` ([Match settings](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-match-settings.md))

## ieee-8021x



`ieee-8021x`

* is optional

* Type: `object` ([IEEE 802.1x (EAP) settings](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x")

### ieee-8021x Type

`object` ([IEEE 802.1x (EAP) settings](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings.md))
