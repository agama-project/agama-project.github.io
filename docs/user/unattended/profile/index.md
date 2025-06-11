---
sidebar_position: 2
---

# Profile format

A profile defines which options to use during installation: which product to install, localization
settings, partitioning schema, etc. Agama profiles are written in [Jsonnet](https://jsonnet.org/)
which is a superset of JSON. It brings a few advantages:

- More relaxed syntax which makes it easier to read and write.
- Support for comments and multi-line values.
- Constructs for generating dynamic content.

Let's have a look to an example to get an idea. The following profile is rather small: it just
instructs Agama to install Tumbleweed and defines a first user so you can log in.

```jsonnet
{
  product: {
    id: "Tumbleweed"
  },
  user: {
    fullName: "Jane Doe",
    userName: "jane.doe",
    password: "123456"
  }
}
```

Reading throught the following sections you can find the supported configuration values. The
documentation includes several examples to make it easier to write your own profiles. Alternatively,
you can check the
[JSON Schema](https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json)
to learn about the supported elements.

If you are interested in the dynamic bits, you can check the [Writing a dynamic profile](./dynamic)
section.
