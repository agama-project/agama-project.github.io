---
sidebar_position: 15.5
---

# Questions (older versions)

:::warning[This page describes an older Agama version]

This page documents the `questions` feature as implemented by older versions of Agama, like the one
shipped with **SLES 16 GA** and **openSUSE Leap 16.0**. If you are using a more recent version of
Agama (e.g., a newer maintenance update or openSUSE Tumbleweed), check the
[current version of this page](./answers) instead.

:::

Agama allows you to automate the process of answering questions during an unattended installation.
This feature is crucial for creating truly hands-off Agama profiles, as it eliminates the need for
user interaction when the installer encounters a choice or requires specific input.

This section explains how to define policies for answering questions and provides a list of the
question classes you can configure in this version.

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
        "answer": "yes"
      },
      {
        "class": "storage.luks_activation",
        "answer": "decrypt",
        "password": "my-secret-password",
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
- `password`: an additional field that is required for questions that also need a password, such as
  `storage.luks_activation` with the `decrypt` answer.
- `data`: an optional object with additional key-value pairs to match the question.

The installer will attempt to match a question to an answer by checking the `class`, `text`, and
`data` properties.

The installer performs a **partial match** on the `data` object. If your answer's `data` entry
contains a subset of the properties in the question's data, it will still be considered a match if
the values for the specified properties are identical. For example, a question might contain
`{ "id": "123", "checksum": "abc", "name": "file.txt" }`, but you only need to specify
`{ "checksum": "abc" }` to match it.

:::warning[Beware of retries]

A `"Retry"`-like value for the `answer` property could get the installation into an infinity loop.
Avoid using it if you are not totally sure that the question is going to success at some point.

:::

---

## Supported question classes

The following table lists the possible question classes, their descriptions, and the data you can
use to match them.

Some classes (marked with \*) do not use a fixed set of action identifiers. Instead, the answer must
match the (English) label of the corresponding button, like `Try again` or `Continue anyway`. Those
labels might change if the installation runs in a different language.

| Class                                    | Description                                                                                                                           | Possible Answers                                       | Available Data                                                                                                                                                            |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `autoyast.password`                      | When a password is needed to decrypt a GPG-encrypted AutoYaST profile.                                                                | `ok`, `cancel` (default)                               | None. It uses a password field, so the answer must be provided through the `password` property.                                                                           |
| `autoyast.popup`                         | Generic question used while converting an AutoYaST profile (it replaces calls to `Yast2::Popup`).                                     | Varies (e.g., `ok`; `yes`, `no`; `continue`, `cancel`) | None.                                                                                                                                                                     |
| `autoyast.unsupported`                   | When there are unsupported elements in an AutoYaST profile.                                                                           | `Abort`, `Continue` (default)                          | `planned`: elements to be supported in the future.<br />`unsupported`: unsupported elements.                                                                              |
| `load.retry`                             | Asks the user to retry loading the profile.                                                                                           | `Yes`, `No` (default)                                  | `error`: The text of the error message.                                                                                                                                   |
| `registration.certificate`               | When the registration server uses an unknown certificate.                                                                             | `trust`, `reject` (default)                            | `url`: The server URL.<br />`issuer_name`, `issue_date`, `expiration_date`: Certificate details.<br />`sha1_fingerprint`, `sha256_fingerprint`: Certificate fingerprints. |
| `software.digest.no_digest`              | When a file is in a signed repository, but is not listed in the list of checksums.                                                    | `Yes` (default), `No`                                  |                                                                                                                                                                           |
| `software.digest.unknown_digest`         | When a file has a checksum, but the expected checksum is not known. This question type is also used when the checksum does not match. | `Yes` (default), `No`                                  |                                                                                                                                                                           |
| `software.import_gpg`                    | When a signature is signed with an unknown GPG key.                                                                                   | `Trust`, `Skip` (default)                              | `id`, `name`, `fingerprint`: Details of the unknown key.                                                                                                                  |
| `software.package_error.install_error`\* | When a package failed to be installed.                                                                                                | `Try again`, `Continue anyway` (no default)            | `package`: The package name.                                                                                                                                              |
| `software.package_error.medium_error`\*  | When there is an issue accessing the installation medium while downloading a package.                                                 | `Try again`, `Continue anyway` (no default)            | `url`: The URL where the access failed.                                                                                                                                   |
| `software.package_error.provide_error`\* | When a package could not be provided (e.g., because of an I/O error).                                                                 | `Try again`, `Continue anyway` (no default)            | `package`: The package name.<br />`error_code`: The kind of error (`IO_ERROR` or `INVALID`).                                                                              |
| `software.script_problem`\*              | When a package script failed.                                                                                                         | `Try again`, `Continue anyway` (no default)            | `details`: The details of the failure.                                                                                                                                    |
| `software.unknown_gpg`                   | When a file is signed with an unknown key.                                                                                            | `Yes`, `No` (default)                                  | `id`: The key ID.<br />`filename`: The name of the signed file.                                                                                                           |
| `software.unsigned_file`                 | When a file from a repository is not digitally signed, or when its signature could not be verified.                                   | `Yes`, `No` (default)                                  | `filename`: The name of the file.                                                                                                                                         |
| `storage.activate_multipath`             | When it looks like the system has multipath and if it should be activated.                                                            | `yes` (default), `no`                                  |                                                                                                                                                                           |
| `storage.commit_error`                   | When some storage actions failed and if it should continue.                                                                           | `yes`, `no` (default)                                  | `details`: The details of the failure.                                                                                                                                    |
| `storage.luks_activation`                | When a LUKS encrypted device is detected and requires a password to probe it.                                                         | `skip`, `decrypt` (default)                            | `device`: The device name.<br />`label`: The device label.<br />`size`: The device size.<br />`attempt`: The number of the current attempt.                               |
