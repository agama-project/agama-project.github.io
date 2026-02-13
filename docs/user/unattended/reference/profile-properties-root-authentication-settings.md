# Root authentication settings Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## root Type

`object` ([Root authentication settings](profile-properties-root-authentication-settings.md))

# root Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                             |
| :-------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [password](#password)             | `string`  | Optional | cannot be null | [Profile](profile-properties-root-authentication-settings-properties-root-password-plain-text-or-hashed-depending-on-the-hashedpassword-field.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root/properties/password")        |
| [hashedPassword](#hashedpassword) | `boolean` | Optional | cannot be null | [Profile](profile-properties-root-authentication-settings-properties-flag-for-hashed-password-true-or-plain-text-password-false-or-not-defined.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root/properties/hashedPassword") |
| [sshPublicKey](#sshpublickey)     | `string`  | Optional | cannot be null | [Profile](profile-properties-root-authentication-settings-properties-ssh-public-key.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root/properties/sshPublicKey")                                                              |

## password



`password`

* is optional

* Type: `string` ([Root password (plain text or hashed depending on the "hashedPassword" field)](profile-properties-root-authentication-settings-properties-root-password-plain-text-or-hashed-depending-on-the-hashedpassword-field.md))

* cannot be null

* defined in: [Profile](profile-properties-root-authentication-settings-properties-root-password-plain-text-or-hashed-depending-on-the-hashedpassword-field.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root/properties/password")

### password Type

`string` ([Root password (plain text or hashed depending on the "hashedPassword" field)](profile-properties-root-authentication-settings-properties-root-password-plain-text-or-hashed-depending-on-the-hashedpassword-field.md))

## hashedPassword



`hashedPassword`

* is optional

* Type: `boolean` ([Flag for hashed password (true) or plain text password (false or not defined)](profile-properties-root-authentication-settings-properties-flag-for-hashed-password-true-or-plain-text-password-false-or-not-defined.md))

* cannot be null

* defined in: [Profile](profile-properties-root-authentication-settings-properties-flag-for-hashed-password-true-or-plain-text-password-false-or-not-defined.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root/properties/hashedPassword")

### hashedPassword Type

`boolean` ([Flag for hashed password (true) or plain text password (false or not defined)](profile-properties-root-authentication-settings-properties-flag-for-hashed-password-true-or-plain-text-password-false-or-not-defined.md))

## sshPublicKey



`sshPublicKey`

* is optional

* Type: `string` ([SSH public key](profile-properties-root-authentication-settings-properties-ssh-public-key.md))

* cannot be null

* defined in: [Profile](profile-properties-root-authentication-settings-properties-ssh-public-key.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/root/properties/sshPublicKey")

### sshPublicKey Type

`string` ([SSH public key](profile-properties-root-authentication-settings-properties-ssh-public-key.md))
