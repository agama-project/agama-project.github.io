# Collecting Agama logs

## Getting Agama logs from an installed system

If the installation was successful and you can boot into the newly installed
system and log in, get the Agama logs from `/var/log/agama/installation`.


## The "agama logs store" command

In a running Agama live ISO (i.e. when booted from the installation ISO), use
this command to collect logs:

```
agama logs store
```

It will tell you the exact path and filename where it stored the logs.

See also the [agama logs store command line reference](../user/cli#agama-logs-store).



### Beware: RAM disk!

Notice that you will still have to copy them to a permanent location; the
installation runs from a RAM disk at this point that will be gone when the
Agama live session terminates, or when the installation boots (or tries to
boot) into the freshly installed system.

See section
[Saving the Logs to a Permanent Location](./collecting-agama-logs#saving-the-logs-to-a-permanent-location)
below.


### Wait for the right time



## How to get a shell

### Starting an xterm

From a running graphical Agama session, you can start an `xterm` terminal
window with a root shell session. At the time of this writing, the key
combination was `Ctrl`+`Alt`+`T` (for "Terminal").

If you click outside of that xterm, it may disappear behind the active Agama
window. Use `Alt`+`Tab` (maybe repeatedly) to fetch it to the foreground again.

When done, you can close the xterm with the `[x]` close button at its top right
corner or with the `exit` command or with `Ctrl`+`D`.


#### Setting the keyboard layout in the xterm

You will still have the US keyboard layout (QWERTY) if you haven't set a
different one in the installer settings in Agama. You can load a national
variant with the `setxkbmap` command:

```
setxkbmap de
```
(for the German keyboard)

```
setxkbmap fr
```
(for the French keyboard)

or `it` for Italian, `cz` for Czech etc.


### Switching to a text console

If you are running Agama in graphical mode on the system console, you can
switch to one of the text consoles with `Ctrl`+`Alt`+`F1` or `Ctrl`+`Alt`+`F2`
...  `Ctrl`+`Alt`+`F6.`

Then log in as "root" and use the password just above the login prompt. Notice
that this password is freshly generated; it's different each time the live
system is booted.

Ignore the QR code on the console: That does NOT represent the password, it's
the URL with the IP of the machine that is being installed; something like
`https://192.168.178.171`.

Your keyboard may still be using the US layout (QWERTY); if you are used to a
national keyboard layout (e.g. German QWERTZ), some letters or special
characters may be on different keys.


#### Back to the graphical session

Use `Ctrl`+`Alt`+`F7` or just `Alt`+`F7` to get back to the graphical session.


#### VirtualBox etc.: On-screen keyboard

If running in a virtualization environment like VirtualBox, you may want to use
the on-screen keyboard to use those `Ctrl`+`Alt`+`Fx` key combinations
(VirtualBox: Menu "Input" -> "Keyboard" -> "Soft Keyboard"). This may also help
with the keyboard layout problem when entering the password.

Notice that you need to click the `Shift` key on the on-screen keyboard to get
upper-case letters; using the physical `Shift` key on your normal keyboard will
probably not have any effect.


## Saving the logs to a permanent location

Since the installation runs from a RAM disk, you need to copy any collected
logs to a permanent location: One of

- A networked machine

- A mounted storage medium (USB stick, SD card)


### Copying over the network

From the machine where the installation is running:

```
scp /tmp/agama-logs*.tar.gz root@myworkingmachine:/tmp
```

Or use the IP address of the target machine:
(find out on that machine with the `ip a`command)

```
scp /tmp/agama-logs*.tar.gz root@192.176.178.42:/tmp
```


### Copying on a USB stick or SD card

Plug in the USB stick or SD card, then check what device name it uses with

```
lsblk
```

Then mount that device, copy the agama logs file and unmount the device again:

```
mount /dev/sdx1 /mnt
cp /tmp/agama-logs*.tar.gz /mnt
umount /mnt
```

(Assuming the device for the USB stick or SD card was `/dev/sdx1`)

If `/mnt` was busy at that point, create a new directory (say, `/mnt2`) and use
that one instead.
