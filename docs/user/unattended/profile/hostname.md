---
sidebar_position: 10
---

# Hostname

Traditionally, the hostname is considered part of the network configuration. However, although
closely related, Agama features a separate section for it.

At this point, it is possible to set the `static` and the `transient` hostnames.

```jsonnet
{
  hostname: {
    "static": "myhost.example.lan",
    "transient": "installation.lan"
  }
}
```

To learn the difference between both hostnames, make sure to check the
[hostnamectl documentation](https://manpages.opensuse.org/Tumbleweed/systemd/hostnamectl.1.en.html).
If you are in doubt, you most probably want to set (if any) the `static` hostname.
