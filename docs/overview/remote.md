---
sidebar_position: 5
---

# Remote access to the graphical interface

The Live ISO automatically starts a graphical interface (using the local browser). However, you
might want to access remotely to the installer. If you know the IP address of the system, you just
need to point your browser to `https://$IP`.

For the case you do not know the address, or just for convenience, the Live ISO is configured to use
[Multicast DNS](https://en.wikipedia.org/wiki/Multicast_DNS) (sometimes called mDNS, Avahi,
Zeroconf, Bonjour) for hostname resolution. Therefore, connecting to `https://agama.local` should do
the trick.

:::warning Beware of the `.local` hostname
Do not use the `.local` hostnames in untrusted networks (like public WiFi networks, shared
networks), it is a security risk. An attacker can easily send malicious responses for the `.local`
hostname resolutions and point you to a wrong Agama instance which could for example steal your root
password!
:::

The mDNS resolution also works for other services like ping or SSH. So you can use commands like:

```shell
ping agama.local
ssh root@agama.local
```

If you want to know more about the mDNS support, please check the [remote access
documentation](../user/guides/remote.md).

