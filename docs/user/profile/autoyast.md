---
sidebar_position: 5
---

# AutoYaST support

We know that many AutoYaST users have invested quite some time in writing their profiles to perform
unattended installations. For that reason, Agama offers a mechanism to reuse such profiles to some
extent.

However, Agama and AutoYaST have different features. Unlike AutoYaST, Agama is focused on the
installation and delegates further configuration to other tools. From this point of view, it is
clear that many of the sections in an AutoYaST profile will not have an Agama counterpart.

This document describes how AutoYaST supports work, including the limitations you might find. For a
full reference of all the sections and attributes of an AutoYaST profile and their level of support
in Agama, check the [AutoYaST compatibility reference](../reference/autoyast).

## Loading an AutoYaST profile

The typical way of starting an unattended installation in Agama is by passing the URL of an AutoYaST
profile through the [`inst.auto`](../reference/boot_options) argument in the kernel's command-line.
For example:

```text
inst.auto=http://example.net/agama/tumbleweed.xml
```

AutoYaST profiles can also be processed with the `generate` command as explained at the
[working with profiles](./working_with_profiles) section.

In both cases, Agama takes care of pre-processing and converting the profile to an Agama equivalent.
As part of this pre-processing, it supports handling of [dynamic profiles][dynamic-profiles],
including:

- [Rules and classes][rules-classes].
- [Embedded Ruby (ERB)][erb].
- [Pre-installation scripts][pre-scripts].
- [Ask lists][ask-lists] (not implemented yet). Note for developers: fortunately, the code to
  [parse][ask-list-reader] and [run][ask-list-runner] the process is there but we need to adapt the
  [user interface][ask-list-dialog], which is not trivial.

## Networking

Agama converts the `networking/interfaces` section to a list of connections. Apart from the regular
Ethernet and wireless devices, bonding, bridge and VLAN interfaces are supported too.

An interface is handled as a **bond** when it defines at least one `bonding_slaveN` element, as a
**bridge** when it defines `bridge_ports` (or it is explicitly marked with `<bridge>yes</bridge>`)
and as a **VLAN** when it defines `etherdevice` or `vlan_id`.

```xml
<interfaces config:type="list">
  <interface>
    <device>bond0</device>
    <bootproto>static</bootproto>
    <startmode>auto</startmode>
    <ipaddr>192.168.100.1</ipaddr>
    <prefixlen>24</prefixlen>
    <bonding_master>yes</bonding_master>
    <bonding_slave0>eth0</bonding_slave0>
    <bonding_slave1>eth1</bonding_slave1>
    <bonding_module_opts>mode=active-backup miimon=100</bonding_module_opts>
  </interface>
  <interface>
    <device>br0</device>
    <bootproto>dhcp</bootproto>
    <startmode>auto</startmode>
    <bridge>yes</bridge>
    <bridge_ports>eth2</bridge_ports>
    <bridge_stp>off</bridge_stp>
    <bridge_forward_delay>15</bridge_forward_delay>
  </interface>
  <interface>
    <device>eth3.10</device>
    <bootproto>static</bootproto>
    <startmode>auto</startmode>
    <ipaddr>192.168.10.1</ipaddr>
    <prefixlen>24</prefixlen>
    <etherdevice>eth3</etherdevice>
    <vlan_id>10</vlan_id>
  </interface>
</interfaces>
```

Agama needs both the identifier and the parent interface to set up a VLAN. If none of them can be
determined (neither from `etherdevice`/`vlan_id` nor from the `parent.id` device name notation), the
`vlan` section is omitted, so only that interface is ignored instead of making the whole
installation fail.

### Boot protocol and start mode

The `bootproto` element is translated to the Agama `method4` and `method6` settings:

| `bootproto`                        | `method4`    | `method6`                          |
| ---------------------------------- | ------------ | ---------------------------------- |
| `static`                           | `manual`     | `manual` (`disabled` without IPv6) |
| `dhcp`, `dhcp+autoip`, `ibft`, ... | `auto`       | `auto` (`disabled` without IPv6)   |
| `dhcp4`                            | `auto`       | `disabled`                         |
| `dhcp6`                            | `disabled`   | `auto`                             |
| `autoip`                           | `link-local` | `disabled`                         |
| `none`                             | `disabled`   | `disabled`                         |

Whether IPv6 is wanted or not depends on the `networking/ipv6` element.

Regarding `startmode`, NetworkManager does not have an equivalent for each AutoYaST value, so they
are reduced to whether the connection is brought up automatically or not:

- `manual` and `off` set `autoconnect` to `false` and `status` to `down`, so the connection is not
  set up during the installation either.
- `auto` (including its `boot`, `on` and `onboot` aliases), `hotplug`, `ifplugd` and `nfsroot` set
  `autoconnect` to `true`.

[dynamic-profiles]:
  https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/part-dynamic-profiles.html
[rules-classes]:
  https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/rulesandclass.html
[erb]: https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/erb-templates.html
[pre-scripts]:
  https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/cha-configuration-installation-options.html#pre-install-scripts
[ask-lists]:
  https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/cha-configuration-installation-options.html#CreateProfile-Ask
[ask-list-reader]:
  https://github.com/yast/yast-autoinstallation/blob/c2dc34560df4ba890688a0c84caec94cc2718f14/src/lib/autoinstall/ask/profile_reader.rb#L29
[ask-list-runner]:
  https://github.com/yast/yast-autoinstallation/blob/c2dc34560df4ba890688a0c84caec94cc2718f14/src/lib/autoinstall/ask/runner.rb#L50
[ask-list-dialog]:
  https://github.com/yast/yast-autoinstallation/blob/c2dc34560df4ba890688a0c84caec94cc2718f14/src/lib/autoinstall/ask/dialog.rb#L23
