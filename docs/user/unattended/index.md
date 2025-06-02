---
sidebar_position: 2
---

# Unattended installation

Agama is able to install a system without user interaction. The user provides a definition of the
system, known as a "profile", that describes how the system should look like (partitioning,
networking, software selection, etc.) and Agama takes care of installing the system. This approach
might sound familiar to AutoYaST users, right?

Agama uses [Jsonnet](https://jsonnet.org/), a superset of JSON, which allows writing readable and
concise profiles. The example below instructs Agama to install _Tumbleweed_ and create a first user
so you can log in.

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

It is possible to define the storage layout, which software to install, the network configuration,
etc. Check the [profile format](./unattended/profile) section to learn more. Once you have your
first profile, you might want to learn how to
[start the installation](./unattended/working-with-profiles#starting-the-installation).

Finally, it is worth to mention that although Agama defines its own profile format, it is able to
partially handle AutoYaST profiles. Please, check the
[AutoYaST support section](./unattended/autoyast) for further information.
