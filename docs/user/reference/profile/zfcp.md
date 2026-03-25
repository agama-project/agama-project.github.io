---
sidebar_position: 11
---

# zFCP (Fibre Channel Protocol) Storage

Agama supports the activation of **zFCP** disks during unattended installations. This allows you to
use Fibre Channel storage on IBM Z (Mainframe) systems as installation targets.

## How Activation Works

There are two ways to handle zFCP storage in your configuration:

1. **Controller Activation (LUN Scan):** If your storage server supports "LUN Masking" (automatic
   discovery), you only need to activate the controller. Agama will then automatically perform a
   **LUN Scan** to find and activate all disks assigned to that channel.
2. **Manual Disk Activation:** If automatic discovery is not supported, you can manually define each
   disk using its unique hardware coordinates.

## Configuration Reference

The zFCP settings are located in the `zfcp` section of your JSON configuration.

### 1. Activating Controllers (`zfcp.controllers`)

To activate a controller and trigger an automatic search for disks, add its channel ID to this list.

- **Example:** `"0.0.fa00"`
- **Behavior:** Activating a controller here will attempt to find all associated storage volumes
  automatically.

### 2. Activating Specific Disks (`zfcp.devices`)

Use this section to explicitly define disks. This is required if the controller cannot discover LUNs
automatically. Each device requires three identifiers:

- **`channel`**: The ID of the zFCP controller (e.g., `"0.0.fa00"`).
- **`wwpn`**: The World Wide Port Name of the storage server port (e.g., `"0x500507630300c562"`).
- **`lun`**: The Logical Unit Number of the specific disk volume (e.g., `"0x4010403300000000"`).

:::note

If you define a disk in `devices` but forget to list its controller in `controllers`, Agama will
automatically activate the controller for you.

:::

## Example Configuration

This example shows how to:

- Activate two controllers for automatic scanning (`fa00` and `fc00`).
- Manually activate two specific disks on `fa00`.
- Explicitly disable a disk on `fb00`.

```json
{
  "zfcp": {
    "controllers": ["0.0.fa00", "0.0.fc00"],
    "devices": [
      {
        "channel": "0.0.fa00",
        "wwpn": "0x500507630300c562",
        "lun": "0x4010403300000000"
      },
      {
        "channel": "0.0.fa00",
        "wwpn": "0x500507630300c562",
        "lun": "0x4010403300000001",
        "active": true
      },
      {
        "channel": "0.0.fb00",
        "wwpn": "0x500507630300c563",
        "lun": "0x4010403300000000",
        "active": false
      }
    ]
  }
}
```
