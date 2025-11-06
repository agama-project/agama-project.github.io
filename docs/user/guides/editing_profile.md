# Editing autoinstallation profile

The auto-installation profile uses a JSON format which you can write in any text
editor. However, some editors provide automatic validation and code completion
(suggesting the keys or values to use) which makes editing much easier.

The most common editor which supports validation and code completion is the
[VSCode IDE](https://code.visualstudio.com/), but there are [some
more](https://json-schema.org/tools?query=&sortBy=name&sortOrder=ascending&groupBy=toolingTypes&licenses=&languages=&drafts=&toolingTypes=&environments=&showObsolete=false&supportsBowtie=false#editor).

## Specifying the profile schema

Unlike the XML format, JSON does not natively support referencing the
used validation schema. But some editors support unofficial schema specification
using the `$schema` key which can point to the URL with the schema definition.

## Schema URLs

For the SUSE SLES-16.0 or openSUSE Leap 16.0 profiles you can use this line:

```json
{ 
  "$schema": "https://raw.githubusercontent.com/agama-project/agama/refs/heads/SLE-16/rust/agama-lib/share/profile.schema.json"
}
```

For the profiles for the openSUSE Tumbleweed installer using the latest
development version use this line:

```json
{ 
  "$schema": "https://raw.githubusercontent.com/agama-project/agama/refs/heads/master/rust/agama-lib/share/profile.schema.json"
}
```

## Notes

The schema URL is used only for validation in the editor while writing the
profile, the Agama installer always uses its own embedded schema regardless of
the `$schema` value. This value is completely ignored by the installer.

:::warning

The `$schema` key in the installation profile is currently accepted only in the
openSUSE Tumbleweed based installer. You have to remove this key before using
the profile in the SUSE SLES-16.0 or openSUSE Leap 16.0 installations otherwise
the installer will complain about not valid profile.

:::
