# Run Ansible on first boot

Agama configures what matters at installation time and leaves any additional configuration to other
tools once the system is installed. This guide shows how to hand the installed system over to an
Ansible playbook from the profile alone: the playbook runs locally on the first boot, without a
provisioning server. It works on SUSE Linux Enterprise Server 16.1 and openSUSE Leap 16.1, in both
the standard and the immutable [mode](../reference/profile/product).

The profile uses three features:

- [software](../reference/profile/software) installs Ansible and every package the playbook needs.
- [files](../reference/profile/files) copies the playbook, a small runner script and a systemd unit.
- A [post-installation script](../reference/profile/scripts) enables the unit.

## The profile

The files are fetched from URLs relative to the profile, so the profile, `site.yml`,
`ansible-firstboot` and `ansible-firstboot.service` are served from the same directory.

```jsonnet
{
  product: {
    id: 'SLES',
    mode: 'immutable',
    registrationCode: 'YOUR-SLES-REGISTRATION-CODE',
  },
  root: {
    sshPublicKey: 'YOUR-SSH-PUBLIC-KEY',
  },
  software: {
    packages: [
      'ansible-linux-system-roles',
      'chrony',
      'python313-rpm',
    ],
  },
  files: [
    {
      url: 'site.yml',
      destination: '/etc/ansible-firstboot/site.yml',
    },
    {
      url: 'ansible-firstboot',
      destination: '/usr/local/libexec/ansible-firstboot',
      permissions: '0755',
    },
    {
      url: 'ansible-firstboot.service',
      destination: '/etc/systemd/system/ansible-firstboot.service',
    },
  ],
  scripts: {
    post: [
      {
        name: 'enable-ansible-firstboot',
        chroot: true,
        content: |||
          #!/usr/bin/bash
          mkdir -p /etc/systemd/system/multi-user.target.wants
          ln -sf /etc/systemd/system/ansible-firstboot.service \
            /etc/systemd/system/multi-user.target.wants/ansible-firstboot.service
        |||,
      },
    ],
  },
}
```

- `ansible-linux-system-roles` brings `ansible-core` and the `ansible` package with it. `chrony` is
  needed by the timesync role and `python313-rpm` by the `package_facts` module the roles use.
- In immutable mode, packages listed in `software` are part of the first root snapshot. The first
  boot does not have to install anything, so it does not need an extra reboot.
- The post script creates the `multi-user.target.wants` link directly, so it does not depend on the
  order in which Agama writes files and runs post scripts.
- On openSUSE Leap 16.1, set `id: 'openSUSE_Leap'` and remove `registrationCode`. Everything else in
  this guide stays the same.

## The playbook

`site.yml` configures time synchronization and the SSH client with the
[Linux System Roles](https://linux-system-roles.github.io/) that SLES and openSUSE Leap ship as the
`suse.linux_system_roles` collection.

```yaml
- name: Configure the freshly installed system
  hosts: localhost
  connection: local
  gather_facts: true
  vars:
    timesync_ntp_servers:
      - hostname: 2.suse.pool.ntp.org
        iburst: true
        pool: true
    timesync_transactional_update_reboot_ok: false
    ssh:
      ServerAliveInterval: 60
      ServerAliveCountMax: 3
    ssh_transactional_update_reboot_ok: false
  pre_tasks:
    - name: Ensure the ssh client drop-in directory exists
      ansible.builtin.file:
        path: /etc/ssh/ssh_config.d
        state: directory
        owner: root
        group: root
        mode: "0755"
  roles:
    - suse.linux_system_roles.timesync
    - suse.linux_system_roles.ssh
```

SLES and openSUSE Leap 16.1 keep the SSH client defaults in `/usr/etc/ssh/ssh_config`. That file
includes `/etc/ssh/ssh_config.d/*.conf`, but the directory does not exist on a new system, so the
playbook creates it before the ssh role writes its drop-in file there. The task is only needed until
your distribution ships a release of the ssh role newer than 1.9.1, which creates the directory
itself.

With `*_transactional_update_reboot_ok: false`, a role that installs a package on an immutable
system neither reboots nor fails: the package stays in the new snapshot until the next boot. The
runner below takes care of that reboot.

## The runner and the unit

`ansible-firstboot` runs the playbook twice and requires the second run to report no changes. If the
first run installed a package on an immutable system, `transactional-update` leaves
`/run/reboot-needed` behind: the runner reboots into the new snapshot and runs again on the next
boot. It checks for that file before it looks at the result of the first run, because a role that
goes on to use the new package fails until the snapshot is live. After three reboots it gives up.

```bash
#!/usr/bin/bash
set -uo pipefail

PLAYBOOK=${PLAYBOOK:-/etc/ansible-firstboot/site.yml}
STATE=/var/lib/ansible-firstboot
mkdir -p "$STATE"

run() {
    : > "$STATE/$1.log"
    ANSIBLE_LOG_PATH="$STATE/$1.log" ANSIBLE_NOCOLOR=1 \
        ansible-playbook -i localhost, -c local "$PLAYBOOK"
}

run converge
rc=$?

if [ -e /run/reboot-needed ]; then
    reboots=$(cat "$STATE/reboots" 2>/dev/null || echo 0)
    [ "$reboots" -lt 3 ] || exit 1
    echo $((reboots + 1)) > "$STATE/reboots"
    systemctl --no-block reboot
    exit 0
fi

[ "$rc" -eq 0 ] || exit 1

run idempotence || exit 1
grep -Eq 'localhost +: ok=[0-9]+ +changed=0 +unreachable=0 +failed=0' \
    "$STATE/idempotence.log" || exit 1

date --iso-8601=seconds > "$STATE/done"
```

`ansible-firstboot.service` runs it on every boot until it has succeeded once:

```ini
[Unit]
Description=Apply the first-boot Ansible playbook
Wants=network-online.target
After=network-online.target
ConditionPathExists=!/var/lib/ansible-firstboot/done

[Service]
Type=oneshot
ExecStart=/usr/local/libexec/ansible-firstboot
TimeoutStartSec=infinity

[Install]
WantedBy=multi-user.target
```

All the paths it writes, `/etc`, `/usr/local` and `/var`, are writable in immutable mode.

The runner could call `ansible-pull` instead, to fetch the playbook from a Git repository. Copying
it with `files` keeps the first boot independent of any server.

## Why not an init script

[Init scripts](../reference/profile/scripts#init-scripts) also run on the first boot, and for a
playbook that never needs a reboot they are enough: an init script can call `ansible-playbook`
directly. They run exactly once, though. When a playbook installs a package on an immutable system,
the change only takes effect after a reboot, and an init script would not run again to finish the
job. The unit above does.

## Checking the result

Boot the installer with `inst.auto=http://<server>/autoinst.jsonnet`. After the installation, on the
installed system:

```console
# journalctl -u ansible-firstboot
# cat /var/lib/ansible-firstboot/done
# grep -A1 "PLAY RECAP" /var/lib/ansible-firstboot/idempotence.log
```

The idempotence log ends with `changed=0`, and `done` holds the time the handoff finished.
