---
sidebar_position: 1
---

# Product

The `product` section is mandatory. It specifies which product (distribution) you want to install.
For the SUSE Linux Enterprise family of products, it allows registering the system, activating
extensions, etc.

If you want to select patterns and packages for installation, check the [software](./software)
section.

## Selecting the product

To select the product, you need to specify its identifier (ID).

```jsonnet
{
  product: {
    id: "Tumbleweed"
  }
}
```

Here is the list of known products:

- `SLES`: SUSE Linux Enterprise Server.
- `SLES_SAP`: SUSE Linux Enterprise Server for SAP Applications.
- `Tumbleweed`: Tumbleweed.
- `Slowroll`: Slowroll.
- `Leap_16.0`: Leap 16.0
- `MicroOS`: openSUSE Micro OS.

Beware that which products are available depend on the installation image you are using.

## Product mode

Some products support different installation modes. The mode can change how the product behaves,
for instance, enabling an **immutable OS** with **transactional updates**.

The supported values depend on the product. For instance, `SLES` supports `standard` and
`immutable` modes.

In an unattended installation profile, the `mode` key is optional for backward compatibility; if
omitted, the product will use its traditional default behavior. However, it is preferred to
explicitly specify the desired mode.

```jsonnet
{
  product: {
    id: "SLES",
    mode: "immutable"
  }
}
```

## Registering a product

:::note Only for SUSE Linux Enterprise

Product registration is only available for the SUSE Linux Enterprise family of products.

:::

If you want to register a product with the SUSE Customer Center, you need to specify the
_registration code_ and, optionally, an _e-mail address_.

```jsonnet
{
  product: {
    id: "SLES",
    registrationCode: "MY-REGISTRATION-CODE",
    registrationEmail: "info@example.net"
  }
}
```

### Enabling add-ons

You can use the `addons` section if you want to activate an add-on/extension. For each of them, you
can specify:

- `id`: add-on identifier. This field is mandatory.
- `version`: add-on version. In the very rare case that there are more than one version of the same
  add-on.
- `registrationCode`: needed for those add-ons that require a separate registration code.

```jsonnet
{
  product: {
    id: "SLES",
    registrationCode: "MY-REGISTRATION-CODE",
    registrationEmail: "info@example.net",
    addons: [
      {
        id: "SLES-HA"
      }
    ]
  }
}
```

### Using a custom registration server

In case you want to use a different registration server, for instance when using the RMT, you need
to specify its URL via the `registrationUrl` key.

```jsonnet
{
  product: {
    id: "SLES",
    registrationCode: "MY-REGISTRATION-CODE",
    registrationUrl: "http://rmt.example.lan"
  }
}
```

If you are using HTTPS, you might be interested in the
[sslCertificates list](./security#list-of-trusted-certificates).

:::note Using a boot argument

Alternatively, you can specify the registration URL setting the
[`register_url` boot argument](../boot_options).

:::
