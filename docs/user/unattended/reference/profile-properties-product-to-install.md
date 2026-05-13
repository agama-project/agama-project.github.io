# Product to install Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## product Type

`object` ([Product to install](profile-properties-product-to-install.md))

# product Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                          |
| :-------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                               | `string` | Required | cannot be null | [Profile](profile-properties-product-to-install-properties-product-identifier.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product/properties/id")                        |
| [registrationCode](#registrationcode)   | `string` | Optional | cannot be null | [Profile](profile-properties-product-to-install-properties-product-registration-code.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product/properties/registrationCode")   |
| [registrationEmail](#registrationemail) | `string` | Optional | cannot be null | [Profile](profile-properties-product-to-install-properties-product-registration-email.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product/properties/registrationEmail") |

## id

The id field from a products.d/foo.yaml file

`id`

* is required

* Type: `string` ([Product identifier](profile-properties-product-to-install-properties-product-identifier.md))

* cannot be null

* defined in: [Profile](profile-properties-product-to-install-properties-product-identifier.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product/properties/id")

### id Type

`string` ([Product identifier](profile-properties-product-to-install-properties-product-identifier.md))

## registrationCode



`registrationCode`

* is optional

* Type: `string` ([Product registration code](profile-properties-product-to-install-properties-product-registration-code.md))

* cannot be null

* defined in: [Profile](profile-properties-product-to-install-properties-product-registration-code.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product/properties/registrationCode")

### registrationCode Type

`string` ([Product registration code](profile-properties-product-to-install-properties-product-registration-code.md))

## registrationEmail



`registrationEmail`

* is optional

* Type: `string` ([Product registration email](profile-properties-product-to-install-properties-product-registration-email.md))

* cannot be null

* defined in: [Profile](profile-properties-product-to-install-properties-product-registration-email.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/product/properties/registrationEmail")

### registrationEmail Type

`string` ([Product registration email](profile-properties-product-to-install-properties-product-registration-email.md))
