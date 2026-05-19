# Network Time Protocol (NTP)

It is crucial that the system you are installing has the right date and time. Otherwise, you can
face some weird errors during the installation. And that's where the Network Time Protocol (NTP)
comes in.

The Agama installation medium ships [chrony](https://chrony-project.org/), which will synchronize
the system date and time automatically so you do not need to care about it. However, there are some
situations where you might want to force Agama to use a specific NTP server.

The configuration file might include an `ntp` section where you can define a list of time sources to
use. If that list if given, Agama will force `chrony` to synchronize using those sources and it will
copy the configuration to the installed system.

```json
{
  "ntp": {
    "sources": [
      {
        "type": "pool",
        "address": "2.opensuse.pool.ntp.org",
        "iburst": true,
        "offline": false
      }
    ]
  }
}
```

The `ntp` section includes a list of `sources` to define the systems to synchronize with. Each
source can specify:

- `address`: the hostname or IP address of the NTP source.
- `type`: the type of NTP source. It may use:
  - `pool`: a pool of NTP servers (e.g., `pool.ntp.org`). The pool name will be resolved to multiple
    servers and chrony will use the best ones.
  - `server`: a specific NTP server to synchronize time from.
  - `peer`: an NTP peer for symmetric synchronization (bidirectional time exchange).
- `iburst`: (optional, boolean) if set to `true`, chrony will send a burst of packets at startup to
  speed up the initial synchronization. Defaults to `false`.
- `offline`: (optional, boolean) if set to `true`, the source is marked as offline initially. This
  is useful for sources that are not always available (e.g., sources that require network
  connectivity that may not be present at boot time). Defaults to `false`.

:::note

If you need to synchronize the date/time before Agama starts (e.g., if your system does not have a
clock), check the [`rd.ntp` boot option](./../boot_options).

:::
