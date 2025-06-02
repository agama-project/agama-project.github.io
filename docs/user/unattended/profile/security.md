---
sidebar_position: 8
---

# Security

The security section is expected to contain a set of options to configure security-related aspects
of the system (e.g., enabling remote access). However, at this time, it just allows to define a
collections of SSL certificates to trust.

## List of trusted certificates

It is not unusual to install the system using your own infrastructure. For instance, you might want
to use a set of mirrored repositories instead of the original ones.

For those cases, Agama allows to define a list of SSL certificates to trust. The list should contain
the _fingreprint_ and the _algorithm_ of each certificate.

```jsonnet
{
  security: {
    sslCertificates: [
      {
        fingerprint: "C0:40:C7:2F:33:5E:2A:56:99:97:C9:DA:6B:F8:74:C1:96:F8:BE:70:3F:4F:D6:2B:7E:CD:2F:07:36:2D:9F:F4",
        algorithm: "SHA256"
      }
    ]
  }
}
```

The known values for the `algorithm` are `SHA1` and `SHA256`.
