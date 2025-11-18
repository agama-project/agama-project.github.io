---
sidebar_position: 11
---

# zFCP

Agama provides functionality to activate zFCP (Fibre Channel Protocol) disks as part of an unattended installation. This feature is configured within the `zfcp` section of your configuration, specifically under the `devices` key.

## Activating zFCP disks

To activate zFCP disks, you must define a list of objects under `zfcp.devices`. Each object in this list represents a single zFCP disk and requires the following options to uniquely identify the desired disk:

  * `channel`: The channel ID of the zFCP controller (e.g., `"0.0.fa00"`).
  * `wwpn`: The World Wide Port Name (WWPN) of the target port (e.g., `"0x500507630300c562"`).
  * `lun`: The Logical Unit Number (LUN) of the SCSI device (e.g., `"0x4010403300000000"`).

All of these options are mandatory to correctly identify and activate the specified zFCP disk.

## Example Configuration

The following example demonstrates how to configure a zFCP disk for activation:

```jsonnet
{
  zfcp: {
    devices: [
      {
        channel: "0.0.fa00",
        wwpn: "0x500507630300c562",
        lun: "0x4010403300000000"
      }
    ]
  }
}
```
