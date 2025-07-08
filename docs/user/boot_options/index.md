---
sidebar_position: 5
---

# Boot options

Agama Live ISO behavior can be altered using the kernel command line at boot time. For those
architectures that support Grub, you need to modify the `agama-installer` entry adding the boot
options at the end of the `linux` line.

- `inst.auto`: tells the installer to use the profile in the given URL to start an unattended
  installation. Check the [URLs section](/docs/user/urls) to learn more about which URLs Agama
  supports.

  ```text
  inst.auto=http://mydomain.org/tumbleweed.jsonnet
  ```

- `inst.config_url`: it uses the file at the given URL as the new Agama configuration. Please, do
  not confuse this file with an unattended installation profile. See
  [URL handling in the installer](https://github.com/yast/yast-installation/blob/master/doc/url.md)
  to find more details about the supported URLs.

  ```text
  inst.config_url=http://192.168.122.1/my-agama.yaml
  inst.config_url=usb:///agama.yaml
  ```

- `inst.copy_network`: whether the NetworkManager persistent system connections should be copied to
  the target system at the end of the installation or not. The copy is enabled by default.

  ```text
  inst.copy_network=0
  ```

- `inst.dud`: applies a Driver Update (DUD) to the installation environment. A DUD can be used to
  patch or extend the installer. Supported formats include RPM packages and special DUD archives
  created with [mkdud](https://github.com/openSUSE/mkdud).

  You can specify this parameter multiple times; each entry is processed independently. If the DUD
  is located on a network, you must also add the `rd.neednet` boot option. For more details on
  supported URL formats, see the [URLs section](/docs/user/urls).

  ```text
  inst.dud=https://download.opensuse.org/some-project/some.rpm rd.neednet
  inst.dud=label://UPDATES/package.rpm
  ```

  Beware that this option does not perform any dependency checks or signature validation on the
  provided update.

- `inst.info`: points to info file that contains additional Agama settings. It is useful when you
  want to provide more options for Agama and typing them during boot is not possible.

  ```text
  inst.info=ftp://myserver/devel.info
  ```

  :::note

  Supports only parameters specified on this section. Kernel parameters are ignored.

  :::

- `inst.register_url`: sets the URL of the RMT or SCC proxy server to register the product with.

  ```text
  inst.register_url=http://rmt.example.net
  ```

- `inst.install_url`: overrides the default `installation_url` set in the product files
  [here](https://github.com/openSUSE/agama/tree/master/products.d) by passing the `inst.install_url`
  parameter as a boot option in the bootloader. This is particularly useful for any pre-production
  testing in openQA.

  ```text
  inst.install_url=https://myrepo,https://myrepo2
  ```

  :::warning

  Setting this variable will impact all products.

  :::

- `inst.finish`: during an unattended installation, if the installation is completed successfully
  then the installer will reboot into the target system by default (`reboot`). This behavior can be
  modified allowing to `halt` or `poweroff` the machine at the end of the installation. In addition
  to the three values corresponding to systemd commands, the value `stop` will pause at the final
  "Congratulations! [Reboot]" screen, allowing you to extract logs. An interactive installation is
  not affected by this parameter.

  ```text
  inst.finish=poweroff
  ```

- `inst.install`: on unattended mode, Agama automatically starts the installation after reading the
  profile. However, if you set `inst.install` to `0`, Agama stops after reading the configuration,
  giving the user a chance to review the installation options before proceeding.

- `live.password` and `live.password_hash`: sets the `root` password of the live system.
  `live.password` accepts a plain text password, while `live.password_hash` is expected to receive a
  hashed password, which is more secure. The disadvantage of a hashed password is that it is quite
  long and is not easy to type it into the boot prompt manually. It makes sense in environments
  where you can prepare the boot parameters in advance like in PXE boot or some virtual machines.

  ```text
  live.password=nots3cr3t
  ```

  :::warning Setting a password enables SSH

  The SSH service is not started unless a password is provided using any of the available options
  (`live.password`, `live.password_hash`, `live.password_dialog`, or `live.password_systemd`). This
  avoids accidentally using the default password from the medium.

  :::

- `live.password_dialog`: start an interactive dialog during the boot process. This uses a nice
  dialog for entering and confirming the password. However, in some situations the full screen
  dialog might not be displayed correctly or some messages might be displayed over it. In that case
  you might use the `Ctrl+L` key shortcut to refresh the screen. If it still does not work then try
  using the other option below.

  ```text
  live.password_dialog
  live.password_dialog=1
  ```

- `live.password_systemd`: asks for a password using a simple prompt. This is similar to the option
  above, but the advantage is that this solution does not use a full screen dialog but a single line
  prompt so it should work better in special environments like a serial console.

  ```text
  live.password_systemd
  live.password_systemd=1
  ```

- `proxy`: sets up a network proxy. The supported proxy URL format is
  `protocol://[user[:password]@]host[:port]`.

  ```text
  proxy=http://192.168.122.1:3128
  ```

- `systemd.unit`: standard way to change target for systemd boot. It is useful for head-less mode
  when graphical interface neither browser needs to be started locally.

  ```text
  systemd.unit=multi-user.target
  ```
