---
sidebar_position: 2
---

# Bootloader Configuration in Agama

Agama is a Linux installer that simplifies the process of setting up a Linux system on your computer.  The bootloader is the first piece of software that runs when your system starts, and it's responsible for loading the Linux operating system you've chosen to install with Agama.

Agama's unattended installation process is designed to be as straightforward as possible. In most cases, you won't need to configure the bootloader—the default settings are robust and will work for most hardware configurations. Any special hardware enablement options needed for your system are automatically transferred from the boot process of the installation medium, further simplifying the process.

However, you can customize the bootloader if needed.

## Bootloader Configuration

To configure the bootloader, you can use the following JSON format within your unattended installation configuration:

```json
{
  "bootloader": [
    {
      "stopOnBootMenu": false
    }
  ]
}
```

## Options Documentation

### `stopOnBootMenu`

This option controls whether the system pauses at the boot menu during startup.

*   **`false` (default):** The system boots directly into the operating system.
*   **`true`:** The system pauses at the boot menu. This is useful for testing to ensure all required boot parameters are present and correct. It allows you to verify the parameters before the operating system loads.

> **Note:** When `stopOnBootMenu` is enabled, you'll need to manually continue the boot process.
