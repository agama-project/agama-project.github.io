---
sidebar_position: 6
---

# Linuxrc Compatibility

Agama provides a few options to make it easier the transition from linuxrc. They are not identical and work
slightly differently, but for a regular usage they should be sufficient.
Also Agama is case sensitive and requires the exact parameter unlike linuxrc which allows
additional dots, dashes and underscores.

## Info File Support

Agama provides `agama.info=` option that act similarly to linuxrc `info=` option. However, it
supports only URI schemas supported by curl. Also info file can contain only agama specific options.
