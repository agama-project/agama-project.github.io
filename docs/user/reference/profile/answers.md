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
        "class": "storage.activate_multipath",
        "answer": "yes",
      },
      {
        "class": "storage.luks_activation",
        "answer": "decrypt",
        "password": "my-secret-password"
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

- `class`: a unique identifier for the question (e.g., `"storage.activate_multipath"`).
- `text`: the full text of the question.
- `answer`: the value to be used as the answer.
- `password`: an additional value that is required for questions that also need an extra piece of
  information, like a password (e.g., `storage.luks_activation` with the `decrypt` answer) or a
  plain string (e.g., `load.retry`, which can use it to specify an alternative URL).
- `data`: an optional object with additional key-value pairs to match the question.

The installer will attempt to match a question to an answer by checking the `class`, `text`, and
`data` properties.

The installer performs a **partial match** on the `data` object. If your answer's `data` entry
contains a subset of the properties in the question's data, it will still be considered a match if
the values for the specified properties are identical. For example, a question might contain
`{ "id": "123", "checksum": "abc", "name": "file.txt" }`, but you only need to specify
`{ "checksum": "abc" }` to match it.

:::warning[Beware of retries]

The `Retry` value for the `answer` property could get the installation into an infinity loop. Avoid
using `Retry` if you are not totally sure that the question is going to success at some point. In
the future, this problem could be overcome by defining a maximum number of attempts.

:::

---

## Supported question classes

The following table lists the possible question classes, their descriptions, and the data you can
use to match them.

| Class                                  | Description                                                                                                                                      | Possible Answers                                       | Available Data                                                                                                                                                               |
| :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoyast.unsupported`                 | When there are unsupported elements in an AutoYaST profile.                                                                                      | `Abort`, `Continue` (default)                          | `planned`: elements to be supported in the future.<br />`unsupported`: unsupported elements.                                                                                 |
| `autoyast.popup`                       | Generic question used while converting an AutoYaST profile (it replaces calls to `Yast2::Popup` in the AutoYaST code it reuses).                 | Varies (e.g., `ok`; `yes`, `no`; `continue`, `cancel`) | None.                                                                                                                                                                        |
| `autoyast.password`                    | When a password is needed to decrypt a GPG-encrypted AutoYaST profile.                                                                           | `ok`, `cancel` (default)                               | None. It uses a password field, so the answer must be provided through the `password` property.                                                                              |
| `software.unsigned_file`               | When a file from a repository is not digitally signed.                                                                                           | `Yes`, `No` (default)                                  | `filename`: The name of the file.                                                                                                                                            |
| `software.import_gpg`                  | When a signature is signed with an unknown GPG key.                                                                                              | `Trust`, `Skip` (default)                              | `id`, `name`, `fingerprint`: Details of the unknown key.                                                                                                                     |
| `software.unknown_gpg`                 | When a file is signed with an unknown key.                                                                                                       | `Yes`, `No` (default)                                  | `filename`: The name of the signed file.<br />`id`: The key ID.                                                                                                              |
| `software.verification_failed`         | When the GPG signature of a file cannot be verified.                                                                                             | `Yes`, `No` (default)                                  | `filename`: The name of the file.                                                                                                                                            |
| `software.digest.no_digest`            | When a file is in a signed repository, but is not listed in the list of checksums.                                                               | `Yes`, `No` (default)                                  |                                                                                                                                                                              |
| `software.digest.unknown_digest`       | When a file has a checksum, but the expected checksum is not known. This question type is also used when the checksum does not match.            | `Yes`, `No` (default)                                  |                                                                                                                                                                              |
| `software.package_error.provide_error` | When a package could not be downloaded (e.g., because of a network or medium error).                                                             | `Retry`, `Ignore` (no default)                         | `package`: The package name.<br />`errorCode`: The kind of download error.                                                                                                   |
| `software.package_error.install_error` | When a package could not be installed (e.g., because of an I/O error while unpacking it).                                                        | `Retry`, `Ignore` (no default)                         | `package`: The package name.                                                                                                                                                 |
| `software.script_problem`              | When a package script (e.g., a `%post` scriptlet) failed.                                                                                        | `Retry`, `Continue` (no default)                       | `details`: The details of the failure.                                                                                                                                       |
| `software.installation_retry`          | When downloading and installing the packages failed as a whole and it asks whether to retry the process.                                         | `Yes`, `No` (default)                                  |                                                                                                                                                                              |
| `storage.activate_multipath`           | When it looks like the system has multipath and if it should be activated.                                                                       | `yes` (default), `no`                                  |                                                                                                                                                                              |
| `storage.commit_error`                 | When some storage actions failed and if it should continue.                                                                                      | `yes`, `no` (default)                                  | `details`: The details of the failure.                                                                                                                                       |
| `storage.luks_activation`              | When a LUKS encrypted device is detected and requires a password to probe it.                                                                    | `skip`, `decrypt` (default)                            | `device`: The device name.<br />`label`: The device label.<br />`size`: The device size.<br />`attempt`: The number of the current attempt.                                  |
| `load.retry`                           | When the installer fails to load the profile (e.g., because of a network problem). The answer can also include an alternative URL to retry from. | `Retry`, `Manual` (default)                            | `error`: The text of the error message.<br />`originalValue`: The URL that failed to be loaded.                                                                              |
| `scripts.retry`                        | When a user-defined script (e.g., a pre-script or a post-script) fails and it asks whether to run it again.                                      | `Yes`, `No` (default)                                  | `name`: The script name.<br />`stderr`: The script's error output.<br />`exit_status`: The exit code. Only present when the script itself failed (not for other I/O errors). |
| `write_script_failed`                  | When a user-defined script cannot be written to disk.                                                                                            | `Yes`, `No` (default)                                  | `attempt`: The number of the current attempt.<br />`details`: The details of the failure.                                                                                    |
| `write_file_failed`                    | When a user-defined file cannot be written to disk.                                                                                              | `Yes`, `No` (default)                                  | `attempt`: The number of the current attempt.<br />`details`: The details of the failure.                                                                                    |
| `registration.certificate`             | When the registration server uses a self-signed certificate.                                                                                     | `Trust` (default), `Reject`                            | `issueDate`, `expirationDate`: Certificate validity dates.<br />`issuer`, `organization`: Certificate issuer details.<br />`sha1`, `sha256`: Certificate fingerprints.       |
