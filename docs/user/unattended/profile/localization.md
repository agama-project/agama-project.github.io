---
sidebar_position: 9
---

# Localization

The `localization` settings allows to specify the locale, the keyboard layout and the timezone of
the system to install.

It supports the following elements:

- `language`: corresponds to the system's locale. You can find a list of locales using the
  `localectl list-locales` command.
- `keyboard`: keyboard layout. You can find a list of layouts typing `localectl list-keymaps`. Both
  formats, using dashes or parenthesis, are supported: `us(dvorak)` or `us-dvorak`.
- `timezone`: timezone identifier.

```jsonnet
{
  language: "de_DE.UTF-8",
  keyboard: "de",
  timezone: "Europe/Berlin"
}
```
