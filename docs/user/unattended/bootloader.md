# Bootloader configuration

Agama offers a reduced set of settings to change the bootloader configuration, although it is able
to set it up correctly in many situations and architectures.

These options are defined in the `bootloader` section.

- `stopOnBootMenu`: stop on the menu instead of booting the system automatically.
- `timeout`: specify how many seconds the bootloader should wait on the menu before booting the
  default entry. Unlike AutoYaST, the timeout should be a positive number. If you want the
  bootloader to stop indefinitely, just set `stopOnBootMenu` to `true`.
- `extraKernelParams`: additional kernel parameters.

```
{
  bootloader: {
    stopOnBootMenu: true,
    extraKernelParams: "processor.max_cstate=1"
  }
}
```
