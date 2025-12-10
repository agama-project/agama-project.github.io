# Activate multipath during installation

Using [multipath](https://en.wikipedia.org/wiki/Linux_DM_Multipath) offers fault-tolerance by
defining more than one physical path between each storage device and the CPU. In order to get it
benefits, the multipath subsystem must be activated by Agama during the installation process. Once
multipath is activated, it affect all devices in the system. So it is expected that only the
corresponding multipath device name will then be used to reference any disk.

Agama currently offers several mechanisms for the user to specify that multipath must be activated,
although several improvements in the area are expected in future versions.

## Force activation

Agama will always activate multipath if the environment variable `LIBSTORAGE_MULTIPATH_AUTOSTART` is
set. The easiest way to set that variable during the installation process is to use the following
boot argument.

```
LIBSTORAGE_MULTIPATH_AUTOSTART=1
```

If you are certain the system uses multipath, this would be the most robust method to ensure that
current versions of Agama activate the corresponding subsystems.

![Enforcing multipath with a boot argument](/img/user/multipath-boot.png)

## Conditional activation

If multipath activation is not enforced with the mentioned boot argument, then Agama will always
try to detect whether the system contains any multipath device. If that is the case, Agama will ask
whether multipath must be activated. If no multipath devices are detected, Agama will proceed
without asking. Bear in mind that detection of multipath devices is not 100% reliable.

In case Agama gets to the point of raising the mentioned question, the answer can be set beforehand
at the Agama configuration or provided interactively.

The latter case is as straightforward as answering to the corresponding dialog at the Agama web
interface or, alternatively, using the [`agama questions`](../reference/cli#agama-questions)
command.

![Multipath detection at the web interface](/img/user/multipath-web.png)

Agama can also be configured to activate multipath if detected, without waiting for any interaction.
For that, a JSON configuration containing the following settings must be loaded.

```json
{
  "questions": {
    "answers": [
      {
        "class": "storage.activate_multipath",
        "answer": "yes"
      }
    ]
  }
}
```

Read [the profile format reference](../reference/profile/questions) for more info about specifying
answers at the Agama configuration.

Also check the starter's guide if you need any clarification regarding how to load an Agama
configuration using [the command-line tools](/docs/overview/cli) or during boot during an
[unattended installation](/docs/overview/unattended).

## Future improvements

The mechanisms described in this document will keep working in the foreseeable future, but upcoming
versions of Agama will add more explicit and powerful methods to configure multipath making use of
the JSON configuration.

Thus, users heavily relying at multipath may consider revisiting this document in the future.
