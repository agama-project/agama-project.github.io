# Self-update

<!-- TODO: what will be the official name for this release, SLE-16-QU0? -->

To fix possible bugs and include new features the SLE-16-QU0 installer includes
a self-update process. This process automatically updates the installer before
starting the installation to fix some problems or allow adding new features.

## Limitations

The self-update process can update most of the components present on the
installation medium. It can update the installer with dependent libraries and
tools, add new languages, etc...

However, there are several parts of the system which cannot be updated by the
self-update:

- The boot loader on the medium, the used Linux kernel and the initramfs image.
- The self-update process itself.
- The included packages on the Full installation medium (to install updated.
  packages register your system)

## Disabling the self-update

The self update process is enabled by default, but it can be explicitly disabled
by using the `inst.self_update=0` boot option. With this option it is completely
skipped and the system uses the original installer without changing anything.

## Workflow

The self-update step runs very early in the process. It runs in the initramfs
system before switching the root to full installer root image. The advantage is
that it can update the installer or other services without need for restarting
them. This ensures that the services are already started in the updated
versions. That's especially important for the security fixes.

- By default the self-update contacts SCC and asks it for the self-update
  repository for the product present on the installation medium (the self-update
  repository is different than the regular updates released for the installed
  system).

- The self-update repository is added to the system, it is refreshed and then
  `zypper update` is called. This should update all packages present in the
  running installation system to newer versions available in the self-update
  repository.

- The dependencies are evaluated so dependent packages are updated as well.
  If there is some dependency issue blocking the update then it fails
  without changing anything.

- If contacting the SCC server fails or it returns an empty response then the
  self-update uses a builtin fallback repository URL which should be the same as
  the repository returned by SCC.
  
- The self-update repository is disabled at the end, but it is kept in the
  system.

*Note: The self-update process uses the Live system root (`/`) while the Agama
installer runs the software stack in a different root (`/run/agama/zypp`) so the
self-update process and the repositories used for installing the target system
cannot influence each other.*

### Restarting self-update

If the self-update fails or you want to simply run the process again then
manually restart the self-update service using the `systemctl restart
live-self-update` command.

But when restarting the self-update in the running root image (when the
installer is already running) the updated services need to be manually restarted
to take effect. That depends on which packages were updated, check the output of
the self-update service to see the list of updated packages and restart the
relevant services.

When restarting the self-update in the initramfs emergency shell invoked by the
`rd.break` boot option no restart should be needed because the updated installer
and the services are not running yet and they will be started later in the
already updated versions.

## Network configuration

By default the network is automatically configured with DHCP protocol. If a
static network configuration is needed then it must be manually configured via
the `ip=` boot options. See the Network section in `man dracut.cmdline` or in
the [online
documentation](https://man7.org/linux/man-pages/man7/dracut.cmdline.7.html).

If the self-update is manually disabled with `inst.self_update=0` boot option
then the network configuration is skipped and it is done later in the boot
process.

### Network proxy

If you need to use a network proxy for communication with SCC or for downloading
the updates you can specify it with the `proxy=<URL>` boot option.

If you need to use a user name with password for the proxy then include it in
the proxy URL, example: `proxy=http://user:password@example.com`. If the
username or the password contains special reserved characters like `@` or `:`
then they must be
[percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters)
in the URL.

## Custom repository

A custom self-update repository can be used with the `inst.self_update=<URL>`
boot option. In this case the SCC step is skipped and the specified repository
is directly used as the self-update source. When using a custom repository you
might need to use some less strict security checks. See the security section
below.

## RMT

An RMT server can be used for downloading the updates instead of the default SCC
server with the `inst.register_url=<URL>` boot option. The process is the same,
the only difference is that the specified RMT server is used instead of the SCC.

The advantage is that RMT will return the self-update repository present on the
RMT server itself so the packages will be downloaded locally and not from the
internet.

In most cases RMT uses a self-signed SSL certificate, see the
`inst.self_update_ssl=0` option below.

## Security related options

By default all usual security checks are applied (verifying the SSL
certificates, verifying the repository and packages GPG signatures), just like
in an installed system. This ensures the integrity and security of the
self-update process and of the updated installer.

However, in some special cases you might need to disable some security related
features.

:::warning

Using any options below decreases the security of the self-update process
and potentially can even make the system vulnerable to security attacks!

Use these options with caution! While using these options in a trusted network
could be acceptable, they should be avoided when accessing the resources on the
internet.

:::

Currently these boot options are supported:

- `inst.self_update_ssl=0` ignore the SSL certificate problems when contacting
  the registration server and when downloading packages from the self-update
  repository via the HTTPS protocol. This option is needed when using an RMT server
  with a self-signed certificate.  
  *Note: This is basically almost the same as using the insecure HTTP protocol,
  which means that the authenticity of the remote server is not verified.*

- `inst.self_update_unsigned_repo=1` - allow using an unsigned self-update
  repository (but the package GPG signatures are still verified)

- `inst.self_update_import_key=1` - automatically trust and import the GPG key
  from the repository. Should be used with HTTPS repositories without disabling
  the SSL checks to at least ensure that the correct server is used.

- `inst.self_update_gpg=0` - completely disables all GPG checks, allows
  installing packages with unknown GPG signatures or even broken or modified
  packages. This is very insecure and if possible should be avoided.

## Live ISO package index

The Live ISO contains the `/LiveOS/.packages.gz` file with list of packages
included in the root image. This is a static file and includes the packages in
the original image before running the self-update. After running the self-update
some packages might be updated but the file is obviously not updated. If you
need to get the included packages with updates run the `rpm -qa` command.

## Debugging

Here are some hints what to do if the self-update process fails:

- `systemctl status live-self-update` - check the result of the self-update
  process, see whether it succeeded or failed
- `journalctl -t live-self-update` - show the log with details of the
  self-update run
- `systemctl restart live-self-update` - start the self-update process again

The self-update process creates several helper files in the
`/run/live-self-update` subdirectory. They are not deleted at the end because
they could be helpful when diagnosing problems:

- `result` - contains the exit code of the main self-update script. On success
  it contains the `0` value, on error it contains a non-zero exit code. When the
  self-update is disabled the file is not created.
- `skip` - flag file, if it exists the self-update was disabled with the
  `inst.self_update=0` boot option.
- `server_response` - contains the raw response from the SCC or RMT registration
  server in JSON format.
- `reg_repos` - contains the self-update repository URL from the SCC or RMT
  server, it is extracted from the `server_response` file.
- `repositories` - contains the custom self-update repository URL obtained from
  the boot command line.
