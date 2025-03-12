# Loading an AutoYaST profile

The typical way of starting an unattended installation in Agama is by passing the URL of an AutoYaST
profile through the [`inst.auto`](../boot_options/index.md#boot-options) argument in the kernel's
command-line[^agama-profile-import]. For example:

```text
inst.auto=http://example.net/agama/tumbleweed.xml
```

Agama takes care of pre-processing and converting the profile to an Agama equivalent. As part of
this pre-processing, it supports handling of [dynamic profiles][dynamic-profiles], including:

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

[^agama-profile-import]: You can use the `agama profile import` command, but that's out of the scope of this document.
