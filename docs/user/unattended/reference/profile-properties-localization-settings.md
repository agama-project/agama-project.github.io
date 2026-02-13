# Localization settings Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## localization Type

`object` ([Localization settings](profile-properties-localization-settings.md))

# localization Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                        |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [language](#language) | `string` | Optional | cannot be null | [Profile](profile-properties-localization-settings-properties-system-language-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization/properties/language")                        |
| [keyboard](#keyboard) | `string` | Optional | cannot be null | [Profile](profile-properties-localization-settings-properties-keyboard-layout-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization/properties/keyboard")                        |
| [timezone](#timezone) | `string` | Optional | cannot be null | [Profile](profile-properties-localization-settings-properties-time-zone-identifier-such-as-europeberlin.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization/properties/timezone") |

## language



`language`

* is optional

* Type: `string` ([System language ID](profile-properties-localization-settings-properties-system-language-id.md))

* cannot be null

* defined in: [Profile](profile-properties-localization-settings-properties-system-language-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization/properties/language")

### language Type

`string` ([System language ID](profile-properties-localization-settings-properties-system-language-id.md))

### language Examples

```json
"en_US.UTF-8"
```

```json
"en_US"
```

## keyboard



`keyboard`

* is optional

* Type: `string` ([Keyboard layout ID](profile-properties-localization-settings-properties-keyboard-layout-id.md))

* cannot be null

* defined in: [Profile](profile-properties-localization-settings-properties-keyboard-layout-id.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization/properties/keyboard")

### keyboard Type

`string` ([Keyboard layout ID](profile-properties-localization-settings-properties-keyboard-layout-id.md))

## timezone



`timezone`

* is optional

* Type: `string` ([Time zone identifier such as 'Europe/Berlin'](profile-properties-localization-settings-properties-time-zone-identifier-such-as-europeberlin.md))

* cannot be null

* defined in: [Profile](profile-properties-localization-settings-properties-time-zone-identifier-such-as-europeberlin.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/localization/properties/timezone")

### timezone Type

`string` ([Time zone identifier such as 'Europe/Berlin'](profile-properties-localization-settings-properties-time-zone-identifier-such-as-europeberlin.md))

### timezone Examples

```json
"Europe/Berlin"
```
