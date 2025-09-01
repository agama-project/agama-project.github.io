---
sidebar_position: 5
---

# User and root

There are two sections related to users and authentication in an Agama profile:

- `root`: allows to set the authentication mechanism for the `root` user.
- `user`: defines a "first user".

For a successful installation, one of the following conditions must be met:

- A password or an SSH public key is defined for the `root` user.
- A first user is defined.

## `root` user

The `root` section allows to specify an authentication method for the `root` user.

```jsonnet
{
  root: {
    sshPublicKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPj/J1N38v/7Gbxz5A6jiSBhLbUwrJOVlBxDQhuW8tvg user@example.net",
    hashedPassword: true,
    password: "$y$j9T$qGMrxRmEHUV3kCXQAywcP1$g4n4.O2tUf2Dq9CJTohTb4/HJ9Wdzr2Z33MD8srkPV1"
  }
}
```

The following fields are supported:

- `password`: `root` password, hashed or not depending on `hashedPassword`.
- `hashedPassword`: whether the `password` is hashed (`true`) or not (`false` or undefined).
- `sshPublicKey`: SSH public key to be copied to the `/root/.ssh/authorized_keys` file.

## First user

The `user` section defines a first user:

```jsonnet
{
  user: {
    fullName: "Jane Doe",
    userName: "jane.doe",
    hashedPassword: false,
    password: "123456"
  }
}
```

This section includes the following fields:

- `userName`: user name (or login name).
- `fullName`: user's full name.
- `password`: `root` password, hashed or not depending on `hashedPassword`.
- `hashedPassword`: whether the `password` is hashed (`true`) or not (`false` or undefined).

## Encrypted passwords

The encrypted password can be obtained by running the `mkpasswd` command from the `whois` package.

To get the list of supported hashing methods run the `mkpasswd --method=help` command. Then use the
selected method for hashing your password, for example `mkpasswd --method=yescrypt`.

Make sure the selected hashing method is supported by the target system, different systems might
support different set of methods.

:::warning

Do not use any DES or MD5 based algorithms, these are considered insecure. Check `man 5 crypt`
manual page for details about the hashing methods and their strength.

:::

Alternatively you can use the `openssl passwd -6` command. This generates a SHA-512 password hash,
for the SHA-256 method use the `-5` option.
