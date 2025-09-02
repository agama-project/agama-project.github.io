---
sidebar_position: 9
---

# DASD

Agama allows you to manage DASD (Direct Access Storage Device) activation and deactivation during an unattended installation. This feature is configured within the `dasd` section using the `devices` key.

## Configuring DASD Devices

To specify DASD devices and their desired states, use a list of objects under `dasd.devices`. Each object represents a single DASD device and supports the following options:

  * `channel`: The unique channel ID of the DASD device (e.g., `"0.0.0200"`). This is a required entry.

  * `state`: Defines the desired state of the device.

      * `"active"`: Agama will attempt to activate the device if it's not already active. This is the **default** value.
      * `"offline"`: Agama will deactivate the device if it's currently active.

  * `format`: Controls whether the device should be formatted.

      * `true`: The device will always be formatted, even if it's already formatted.
      * `false`: The device will never be formatted. **Caution**: This can result in an unusable device if it's not already formatted.
      * If this option is not specified, Agama will only format the device if it's not already formatted.

  * `diag`: Specifies the value of the `diag` flag for the device.

      * If this option is not specified, the device's current `diag` flag setting will be preserved.
      * **Warning**: Use this option with extreme caution and only if you fully understand its implications. On some mainframes, incorrectly setting the `diag` flag can lead to unexpected behavior, including device deactivation.

## Example Configuration

The following example demonstrates how to activate and format one DASD device, and deactivate another:

```jsonnet
{
  dasd: {
    devices: [
      {
        channel: "0.0.0200",
        format: true,
        state: "active"
      },
      {
        channel: "0.0.0201",
        state: "offline"
      }
    ]
  }
}
```
