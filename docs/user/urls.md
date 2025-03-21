---
sidebar_position: 10
---

# Agama URLs

In addition to well known protocols, like `http(s)://`. `ftp://`, `file://`, etc., Agama understands
most of [YaST and AutoYaST specific
URLs](https://doc.opensuse.org/projects/autoyast/#Commandline-ay). So when you need to specify a URL
(e.g., if you want to perform an unattended installation), you can use any of those options.

## Supported schemes

Agama supports the following standard schemes[^1]:

- `http` and `https` for HTTP and HTTPS.
- `ftp` and `ftps` for FTP and FTP over TSL.
- `smb` and `smbs` for the Server Message Block (SMB) protocol[^2].
- `nfs` for the Network File System (NFS) protocol.
- `file` for local files.

In addition to those schemes, Agama supports a set of specific ones which can be
rather useful:

- [`device`](#device) for finding files in specific devices (even unmounted
  ones).
- [`usb`](#usb) for finding files in USB devices (even unmounted ones).
- [`label`](#label) for finding files in a file system with a given label.
- [`cd`, `dvd`, `hd`](#cd-dvd-and-hd) for finding files in specific devices
  (prefer `device`).

## Agama specific schemes

The typical protocols are enough for most use cases. However, more specific URLs
can be handy in many situations. For instance, instead of serving your profile
through HTTP, you could just put it on a USB stick and tell Agama about it with
`usb:///profile.json`. Agama would search in all your USB devices for the
profile to use. Cool, right?

Let's have a look to the different kind of URLs that Agama offers.

### `device`

This is the most flexible scheme. The general form is `device://[DEVICE]/PATH`.
Let's have a look to some examples to better understand of how it works.

In the following example, Agama will search for the `profile.json` file in the
`/dev/sda1` device:

```text
device://sda1/profile.json
```

It is possible to search in a given directory. In this case, the
`/profiles/sles.json` file in the `/dev/sda1` device:

```text
device://sda1/profiles/sles.json
```

Nested devices are supported too:

```text
device:///cciss/c1d0p5/sles.json
```

### `usb`

The `usb://` scheme is a particular form of the `device://` but limited to USB
devices. As mentioned before, the following URL will search the
`profile/sles.json` in all USB devices.

```text
usb:///profile/sles.json
```

### `label`

The `label://` scheme allows to search on file systems with a given label. It
has the form `label://LABEL/PATH`. In the following example, Agama will search
for the `sles.json` in a file system labeled as `OEMDRV`:

```text
label://OEMDRV/sles.json
```

### `cd`, `dvd` and `hd`

This is another particular case of `device://` but with a slightly different form. In Agama, there
is no difference between these forms (`hd`, `dvd` and `cd`). The syntax is
`dvd:/PATH?devices=DEVICE`:

```text
hd:/sles.jsonnet?devices=/dev/sr0
dvd:/autoinst.xml?devices=sr1
```

:::note Prefer `device` to `cd`, `dvd` or `hd`
Given that `cd`, `dvd` and `hd` do not offer any advantage, using `device` might be a better option.
:::

### Not supported yet

The `repo://` and `relurl://` URLs are not supported yet, but there are plans to
implement them.

[^1]:
    Agama relies on [curl](https://curl.se/) to support generic protocols
    (network protocols and `file://`). So it might happen that some protocol is
    supported "by accident". However, only the documented protocols are really
    supported by Agama.

[^2]:
    Use `smb` instead of `cifs`, although in the future you should be able to
    use any of them.
