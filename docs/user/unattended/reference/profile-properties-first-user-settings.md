# First user settings Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## user Type

`object` ([First user settings](profile-properties-first-user-settings.md))

# user Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                    |
| :-------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [fullName](#fullname)             | `string`  | Required | cannot be null | [Profile](profile-properties-first-user-settings-properties-full-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/fullName")                                                                       |
| [userName](#username)             | `string`  | Required | cannot be null | [Profile](profile-properties-first-user-settings-properties-user-login-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/userName")                                                                 |
| [password](#password)             | `string`  | Required | cannot be null | [Profile](profile-properties-first-user-settings-properties-user-password-plain-text-or-hashed-depending-on-the-hashedpassword-field.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/password")        |
| [hashedPassword](#hashedpassword) | `boolean` | Optional | cannot be null | [Profile](profile-properties-first-user-settings-properties-flag-for-hashed-password-true-or-plain-text-password-false-or-not-defined.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/hashedPassword") |
| [autologin](#autologin)           | `boolean` | Optional | cannot be null | [Profile](profile-properties-first-user-settings-properties-automatic-user-login.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/autologin")                                                           |

## fullName



`fullName`

* is required

* Type: `string` ([Full name](profile-properties-first-user-settings-properties-full-name.md))

* cannot be null

* defined in: [Profile](profile-properties-first-user-settings-properties-full-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/fullName")

### fullName Type

`string` ([Full name](profile-properties-first-user-settings-properties-full-name.md))

### fullName Examples

```json
"Jane Doe"
```

## userName



`userName`

* is required

* Type: `string` ([User login name](profile-properties-first-user-settings-properties-user-login-name.md))

* cannot be null

* defined in: [Profile](profile-properties-first-user-settings-properties-user-login-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/userName")

### userName Type

`string` ([User login name](profile-properties-first-user-settings-properties-user-login-name.md))

### userName Examples

```json
"jane.doe"
```

## password



`password`

* is required

* Type: `string` ([User password (plain text or hashed depending on the "hashedPassword" field)](profile-properties-first-user-settings-properties-user-password-plain-text-or-hashed-depending-on-the-hashedpassword-field.md))

* cannot be null

* defined in: [Profile](profile-properties-first-user-settings-properties-user-password-plain-text-or-hashed-depending-on-the-hashedpassword-field.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/password")

### password Type

`string` ([User password (plain text or hashed depending on the "hashedPassword" field)](profile-properties-first-user-settings-properties-user-password-plain-text-or-hashed-depending-on-the-hashedpassword-field.md))

### password Examples

```json
"nots3cr3t"
```

## hashedPassword



`hashedPassword`

* is optional

* Type: `boolean` ([Flag for hashed password (true) or plain text password (false or not defined)](profile-properties-first-user-settings-properties-flag-for-hashed-password-true-or-plain-text-password-false-or-not-defined.md))

* cannot be null

* defined in: [Profile](profile-properties-first-user-settings-properties-flag-for-hashed-password-true-or-plain-text-password-false-or-not-defined.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/hashedPassword")

### hashedPassword Type

`boolean` ([Flag for hashed password (true) or plain text password (false or not defined)](profile-properties-first-user-settings-properties-flag-for-hashed-password-true-or-plain-text-password-false-or-not-defined.md))

## autologin

Whether the user should be automatically logged in (only relevant in desktop systems)

`autologin`

* is optional

* Type: `boolean` ([Automatic user login](profile-properties-first-user-settings-properties-automatic-user-login.md))

* cannot be null

* defined in: [Profile](profile-properties-first-user-settings-properties-automatic-user-login.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/user/properties/autologin")

### autologin Type

`boolean` ([Automatic user login](profile-properties-first-user-settings-properties-automatic-user-login.md))
