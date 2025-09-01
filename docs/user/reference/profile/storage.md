---
sidebar_position: 8
---

# Storage

The general concepts regarding configuration of storage devices with Agama are exposed at the
[corresponding subsection](/docs/user/guides/storage) of the interactive installation documentation.
It is recommended to read that section before diving into the details below.

## Unattended installation using the legacy AutoYaST mode

Most Agama profiles contain a `storage` section with the configuration settings that are detailed in
subsequent sections of this document. But in some cases, `storage` can be replaced by a special
section `legacyAutoyastStorage`, which is a 1:1 representation of the XML AutoYaST profile. This
section supports everything offered by the `partitioning` AutoYaST section. Note that Agama does not
validate this special section, so be careful to provide valid AutoYaST options.

```json
{
  "legacyAutoyastStorage": [
    {
      "use": "all",
      "partitions": []
    }
  ]
}
```

Although that special section is offered for backwards compatibility and to ease gradual migration
from AutoYaST to Agama, there are no plans to introduce any improvement or new feature in that
legacy mode.

## Basic structure of the Storage section

As mentioned above, the Agama process to setup the storage devices can be configured using a
`storage` section at the Agama configuration profile. The outer level of that section would look
like this, with all subsections being optional.

```
"storage": {
  "drives": [ ... ],
  "volumeGroups": [ ... ],
  "mdRaids": [ ... ],
  "boot": { ... }
}
```

Thus, a `storage` section can contain several entries describing how to configure the corresponding
storage devices and some extra entries (currently only `boot`) to setup some general aspects that
influence the final layout. Check the Agama JSON schema for a more formal definition.

Each volume group or software RAID can represent a new logical device to be created or an existing
device from the system to be processed. Entries below `drives` represent devices that can be used as
regular disks. That includes removable and fixed disks, SD cards, DASD or zFCP devices, iSCSI disks,
multipath devices, etc. Those entries always correspond to devices that can be found at the system,
since Agama cannot create that kind of devices.

In fact, a single entry can represent several devices from the system. That is explained in depth at
the section "searching existing devices" of this document.

## Entries for describing the devices

The specification of the previous section can be extended as we dive into the structure.

For example, an element of the `drives` collection can contain the following fields. All of them are
optional and some of them are mutually exclusive. Check the schema and use Agama's built-in
validation process for more formal details.

```
{
  "alias": "...",
  "search": { ... },
  "encryption": { ... },
  "filesystem": { ... },
  "partitions": [ ... ],
  "ptableType": "..."
}
```

Normally the device represented by a `drive` entry will be divided into several partitions. Each
entry of `partitions` follows this structure with several optional fields.

```
{
  "alias": "...",
  "search": { ... },
  "id": "...",
  "size": { ... },
  "encryption": { ... },
  "filesystem": { ... },
  "delete": ...,
  "deleteIfNeeded": ...
}
```

Drives and partitions can be combined to create a simple example in which the first disk is used to
create some partitions and the second one is directly formatted.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        {
          "filesystem": { "path": "/" },
          "size": { "min": "10 GiB" }
        },
        {
          "filesystem": { "path": "swap" },
          "size": "2 GiB"
        }
      ]
    },
    {
      "filesystem": { "path": "/home" },
    }
  ]
}
```

An entry from `volumeGroups` can have the following properties.

```
{
  "alias": "...",
  "name": "...",
  "search": { ... },
  "physicalVolumes": [ ... ],
  "logicalVolumes": [ ... ],
  "peSize": ... ,
  "delete": ...
}
```

Entries of `logicalVolumes` are relatively similar to the ones used to describe partitions.

```
{
  "alias": "...",
  "search": { ... },
  "name": "...",
  "size": { ... },
  "encryption": { ... },
  "filesystem": { ... },
  "pool": ...,
  "usedPool": "...",
  "stripes": ...,
  "stripeSize": ...,
  "delete": ...,
  "deleteIfNeeded": ...
}
```

To illustrate how all the previously described elements fit together, let's see the following
example in which the first disk of the system is partitioned and a volume group is created on top of
that partition (after encrypting it) to allocate two file systems.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        {
          "alias": "pv",
          "id": "lvm",
          "size": { "min": "12 GiB" },
          "encryption": {
            "luks2": { "password": "my secret passphrase" }
          }
        }
      ]
    }
  ],
  "volumeGroups": [
    {
      "name": "system",
      "physicalVolumes": [ "pv" ],
      "logicalVolumes": [
        {
          "size":   { "min": "10 GiB" },
          "filesystem": { "path": "/", "type": "btrfs" }
        },
        {
          "size":   "2 GiB",
          "filesystem": { "path": "swap", "type": "swap" }
        }
      ]
    }
  ]
}
```

Agama can also manage software-defined MD RAID arrays represented as entries at the `mdRaids`
collection.

```
{
  "alias": "...",
  "name": "...",
  "search": { ... },
  "level": "...",
  "chunkSize": ... ,
  "devices": [ ... ],
  "size": { ... },
  "encryption": { ... },
  "filesystem": { ... },
  "partitions": [ ... ],
  "ptableType": "...",
  "delete": ...
}
```

The `devices` property is used to specify the devices that act as members of the RAID.

```json
"storage": {
  "drives": [
    {
      "search": "/dev/sda",
      "partitions": [
        { "alias": "sda-40", "size": "40 GiB" }
      ]
    },
    {
      "search": "/dev/sdb",
      "partitions": [
        { "alias": "sdb-40", "size": "40 GiB" }
      ]
    }
  ],
  "mdRaids": [
    {
      "devices": [ "sda-40", "sdb-40" ],
      "level": "raid0"
    }
  ]
}
```

## Searching Existing Devices

Many sections in the profile are used to describe how some devices must be created, modified or even
deleted. In the last two cases, it's important to match the description with one or more devices
from the system.

If a description matches several devices, the same operations will be applied to
all. That's useful in several situations like applying the same partitioning schema to several disks
or deleting all partitions of a disk that match a given criteria.

Matching is performed using a `search` subsection like described below. By default, all devices in
the scope fitting the conditions will be matched. The number of device matches can be limited using
`max`.

The following example shows how several `search` sections could be used to find the three biggest
disks in the system, delete all partitions bigger than 1 GiB within them and create new partitions
of type RAID.

```json
"storage": {
  "drives": [
    {
      "search": {
        "sort": { "size": "desc" },
        "max": 3
      },
      "partitions": [
        {
          "search": {
            "condition": { "size": { "greater": "1 GiB" } }
          },
          "delete": true
        },
        {
          "alias": "newRaidPart",
          "id": "raid",
          "size": { "min": "1 GiB" }
        }
      ]
    }
  ]
}
```

The example also serves to illustrate the scope of each search. That is, the devices from the system
that are considered as possible candidates. That obviously depends on the place in the profile of
the `search` section. A `search` section inside the description of an MD RAID will only match
software RAID devices and a `search` section inside the `partitions` subsection of that RAID
description will only match partitions of RAIDs that have matched the conditions of the most
external `search`.

A given device can never match two different sections of the Agama profile. When several sections
at the same level contain a search subsection, devices are matched in the order the sections appear
on the profile.

```json
"storage": {
  "drives": [
    {
      "search": {
        "sort": { "size": "desc" },
        "max": 1
      },
      "alias": "biggest"
    },
    {
      "search": {
        "sort": { "size": "desc" },
        "max": 1
      },
      "alias": "secondBiggest"
    }
  ]
}
```

An empty search will match all devices in the scope, so the following example would delete all the
partitions of the chosen disk. But it only will work if the disk indeed contains partitions.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        { "search": {}, "delete": true }
      ]
    }
  ]
}
```

If there is not a single system device matching the scope and the conditions of a given search, then
`ifNotFound` comes into play. If the value is "skip", the device definition is ignored. If it's
"error" the whole process is aborted.

Entries on `drives` are different to all other subsections describing devices because drives can
only be matched to existing devices, they cannot be simply created. If `search` is omitted for a
drive, it will be considered to contain the following one.

```json
{
  "search": {
    "sort": "name",
    "max": 1,
    "ifNotFound": "error"
  }
}
```

In some common cases, the syntax of a `search` subsection can be cumbersome. For that reason, it is
possible to use simple strings in some situations.

On the one hand, `search` is very often used to find a device by its name. In that case, the search
section can simply contain the device name.

```json
{ "search": "/dev/sda" }
```

On the other hand, the string "\*" allows to match all the devices from the current context, if
there is any. In other words, the two following search sections are equivalent. This is specially
useful to match all partitions or logical volumes in a device, no matter whether there is any.

```json
{ "search": "*" }

{ "search": { "ifNotFound": "skip" } }
```

## Referencing Other Devices

Sometimes it is necessary to reference other devices as part of the specification of an LVM volume
group or RAID. Those can be existing system devices or devices that will be created as response to
another entry of the Agama profile.

Aliases can be used for that purpose as shown in this example.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        { "size": "50 GiB", "id": "lvm", "alias": "newPV" }
      ]
    }
   ],
   "volumeGroups": [
    {
      "name": "newVG",
      "physicalVolumes": [ "newPV" ],
      "logicalVolumes": [ { "name": "data", "size": "20 GiB" } ]
    }
  ]
}
```

If a section that matches several existing devices contains an alias, that alias will be considered
to be a reference to all the devices. As a consequence, this two examples are equivalent, assuming
there are at least two disks in the system.

```json
"storage": {
  "drives": [
    {
      "search": {
        "sort": { "size": "desc" },
        "max": 1,
      },
      "alias": "biggest"
    },
    {
      "search": {
        "sort": { "size": "desc" },
        "max": 1,
      },
      "alias": "secondBiggest"
    }
  ],
  "mdRaids": [
    {
      "devices": [ "biggest", "secondBiggest" ],
      "level": "raid0"
    }
  ]
}

"storage": {
  "drives": [
    {
      "search": {
        "sort": { "size": "desc" },
        "max": 2,
      },
      "alias": "big"
    }
  ],
  "mdRaids": [
    {
      "devices": [ "big" ],
      "level": "raid0"
    }
  ]
}
```

## Specifying the size of a device

When creating some kinds of devices or resizing existing ones (if possible) it may be necessary to
specify the desired size. As seen in the specification above, that can be done in several ways.

The most straightforward one is just using a string that can be parsed into a valid size.

The second option is to provide a minimum size and an optional maximum one. The resulting size will
be between those thresholds. If the maximum is omitted the device will grow as much as possible,
taking into account the available spaces and all the other specified sizes.

It is also possible to specify "current" as a minimum or maximum size limit for partitions and
logical volumes that already exist in the system (so "current" can only be used for device
specifications that contain a `search` section). The usage of "current" and how it affects
resizing the corresponding devices is explained at a separate section below.

If the size is completely omitted for a device that already exists (ie. combined with `search`),
then Agama would act as if both min and max limits would have been set to "current" (which implies
the partition or logical volume will not be resized).

If the size is omitted for a device that will be created, Agama can determine the size limits
as long as the device contains a `filesystem` entry specifying a mount point. In that case, Agama
will use the settings of the product to set the size limits. In Agama Jargon, the "product" is the
operating system being installed. And each product specifies the default size ranges for its
relevant file systems like "/", "swap", "/home", etc.

## Partitions Needed for Booting

Using a `boot` entry makes it possible to configure whether (and where, using an alias) Agama
should calculate and create the extra partitions needed for booting. If the device is not
specified, Agama will take the location of the root file system as a reference.

```json
"storage": {
  "drives": [
    {
      "search": "/dev/sda",
      "alias": "bootDisk"
    },
    {
      "search": "/dev/sdb",
      "partitions": [
        { "filesystem": { "path": "/" } }
      ]
    }
  ],
  "boot": {
    "configure": true,
    "device": "bootDisk"
  }
}
```

## Keeping an Existing File System or Encryption Layer

The entries for both `encryption` and `filesystem` contain a flag `reuse` with a default value of
false. It can be used in combination with `search` to specify the device must not be re-encrypted
or re-formatted.

## Deleting and Shrinking Existing Devices

The storage proposal must make possible to define what to do with existing partitions and logical
volumes. Even with existing MD RAIDs or LVM volume groups.

A `search` section allows to match the definition of a partition or an LVM logical volume with one
(or several) devices existing in the system. It is then possible to specify that the given
partitions or volumes must be:

- Deleted if needed to make space for the newly defined devices
- Deleted in all cases
- Shrunk to the necessary size to make space for new devices
- Shrunk or extended to a given size, maybe a range

It is even possible to express some combinations of the above, like "try to shrink it to make space
but proceed to delete it if shrinking it is not enough".

Deletion can be achieved with the corresponding `delete` flag or the alternative `deleteIfNeeded`.
If any of those flags are active for a partition, it makes no sense to specify any other usage
(like declaring a file system on it).

The following example deletes the partition with the number 1 (according to the partition name) in
all cases and, if needed, keeps deleting other partitions as needed to make space for the new
partition of 30 GiB.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        {
          "search": {
            "condition": { "number": 1 }
          },
          "delete": true
        },
        { "search": {}, "deleteIfNeeded": true },
        { "size": "30 GiB" }
      ]
    }
  ]
}
```

Often some partitions or logical volumes are shrunk only to make space for the declared devices. But
since resizing is not a destructive operation, it can also make sense to declare a given partition
must be resized (shrunk or extended) and then formatted and/or mounted.

In any case, note that resizing a partition can be limited depending on its content, the filesystem
type, etc.

Combining `search` and `resize` is enough to indicate Agama is expected to resize a given partition
if possible. The keyword "current" can be used as min and/or max for the size range and it is always
equivalent to the exact original size of the device. The simplest way to use "current" is to just
specify that the matched device should keep its original size. That's the default for searched (and
found) devices if `size` is completely omitted.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        {
          "search": {
            "condition": { "number": 1 }
          },
          "size": { "min": "current", "max": "current" }
        }
      ]
    }
  ]
}
```

Other combinations can be used to specify how a device could be resized if possible. See the
following examples with explanatory filesystem labels. Note the condition `fsLabel` is actually
not implemented yet.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        {
          "search": {
            "condition": { "fsLabel": "shrinkIfNeeded" }
          },
          "size": { "min": 0, "max": "current" }
        },
        {
          "search": {
            "condition": { "fsLabel": "resizeToFixedSize" }
          },
          "size": "15 GiB"
        },
        {
          "search": {
            "condition": { "fsLabel": "resizeByRange" }
          },
          "size": { "min": "10 GiB", "max": "50 GiB" }
        },
        {
          "search": {
            "condition": { "fsLabel": "growAsMuchAsPossible" }
          },
          "size": { "min": "current" }
        },
      ]
    }
  ]
}
```

Of course, when the size limits are specified as a combination of "current" and a fixed value, the
user must still make sure that the resulting min is not bigger than the resulting max.

Both `deleteIfNeeded` and a size range can be combined to indicate that Agama should try to make
space first by shrinking the partitions and deleting them only if shrinking is not enough.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        {
          "search": {},
          "size": { "min": 0, "max": "current" },
          "deleteIfNeeded": true
        }
      ]
    }
  ]
}
```

## Generating Default Volumes

Every product provides a configuration which defines the storage volumes (e.g., feasible file
systems for root, default partitions to create, etc). The default or mandatory product volumes can
be automatically generated by using a _generate_ section in the _partitions_ or _logicalVolumes_
sections.

```json
"storage": {
  "drives": [
    {
      "partitions": [
        { "generate": "default" }
      ]
    }
  ]
}

```

The _generate_ section allows creating the product volumes without explicitly writing all of them.
The config above would be equivalent to something like this:

```json
"storage": {
  "drives": [
    {
      "partitions": [
        { "filesystem": { "path": "/" } },
        { "filesystem": { "path": "/home" } },
        { "filesystem": { "path": "swap" } }
      ]
    }
  ]
}

```

If any path is explicitly defined, then the _generate_ section will not generate a volume for it.
For example, with the following config only root and swap would be automatically added:

```json
"storage": {
  "drives": [
    {
      "partitions": [
        { "generate": "default" },
        { "filesystem": { "path": "/home" } }
      ]
    }
  ]
}
```

The auto-generated volumes can be also configured. For example, for encrypting the partitions:

```json
"storage": {
  "drives": [
    {
      "partitions": [
        {
          "generate": {
            "partitions": "default",
            "encryption": {
              "luks1": { "password": "12345" }
            }
          }
        }
      ]
    }
  ]
}
```

The _mandatory_ keyword can be used for only generating the mandatory partitions or logical volumes:

```json
"storage": {
  "volumeGroups": [
    {
      "name": "system",
      "logicalVolumes": [
        { "generate": "mandatory" }
      ]
    }
  ]
}
```

## Generating Physical Volumes

Volume groups can be configured to explicitly use a set of devices as physical volumes. The aliases
of the devices to use are added to the list of physical volumes:

```json
"storage": {
  "drives": [
    {
      "search": "/dev/vda",
      "partitions": [
        { "alias": "pv2", "size": "100 GiB" },
        { "alias": "pv1", "size": "20 GiB" }
      ]
    }
  ],
  "volumeGroups": [
    {
      "name": "system",
      "physicalVolumes": ["pv1", "pv2"]
    }
  ]
}
```

The physical volumes can be automatically generated too, by simply indicating the target devices in
which to create the partitions. For that, a _generate_ section is added to the list of physical
volumes:

```json
"storage": {
  "drives": [
    {
      "search": "/dev/vda",
      "alias": "pvs-disk"
    }
  ],
  "volumeGroups": [
    {
      "name": "system",
      "physicalVolumes": [
        { "generate": ["pvs-disk"] }
      ]
    }
  ]
}
```

If the auto-generated physical volumes have to be encrypted, then the encryption config is added to
the _generate_ section:

```json
"storage": {
  "drives": [
    {
      "search": "/dev/vda",
      "alias": "pvs-disk"
    }
  ],
  "volumeGroups": [
    {
      "name": "system",
      "physicalVolumes": [
        {
          "generate": {
            "targetDevices": ["pvs-disk"],
            "encryption": {
              "luks2": { "password": "12345" }
            }
          }
        }
      ]
    }
  ]
}
```
