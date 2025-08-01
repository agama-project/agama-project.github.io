---
sidebar_position: 3
---

# Writing a dynamic profile

It is not unusual that you need to write a profile that adapts dynamically to the underlying system.
For instance, you might want Agama to take some decisions depending on the hardware of the system
you are installing.

Fortunately, Jsonnet can work as a templating language and it offers many structures that allow
generating data. For that reason, Agama injects the hardware information that you can process using
the powerful [Jsonnet standard library](https://jsonnet.org/ref/stdlib.html).

You can access to the hardware information by importing the `hw.libsonnet` library, as you can see
in the example below.

```jsonnet
// There are included also helpers to search this hardware tree. To see helpers check
// "/usr/share/agama-cli/agama.libsonnet"
local agama = import 'hw.libsonnet';

// Find the biggest disk which is suitable for installing the system.
local findBiggestDisk(disks) =
  local sizedDisks = std.filter(function(d) std.objectHas(d, 'size'), disks);
  local sorted = std.sort(sizedDisks, function(x) -x.size);
  sorted[0].logicalname;

// Find how much physical memory system has.
local memory = agama.findByID(agama.lshw, 'memory').size;

{
  product: {
    id: if memory < 8000000000 then 'MicroOS' else 'Tumbleweed',
  },
  user: {
    fullName: 'Jane Doe',
    userName: 'jane.doe',
    password: '123456',
  },
  root: {
    password: 'nots3cr3t',
    sshPublicKey: '...',
  },
  storage: {
    boot: {
      configure: true,
      device: 'boot',
    },
    drives: [
      {
        search: findBiggestDisk(agama.selectByClass(agama.lshw, 'disk')),
        alias: 'boot',
      },
    ],
  },
}
```

Agama ships a few helpers to make it easier to search for the information you need from the hardware
tree. See
[agama.libsonnet](https://github.com/agama-project/agama/blob/master/rust/share/agama.libsonnet) for
further details.

:::tip Getting hardware information

You can inspect the available data by installing the `lshw` package and running the following
command: `lshw -json`.

:::
