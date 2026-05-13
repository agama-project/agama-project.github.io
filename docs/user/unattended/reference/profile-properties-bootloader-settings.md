# Bootloader settings Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/bootloader
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## bootloader Type

`object` ([Bootloader settings](profile-properties-bootloader-settings.md))

one (and only one) of

* [Untitled undefined type in Profile](profile-properties-bootloader-settings-oneof-0.md "check type definition")

* [Untitled undefined type in Profile](profile-properties-bootloader-settings-oneof-1.md "check type definition")

* not

  * any of

    * [Untitled undefined type in Profile](profile-properties-bootloader-settings-oneof-2-not-anyof-0.md "check type definition")

    * [Untitled undefined type in Profile](profile-properties-bootloader-settings-oneof-2-not-anyof-1.md "check type definition")

# bootloader Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                         |
| :-------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [stopOnBootMenu](#stoponbootmenu) | `boolean` | Optional | cannot be null | [Profile](profile-properties-bootloader-settings-properties-specify-if-bootloader-should-stop-on-menu-during-boot.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/bootloader/properties/stopOnBootMenu")                    |
| [timeout](#timeout)               | `integer` | Optional | cannot be null | [Profile](profile-properties-bootloader-settings-properties-specify-how-long-bootloader-should-wait-on-menu-before-going-with-default-entry.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/bootloader/properties/timeout") |

## stopOnBootMenu



`stopOnBootMenu`

* is optional

* Type: `boolean` ([Specify if bootloader should stop on menu during boot.](profile-properties-bootloader-settings-properties-specify-if-bootloader-should-stop-on-menu-during-boot.md))

* cannot be null

* defined in: [Profile](profile-properties-bootloader-settings-properties-specify-if-bootloader-should-stop-on-menu-during-boot.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/bootloader/properties/stopOnBootMenu")

### stopOnBootMenu Type

`boolean` ([Specify if bootloader should stop on menu during boot.](profile-properties-bootloader-settings-properties-specify-if-bootloader-should-stop-on-menu-during-boot.md))

## timeout



`timeout`

* is optional

* Type: `integer` ([Specify how long bootloader should wait on menu before going with default entry.](profile-properties-bootloader-settings-properties-specify-how-long-bootloader-should-wait-on-menu-before-going-with-default-entry.md))

* cannot be null

* defined in: [Profile](profile-properties-bootloader-settings-properties-specify-how-long-bootloader-should-wait-on-menu-before-going-with-default-entry.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/bootloader/properties/timeout")

### timeout Type

`integer` ([Specify how long bootloader should wait on menu before going with default entry.](profile-properties-bootloader-settings-properties-specify-how-long-bootloader-should-wait-on-menu-before-going-with-default-entry.md))

### timeout Constraints

**minimum**: the value of this number must greater than or equal to: `0`
