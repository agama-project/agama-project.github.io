# Enable Kdump since first boot

This guide outlines the steps to automatically enable and configure kdump on a SUSE Linux Enterprise
Server (SLES) system as part of an installation using Agama. This ensures that kdump is active and
ready to capture kernel crash dumps already at the first system boot, providing crucial diagnostic
information in case of system failures.

## Kdump configuration

Early Kdump configuration can be done integrating a [post-installation
script](../reference/profile/scripts) at the Agama configuration. That allows to execute some
commands within the chrooted environment of the installed system. Let's see an example using a
Jsonnet profile (more readable than plain JSON).

```jsonnet
{
  product: {
    id: 'SLES',
    registrationCode: 'YOUR-SLES-REGISTRATION-CODE',
  },
  user: {
    fullName: 'Monsignore Tux',
    password: 'linux',
    userName: 'tux',
  },
  scripts: {
    post: [
      {
        name: 'enable-kdump',
        chroot: true,
        content: |||
          #!/usr/bin/bash
          zypper -n in kdump
          systemctl enable kdump-commandline.service
          systemctl enable kdump.service
          kdumptool commandline -u
        |||,
      },
    ],
  },
}
```

Let's break down the commands within the `content` of the `post` script:

  * `#!/usr/bin/bash`: Shebang line, ensuring the script is executed with bash.
  * `zypper -n in kdump`: This command uses `zypper` (SUSE's package manager) to install the `kdump` package. The `-n` flag stands for "non-interactive" and assumes "yes" to any prompts, which is essential for unattended installations.
  * `systemctl enable kdump-commandline.service`: This enables an auxiliary service that is crucial
    for setting up Kdump parameters from the kernel command line during boot.
  * `systemctl enable kdump.service`: This enables the main Kdump service, which manages the Kdump
    daemon responsible for capturing and saving crash dumps.
  * `kdumptool commandline -u`: This updates the bootloader configuration to ensure it contains the
    proper kernel command-line arguments with recommended values.

## Integrate the configuration into your installation

If you are performing an unattended installation, simply merge the `scripts` section from the
provided snippet into your existing Agama configuration profile. The following example shows how
to do that using a JSON profile.

```json
{
  "product": {
    "id": "SLES",
    "registrationCode": "YOUR-SLES-REGISTRATION-CODE"
  },
  "user": {
    "fullName": "Your Name",
    "password": "your_password",
    "userName": "your_username"
  },
  "scripts": {
    "post": [
      {
        "name": "enable-kdump",
        "chroot": true,
        "content": "#!/usr/bin/bash\nzypper -n in kdump\nsystemctl enable kdump-commandline.service\nsystemctl enable kdump.service\nkdumptool commandline -u"
      }
    ]
  }
}
```

If you are using Agama interactively, the [corresponding section](../../overview/cli) of the
starter's guide explains how to use a partial profile to configure settings that are not available
at the web user interface. That can be used to setup our kdump `post` script. Simply save the
`scripts` section into a separate file (e.g., `kdump_config.jsonnet` or `kdump_config.json` if
you prefer plain JSON).

```jsonnet
{
  scripts: {
    post: [
      {
        name: 'enable-kdump',
        chroot: true,
        content: |||
          #!/usr/bin/bash
          zypper -n in kdump
          systemctl enable kdump-commandline.service
          systemctl enable kdump.service
          kdumptool commandline -u
        |||,
      },
    ],
  },
}
```

Then, during your interactive Agama session, load that configuration as usual.

```
agama config load < kdump_config.jsonnet
```

Finally proceed normally with the rest of the interactive installation.

## Verification after installation

After the SLES installation is complete and the system has rebooted for the first time, you can
verify that kdump is enabled and configured correctly:

1.  **Check Kdump Service Status:**

    ```
    sudo systemctl status kdump
    sudo systemctl status kdump-commandline.service
    ```

    Both services should be `active (exited)` or `active (running)`.

2.  **Verify Kdump Kernel Parameter:**
    Check the kernel command line to ensure `crashkernel=` allocation is present.

    ```bash
    cat /proc/cmdline
    ```

    You should see an entry like `crashkernel=<size>M@<offset>`.

3.  **Test Kdump (Optional, on a non-production system):**
    To confirm Kdump functionality, you can intentionally trigger a kernel crash. **Do not do this on a production system.**

    ```bash
    echo c | sudo tee /proc/sysrq-trigger
    ```

    After the system reboots, check the `/var/crash` directory for a new crash dump.
