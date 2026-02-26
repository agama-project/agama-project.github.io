# Interactive storage configuration

This section describes some general aspects of Agama regarding storage setup and shows how the web 
interface can be used to configure the related settings.

## The general approach {#approach}

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

Something similar happens with complex structures like LVM, which do not necessarily need to be
described exhaustively.

## Overall description of the Storage page {#overview}

Agama does not offer a direct replacement for the YaST Expert Partitioner. Although creating such a
tool is not discarded for the future, the Agama web interface should be enough to cover most of the
Expert Partitioner capabilities. In many cases, even in a more convenient way.

The Storage section of the Agama web interface presents both the installer settings and the planned
result of applying those settings to the current system.

![Overview of the storage configuration page](/img/user/storage-overview.png)

The configuration defines which devices to use and how, which new logical devices to create
(eg. LVM) and where to allocate (or reuse) the file systems of the new operating system.
The result is currently represented as a list of planned actions and a table representing the final
state of the affected devices. In the long term, a better alternative to show the result could be
developed.

Every change to any of the configuration options will result in an immediate re-calculation of the
section that presents the result. As already mentioned, the configuration options are identical to
the case of unattended installation (see detailed description at the [corresponding
section](../reference/profile/storage)), although the user interface presents more clearly the
relationship between those settings and the system being used for installation.

![Selecting a device for installation](/img/user/storage-device.png)

:::warning Under development
The current user interface does not support all the possibilities that can be expressed by an Agama
storage configuration. For example, there is not support yet for defining new RAID devices.

If a given configuration is not manageable by the web interface, then the storage section shows a
message explaining the situation and offers to reset to the default settings. Such an alert is
always shown if the loaded configuration uses [the legacy AutoYaST
mode](../reference/profile/storage#unattended-installation-using-the-legacy-autoyast-mode).
:::

There are several interactive elements allowing to control several aspects of the installation.

![Choosing how to make space](/img/user/storage-space.png)

By manipulating the configuration it is possible to extend the installation over several disks and
to reuse existing file systems, among many other things.

![Using another disk for booting and reusing /home](/img/user/storage-two-disks.png)

## Usage of LVM {#lvm}

Adding new LVM volume groups is done using the same interface.

![Adding an LVM volume group](/img/user/storage-add-lvm.png)

Obviously, the file systems created on an LVM volume group will be created as logical volumes
analogous to the partitions of the disk case. Once again, it is possible to specify a loose
configuration simply indicating the disk (or disks) that will be used by LVM and Agama calculates
any partition that would be needed as physical volume, taking into account all the size overheads
and roundings introduced by the different technologies like LVM or the used partition table type.

![A simple LVM setup](/img/user/storage-simple-lvm.png)

The disks in which the LVM is set are also visible as part of the configuration, so it is possible
to create additional partitions out of the LVM, to tweak what to do with existing partitions or to
define which disk will be used to create the additional partitions needed for booting.

## Using existing partitions {#reuse-partitions}

When defining a new partition or modifying an previous definition, it is possible to indicate that
an existing partition must be used, instead of creating a new one.

![Choosing an existing partition](/img/user/storage-reuse-partition.png)

In some cases, it is possible to keep the existing file system at that partition and simply mount it
in the indicated location of the new system. Of course, there is always the option to just reuse the
partition itself but format it again with a new file system.

![Choosing what to do with an existing partition](/img/user/storage-reuse-filesystem.png)

Needless to say, re-used partitions will not be deleted (or even resized), no matter what is the
general action chosen to find space in the disk.

## Full device without partitions {#direct-disk}

When no partitions are defined on a given disk, it is possible to click "Not configured yet"
to either define partitions (new or re-used ones) or to indicate the whole disk should be directly
formatted as a whole, with no partition table. Of course, if the disk is already directly formatted,
the existing file system can be simply mounted.

![Directly use a disk](/img/user/storage-format-disk.png)

Directly formatting or mounting a device is useful in many situations. For example, in a system in
which some software RAIDs have been defined before the installation and the user wants to format
those RAID devices. In that regard, software RAIDs are treated as regular disks by the Agama user
interface.

## Configuration of partitions needed for booting {#boot}

One of the main features of the Agama storage setup is its ability to automatically determine any extra
partition that may be needed for booting the new system, like PReP, EFI, Zipl or any other described
at the [corresponding YaST
document](https://github.com/yast/yast-storage-ng/blob/master/doc/boot-requirements.md). The
algorithm can create those partitions or reuse existing ones that are already in the system if the
user wants to keep them. The behavior of that feature can be tweaked using the corresponding entry
at the advanced options menu.

![Choosing the disk to create boot partitions](/img/user/storage-boot.png)

## Analyze the system and update the information {#rescan}

Sometimes the storage setup of the system changes after the installer has done its initial analysis.
New hardware devices can be plugged in and new logical devices (like RAIDs or LVM volume groups) can
be created. Or maybe nothing has changed but the user needs a second chance to enter the encryption
password for an existing device that was skipped during the initial system probing.

![Rescan devices](/img/user/storage-rescan.png)

The option "Rescan devices" allows to trigger a new system analysis. If the current storage
configuration still makes sense after reading the devices, such a configuration will be kept
adapting the result.

## A note about transactional systems {#transactional}

Agama is able to install transactional distributions like openSUSE MicroOS. By default, the nature
of the system (transactional vs traditional) is determined by the selection of the product (ie. the
operating system) to install.

However, some products allow overriding this behavior using the product modes.
For instance, SLES can be installed in either `standard` or `immutable` mode (providing an
immutable system with transactional updates).

![Information about transactional system](/img/user/storage-transactional.png)

## The initial proposal {#initial}

Defining the file systems is essential for installing the system, so Agama always makes an attempt
with an initial configuration before the user has had any opportunity to specify the settings (in
an interactive installation) or if the user has omitted the storage configuration (in an unattended
installation).

The current logic to calculate those default settings is intentionally simplistic - just trying to
install into a single disk with the default product strategy to find space (eg. wiping the content
of the disk) and using the other default sizes and settings of the product (eg. Btrfs snapshots).
If that first attempt fails to calculate a valid storage setup and the system contains several
disks, Agama will try again with the same settings on another disk. Up to a total of five attempts
on as many different disks.

That is an important difference with YaST, which tries really hard to find a configuration that
makes the installation possible even if that implies completely modifying the default settings (eg.
going for minimal sizes, disabling Btrfs snapshots and removing separate partitions) in addition to
trying different disks (or even combinations of disks).

The goal of the Agama approach is to provide a more consistent experience that makes the user part
of the decision making process and aware of the changes introduced at the configuration. Adding some
automatic adjustments for some clearly visible settings is not fully discarded for the future,
subject to finding the right way to make those automatic decisions obvious to the users.
