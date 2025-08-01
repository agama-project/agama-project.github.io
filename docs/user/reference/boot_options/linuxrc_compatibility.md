---
sidebar_position: 6
---

# Linuxrc Compatibility

Agama provides a few options to make it easier the transition from linuxrc. They are not identical and work
slightly differently, but for a regular usage they should be sufficient.
Also Agama is case sensitive and requires the exact parameter unlike linuxrc which allows
additional dots, dashes and underscores.

## Info File Support

Agama provides `inst.info=` option that act similarly to linuxrc `info=` option. However, it
supports only URI schemas supported by curl. Also info file can contain only agama specific options.

## Network configuration

Agama added a very basic translator for the linuxrc `ifcfg` option but we recommend
to switch to `ip` for most of the use cases.

```text
Supported examples with the equivalent cmdline option that will be written by Agama

ifcfg=*=dhcp
ip=dhcp

ifcfg=eth0=dhcp
ip=eth0:dhcp

ifcfg=eth0.10=192.168.0.100/24,192.168.0.1
vlan=eth0.10:eth0 ip=192.168.0.100::192.168.0.1:24::eth0.10

ifcfg="eth0=192.168.0.33/24 10.0.0.100/24,192.168.0.1,192.168.0.1 10.0.0.1,suse.de"
ip=192.168.0.33::192.168.0.1:24::eth0 nameserver=192.168.0.1 nameserver=10.0.0.1 ip=10.0.0.100:::24::eth0
```

## Hostname management

The linuxrc `hostname` and `SetHostname` options are also available in Agama
with almost the same behavior.

- `hostname`: sets the system static hostname in dracut and persist it when
  booting the installer. If it is set then transient hostname is not used and
  therefore it will not be modified by network configuration (DHCP).

- `SetHostname`: manages if the hostname can be set by DHCP or not. It will set
  the NetworkManager hostname-mode to `none` if sets to 0. If an static
  hostname is set it will not be modified anyway which is a change of behavior
  in comparison with wicked.

  ```text
  # Default, just keep the default NetworkManager hostname-mode
  SetHostname=1

  # Sets NetworkManager hostname-mode to 'none'.
  SetHostname=0
  ```

## Environment variables

There were some options that were not handled by `linurxc` directly but
passed through options to `YaST` using the `install.inf` file. These options
were available to the installer as environment variables.

Agama recognize the following patterns: `LIBSTORAGE*`, `YAST*`, `Y2\*`,
`ZYPP_FULLLOG`.

These variables will be available to the Agama systemd services.

```text
LIBSTORAGE_MULTIPATH_AUTOSTART=ON
LIBSTORAGE_MDPART=ON
YAST_ACTIVATE_LUKS=0
YAST_REUSE_LVM=0
Y2DEBUG
ZYPP_FULLLOG=1
```
