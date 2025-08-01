---
sidebar_position: 5
---

# AutoYaST support

We know that many AutoYaST users have invested quite some time in writing their profiles to perform
unattended installations. For that reason, Agama offers a mechanism to reuse such profiles to some extent.

However, Agama and AutoYaST have different features. Unlike AutoYaST, Agama is focused on the
installation and delegates further configuration to other tools. From this point of view, it is
clear that many of the sections in an AutoYaST profile will not have an Agama counterpart.

This document describes how AutoYaST supports work, including the limitations you might find.
For a full reference of all the sections and attributes of an AutoYaST profile and their level of
support in Agama, check the [AutoYaST compatibility reference](../reference/autoyast).

## Loading an AutoYaST profile

The typical way of starting an unattended installation in Agama is by passing the URL of an AutoYaST
profile through the [`inst.auto`](../reference/boot_options) argument in the kernel's
command-line. For example:

```text
inst.auto=http://example.net/agama/tumbleweed.xml
```

AutoYaST profiles can also be processed with the `generate` command as explained at the [working
with profiles](./working_with_profiles) section.

In both cases, Agama takes care of pre-processing and converting the profile to an Agama equivalent.
As part of this pre-processing, it supports handling of [dynamic profiles][dynamic-profiles],
including:

- [Rules and classes][rules-classes].
- [Embedded Ruby (ERB)][erb].
- [Pre-installation scripts][pre-scripts].
- [Ask lists][ask-lists] (not implemented yet). Note for developers: fortunately, the code to
  [parse][ask-list-reader] and [run][ask-list-runner] the process is there but we need to adapt the
  [user interface][ask-list-dialog], which is not trivial.

[dynamic-profiles]: https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/part-dynamic-profiles.html
[rules-classes]: https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/rulesandclass.html
[erb]: https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/erb-templates.html
[pre-scripts]: https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/cha-configuration-installation-options.html#pre-install-scripts
[ask-lists]: https://doc.opensuse.org/documentation/leap/autoyast/html/book-autoyast/cha-configuration-installation-options.html#CreateProfile-Ask
[ask-list-reader]: https://github.com/yast/yast-autoinstallation/blob/c2dc34560df4ba890688a0c84caec94cc2718f14/src/lib/autoinstall/ask/profile_reader.rb#L29
[ask-list-runner]: https://github.com/yast/yast-autoinstallation/blob/c2dc34560df4ba890688a0c84caec94cc2718f14/src/lib/autoinstall/ask/runner.rb#L50
[ask-list-dialog]: https://github.com/yast/yast-autoinstallation/blob/c2dc34560df4ba890688a0c84caec94cc2718f14/src/lib/autoinstall/ask/dialog.rb#L23

