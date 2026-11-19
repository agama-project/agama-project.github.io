---
sidebar_position: 4
---

# Network

Along with the storage setup, the network configuration is probably the most complex area. Agama
needs to cover many different requirements that, in some cases, conflict with each other.

To set up the network, you can:

- Specify the network configuration at boot time, so it is set up even before Agama starts.
- Define the configuration as part of the Agama profile.

In some cases, you might also want to combine both approaches. A typical scenario is when you do not
have a DHCP server and you need to set up the network so Agama can fetch the profile.

The rest of this section explains how to configure the network using an Agama profile. For the boot
options, please check the [boot options section](../boot_options).

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

For each type of connection, you might need a different set of fields. However, many of them are
common to any type of connection. Those fields include the connection identifier, the IPv4/IPv6
configuration, some device parameters, etc.

- `id`: Human-readable unique connection identifier.
- `method4` and `method6`: IPv4 and IPv6 configuration method. Possible values are `auto` (usually
  DHCP), `manual`, `link-local`, and `disabled` (default).
- `interface`: The name of the network interface to bind to this connection. If it is not specified,
  the connection could be applied to any device if there is no conflict with other match settings
  like the `macAddress` or the `match` fields.
- `macAddress`: The MAC address of the network interface to bind to this connection.
- `customMacAddress`: MAC address to assign. It can be a MAC address or one of the following values:
  `preserve`, `permanent`, `random`, or `stable`.
- `mtu`: Connection MTU.
- `gateway4` and `gateway6`: Gateway address for IPv4 and IPv6.
- `addresses`: IP addresses. They can be IPv4 and/or IPv6.
- `nameservers`: Name servers' IP addresses (IPv4 and/or IPv6).
- `dnsSearchlist`: DNS domains to search.
- `ignoreAutoDns`: Whether DNS options provided via DHCP are ignored or not.
- `status`: The wanted status for the connection. It can be `up`, `down`, or `removed`.
- `autoconnect`: Whether the connection should be automatically activated.
- `persistent`: Whether the connection should be kept after the installation or not.
- `match`: Define criteria to select the device to apply the connection to. See
  [Device matching](#device-matching) for more details.

These are the common fields to any kind of connection. Now, if you want to set up a bridge, you need
to add a `bridge` section; for a Wi-Fi connection, you need a `wireless` section; and so on.

### Device matching

While the `interface` or the `macAddress` fields are used to match a specific interface based on its
name or MAC address, the `match` section allows you to match multiple devices using name, driver,
PCI, or kernel criteria.

This is based on the _NetworkManager_ `match` setting (see the
[NetworkManager documentation](https://networkmanager.dev/docs/api/latest/nm-settings-dbus.html)).

For instance, you can match a device by its name:

```jsonnet
{
  network: {
    connections: [
      {
        id: "Wired connection 1",
        match: {
          interface: ["eth0"]
        }
      }
    ]
  }
}
```

By its driver:

```jsonnet
{
  network: {
    connections: [
      {
        id: "Wired connection 1",
        match: {
          driver: ["e1000e"]
        }
      }
    ]
  }
}
```

Or by its PCI path:

```jsonnet
{
  network: {
    connections: [
      {
        id: "Wired connection 1",
        match: {
          path: ["pci-0000:04:00.0"]
        }
      }
    ]
  }
}
```

You can also use wildcards (globs) in the values. For example, to match any interface starting with
`eth` or `ens`:

```jsonnet
{
  network: {
    connections: [
      {
        id: "Ethernet",
        match: {
          interface: ["eth*", "ens*"]
        }
      }
    ]
  }
}
```

### Wi-Fi networks

To connect to a Wi-Fi network, you need to include a `wireless` section in the connection. It
supports the following fields:

- `ssid`: Network SSID.
- `security`: Security method/key management. Possible values are `none` (default), `owe`,
  `ieee8021x`, `wpa-psk`, `sae`, `wpa-eap`, and `wpa-eap-suite-b192`.
- `password`: Password to connect to the network.
- `mode`: Wireless mode. Possible values are: `infrastructure` (default), `adhoc`, `mesh`, and `ap`.

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

To create a bridge, you need to include a `bridge` section which, among other optional settings,
includes the list of ports to connect.

```jsonnet
{
  network: {
    connections: [
      {
        id: "Bridge0",
        interface: "br0",
        method4: "auto",
        bridge: {
          portConnections: ["eth0", "eth1"]
        }
      }
    ]
  }
}
```

The `interface` element specifies the device name for the bridge while the `id` is the connection
name.

The `bridge` section can include:

- `portConnections`: The ports of the bridge. See [Ports](#ports) for more details.
- `ports`: A list of interfaces or connections IDs which will be part of the bridge. It is
  deprecated and replaced by `portConnections`. When both lists are given, `ports` is ignored.
- `stp`: Whether the
  [Spanning Tree Protocol (STP)](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol) should be
  enabled.
- `forwardDelay`: STP forward delay, in seconds.
- `priority`: STP priority. It is represented by a number equal to or greater than zero. Lower
  values are "better".
- `maxAge`: STP maximum message age, in seconds.
- `helloTime`: STP hello time, in seconds.

### Bonding

To create a bond, you need to include a `bond` section which, among other optional settings,
includes the list of ports to connect.

```jsonnet
{
  network: {
    connections: [
      {
        id: "Bond0",
        interface: "bond0",
        method4: "auto",
        bond: {
          portConnections: ["eth0", "eth1"],
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

- `portConnections`: The ports of the bond. See [Ports](#ports) for more details.
- `ports`: Devices to be included in the bond. It is deprecated and replaced by `portConnections`.
  When both lists are given, `ports` is ignored.
- `mode`: Bond mode. Possible values: `balance-rr` (default), `active-backup`, `balance-xor`,
  `broadcast`, `802.3ad`, `balance-tlb`, `balance-alb`.
- `options`: Additional options.

### Ports

The ports of a bond or a bridge are nested in the `portConnections` list of their controller. Each
entry of the list can be:

- An interface name or a connection ID, like `"eth0"`. It refers to the connection with that
  interface name or ID, and a new Ethernet connection is created when there is none.
- A connection, with the same fields as any other connection except the IP settings. The kind of the
  port is told apart by the section it has: `bond`, `bridge`, `vlan`, `wireless`, or none of them
  for an Ethernet port. When the `id` is omitted, the port refers to the connection bound to its
  `interface`, or it gets the interface name as its ID.

A port has no IP configuration of its own, as its controller holds it. So, a nested port does not
accept the `method4`, `method6`, `addresses`, `gateway4`, `gateway6`, `nameservers`,
`dnsSearchList`, and `ignoreAutoDns` fields.

The ports of a bridge can include a `port` section with the settings they have as ports of that
bridge:

- `priority`: Port priority used by the Spanning Tree Protocol.
- `pathCost`: Port cost used by the Spanning Tree Protocol.

The ports of a bond have no port settings, and neither has a connection at the top level.

As a port can be a controller itself, you can stack them. In the example below, a bond with two
Ethernet ports is a port of a bridge, which holds the IP settings. A VLAN on top of the bridge is a
connection at the top level, as it is not a port.

```jsonnet
{
  network: {
    connections: [
      {
        id: "br0",
        interface: "br0",
        method4: "manual",
        addresses: ["192.168.1.100/24"],
        bridge: {
          stp: true,
          portConnections: [
            {
              id: "bond0",
              interface: "bond0",
              port: { priority: 24, pathCost: 200 },
              bond: {
                mode: "802.3ad",
                options: "miimon=100 lacp_rate=fast",
                portConnections: [{ interface: "eth0", mtu: 9000 }, "eth1"]
              }
            }
          ]
        }
      },
      {
        id: "br0.100",
        interface: "br0.100",
        method4: "manual",
        addresses: ["10.100.0.10/24"],
        vlan: { id: 100, parent: "br0" }
      }
    ]
  }
}
```

#### Where a connection is given

The place of a connection in the configuration decides its controller:

- A connection at the top level has no controller. If it was a port, it is taken out of its
  controller and its IP methods default to `auto`, so it is not left without an address. To update a
  port and keep it where it is, give it nested in its controller, together with the controllers
  above it.
- A port dropped from the list of ports of its controller, and not given anywhere else, is removed.
- A controller that is not given keeps its ports, and so does a controller given without
  `portConnections` nor `ports`. So, you do not need to include the connections you do not change,
  as long as they are not ports of the ones you change.

A connection at the top level can still be listed by name in the ports of a controller, as in the
deprecated `ports` list. In that case, its IP settings are ignored.

### VLAN

To create a VLAN, you need to include a `vlan` section supporting the following fields:

- `id`: The VLAN identifier (an integer from 0 to 4094).
- `parent`: The parent interface name from which the VLAN should be created.
- `protocol`: The VLAN protocol to use for encapsulation. Possible values: `802.1Q` (default),
  `802.1ad`.

```jsonnet
{
  network: {
    connections: [
      {
        id: "vlan10",
        method4: "manual",
        method6: "disabled",
        status: "up",
        persistent: true,
        addresses: ["192.168.1.28/24"],
        gateway4: "192.168.1.1",
        nameservers: ["192.168.1.1"],
        vlan: {
          id: 10,
          parent: "eth0"
        }
      }
    ]
  }
}
```

## Deleting network connections

As mentioned in previous sections, the `status` field allows bringing a connection `up`, `down`, or
even `remove` an existing one. It might be useful to delete an existing connection before creating a
new one, especially when it is already applied to a specific interface.

```jsonnet
{
  network: {
    connections: [
      {
        id: "default",
        status: "removed"
      },
      {
        id: "enp1s0",
        interface: "enp1s0",
        status: "up"
      }
    ]
  }
}
```
