---
sidebar_position: 3
---

# Writing a dynamic profile

One of the benefits of using Jsonnet instead of JSON is that you can write dynamic configurations
that change at runtime depending on the available hardware information[^1]. For example, you might
want to set the size of your swap depending on the available phyisical memory or to tweak the
configuration when running on a given architecture.

Jsonnet can work as a templating language and it offers many structures that allow generating data.
For that reason, Agama injects the hardware information that you can process using the powerful
[Jsonnet standard library](https://jsonnet.org/ref/stdlib.html).

Agama takes the hardware information from the `lshw -json` command. The output is a JSON document
that you can access from your configuration including the following line at the top of the file:

```jsonnet
local agama = import 'hw.libsonnet';
```

The `agama` object holds the hardware information under the `lshw` key (`agama.lshw`). Additionally,
it offers
[some helpers](https://github.com/agama-project/agama/blob/master/rust/share/agama.libsonnet) to
make traversing the hardware information tree easier:

- `selectByClass`: allows to find an object by its class.
- `selectByID`: allows to find an object by its ID.

For instance, if you want to find amount of memory on the system you are installing, you can use
this code:

```jsonnet
local hw = import 'hw.libsonnet';
local memory = findByID(agama.lshw, 'memory').size;
```

In this case, `findByID` would return the object with the `memory` ID, where you can find the size
of the physical memory (note the `size` key):

```json
{
  "id": "memory",
  "class": "memory",
  "claimed": true,
  "handle": "DMI:0001",
  "description": "System Memory",
  "physid": "1",
  "slot": "System board or motherboard",
  "units": "bytes",
  "size": 17179869184
}
```

Then, you can use the value wherever you need like the example below:

```jsonnet
local hw = import 'hw.libsonnet';
local memory = findByID(agama.lshw, 'memory').size;

{
  storage: {
    drives: [{
      search: '/dev/vda',
      partitions: [{
        filesystem: { path: '/' },
        size: { min: '10 GiB' },
      },
      {
        filesystem: { path: 'swap' },
        size: memory * 2,
      }
    ],
  }]
}
```

If you still miss the AutoYaST pre-scripts, you might be interested in the `inst.script` boot
option. Check the [boot options](../reference/boot_options) for further information.

[^1]:
    In AutoYaST, you would do that via
    [pre-scripts](https://doc.opensuse.org/projects/autoyast/#pre-install-scripts) or
    [Embedded Ruby](https://doc.opensuse.org/projects/autoyast/#erb-templates).
