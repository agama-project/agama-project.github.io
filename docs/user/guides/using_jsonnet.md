# Using Jsonnet to create dynamic configurations

One of the benefits of using Jsonnet instead of JSON is that you can write dynamic configurations
that change at runtime depending on the available hardware information[^1]. For example, you might
want to set the size of your swap depending on the available phyisical memory or to tweak the
configuration when running on a given architecture.

:::note If you miss pre-scripts

If you still miss the pre-scripts, you might be interested in the `inst.script` boot option.

:::

Agama takes the hardware information from the `lshw -json` command. You can get its content in your
configuration by adding the following excerpt at the top of the file:

```jsonnet
local agama = import 'hw.libsonnet';
```

The `agama` object holds the hardware information under the `lshw` key (`agama.lshw`). Additionally,
`agama` offers some helpers to make traversing this hardware information easier.

- `selectByClass`: allows to find an object by its class.
- `selectByID`: allows to find an object by its ID.

For instance, if you want to find amount of memory on the system you are installing, you can use
something like this:

```jsonnet
local hw = import 'hw.libsonnet';
local memory = findByID(agama.lshw, 'memory').size;
```

In this case, `findByID` would return the object with the `memory` ID, which could be something like
this:

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

Then, you can use the value wherever you need. Let's have a look to the full example:

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

[^1]:
    In AutoYaST, you would do that via
    [pre-scripts](https://doc.opensuse.org/projects/autoyast/#pre-install-scripts) or
    [Embedded Ruby](https://doc.opensuse.org/projects/autoyast/#erb-templates).
