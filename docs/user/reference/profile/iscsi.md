---
sidebar_position: 9
---

# iSCSI

Sharing block devices via iSCSI (Internet Small Computer Systems Interface) is a common way to make
those devices available through the network. In order to use those network storage devices, the
`iscsi` section allows to configure the system as an iSCSI initiator and to define connections to
one or many iSCSI targets. That allows to access the block devices served by those targets and to
use them as drives in the [`storage`](./storage) section of the Agama configuration.

The `iscsi` section contains only two properties: `initiator` and `targets`.

## Initiator name configuration

In order to access the available resources, the system needs to identify itself with an unique name
within the iSCSI SAN (iSCSI Storage Area Network). The attribute `initiator` allows to specify that
name.

## List of targets

The property `targets` contains a list of objects. Each object describes the connection to an
iSCSI target and can contain the following properties (only the first four are mandatory):

 * `address`: IP address (or hostname) of the target.
 * `port`: TCP port.
 * `name`: iSCSI name of the target.
 * `interface`: iSCSI interface to use, not to be confused with the network interface.
 * `startup`: The startup mode for the iSCSI node. The possible values are 'onboot', 'manual' and
   'automatic'.
 * `authByTarget`: Optional pair of username and password, used if CHAP authentication should be
    performed by the target. See below.
 * `authByInitiator`: Optional pair of username and password, used if CHAP authentication should be
   performed by the initiator. See below.

## iSCSI authentication

When performing discovery and login operations, an iSCSI system can be optionally configured to
request authentication between controllers (targets) and hosts (initiators) using CHAP (Challenge
Handshake Authentication Protocol). There are three options:

- No authentication. No usernames or passwords are needed.
- CHAP authentication performed by the target. The target authenticates the initiator by sending it
  a CHAP challenge. The initiator must know the username and the password.
- Bidirectional CHAP authentication. The target authenticates the initiator as above and then the
  initiator authenticates the target by sending it a CHAP challenge. In addition to knowing the
  username and password for the first challenge, the initiator must set a pair of username and
  password for the second one.

As a result, a given entry in the `targets` list can have:

- No attributes related to authentication.
- An entry for `authByTarget`.
- An entry for `authByTarget` and another one for `authByInitiator`.

In the last two cases, the format of each entry is always the same: an object with two properties
`username` and `password`. See the examples below.

## Example Configuration

```json
{
  "iscsi": {
    "initiator": "iqn.2013-02.de.suse:01:e229358d2dea",
    "targets": [
      {
        "address": "192.168.1.10",
        "port": 3260,
        "name": "iqn.2001-15.com.doe:data",
        "interface": "default"
      },
      {
        "address": "192.168.1.1",
        "port": 3260,
        "name": "iqn.2001-05.com.doe:test1",
        "interface": "default",
        "startup": "onboot",
        "authByTarget": {
          "username": "test",
          "password": "12345"
        }
      },
      {
        "address": "192.168.1.1",
        "port": 3260,
        "name": "iqn.2001-05.com.doe:test2",
        "interface": "default",
        "startup": "manual",
        "authByTarget": {
          "username": "test",
          "password": "12345"
        },
        "authByInitiator": {
          "username": "test",
          "password": "54321"
        }
      }
    ]
  }
}
```
