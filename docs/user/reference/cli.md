# Command-line reference

This document contains the help content for the `agama` command-line program.

**Command Overview:**

* [`agama`↴](#agama)
* [`agama config`↴](#agama-config)
* [`agama config show`↴](#agama-config-show)
* [`agama config load`↴](#agama-config-load)
* [`agama config validate`↴](#agama-config-validate)
* [`agama config generate`↴](#agama-config-generate)
* [`agama config edit`↴](#agama-config-edit)
* [`agama probe`↴](#agama-probe)
* [`agama install`↴](#agama-install)
* [`agama questions`↴](#agama-questions)
* [`agama questions mode`↴](#agama-questions-mode)
* [`agama questions answers`↴](#agama-questions-answers)
* [`agama questions list`↴](#agama-questions-list)
* [`agama questions ask`↴](#agama-questions-ask)
* [`agama logs`↴](#agama-logs)
* [`agama logs store`↴](#agama-logs-store)
* [`agama logs list`↴](#agama-logs-list)
* [`agama auth`↴](#agama-auth)
* [`agama auth login`↴](#agama-auth-login)
* [`agama auth logout`↴](#agama-auth-logout)
* [`agama auth show`↴](#agama-auth-show)
* [`agama download`↴](#agama-download)
* [`agama finish`↴](#agama-finish)
* [`agama monitor`↴](#agama-monitor)
* [`agama events`↴](#agama-events)

## `agama`

Agama's command-line interface

This program allows inspecting or changing Agama's configuration, handling installation profiles, starting the installation, monitoring the process, etc.

Please, use the "help" command to learn more.

**Usage:** `agama [OPTIONS] <COMMAND>`

###### **Subcommands:**

* `config` — Inspect or change the installation settings
* `probe` — Analyze the system
* `install` — Start the system installation
* `questions` — Handle installer questions
* `logs` — Collect the installer logs
* `auth` — Authenticate with Agama's server
* `download` — Download file from a given (AutoYaST) URL
* `finish` — Finish the installation
* `monitor` — Monitors the Agama service
* `events` — Display Agama events

###### **Options:**

* `--host <HOST>` — URI pointing to Agama's remote host.

   Examples: https://my-server.lan my-server.local localhost:10443

  Default value: `http://localhost`
* `--insecure` — Whether to accept invalid (self-signed, ...) certificates or not

  Default value: `false`



## `agama config`

Inspect or change the installation settings.

You can inspect and change installation settings from the command-line. The "show" subcommand generates a "profile" which is a JSON document describing the current configuration.

If you want to change any configuration value, you can load a profile (complete or partial) using the "load" subcommand.

**Usage:** `agama config <COMMAND>`

###### **Subcommands:**

* `show` — Generate an installation profile with the current settings
* `load` — Read and load a profile
* `validate` — Validate a profile using JSON Schema
* `generate` — Generate and print a native Agama JSON configuration from any kind and location.
* `edit` — Edit and update installation option using an external editor



## `agama config show`

Generate an installation profile with the current settings.

It is possible that many configuration settings do not have a value. Those settings are not included in the output.

The output of command can be used as input for the "agama config load".

**Usage:** `agama config show [OPTIONS]`

###### **Options:**

* `-o`, `--output <FILE_PATH>` — Save the output here (goes to stdout if not given)



## `agama config load`

Read and load a profile

**Usage:** `agama config load [URL_OR_PATH]`

###### **Arguments:**

* `<URL_OR_PATH>` — JSON file: URL or path or `-` for standard input



## `agama config validate`

Validate a profile using JSON Schema

Schema is available at /usr/share/agama-cli/profile.schema.json Note: validation is always done as part of all other "agama config" commands.

**Usage:** `agama config validate <URL_OR_PATH>`

###### **Arguments:**

* `<URL_OR_PATH>` — JSON file, URL or path or `-` for standard input



## `agama config generate`

Generate and print a native Agama JSON configuration from any kind and location.

Kinds:
- JSON
- Jsonnet, injecting the hardware information
- AutoYaST profile, including ERB and rules/classes

Locations:
- path
- URL (including AutoYaST specific schemes)

For an example of Jsonnet-based profile, see
https://github.com/openSUSE/agama/blob/master/rust/agama-lib/share/examples/profile.jsonnet

**Usage:** `agama config generate [URL_OR_PATH]`

###### **Arguments:**

* `<URL_OR_PATH>` — JSON file: URL or path or `-` for standard input



## `agama config edit`

Edit and update installation option using an external editor.

The changes are not applied if the editor exits with an error code.

If an editor is not specified, it honors the EDITOR environment variable. It falls back to `/usr/bin/vi` as a last resort.

**Usage:** `agama config edit [OPTIONS]`

###### **Options:**

* `-e`, `--editor <EDITOR>` — Editor command (including additional arguments if needed)



## `agama probe`

Analyze the system.

In Agama's jargon, the term 'probing' refers to the process of 'analyzing' the system. This includes reading software repositories, analyzing storage devices, and more. The 'probe' command initiates this analysis process and returns immediately. TODO: do we really need a "probe" action?

**Usage:** `agama probe`



## `agama install`

Start the system installation.

This command starts the installation process.  Beware it is a destructive operation because it will set up the storage devices, install the packages, etc.

When the preconditions for the installation are not met, it informs the user and returns, making no changes to the system.

**Usage:** `agama install`



## `agama questions`

Handle installer questions.

Agama might require user intervention at any time. The reasons include providing some missing information (e.g., the password to decrypt a file system) or deciding what to do in case of an error (e.g., cannot connect to the repository).

This command allows answering such questions directly from the command-line.

**Usage:** `agama questions <COMMAND>`

###### **Subcommands:**

* `mode` — Set the mode for answering questions
* `answers` — Load predefined answers
* `list` — Prints the list of questions that are waiting for an answer in JSON format
* `ask` — Reads a question definition in JSON from stdin and prints the response when it is answered



## `agama questions mode`

Set the mode for answering questions

**Usage:** `agama questions mode <VALUE>`

###### **Arguments:**

* `<VALUE>`

  Possible values:
  - `interactive`:
    Ask the user and block the installation
  - `non-interactive`:
    Do not block the installation




## `agama questions answers`

Load predefined answers.

It allows predefining answers for specific questions in order to skip them in interactive mode or change the answer in automatic mode.

Please check Agama documentation for more details and examples: https://github.com/openSUSE/agama/blob/master/doc/questions.md

**Usage:** `agama questions answers <PATH>`

###### **Arguments:**

* `<PATH>` — Path to a file containing the answers in JSON format



## `agama questions list`

Prints the list of questions that are waiting for an answer in JSON format

**Usage:** `agama questions list`



## `agama questions ask`

Reads a question definition in JSON from stdin and prints the response when it is answered

**Usage:** `agama questions ask`



## `agama logs`

Collect the installer logs.

The installer logs are stored in a compressed archive for further inspection. The file includes system and Agama-specific logs and configuration files. They are crucial to troubleshoot and debug problems.

**Usage:** `agama logs <COMMAND>`

###### **Subcommands:**

* `store` — Collect and store the logs in a tar archive
* `list` — List the logs to collect



## `agama logs store`

Collect and store the logs in a tar archive

**Usage:** `agama logs store [OPTIONS]`

###### **Options:**

* `-d`, `--destination <DESTINATION>` — Path to destination directory and, optionally, the archive file name. The extension will be added automatically



## `agama logs list`

List the logs to collect

**Usage:** `agama logs list`



## `agama auth`

Authenticate with Agama's server.

Unless you are executing this program as root, you need to authenticate with Agama's server for most operations. You can log in by specifying the root password through the "auth login" command. Upon successful authentication, the server returns a JSON Web Token (JWT) which is stored to authenticate the following requests.

If you run this program as root, you can skip the authentication step because it automatically uses the master token at /run/agama/token. Only the root user must have access to such a file.

You can logout at any time by using the "auth logout" command, although this command does not affect the root user.

**Usage:** `agama auth <COMMAND>`

###### **Subcommands:**

* `login` — Authenticate with Agama's server and store the token
* `logout` — Deauthenticate by removing the token
* `show` — Print the used token to the standard output



## `agama auth login`

Authenticate with Agama's server and store the token.

This command tries to get the password from the standard input. If it is not there, it asks the user interactively. Upon successful login, it stores the token in .agama/agama-jwt. The token will be automatically sent to authenticate the following requests.

**Usage:** `agama auth login`



## `agama auth logout`

Deauthenticate by removing the token

**Usage:** `agama auth logout`



## `agama auth show`

Print the used token to the standard output

**Usage:** `agama auth show`



## `agama download`

Download file from a given (AutoYaST) URL

The purpose of this command is to download files using AutoYaST supported schemas (e.g. device://). It can be used to download additional scripts, configuration files and so on. You can use it for downloading Agama autoinstallation profiles. If you want to convert an AutoYaST profile, use "agama config generate".

**Usage:** `agama download <URL> <DESTINATION>`

###### **Arguments:**

* `<URL>` — URL reference pointing to file for download. If a relative URL is provided, it will be resolved against the current working directory
* `<DESTINATION>` — File name



## `agama finish`

Finish the installation

**Usage:** `agama finish [METHOD]`

###### **Arguments:**

* `<METHOD>` — What to do after finishing the installation. Possible values:

   stop - do not reboot and the Agama backend continues running.

   reboot - reboot into the installed system.

   halt - halt the installed machine.

   poweroff - power off the installed machine.

  Default value: `reboot`



## `agama monitor`

Monitors the Agama service

**Usage:** `agama monitor`



## `agama events`

Display Agama events

**Usage:** `agama events [OPTIONS]`

###### **Options:**

* `-p`, `--pretty` — Display the events in a more human-readable way



---
NOTE: This documentation is generated. Run `cargo xtask markdown` to update it.
