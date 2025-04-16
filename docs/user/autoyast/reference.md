# AutoYaST compatibility reference

Let's describe which sections and elements from an AutoYaST profile are (or will be) supported in
Agama. In some cases, you might find a table with the following columns:

- AutoYaST: name of the AutoYaST element.
- Supported: whether it is (or will be) supported. The meaning of each value is:
  - Yes: fully supported.
  - Planned: not supported yet, but there are plans to support it.
  - Undecided: no decision about whether it should be supported.
  - No: there are no plans for supporting that element.
- Agama: name of the Agama element.
- Comment: any comment or reason about the element.

## files

There are plans to support this section in the future.

## iscsi-client

There are plans to support this section in the future.

## kdump

There are plans to support this section in the future.

## keyboard

This section is supported.

| AutoYaST   | Supported | Agama                   | Notes |
| ---------- | --------- | ----------------------- | ----- |
| `keymap`   | yes       | `localization.keyboard` |       |
| `capslock` | no        |                         |       |
| `delay`    | no        |                         |       |
| `discaps`  | no        |                         |       |
| `numlock`  | no        |                         |       |
| `rate`     | no        |                         |       |
| `scrlock`  | no        |                         |       |
| `tty`      | no        |                         |       |

## language

This section is supported.

| AutoYaST    | Supported | Agama                   | Notes |
| ----------- | --------- | ----------------------- | ----- |
| `language`  | yes       | `localization.language` |       |
| `languages` | no        |                         |       |

## networking

This section is supported.

| AutoYaST                  | Supported | Agama | Notes                               |
| ------------------------- | --------- | ----- | ----------------------------------- |
| `backend`                 | no        |       | Only NetworkManager is supported.   |
| `dhcp_options`            | no        |       |                                     |
| `dns`                     | no        |       |                                     |
| `ipv6`                    | yes       |       | It affects `method4` and `method6`. |
| `keep_install_network`    | no        |       |                                     |
| `managed`                 | no        |       |                                     |
| `modules`                 | no        |       |                                     |
| `net-udev`                | no        |       |                                     |
| `routing`                 | no        |       |                                     |
| `s390-devices`            | no        |       |                                     |
| `setup_before_proposal`   | no        |       |                                     |
| `strict_IP_check_timeout` | no        |       |                                     |
| `virt_bridge_proposal`    | no        |       |                                     |

### networking/interfaces[]

This section is supported. It corresponds to Agama `connections`, but the format
is not exactly the same.

| AutoYaST                       | Supported | Agama                                | Notes                                            |
| ------------------------------ | --------- | ------------------------------------ | ------------------------------------------------ |
| `device`                       | yes       | `interface`                          |                                                  |
| `name`                         | yes       | `id`                                 |                                                  |
| `description`                  | no        |                                      |                                                  |
| `bootproto`                    | no        | `method6`                            | Different set of values.                         |
| `startmode`                    | no        |                                      | Do not set up network connections you won't use. |
| `lladdr`                       | yes       | `macAddress`                         |                                                  |
| `ifplugd_priority`             | no        |                                      | Not relevant (no ifplugd support).               |
| `usercontrol`                  | no        |                                      |                                                  |
| `dhclient_set_hostname`        | no        |                                      |                                                  |
| `ipaddr`                       | yes       | `network.connections[].address[]`    |                                                  |
| `prefixlen`                    | yes       | `network.connections[].address[]`    |                                                  |
| `netmask`                      | yes       | `network.connections[].address[]`    |                                                  |
| `aliases`                      | yes       | `network.connections[].address[]`    |                                                  |
| `broadcast`                    | yes       | `network.connections[].address[]`    |                                                  |
| `network`                      | yes       | `network.connections[].address[]`    |                                                  |
| `mtu`                          | no        |                                      |                                                  |
| `ethtool_options`              | no        |                                      |                                                  |
| `wireless`                     | yes       | `wireless`                           | It uses a different format.                      |
| `dhclient_set_down_link`       | no        |                                      |                                                  |
| `dhclient_set_default_route`   | no        |                                      |                                                  |
| `zone`                         | no        |                                      |                                                  |
| `firewall`                     | no        |                                      |                                                  |
| `bonding_master`               | planned   |                                      |                                                  |
| `bonding_module_opts`          | yes       | `network.connections[].bond.options` |                                                  |
| `bonding_slave0`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave1`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave2`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave3`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave4`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave5`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave6`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave7`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave8`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bonding_slave9`               | yes       | `network.connections[].bond.ports`   |                                                  |
| `bridge`                       | planned   |                                      |                                                  |
| `bridge_forwarddelay`          | planned   |                                      |                                                  |
| `bridge_ports`                 | planned   |                                      |                                                  |
| `bridge_stp`                   | planned   |                                      |                                                  |
| `vlan_id`                      | planned   |                                      |                                                  |
| `wireless_auth_mode`           | yes       |                                      |                                                  |
| `wireless_ap`                  | no        |                                      |                                                  |
| `wireless_bitrate`             | no        |                                      |                                                  |
| `wireless_ca_cert`             | no        |                                      |                                                  |
| `wireless_channel`             | no        |                                      |                                                  |
| `wireless_client_cert`         | no        |                                      |                                                  |
| `wireless_client_key`          | no        |                                      |                                                  |
| `wireless_client_key_password` | no        |                                      |                                                  |
| `wireless_default_key`         | no        |                                      |                                                  |
| `wireless_eap_auth`            | no        |                                      |                                                  |
| `wireless_eap_mode`            | no        |                                      |                                                  |
| `wireless_essid`               | yes       | `ssid`                               |                                                  |
| `wireless_frequency`           | no        |                                      |                                                  |
| `wireless_key`                 | no        |                                      |                                                  |
| `wireless_key_0`               | no        |                                      |                                                  |
| `wireless_key_1`               | no        |                                      |                                                  |
| `wireless_key_2`               | no        |                                      |                                                  |
| `wireless_key_3`               | no        |                                      |                                                  |
| `wireless_key_length`          | no        |                                      |                                                  |
| `wireless_mode`                | yes       | `mode`                               |                                                  |
| `wireless_nick`                | no        |                                      |                                                  |
| `wireless_nwid`                | no        |                                      |                                                  |
| `wireless_peap_version`        | no        |                                      |                                                  |
| `wireless_power`               | no        |                                      |                                                  |
| `wireless_wpa_anonid`          | no        |                                      |                                                  |
| `wireless_wpa_identity`        | no        |                                      |                                                  |
| `wireless_wpa_password`        | yes       | `password`                           |                                                  |
| `wireless_wpa_psk`             | yes       | `password`                           |                                                  |

## proxy

There are plans to support this section in the future. Meanwhile set the proxy
using the kernels' command line.

## scripts

This section is supported.

### scripts/pre-scripts[]

This section is supported.

| AutoYaST        | Supported | Agama                | Notes                                 |
| --------------- | --------- | -------------------- | ------------------------------------- |
| `filename`      | yes       | `scripts.pre[].name` |                                       |
| `location`      | yes       | `scripts.pre[].url`  |                                       |
| `source`        | yes       | `scripts.pre[].body` |                                       |
| `interpreter`   | no        |                      | Use the shebang line in your scripts. |
| `feedback`      | no        |                      |                                       |
| `feedback_type` | no        |                      |                                       |
| `debug`         | no        |                      |                                       |
| `notification`  | no        |                      |                                       |
| `param-list`    | no        |                      |                                       |
| `rerun`         | no        |                      |                                       |

### scripts/postpartitioning-scripts[]

This section is supported.

| AutoYaST        | Supported | Agama                             | Notes                                 |
| --------------- | --------- | --------------------------------- | ------------------------------------- |
| `filename`      | yes       | `scripts.postPartitioning[].name` |                                       |
| `location`      | yes       | `scripts.postPartitioning[].url`  |                                       |
| `source`        | yes       | `scripts.postPartitioning[].body` |                                       |
| `interpreter`   | no        |                                   | Use the shebang line in your scripts. |
| `feedback`      | no        |                                   |                                       |
| `feedback_type` | no        |                                   |                                       |
| `debug`         | no        |                                   |                                       |
| `notification`  | no        |                                   |                                       |
| `param-list`    | no        |                                   |                                       |
| `rerun`         | no        |                                   |                                       |

### scripts/chroot-scripts[]

This section is supported.

| AutoYaST        | Supported | Agama                   | Notes                                 |
| --------------- | --------- | ----------------------- | ------------------------------------- |
| `filename`      | yes       | `scripts.chroot[].name` |                                       |
| `location`      | yes       | `scripts.chroot[].url`  |                                       |
| `source`        | yes       | `scripts.chroot[].body` |                                       |
| `interpreter`   | no        |                         | Use the shebang line in your scripts. |
| `feedback`      | no        |                         |                                       |
| `feedback_type` | no        |                         |                                       |
| `debug`         | no        |                         |                                       |
| `notification`  | no        |                         |                                       |
| `param-list`    | no        |                         |                                       |
| `rerun`         | no        |                         |                                       |

### scripts/post-scripts[]

This section is supported.

| AutoYaST        | Supported | Agama                 | Notes                                 |
| --------------- | --------- | --------------------- | ------------------------------------- |
| `filename`      | yes       | `scripts.init[].name` |                                       |
| `location`      | yes       | `scripts.init[].url`  |                                       |
| `source`        | yes       | `scripts.init[].body` |                                       |
| `interpreter`   | no        |                       | Use the shebang line in your scripts. |
| `feedback`      | no        |                       |                                       |
| `feedback_type` | no        |                       |                                       |
| `debug`         | no        |                       |                                       |
| `notification`  | no        |                       |                                       |
| `param-list`    | no        |                       |                                       |
| `rerun`         | no        |                       |                                       |

### scripts/init-scripts[]

This section is supported.

| AutoYaST   | Supported | Agama                 | Notes |
| ---------- | --------- | --------------------- | ----- |
| `filename` | yes       | `scripts.init[].name` |       |
| `location` | yes       | `scripts.init[].url`  |       |
| `source`   | yes       | `scripts.init[].body` |       |
| `rerun`    | no        |                       |       |

## services-manager

There are plans to support this section in the future. Meanwhile you can use
post-installation scripts to handle these cases.

## software

This section is supported.

| AutoYaST              | Supported | Agama                 | Notes        |
| --------------------- | --------- | --------------------- | ------------ |
| `do_online_update`    | no        |                       | No 2nd stage |
| `install_recommended` | no        |                       |              |
| `instsource`          | no        |                       |              |
| `kernel`              | no        |                       |              |
| `packages[]`          | planned   |                       |              |
| `post-packages[]`     | no        |                       |              |
| `patterns[]`          | yes       | `software.patterns[]` |              |
| `products[]`          | yes       | `software.id`         |              |
| `remove-packages[]`   | no        |                       |              |
| `remove-patterns[]`   | no        |                       |              |
| `remove-products[]`   | no        |                       |              |

## suse_register

This section is supported.

| AutoYaST                           | Supported | Agama                       | Notes                                                  |
| ---------------------------------- | --------- | --------------------------- | ------------------------------------------------------ |
| `do_registration`                  | yes       |                             | The whole suse_register section is ignored if "false". |
| `email`                            | yes       | `product.registrationEmail` |                                                        |
| `install_updates`                  | no        |                             |                                                        |
| `reg_code`                         | yes       | `product.registrationCode`  |                                                        |
| `reg_server`                       | planned   |                             |                                                        |
| `reg_server_cert`                  | planned   |                             |                                                        |
| `reg_server_cert_fingerprint`      | planned   |                             |                                                        |
| `reg_server_cert_fingerprint_type` | planned   |                             |                                                        |
| `addons`                           | yes       | `product.addons[]`          | The addon version value is optional, see details below.|
| `slp_discovery`                    | planned   |                             |                                                        |

If the addon version is not specified in the Agama installation profile it is
automatically found in the list of the available addons on the server.
It is mandatory only when the addon is available in multiple versions to
explicitly select which one to install. In AutoYaST the version was always
mandatory.

## timezone

This section is supported.

| AutoYaST   | Supported | Agama                   | Notes |
| ---------- | --------- | ----------------------- | ----- |
| `timezone` | yes       | `localization.timezone` |       |
| `hwclock`  | no        |                         |       |

## users[]

This section is supported. Only the root and the first user are considered.

| AutoYaST          | Supported | Agama                 | Notes                                                          |
| ----------------- | --------- | --------------------- | -------------------------------------------------------------- |
| `username`        | yes       | `user.userName`       |                                                                |
| `fullName`        | yes       | `user.fullName`       |                                                                |
| `password`        | yes       | `user.password`       |                                                                |
| `encrypted`       | yes       | `user.hashedPassword` | If set to true, it uses "hashedPassword" instead of "password" |
| `authorized_keys` | yes       | `root.sshPublicKey`   | It only considers a single key.                                |

## Unsupported sections

The following sections are not supported and we do not plan to support them in
the future.

- `add-on`
- `audit-laf`
- `auth-client`
- `configuration_management`
- `deploy_image`
- `dhcp-server`
- `dns-server`
- `fcoe-client`
- `firstboot`
- `ftp-server`
- `general`
- `groups`
- `host`
- `http-server`
- `mail`
- `nfs`
- `nfs_server`
- `nis`
- `nis_server`
- `ntp-client`
- `printer`
- `report`
- `samba-client`
- `sound`
- `squid`
- `ssh_import`
- `sysconfig`
- `tftp-server`
- `upgrade`
