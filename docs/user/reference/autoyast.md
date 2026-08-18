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

## add-on

This section is supported.

### add-on/add_on_products

This section is supported.

| AutoYaST          | Supported | Agama                                     | Notes |
| ----------------- | --------- | ----------------------------------------- | ----- |
| `media_url`       | yes       | `software.extraRepositories[].url`        |       |
| `product_dir`     | yes       | `software.extraRepositories[].productDir` |       |
| `alias`           | yes       | `software.extraRepositories[].alias`      |       |
| `priority`        | yes       | `software.extraRepositories[].priority`   |       |
| `name`            | yes       | `software.extraRepositories[].name`       |       |
| `product`         | no        |                                           |       |
| `ask_on_error`    | no        |                                           |       |
| `confirm_license` | no        |                                           |       |

### add-on/add_on_others

This section is supported.

| AutoYaST          | Supported | Agama                                     | Notes                     |
| ----------------- | --------- | ----------------------------------------- | ------------------------- |
| `media_url`       | yes       | `software.extraRepositories[].url`        |                           |
| `product_dir`     | yes       | `software.extraRepositories[].productDir` | Agama ignores this value. |
| `alias`           | yes       | `software.extraRepositories[].alias`      |                           |
| `priority`        | yes       | `software.extraRepositories[].priority`   |                           |
| `name`            | yes       | `software.extraRepositories[].name`       |                           |
| `product`         | no        |                                           |                           |
| `ask_on_error`    | no        |                                           |                           |
| `confirm_license` | no        |                                           |                           |

## bootloader

This section is supported.

| AutoYaST      | Supported | Agama | Notes |
| ------------- | --------- | ----- | ----- |
| `device_map`  | no        |       |       |
| `loader_type` | no        |       |       |

### bootloader/global

This section is supported.

| AutoYaST            | Supported | Agama                          | Notes |
| ------------------- | --------- | ------------------------------ | ----- |
| `activate`          | no        |                                |       |
| `append`            | yes       | `bootloader.extraKernelParams` |       |
| `boot_boot`         | no        |                                |       |
| `boot_custom`       | no        |                                |       |
| `boot_extended`     | no        |                                |       |
| `boot_mbr`          | no        |                                |       |
| `boot_root`         | no        |                                |       |
| `cpu_mitigations`   | no        |                                |       |
| `generic_mbr`       | no        |                                |       |
| `gfxmode`           | no        |                                |       |
| `os_prober`         | no        |                                |       |
| `password`          | no        |                                |       |
| `suse_btrfs`        | no        |                                |       |
| `serial`            | no        |                                |       |
| `secure_boot`       | no        |                                |       |
| `terminal`          | no        |                                |       |
| `timeout`           | yes       | `bootloader.timeout`           |       |
| `trusted_boot`      | no        |                                |       |
| `update_nvram`      | no        |                                |       |
| `vgamode`           | no        |                                |       |
| `xen_append`        | no        |                                |       |
| `xen_kernel_append` | no        |                                |       |

## dasd

This section is supported.

| AutoYaST   | Supported | Agama | Notes |
| ---------- | --------- | ----- | ----- |
| `device`   | no        |       |       |
| `dev_name` | no        |       |       |
| `channel`  | yes       |       |       |
| `diag`     | yes       |       |       |

## files

This section is supported.

| AutoYaST           | Supported | Agama                 | Notes                                                              |
| ------------------ | --------- | --------------------- | ------------------------------------------------------------------ |
| `file_path`        | yes       | `files[].destination` | Creating directories by using trailing slash is not yet supported. |
| `file_contents`    | yes       | `files[].content`     |                                                                    |
| `file_location`    | yes       | `files[].url`         |                                                                    |
| `file_owner`       | yes       |                       | In agama it is split to files[].user and files[].group             |
| `file_permissions` | yes       | `files[].permissions` |                                                                    |
| `file_script`      | planned   |                       |                                                                    |

## iscsi-client

This section is supported.

| AutoYaST        | Supported | Agama             | Notes |
| --------------- | --------- | ----------------- | ----- |
| `initiatorname` | yes       | `iscsi.initiator` |       |
| `version`       | no        |                   |       |

### iscsi-client/targets[]

This section is supported.

| AutoYaST     | Supported | Agama                       | Notes                                                                       |
| ------------ | --------- | --------------------------- | --------------------------------------------------------------------------- |
| `authmethod` | no        |                             |                                                                             |
| `portal`     | yes       | `iscsi.targets[].address`   | Splitted into two values, iscsi.targets[].address and iscsi.targets[].port. |
| `startup`    | yes       | `iscsi.targets[].startup`   |                                                                             |
| `target`     | yes       | `iscsi.targets[].name`      |                                                                             |
| `iface`      | yes       | `iscsi.targets[].interface` |                                                                             |

## kdump

There are plans to support this section in the future.

## keyboard

This section is supported.

| AutoYaST   | Supported | Agama           | Notes |
| ---------- | --------- | --------------- | ----- |
| `keymap`   | yes       | `l10n.keyboard` |       |
| `capslock` | no        |                 |       |
| `delay`    | no        |                 |       |
| `discaps`  | no        |                 |       |
| `numlock`  | no        |                 |       |
| `rate`     | no        |                 |       |
| `scrlock`  | no        |                 |       |
| `tty`      | no        |                 |       |

## language

This section is supported.

| AutoYaST    | Supported | Agama           | Notes |
| ----------- | --------- | --------------- | ----- |
| `language`  | yes       | `l10n.language` |       |
| `languages` | no        |                 |       |

## networking

This section is supported.

| AutoYaST                  | Supported | Agama | Notes                               |
| ------------------------- | --------- | ----- | ----------------------------------- |
| `backend`                 | no        |       | Only NetworkManager is supported.   |
| `dhcp_options`            | no        |       |                                     |
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

### networking/dns

This section is supported.

| AutoYaST             | Supported | Agama                                   | Notes                      |
| -------------------- | --------- | --------------------------------------- | -------------------------- |
| `dhcp_hostname`      | no        |                                         |                            |
| `hostname`           | yes       | `hostname.static`                       |                            |
| `nameservers`        | yes       | `network.connections[].nameservers[]`   | Copied to each connection. |
| `resolv_conf_policy` | no        |                                         |                            |
| `searchlist`         | yes       | `network.connections[].dnsSearchList[]` | Copied to each connection. |

### networking/interfaces[]

This section is supported. It corresponds to Agama `connections`, but the format is not exactly the
same.

| AutoYaST                       | Supported | Agama                                                          | Notes                                                                                                                     |
| ------------------------------ | --------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `device`                       | yes       | `network.connections[].interface`                              |                                                                                                                           |
| `name`                         | yes       | `network.connections[].id`                                     |                                                                                                                           |
| `description`                  | no        |                                                                |                                                                                                                           |
| `bootproto`                    | yes       | `network.connections[].method4, network.connections[].method6` | Different set of values. 'ibft' and 'dhcp+autoip' fall back to 'auto'.                                                    |
| `startmode`                    | yes       | `network.connections[].autoconnect`                            | 'manual' and 'off' disable the auto-connection and keep the connection down; the rest enable it.                          |
| `lladdr`                       | yes       | `network.connections[].macAddress`                             |                                                                                                                           |
| `ifplugd_priority`             | no        |                                                                | Not relevant (no ifplugd support).                                                                                        |
| `usercontrol`                  | no        |                                                                |                                                                                                                           |
| `dhclient_set_hostname`        | no        |                                                                |                                                                                                                           |
| `ipaddr`                       | yes       | `network.connections[].addresses[]`                            |                                                                                                                           |
| `prefixlen`                    | yes       | `network.connections[].addresses[]`                            |                                                                                                                           |
| `netmask`                      | yes       | `network.connections[].addresses[]`                            |                                                                                                                           |
| `aliases`                      | yes       | `network.connections[].addresses[]`                            |                                                                                                                           |
| `broadcast`                    | yes       | `network.connections[].addresses[]`                            |                                                                                                                           |
| `network`                      | yes       | `network.connections[].addresses[]`                            |                                                                                                                           |
| `mtu`                          | no        |                                                                |                                                                                                                           |
| `ethtool_options`              | no        |                                                                |                                                                                                                           |
| `wireless`                     | yes       | `network.connections[].wireless`                               | It uses a different format.                                                                                               |
| `dhclient_set_down_link`       | no        |                                                                |                                                                                                                           |
| `dhclient_set_default_route`   | no        |                                                                |                                                                                                                           |
| `zone`                         | no        |                                                                |                                                                                                                           |
| `firewall`                     | no        |                                                                |                                                                                                                           |
| `bonding_master`               | yes       |                                                                | Implied by the presence of the `bonding_slaveN` elements.                                                                 |
| `bonding_module_opts`          | yes       | `network.connections[].bond.options`                           | The `mode` option is set in `network.connections[].bond.mode`. Numeric modes (e.g., `mode=1`) are supported too.          |
| `bonding_slave0`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave1`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave2`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave3`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave4`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave5`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave6`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave7`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave8`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bonding_slave9`               | yes       | `network.connections[].bond.ports[]`                           |                                                                                                                           |
| `bridge`                       | yes       |                                                                | Implied by the presence of the `bridge_ports` element.                                                                    |
| `bridge_forward_delay`         | yes       | `network.connections[].bridge.forwardDelay`                    | Negative values are ignored.                                                                                              |
| `bridge_forwarddelay`          | yes       | `network.connections[].bridge.forwardDelay`                    | Deprecated spelling of `bridge_forward_delay`.                                                                            |
| `bridge_ports`                 | yes       | `network.connections[].bridge.ports[]`                         |                                                                                                                           |
| `bridge_stp`                   | yes       | `network.connections[].bridge.stp`                             |                                                                                                                           |
| `etherdevice`                  | yes       | `network.connections[].vlan.parent`                            | Inferred from the device name (e.g., 'eth0' for 'eth0.10') when it is not set.                                            |
| `vlan_id`                      | yes       | `network.connections[].vlan.id`                                | Inferred from the device name (e.g., 10 for 'eth0.10') when it is not set. It must be lower than 4095, which is reserved. |
| `wireless_auth_mode`           | yes       | `network.connections[].wireless.security`                      | Map 'psk' to 'wpa-psk' and 'eap' to 'wpa-eap'; anything else becomes 'none'.                                              |
| `wireless_ap`                  | no        |                                                                |                                                                                                                           |
| `wireless_bitrate`             | no        |                                                                |                                                                                                                           |
| `wireless_ca_cert`             | no        |                                                                |                                                                                                                           |
| `wireless_channel`             | no        |                                                                |                                                                                                                           |
| `wireless_client_cert`         | no        |                                                                |                                                                                                                           |
| `wireless_client_key`          | no        |                                                                |                                                                                                                           |
| `wireless_client_key_password` | no        |                                                                |                                                                                                                           |
| `wireless_default_key`         | no        |                                                                |                                                                                                                           |
| `wireless_eap_auth`            | no        |                                                                |                                                                                                                           |
| `wireless_eap_mode`            | no        |                                                                |                                                                                                                           |
| `wireless_essid`               | yes       | `network.connections[].wireless.ssid`                          |                                                                                                                           |
| `wireless_frequency`           | no        |                                                                |                                                                                                                           |
| `wireless_key`                 | no        |                                                                |                                                                                                                           |
| `wireless_key_0`               | no        |                                                                |                                                                                                                           |
| `wireless_key_1`               | no        |                                                                |                                                                                                                           |
| `wireless_key_2`               | no        |                                                                |                                                                                                                           |
| `wireless_key_3`               | no        |                                                                |                                                                                                                           |
| `wireless_key_length`          | no        |                                                                |                                                                                                                           |
| `wireless_mode`                | yes       | `network.connections[].wireless.mode`                          | Map 'ad-hoc' to 'adhoc', 'master' to 'ap' and 'managed' to 'infrastructure'.                                              |
| `wireless_nick`                | no        |                                                                |                                                                                                                           |
| `wireless_nwid`                | no        |                                                                |                                                                                                                           |
| `wireless_peap_version`        | no        |                                                                |                                                                                                                           |
| `wireless_power`               | no        |                                                                |                                                                                                                           |
| `wireless_wpa_anonid`          | no        |                                                                |                                                                                                                           |
| `wireless_wpa_identity`        | no        |                                                                |                                                                                                                           |
| `wireless_wpa_password`        | yes       | `network.connections[].wireless.password`                      | Only used when 'wireless_auth_mode' is 'eap'.                                                                             |
| `wireless_wpa_psk`             | yes       | `network.connections[].wireless.password`                      | Only used when 'wireless_auth_mode' is 'psk'.                                                                             |

## ntp-client

This section is supported.

| AutoYaST     | Supported | Agama | Notes |
| ------------ | --------- | ----- | ----- |
| `ntp_policy` | no        |       |       |
| `ntp_sync`   | no        |       |       |

### ntp-client/ntp_servers[]

This section is supported. All servers are considered of type "pool"

| AutoYaST  | Supported | Agama                   | Notes |
| --------- | --------- | ----------------------- | ----- |
| `address` | yes       | `ntp.sources[].address` |       |
| `iburst`  | yes       | `ntp.sources[].iburst`  |       |
| `offline` | yes       | `ntp.sources[].offline` |       |

## proxy

There are plans to support this section in the future. Meanwhile set the proxy using the kernels'
command line.

## scripts

This section is supported.

### scripts/pre-scripts[]

This section is supported.

| AutoYaST        | Supported | Agama                   | Notes                                 |
| --------------- | --------- | ----------------------- | ------------------------------------- |
| `filename`      | yes       | `scripts.pre[].name`    |                                       |
| `location`      | yes       | `scripts.pre[].url`     |                                       |
| `source`        | yes       | `scripts.pre[].content` |                                       |
| `interpreter`   | no        |                         | Use the shebang line in your scripts. |
| `feedback`      | no        |                         |                                       |
| `feedback_type` | no        |                         |                                       |
| `debug`         | no        |                         |                                       |
| `notification`  | no        |                         |                                       |
| `param-list`    | no        |                         |                                       |
| `rerun`         | no        |                         |                                       |

### scripts/postpartitioning-scripts[]

This section is supported.

| AutoYaST        | Supported | Agama                                | Notes                                 |
| --------------- | --------- | ------------------------------------ | ------------------------------------- |
| `filename`      | yes       | `scripts.postPartitioning[].name`    |                                       |
| `location`      | yes       | `scripts.postPartitioning[].url`     |                                       |
| `source`        | yes       | `scripts.postPartitioning[].content` |                                       |
| `interpreter`   | no        |                                      | Use the shebang line in your scripts. |
| `feedback`      | no        |                                      |                                       |
| `feedback_type` | no        |                                      |                                       |
| `debug`         | no        |                                      |                                       |
| `notification`  | no        |                                      |                                       |
| `param-list`    | no        |                                      |                                       |
| `rerun`         | no        |                                      |                                       |

### scripts/chroot-scripts[]

This section is supported.

| AutoYaST        | Supported | Agama                    | Notes                                 |
| --------------- | --------- | ------------------------ | ------------------------------------- |
| `filename`      | yes       | `scripts.post[].name`    |                                       |
| `location`      | yes       | `scripts.post[].url`     |                                       |
| `source`        | yes       | `scripts.post[].content` |                                       |
| `interpreter`   | no        |                          | Use the shebang line in your scripts. |
| `feedback`      | no        |                          |                                       |
| `feedback_type` | no        |                          |                                       |
| `debug`         | no        |                          |                                       |
| `notification`  | no        |                          |                                       |
| `param-list`    | no        |                          |                                       |
| `rerun`         | no        |                          |                                       |
| `chrooted`      | yes       | `scripts.post[].chroot`  |                                       |

### scripts/post-scripts[]

This section is supported.

| AutoYaST        | Supported | Agama                    | Notes                                 |
| --------------- | --------- | ------------------------ | ------------------------------------- |
| `filename`      | yes       | `scripts.init[].name`    |                                       |
| `location`      | yes       | `scripts.init[].url`     |                                       |
| `source`        | yes       | `scripts.init[].content` |                                       |
| `interpreter`   | no        |                          | Use the shebang line in your scripts. |
| `feedback`      | no        |                          |                                       |
| `feedback_type` | no        |                          |                                       |
| `debug`         | no        |                          |                                       |
| `notification`  | no        |                          |                                       |
| `param-list`    | no        |                          |                                       |
| `rerun`         | no        |                          |                                       |

### scripts/init-scripts[]

This section is supported.

| AutoYaST   | Supported | Agama                    | Notes |
| ---------- | --------- | ------------------------ | ----- |
| `filename` | yes       | `scripts.init[].name`    |       |
| `location` | yes       | `scripts.init[].url`     |       |
| `source`   | yes       | `scripts.init[].content` |       |
| `rerun`    | no        |                          |       |

## services-manager

This section is supported. Agama does not implement support to enable/disable services on demand, so
this section is converted to a post-installation script which enables/disables the services.

| AutoYaST         | Supported | Agama | Notes                                                                 |
| ---------------- | --------- | ----- | --------------------------------------------------------------------- |
| `default_target` | yes       |       | Add a call to "systemctl set-target" in the post-installation script. |
| `enable[]`       | yes       |       | Services are enabled in the post-installation script.                 |
| `disable[]`      | yes       |       | Services are disabled in the post-installation script.                |
| `on_demand[]`    | yes       |       | Services are enabled on-demand in the post-installation script.       |

## software

This section is supported.

| AutoYaST              | Supported | Agama                 | Notes        |
| --------------------- | --------- | --------------------- | ------------ |
| `do_online_update`    | no        |                       | No 2nd stage |
| `install_recommended` | no        |                       |              |
| `instsource`          | no        |                       |              |
| `kernel`              | no        |                       |              |
| `packages[]`          | yes       | `software.packages[]` |              |
| `post-packages[]`     | no        |                       |              |
| `patterns[]`          | yes       | `software.patterns[]` |              |
| `products[]`          | yes       | `product.id`          |              |
| `remove-packages[]`   | no        |                       |              |
| `remove-patterns[]`   | no        |                       |              |
| `remove-products[]`   | no        |                       |              |

## suse_register

This section is supported.

| AutoYaST                           | Supported | Agama                                    | Notes                                                                    |
| ---------------------------------- | --------- | ---------------------------------------- | ------------------------------------------------------------------------ |
| `do_registration`                  | yes       |                                          | The whole suse_register section is ignored if "false".                   |
| `email`                            | yes       | `product.registrationEmail`              |                                                                          |
| `install_updates`                  | no        |                                          |                                                                          |
| `reg_code`                         | yes       | `product.registrationCode`               |                                                                          |
| `reg_server`                       | yes       | `product.registrationUrl`                |                                                                          |
| `reg_server_cert`                  | no        |                                          |                                                                          |
| `reg_server_cert_fingerprint`      | yes       | `security.sslCertificates[].fingerprint` |                                                                          |
| `reg_server_cert_fingerprint_type` | yes       | `security.sslCertificates[].algorithm`   |                                                                          |
| `addons[]`                         | yes       | `product.addons[]`                       | Does not check the dependencies, it registers addons in the given order. |
| `slp_discovery`                    | planned   |                                          |                                                                          |

## timezone

This section is supported.

| AutoYaST   | Supported | Agama           | Notes |
| ---------- | --------- | --------------- | ----- |
| `timezone` | yes       | `l10n.timezone` |       |
| `hwclock`  | no        |                 |       |

## users[]

This section is supported. Only the root and the first user are considered.

| AutoYaST          | Supported | Agama                                        | Notes                                                          |
| ----------------- | --------- | -------------------------------------------- | -------------------------------------------------------------- |
| `username`        | yes       | `user.userName`                              |                                                                |
| `fullName`        | yes       | `user.fullName`                              |                                                                |
| `password`        | yes       | `user.password or root.password`             |                                                                |
| `encrypted`       | yes       | `user.hashedPassword or root.hashedPassword` | If set to true, it uses "hashedPassword" instead of "password" |
| `authorized_keys` | yes       | `user.sshPublicKeys`                         |                                                                |

## zfcp

This section is supported.

### zfcp/devices[]

This section is supported.

| AutoYaST        | Supported | Agama                    | Notes |
| --------------- | --------- | ------------------------ | ----- |
| `controller_id` | yes       | `zfcp.devices[].channel` |       |
| `wwpn`          | yes       | `zfcp.devices[].wwpn`    |       |
| `fcp_lun`       | yes       | `zfcp.devices[].lun`     |       |

## Unsupported sections

The following sections are not supported and there are no plans to support them in the future.

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
- `printer`
- `report`
- `samba-client`
- `sound`
- `squid`
- `ssh_import`
- `sysconfig`
- `tftp-server`
- `upgrade`
