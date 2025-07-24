---
sidebar_position: 4
---

# Network configuration

Together with the storage set up, the network configuration is probably the most complex area. Agama
needs to cover many different requirements that, in some cases, conflict with each other.

To set up the network, you can:

- Specify the network configuration at boot time, so it is set up even before Agama starts.
- Define the configuration as part of the Agama profile.

But, in some cases, you might be also want to combine both approaches. A typical scenario is when
you do not have a DHCP server and you need to set up the network so Agama can fetch the
configuration.

The rest of this section explains how to configure the network using an Agama profile. For the boot
options, please check the [boot options section](/docs/user/boot_options).

## Defining network connections

The main concept of the network configuration is the _connection_. The `network` section includes a
list of `connections` where you can define as many as needed.

```jsonnet
{
  network: {
    connections: [
      {
        id: "Ethernet device 1",
        method4: "auto",
      },
      {
        id: "Wireless device 1",
        method4: "auto",
        wireless: {
          ssid: "HOME_NETWORK",
          password: "secret",
          security: "wpa-psk",
          mode: "infrastructure"
        }
      }
    ]
  }
}
```

If you are familiar with _[NetworkManager][NM]_, the connection concept will not be new for you.

[NM]: https://www.networkmanager.dev/docs/

For each type of connection, you might need a different set of fields. However, there are many of
them that are common to any type of connection. Those fields include the connection identifier, the
IPv4/IPv6 configuration, some device parameters, etc.

- `id`: connection identifier.
- `method4` and `method6`: IPv4 and IPV6 configuration method. Possible values are `auto` (usually
  DHCP), `manual`, `link-local` and `disabled` (default).
- `interface`: the name of the network interface to bound to this connection. If it is not
  specified, NetworkManager will select one.
- `macAddress`: MAC address to asign. It can be a MAC address or one of the following values:
  `preserve`, `permanent`, `random` or `stable`.
- `mtu`: connection MTU.
- `gateway4` and `gateway6`: gateway address for IPv4 and IPv6.
- `addresses`: IP addresses. They can be IPv4 and/or IPv6.
- `nameservers`: name servers IP addresses (IPv4 and/or IPV6).
- `dnsSearchlist`: DNS domains to search.
- `ignoreAutoDns`: whether DNS options provided via DHCP are ignored or not.
- `status`: the wanted status for the connection. It can be `up`, `down`, or `removed`.
- `autoconnect`: whether the connection should be automatically activated.
- `persistent`: whether the connection should be kept after the installation or not.
- `match`: define a criteria to select the device to apply the connection to.

These are the common fields to any kind of connection. Now, if you want to set up a bridge, you need
to add a `bridge` section; for a Wi-Fi connection, you need a `wireless` section; and so on.

### Wi-Fi networks

To connect to a Wi-Fi network, you need to include a `wireless` section in the connection. It
supports the following fields:

- `ssid`: network SSID.
- `security`: security method/key management. Possible values are `none` (default), `owe`,
  `ieee8021x`, `wpa-psk`, `sae`, `wpa-eap` and `wpa-eap-suite-b192`.
- `password`: password to connect to the network.
- `mode`: wireless mode. Possible values are: `infrastructure` (default), `adhoc`, `mesh` and `ap`.

```jsonnet
{
  network: {
    connections: [
      {
        id: "Wireless device 1",
        method4: "auto",
        method6: "disabled",
        interface: "wlan0",
        addresses: [
          "192.168.122.100/24"
        ],
        wireless: {
          ssid: "HOME_NETWORK",
          password: "secret",
          security: "wpa-psk",
          mode: "infrastructure"
        }
      }
    ]
  }
}
```

### Bridges

To create a bridge you need to include a `bridge` section which, among other optional settings,
includes the list of ports to connect.

```jsonnet
{
  network: {
    connections: [
      {
        id: "Bridge0",
        interface: "br0",
        bridge: {
          ports: ["eth0", "eth1"]
        }
      }
    ]
  }
}
```

The `interface` element specifies the device name for the bridge while the `id` is the connection
name.

About the `bridge` section, it can include:

- `ports`: a list of interfaces or connections IDs which will be part of the bridge.
- `stp`: whether the
  [Spanning Tree Protocol (STP)](https://es.wikipedia.org/wiki/Spanning_Tree_Protocol) should be
  enabled.
- `forwardDelay`: STP forward delay, in seconds.
- `priority`: STP priority. It is represented by a number equal or greater than zero. Lower values
  are "better".
- `maxAge`: STP maximum message, in seconds.
- `helloTime`: STP hello time, in seconds.

### Bonding

To create a bond you need to include a `bond` section which, among other optional settings, includes
the list of ports to connect.

```jsonnet
{
  network: {
    connections: [
      {
        id: "Bond0",
        interface: "bond0",
        bond: {
          ports: ["eth0", "eth1"],
          mode: "active-backup",
          options: "primary=eth1"
        }
      }
    ]
  }
}
```

The `interface` element specifies the device name for the bonding while the `id` is the connection
name.

The `bond` section can contain:

- `ports`: devices to be included in the bond.
- `mode`: bond mode. Possible values: `balance-rr` (default), `active-backup`, `balance-xor`,
  `broadcast`, `802.3ad`, `balance-tlb`, `balance-alb`.
- `options`: additional options.

### VLAN

To create a VLAN you need to include a `vlan` section supporting the following fields:

- `id`: The VLAN identifier that the interface should be assigned. An integer from the 0 to 4094
  range.
- `parent`: The parent interface name from which the VLAN should be created.
- `protocol`: The VLAN protofol to use for encapsulation. Possible values: `802.1Q` (default),
  `802.1ad`.

```jsonnet
{
  network: {
    connections: [
      {
        "id": "vlan10",
        "method4": "manual",
        "method6": "disabled",
        "status": "up",
        "persistent": true,
        "addresses": ["192.168.1.28/24"],
        "gateway4": "192.168.1.1",
        "nameservers": ["192.168.1.1"],
        "vlan": {
          "id": 10,
          "parent": "eth0"
        }
      }
    ]
  }
}
```

## Deleting network connections

As commented in previous sections, the `status` field allows to bring `up`, `down` or even `remove`
an existing connection. It might be useful to delete an existing connection before creating a new
one specially when it is already applied to an specific interface.

```json
{
  "network": {
    "connections": [
      {
        "id": "default",
        "status": "removed"
      },
      {
        "id": "enp1s0",
        "interface": "enp1s0",
        "status": "up"
      }
    ]
  }
}
```
