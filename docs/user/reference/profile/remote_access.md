---
sidebar_position: 16
---

import { Since } from "@site/src/components/Badge";

# Remote access

The `remoteAccess` section allows configuring remote access to the installed system.

It supports the following elements:

- `ssh`: whether SSH remote access is enabled. Supported values are:
  - `"enabled"`: ensures SSH is remotely accessible. Still root login via password can be restricted
    by product configuration.
  - `"default"`: keeps the product's default behavior.
- `cockpit`: whether Cockpit remote access is enabled. Supported values are:
  - `"enabled"`: ensures Cockpit is remotely accessible. Still root login can be prevented by
    cockpit configuration in `/etc/cockpit/disallowed-users` by product.
  - `"default"`: keeps the product's default behavior.

```jsonnet
{
  remoteAccess: {
    ssh: "enabled",
    cockpit: "default"
  }
}
```
