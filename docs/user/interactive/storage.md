# Configuration of storage devices

This section describes some general aspects of the planned features for Agama regarding
storage setup and shows how the web interface can be used to configure the related
settings.

:::warning Under development
Bear in mind that some of the mentioned features may be already available and fully working as
described while others may still be incomplete in the current version of Agama.

In particular, the presented interface is still under heavy development and not available at the
latest version of Agama. As a result, the screenshots are not a faithfull representation of the
final look & feel. Something that is represented as a sentence in the screenshots can become a
tool-tip, a given icon can become a label, actions grouped in a drop-down can end up being
represented as separate buttons, etc.
:::

## The general approach

Agama uses the same algorithm and similar configurations for both interactive and unattended
installations, combining capabilities of the traditional YaST proposal (usually known as Guided
Setup) and the AutoYaST profile. Those configurations can be specified using the web interface
or through a JSON-based configuration profile.

Agama can work with very detailed descriptions on how the storage setup must look like, analogous to
the specifications produced by YaST's Expert Partitioner or the AutoYaST profile which both include
every single detail about partitions, file systems or LVM structures.

On the other hand, Agama can automatically determine any omitted aspect of the configuration, based
on the definition of the operating system to install ("product" in Agama jargon) and the properties
of the system, without the user specifying, or even understanding, every single configuration
option.

That opens the door for configurations with any level of detail. For example, the user can use the
web interface to specify the creation of a root ("/") file system and a swap space, with no further
information. Agama would then infer all the details of the file systems (like the type, the mount
parameters, usage of Btrfs snapshots...) and would calculate appropriate sizes for the associated
partitions. The user can decide at any point to override any of the automatic values (eg. specifying
a size range for a partition) or to go back to the automatic mode for that particular setting.

Something similar happens with complex structures like LVM or RAID, that can be specified in a quite
loosely way, as explained below.

## Overall description of the Storage page

Agama does not offer a direct replacement for the YaST Expert Partitioner. Although creating such a
tool is not discarded for the future, the Agama web interface should be enough to cover most of the
Expert Partitioner capabilities. In many cases, even in a more convenient way.

The Storage section of the Agama web interface presents both the installer settings and the planned
result of applying those settings to the current system.

![Overview of the storage configuration page](/img/user/storage-overview.png)

The configuration defines which devices to use and how, which new logical devices to create (LVM,
software Raids, etc.) and where to allocate (or reuse) the file systems of the new operating system.
The result is currenty represented as a list of planned actions and a table representing the final
state of the affected devices. In the long term, a better alternative to show the result could be
developed.

Every change to any of the configuration options will result in an immediate re-calculation of the
section that presents the result. As already mentioned, the configuration options are identical to
the case of unattended installation (see detailed description at the [corresponding
section](../unattended/storage.md)), although the user interface presents more clearly the
relationship between those settings and the system being used for installation.

![Selecting a device for installation](/img/user/storage-device.png)

There are several interactive elements allowing to control several aspects of the installation.

![Choosing how to make space](/img/user/storage-space.png)

By manipulating the configuration it is possible to extend the installation over several disks and
to reuse existing file systems, among many other things.

![Using another disk for booting and reusing /home](/img/user/storage-two-disks.png)

## Usage of LVM and software RAID

Adding LVM and RAID is done using the same interface.

![Adding LVM and RAID](/img/user/storage-add-device.png)

Obviously, the file systems created on an LVM volume group will be created as logical volumes
analogous to the partitions of the disk case. Once again, it is possible to specify a loose
configuration simply indicating the disk (or disks) that will be used by LVM and Agama calculates
any partition that would be needed as physical volume, taking into account all the size overheads
and roundings introduced by the different technologies like LVM or the used partition table type.

![A simple LVM setup](/img/user/storage-simple-lvm.png)

The disks in which the LVM is set are also visible as part of the configuration, so it is possible
to tweak aspects like what to do with existing partitions or to define which disk will be used to
create the additional partitions needed for booting.

It is also possible to be more concrete and specify some existing devices to be used as physical
volumes for any new LVM volume group.

Defining a new RAID is done in a similar way from the same general user interface. Of course, LVM
and RAID can be combined making it possible to configure an LVM setup on top of a mirrored RAID
without explicitly creating any partition, delegating to Agama the creation of all the intermediate
data structures.

## Configuration of partitions needed for booting

One of the main features of the Agama storage setup is its ability to automatically determine any extra
partition that may be needed for booting the new system, like PReP, EFI, Zipl or any other described
at the [corresponding YaST
document](https://github.com/yast/yast-storage-ng/blob/master/doc/boot-requirements.md). The
algorithm can create those partitions or reuse existing ones that are already in the system if the
user wants to keep them. The behavior of that feature can be tweaked using the corresponding entry
at the advanced options menu.

![Choosing how to make space](/img/user/storage-boot.png)

## A note about transactional systems

Agama is able to install transactional distributions like openSUSE MicroOS. There will be no option
at the Agama configuration to set whether the root file system of the installed system should be
transactional (also known as "immutable") or not. Since the implications go beyond the file system
settings, the nature of the system (transactional vs read-write) will be determined by the selection
of the product (ie. the operating system) to install.

![Information about transactional system](/img/user/storage-transactional.png)

## The initial proposal

Defining the file systems is essential for installing the system, so Agama always makes an attempt
with an initial configuration before the user has had any opportunity to specify the settings (in
an interactive installation) or if the user has omitted the storage configuration (in an unattended
installation).

The current logic to calculate those default settings is intentionally simplistic - just trying to
install into a single disk with the default product strategy to find space (eg. wiping the content
of the disk) and using the other default sizes and settings of the product (eg. Btrfs snapshots).

That is an important difference with YaST, which tries really hard to find a configuration that
makes the installation possible even if that implies completely modifying the default settings (eg.
going for minimal sizes, disabling Btrfs snapshots and removing separate partitions) and making
attempts on every single disk (or combination of disks) in the system.

The goal of the Agama approach is to provide a more consistent experience that makes the user part
of the decision making process and aware of the changes introduced at the configuration. Adding some
extra capabilities to that initial attempt (eg. trying on several disks or adjusting some very
visible parameters) is not fully discarded for the future, subject to finding the right way to make
those decisions obvious to the users.