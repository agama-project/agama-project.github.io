# Software settings Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/software
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## software Type

`object` ([Software settings](profile-properties-software-settings.md))

# software Properties

| Property              | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                  |
| :-------------------- | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [patterns](#patterns) | `array` | Optional | cannot be null | [Profile](profile-properties-software-settings-properties-list-of-patterns-to-install.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/software/properties/patterns") |
| [packages](#packages) | `array` | Optional | cannot be null | [Profile](profile-properties-software-settings-properties-list-of-packages-to-install.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/software/properties/packages") |

## patterns



`patterns`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Profile](profile-properties-software-settings-properties-list-of-patterns-to-install.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/software/properties/patterns")

### patterns Type

`string[]`

## packages



`packages`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [Profile](profile-properties-software-settings-properties-list-of-packages-to-install.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/software/properties/packages")

### packages Type

`string[]`
