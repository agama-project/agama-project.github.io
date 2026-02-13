# IEEE 802.1x (EAP) settings Schema

```txt
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [profile.schema.json\*](profile.schema.json "open original schema") |

## ieee-8021x Type

`object` ([IEEE 802.1x (EAP) settings](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings.md))

# ieee-8021x Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :---------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [eap](#eap)                               | `array`   | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-eap.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/eap")                                                                                       |
| [phase2Auth](#phase2auth)                 | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-phase-2-inner-auth-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/phase2Auth")                                                          |
| [identity](#identity)                     | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-identity-string-often-for-example-the-users-login-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/identity")                               |
| [password](#password)                     | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-used-for-eap-authentication.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/password")                                          |
| [caCert](#cacert)                         | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-ca-certificate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/caCert")                                                                 |
| [caCertPassword](#cacertpassword)         | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-ca-certificate-if-it-is-encrypted.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/caCertPassword")                          |
| [clientCert](#clientcert)                 | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-client-certificate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/clientCert")                                                         |
| [clientCertPassword](#clientcertpassword) | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-client-certificate-if-it-is-encrypted.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/clientCertPassword")                  |
| [privateKey](#privatekey)                 | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-private-key.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/privateKey")                                                                |
| [privateKeyPassword](#privatekeypassword) | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-private-key-if-it-is-encrypted.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/privateKeyPassword")                         |
| [anonymousIdentity](#anonymousidentity)   | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-anonymous-identity-string-for-eap-authentication-methods.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/anonymousIdentity")                    |
| [peapVersion](#peapversion)               | `string`  | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-which-peap-version-is-used-when-peap-is-set-as-the-eap-method-in-the-eap-property.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/peapVersion") |
| [peapLabel](#peaplabel)                   | `boolean` | Optional | cannot be null | [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-force-the-use-of-the-new-peap-label-during-key-derivation.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/peapLabel")                           |

## eap



`eap`

* is optional

* Type: `string[]` ([List of EAP methods used](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-eap-list-of-eap-methods-used.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-eap.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/eap")

### eap Type

`string[]` ([List of EAP methods used](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-eap-list-of-eap-methods-used.md))

## phase2Auth



`phase2Auth`

* is optional

* Type: `string` ([Phase 2 inner auth method](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-phase-2-inner-auth-method.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-phase-2-inner-auth-method.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/phase2Auth")

### phase2Auth Type

`string` ([Phase 2 inner auth method](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-phase-2-inner-auth-method.md))

### phase2Auth Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"pap"`      |             |
| `"chap"`     |             |
| `"mschap"`   |             |
| `"mschapv2"` |             |
| `"gtc"`      |             |
| `"otp"`      |             |
| `"md5"`      |             |
| `"tls"`      |             |

## identity



`identity`

* is optional

* Type: `string` ([Identity string, often for example the user's login name](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-identity-string-often-for-example-the-users-login-name.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-identity-string-often-for-example-the-users-login-name.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/identity")

### identity Type

`string` ([Identity string, often for example the user's login name](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-identity-string-often-for-example-the-users-login-name.md))

## password



`password`

* is optional

* Type: `string` ([Password string used for EAP authentication](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-used-for-eap-authentication.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-used-for-eap-authentication.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/password")

### password Type

`string` ([Password string used for EAP authentication](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-used-for-eap-authentication.md))

## caCert



`caCert`

* is optional

* Type: `string` ([Path to CA certificate](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-ca-certificate.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-ca-certificate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/caCert")

### caCert Type

`string` ([Path to CA certificate](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-ca-certificate.md))

## caCertPassword



`caCertPassword`

* is optional

* Type: `string` ([Password string for CA certificate if it is encrypted](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-ca-certificate-if-it-is-encrypted.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-ca-certificate-if-it-is-encrypted.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/caCertPassword")

### caCertPassword Type

`string` ([Password string for CA certificate if it is encrypted](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-ca-certificate-if-it-is-encrypted.md))

## clientCert



`clientCert`

* is optional

* Type: `string` ([Path to client certificate](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-client-certificate.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-client-certificate.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/clientCert")

### clientCert Type

`string` ([Path to client certificate](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-client-certificate.md))

## clientCertPassword



`clientCertPassword`

* is optional

* Type: `string` ([Password string for client certificate if it is encrypted](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-client-certificate-if-it-is-encrypted.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-client-certificate-if-it-is-encrypted.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/clientCertPassword")

### clientCertPassword Type

`string` ([Password string for client certificate if it is encrypted](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-client-certificate-if-it-is-encrypted.md))

## privateKey



`privateKey`

* is optional

* Type: `string` ([Path to private key](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-private-key.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-private-key.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/privateKey")

### privateKey Type

`string` ([Path to private key](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-path-to-private-key.md))

## privateKeyPassword



`privateKeyPassword`

* is optional

* Type: `string` ([Password string for private key if it is encrypted](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-private-key-if-it-is-encrypted.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-private-key-if-it-is-encrypted.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/privateKeyPassword")

### privateKeyPassword Type

`string` ([Password string for private key if it is encrypted](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-password-string-for-private-key-if-it-is-encrypted.md))

## anonymousIdentity



`anonymousIdentity`

* is optional

* Type: `string` ([Anonymous identity string for EAP authentication methods](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-anonymous-identity-string-for-eap-authentication-methods.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-anonymous-identity-string-for-eap-authentication-methods.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/anonymousIdentity")

### anonymousIdentity Type

`string` ([Anonymous identity string for EAP authentication methods](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-anonymous-identity-string-for-eap-authentication-methods.md))

## peapVersion



`peapVersion`

* is optional

* Type: `string` ([Which PEAP version is used when PEAP is set as the EAP method in the 'eap' property](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-which-peap-version-is-used-when-peap-is-set-as-the-eap-method-in-the-eap-property.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-which-peap-version-is-used-when-peap-is-set-as-the-eap-method-in-the-eap-property.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/peapVersion")

### peapVersion Type

`string` ([Which PEAP version is used when PEAP is set as the EAP method in the 'eap' property](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-which-peap-version-is-used-when-peap-is-set-as-the-eap-method-in-the-eap-property.md))

### peapVersion Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `"0"` |             |
| `"1"` |             |

## peapLabel



`peapLabel`

* is optional

* Type: `boolean` ([Force the use of the new PEAP label during key derivation](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-force-the-use-of-the-new-peap-label-during-key-derivation.md))

* cannot be null

* defined in: [Profile](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-force-the-use-of-the-new-peap-label-during-key-derivation.md "https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/profile.schema.json#/properties/network/properties/connections/items/properties/ieee-8021x/properties/peapLabel")

### peapLabel Type

`boolean` ([Force the use of the new PEAP label during key derivation](profile-properties-network-settings-properties-network-connections-to-be-defined-items-properties-ieee-8021x-eap-settings-properties-force-the-use-of-the-new-peap-label-during-key-derivation.md))
