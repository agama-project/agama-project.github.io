# Hostname settings Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/hostname
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## hostname Type

`object` ([Hostname settings](profile-properties-hostname-settings.md))

# hostname Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                 |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [static](#static)       | `string` | Optional | cannot be null | [Profile](profile-properties-hostname-settings-properties-system-static-hostname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/hostname/properties/static")       |
| [transient](#transient) | `string` | Optional | cannot be null | [Profile](profile-properties-hostname-settings-properties-system-transient-hostname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/hostname/properties/transient") |

## static



`static`

* is optional

* Type: `string` ([System static hostname.](profile-properties-hostname-settings-properties-system-static-hostname.md))

* cannot be null

* defined in: [Profile](profile-properties-hostname-settings-properties-system-static-hostname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/hostname/properties/static")

### static Type

`string` ([System static hostname.](profile-properties-hostname-settings-properties-system-static-hostname.md))

## transient



`transient`

* is optional

* Type: `string` ([System transient hostname.](profile-properties-hostname-settings-properties-system-transient-hostname.md))

* cannot be null

* defined in: [Profile](profile-properties-hostname-settings-properties-system-transient-hostname.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/hostname/properties/transient")

### transient Type

`string` ([System transient hostname.](profile-properties-hostname-settings-properties-system-transient-hostname.md))
