---
sidebar_position: 15
---

# Questions

Agama allows you to automate the process of answering questions during an unattended installation.
This feature is crucial for creating truly hands-off Agama profiles, as it eliminates the need for
user interaction when the installer encounters a choice or requires specific input.

This section explains how to define policies for answering questions and provides a list of the
question classes you can configure.

---

## Configuring automatic answers

Automatic answers are configured within the `questions` key of your Agama profile. This object has
two main properties: `policy` and `answers`.

```json
{
  "questions": {
    "policy": "auto",
    "answers": [
      {
        "class": "multipathActivation",
        "action": "yes"
      },
      {
        "class": "luksActivation",
        "action": "decrypt",
        "value": "my-secret-password",
        "data": {
          "device": "/dev/sda22"
        }
      }
    ]
  }
}
```

## The `policy` property

The `policy` property determines the default behavior for questions the installer encounters. It's a
string with two possible values:

- **`"user"`** (default): The installer will use any pre-defined answers from the `answers` list. If
  a question is encountered that does not have a matching answer, the installer will ask the user
  for a response.
- **`"auto"`**: The installer will use any pre-defined answers from the `answers` list. If a
  question is encountered that does not have a matching answer, the installer will automatically
  select the default value for that question. If there's no default, the installation will fail.

## The `answers` property

The `answers` property is an array of objects, where each object represents a pre-defined answer for
a specific question.

Each answer object can have the following properties:

- `class`: a unique identifier for the question (e.g., `"multipathActivation"`).
- `text`: the full text of the question.
- `action`: the action to use as the answer (e.g., `"yes"`, `"decrypt"`, `"Retry"`).
- `value`: an additional value that is required for questions that also need an extra piece of
  information, like a password (e.g., `luksActivation` with the `decrypt` action) or a plain string
  (e.g., `loadConfigError`, which can use it to specify an alternative URL).
- `data`: an optional object with additional key-value pairs to match the question.

:::warning[Deprecated properties]

`answer` and `password` are still accepted as aliases of `action` and `value` respectively, but only
for backward compatibility. Do not use them in new profiles, as they might be removed in the future.

:::

The installer will attempt to match a question to an answer by checking the `class`, `text`, and
`data` properties.

The installer performs a **partial match** on the `data` object. If your answer's `data` entry
contains a subset of the properties in the question's data, it will still be considered a match if
the values for the specified properties are identical. For example, a question might contain
`{ "id": "123", "checksum": "abc", "name": "file.txt" }`, but you only need to specify
`{ "checksum": "abc" }` to match it.

:::warning[Beware of retries]

The `Retry` value for the `action` property could get the installation into an infinity loop. Avoid
using `Retry` if you are not totally sure that the question is going to success at some point. In
the future, this problem could be overcome by defining a maximum number of attempts.

:::

---

## Supported question classes

The following table lists the possible question classes, their descriptions, and the data you can
use to match them.

:::info[Class names were renamed]

Question classes used to follow an inconsistent mix of naming schemes (dotted, namespaced,
snake_case). They now use a flat camelCase identifier instead (e.g., `multipathActivation` instead
of `storage.activate_multipath`). The old names are still recognized for backward compatibility, so
existing answers keep working, but new profiles should use the current names listed below. The
**SLE-16 name** column shows the corresponding deprecated name used in SLES 16.0 and openSUSE Leap
16.0 (see [this page](./answers-16)); it's left blank for classes that didn't exist in that version.

:::

| Class                  | SLE-16 name                            | Description                                                                                                                                      | Possible Answers                                       | Available Data                                                                                                                                                               |
| :--------------------- | :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoyastPassword`     | `autoyast.password`                    | When a password is needed to decrypt a GPG-encrypted AutoYaST profile.                                                                           | `ok`, `cancel` (default)                               | None. It uses a password field, so the answer must be provided through the `value` property.                                                                                 |
| `autoyastPopup`        | `autoyast.popup`                       | Generic question used while converting an AutoYaST profile (it replaces calls to `Yast2::Popup` in the AutoYaST code it reuses).                 | Varies (e.g., `ok`; `yes`, `no`; `continue`, `cancel`) | None.                                                                                                                                                                        |
| `autoyastUnsupported`  | `autoyast.unsupported`                 | When there are unsupported elements in an AutoYaST profile.                                                                                      | `Abort`, `Continue` (default)                          | `planned`: elements to be supported in the future.<br />`unsupported`: unsupported elements.                                                                                 |
| `gpgVerificationError` |                                        | When the GPG signature of a file cannot be verified.                                                                                             | `Yes`, `No` (default)                                  | `filename`: The name of the file.                                                                                                                                            |
| `importGpg`            | `software.import_gpg`                  | When a signature is signed with an unknown GPG key.                                                                                              | `Trust`, `Skip` (default)                              | `id`, `name`, `fingerprint`: Details of the unknown key.                                                                                                                     |
| `loadConfigError`      | `load.retry`                           | When the installer fails to load the profile (e.g., because of a network problem). The answer can also include an alternative URL to retry from. | `Retry`, `Manual` (default)                            | `error`: The text of the error message.<br />`originalValue`: The URL that failed to be loaded.                                                                              |
| `luksActivation`       | `storage.luks_activation`              | When a LUKS encrypted device is detected and requires a password to probe it.                                                                    | `skip`, `decrypt` (default)                            | `device`: The device name.<br />`label`: The device label.<br />`size`: The device size.<br />`attempt`: The number of the current attempt.                                  |
| `multipathActivation`  | `storage.activate_multipath`           | When it looks like the system has multipath and if it should be activated.                                                                       | `yes` (default), `no`                                  |                                                                                                                                                                              |
| `noDigest`             | `software.digest.no_digest`            | When a file is in a signed repository, but is not listed in the list of checksums.                                                               | `Yes`, `No` (default)                                  |                                                                                                                                                                              |
| `packageInstallError`  | `software.package_error.install_error` | When a package could not be installed (e.g., because of an I/O error while unpacking it).                                                        | `Retry`, `Ignore` (no default)                         | `package`: The package name.                                                                                                                                                 |
| `packageProviderError` | `software.package_error.provide_error` | When a package failed to be provided, e.g., due to an IO error or signature verification failure.                                                | `Retry`, `Ignore`, `Continue`                          | `package`: The name of the package.                                                                                                                                          |
| `packageScriptProblem` | `software.script_problem`              | When a package script (e.g., a `%post` scriptlet) failed.                                                                                        | `Retry`, `Continue` (no default)                       | `details`: The details of the failure.                                                                                                                                       |
| `retryInstallation`    |                                        | When downloading and installing the packages failed as a whole and it asks whether to retry the process.                                         | `Yes`, `No` (default)                                  |                                                                                                                                                                              |
| `retryScript`          |                                        | When a user-defined script (e.g., a pre-script or a post-script) fails and it asks whether to run it again.                                      | `Yes`, `No` (default)                                  | `name`: The script name.<br />`stderr`: The script's error output.<br />`exit_status`: The exit code. Only present when the script itself failed (not for other I/O errors). |
| `selfSignedRegcert`    | `registration.certificate`             | When the registration server uses a self-signed certificate.                                                                                     | `Trust` (default), `Reject`                            | `issueDate`, `expirationDate`: Certificate validity dates.<br />`issuer`, `organization`: Certificate issuer details.<br />`sha1`, `sha256`: Certificate fingerprints.       |
| `storageCommitError`   | `storage.commit_error`                 | When some storage actions failed and if it should continue.                                                                                      | `yes`, `no` (default)                                  | `details`: The details of the failure.                                                                                                                                       |
| `unknownDigest`        | `software.digest.unknown_digest`       | When a file has a checksum, but the expected checksum is not known. This question type is also used when the checksum does not match.            | `Yes`, `No` (default)                                  |                                                                                                                                                                              |
| `unknownGpg`           | `software.unknown_gpg`                 | When a file is signed by an unknown key.                                                                                                         | `Yes`, `No`, `Trust`, `Skip`                           | `id`: The key ID.<br />`filename`: The name of the signed file.                                                                                                              |
| `unsignedFile`         | `software.unsigned_file`               | When a file from a repository is not digitally signed.                                                                                           | `Yes`, `No` (default)                                  | `filename`: The name of the file.                                                                                                                                            |
| `writeFileError`       |                                        | When a user-defined file cannot be written to disk.                                                                                              | `Yes`, `No` (default)                                  | `attempt`: The number of the current attempt.<br />`details`: The details of the failure.                                                                                    |
| `writeScriptError`     |                                        | When a user-defined script cannot be written to disk.                                                                                            | `Yes`, `No` (default)                                  | `attempt`: The number of the current attempt.<br />`details`: The details of the failure.                                                                                    |

:::info

Check [this page](./answers-16) if you are using SLES 16.0 or openSUSE Leap 16.0.

:::
