---
sidebar_position: 5
---

# ISO installer

Agama installer is deployed as a regular application which can be installed and run on a local
system. However, the most expected way of using Agama is by running it on a live ISO image.

## Sources

The Live ISO sources are maintained in the
[Agama's repository live/ subdirectory](https://github.com/openSUSE/agama/tree/master/live). See
more details in the [live/README.md](https://github.com/openSUSE/agama/blob/master/live/README.md)
documentation.

## Live ISO requirements

A live ISO for running Agama should provide the following software:

- Hardware drivers.
- Agama installer and related tools (lvm, cryptsetup,
  [NetworkManager](https://www.networkmanager.dev/), etc).
- A browser to locally render the Agama web UI.
- Optionally, repository packages of the products to install.

:::note

If no browser is included, then the installation has to be remotely performed by using a browser
from another machine. This would be the typical case for s390x installations.

:::

:::warning

These days the packages repositories are not included, so the installation requires Internet
connection to download the packages of the product to install.

:::

## Agama Live ISO (_only for development and testing_)

The Agama project provides a
[live ISO image](https://build.opensuse.org/package/show/systemsmanagement:Agama:Devel/agama-installer)
for testing purposes and it is intended to be used for developers only. It has some limitations and
it is not optimized for production usage.

### Description

- The live ISO is based on openSUSE Tumbleweed.
- Allows installing both SUSE and openSUSE products.
- Weighs around 1 GiB.
- Contains Agama installer and tools, and hardware drivers.
- **Includes Firefox (except for ppc64le and s390x).**
- **Does not include packages from product repositories.**
- Supported archs: x86_64, aarch64, ppc64le and s390x.

### Hardware requirements

- 2 GiB of RAM memory
- Internet connection to download packages of the product to install.
- Around 10 GiB of disk size, although it depends on the selected product to install.

## Experimental self-update

:::warning

This feature is experimental and untested!

:::

The Agama packages on the Live ISO can be automatically updated from the
[OBS Devel project](https://build.opensuse.org/project/show/systemsmanagement:Agama:Devel).

- Use the `inst.self_update` boot parameter to run the self-update automatically during boot.
- Or run the `agama-self-update` script anytime later in a running Live system.

:::note

After updating the packages the Agama servers need to be restarted. This will reset all you current
Agama settings, you will need to start from scratch!

:::

## The access password

Because the ISO image is built publicly we cannot use any predefined password as everybody would
know that and for attackers it would be really trivial to hack your running installer.

That means you have to provide our own password. If none is specified then Agama generates a random
password and prints it on the console after boot.

### Using a custom password

There are several ways how to specify your custom password, each of them might be suitable for a
different use case.

### Boot command line

You can define the password directly on the boot command line. There are two options:

- Use `live.password=<password>` with a plain text password. Note that a plain text password is less
  secure because it is visible in the bootloader and remains readable in `/proc/cmdline` after
  booting.
- Use `live.password_hash=<password_hash>` with a hashed password. This is more secure than using a
  plaintext password.

  The disadvantage is that the hashed password is quite long and is not easy to type it into the
  boot prompt manually. It makes sense in environments where you can prepare the boot parameters in
  advance like in PXE boot or some virtual machines.

  :::warning

  Because password hashes contain `$` characters, you need to quote or escape the value (for
  example, `live.password_hash='<hash>'`) so that bootloaders like GRUB do not interpret `$` as a
  variable expansion.

  :::

  See more details about creating a hashed password [below](#creating-a-hashed-password).

### Interactive input

You can enter your password during boot in an interactive session. Again, there are two options:

- Use `live.password_dialog` boot option to start an interactive dialog during the boot process.
  This uses a nice dialog for entering and confirming the password. However, in some situations the
  full screen dialog might not be displayed correctly or some messages might be displayed over it.
  In that case you might use the `Ctrl+L` key shortcut to refresh the screen. If it still does not
  work then try using the other option below.

- Use `live.password_systemd` boot option to ask for the password in a simple prompt. This is
  similar to the option above, but the advantage is that this solution does not use a full screen
  dialog but a single line prompt so it should work better in special environments like a serial
  console.

The Agama and the SSH server are not started until a password is configured.

### Setting the password in the ISO image using mkmedia

Another option is to set the password on the kernel command line directly in the ISO image using
[mkmedia](https://github.com/openSUSE/mkmedia) (formerly `mksusecd`). The advantage is that you can
easily use the same image for installing multiple machines and you do not need to configure anything
during the boot.

The `mkmedia` tool can modify the bootloader configuration and change kernel command-line options
when creating a new ISO image.

To create a new ISO image with a hashed password on the kernel command line:

```sh
# replace agama.iso with your image name
mkmedia --create custom-agama.iso \
  --boot "live.password_hash='$(openssl passwd -6)'" \
  agama.iso
```

This will interactively prompt for a password, hash it using the SHA512 algorithm, and embed the
`live.password_hash` boot parameter into the bootloader configuration of `custom-agama.iso`. Note
the single quotes around `'$(openssl passwd -6)'`: because password hashes contain `$` characters,
enclosing the hash in single quotes prevents the bootloader from interpreting them as variables
during boot.

:::warning

Using a plain text password (`live.password=<password>`) should be avoided here. When using
`mkmedia`, you can hash the password very easily so it should always be preferred. A plain text
password is less secure because it is stored unencrypted in the bootloader configuration and remains
visible in the `/proc/cmdline` file after booting. Plain text passwords should only be used when
setting the password interactively at the boot prompt, where typing a very long password hash is
error-prone.

:::

See the [Creating a Hashed Password](#creating-a-hashed-password) section below if you want to use a
different hashing algorithm than SHA512 or another tool such as `mkpasswd`.

If you want to remove the password setting from the boot parameters, `mkmedia` allows prefixing the
parameter with a minus sign (`-`):

```sh
# replace custom-agama.iso with your image name
mkmedia --create clean-agama.iso \
  --boot "-live.password -live.password_hash" \
  custom-agama.iso
```

### Random password as a fallback

When no password is specified or entering the password interactively was canceled by the user then
Agama generates a random password and prints it on the console.

### Password priority

The password setting priority is following (from highest priority to the lowest):

1. Password entered interactively during the boot process
2. Password entered on the boot command line
3. A random password is generated as a fallback

### Creating a Hashed Password

There are several ways how to create a password hash, here we will mention two tools.

Each tool allows to select the encryption method to use. To check the details about all encryption
methods see `man 5 crypt`, it lists the encryption methods sorted by their strength so you can check
which methods are recommended and which ones should be avoided.

#### Mkpasswd

You can use the `mkpasswd` tool from the `whois` package. It offers a lot of encryption methods, see
the `mkpasswd -m help` for the list.

By default it uses the strongest method available so in most cases you just run

```sh
mkpasswd
```

and then enter the password on the command line prompt.

#### OpenSSL

Alternatively you can use the `openssl passwd` command from the openSSL package. It offers less
encryption methods but on the other hand it should be basically installed in every system.

:::warning

By default it uses a weak encryption method (DES or MD5 depending on the OpenSSL version) so you
should always provide an additional encryption method parameter to select a stronger encryption!

:::

To create a SHA512 hash for your password run

```sh
openssl passwd -6
```

and then enter the password on the command line prompt.

For less strong SHA256 hash use the `-5` option, the other encryption methods should be avoided.
