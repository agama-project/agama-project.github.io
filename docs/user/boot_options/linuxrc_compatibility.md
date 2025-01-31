---
sidebar_position: 6
---

# Linuxrc Compatibility

Agama provides few options to make easier transition from linuxrc. They are not identical and works
slightly differently, but for usual usage it should be sufficient.
Also agama is case sensitive and require exact parameter usage unlike linuxrc which allows
additional dots, dashes and underscores.

## Info File Support

Agama provides `agama.info=` option that act similarly to linuxrc `info=` option. However, it
supports only URI schemas supported by curl. Also info file can contain only agama specific options.
