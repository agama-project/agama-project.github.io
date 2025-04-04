---
sidebar_position: 9
---

# Storage tips & tricks

Agama relies on yast2-storage-ng for the management of storage devices such as disks, partitions,
LVM, RAID, etc. Thus, the [environment
variables](https://github.com/yast/yast-storage-ng/blob/master/src/lib/y2storage/storage_env.rb)
honored by that YaST component can be used to modify its behavior.

That is especially useful for development purposes. In particular setting the following two
variables for the Agama service will allow to emulate a system with any storage setup.

```shell
YAST_TEST_MODE=1
YAST_DEVICEGRAPH_FILE=/path/to/a/devicegraph.xml
```

The file passed to the `YAST_DEVICEGRAPH_FILE` must be a devicegraph description in any of the
formats supported for that purpose by yast2-storage-ng, either XML or YAML.
