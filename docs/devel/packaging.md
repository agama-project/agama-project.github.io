# Packaging

This document summarizes the process we follow to build the Agama packages.

The Agama packages are available in the
[systemsmanagement:Agama:Devel](https://build.opensuse.org/project/show/systemsmanagement:Agama:Devel)
OBS project. These packages are automatically updated whenever the master branch is changed or when
a new version is released.

You can find more details the automatic OBS synchronization in the
[obs_integration.md](./obs_integration) section.

The process to build each package is slightly different depending on the technology we are using.
While the Ruby-based one (`rubygem-agama-yast`) is built as any other YaST package, the Agama server
(`agama`), the CLI (`agama-cli`), and the web UI (`agama-web-ui`) rely on [OBS source
services](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.source_service.html).

## Versioning policy

We have decided to follow a single number schema: 1, 2, 3, etc. However, if we need to release a
hot-fix, we might use a dotted version (e.g., 2.1). Moreover, all the components share the same
version number. Releasing a new version implies that all of them get the new number, no matter if
they contain changes or not.

## Bumping the version

In order to release a new version, we need to:

1. `(cd service; bundle install)` # Updates Gemfile.lock which is part of the repository
2. Add entries in the changes files. `osc vc service/package` `osc vc rust/package`
   `osc vc web/package`
3. Open a pull request to get these changes into the repository.
4. Once the pull request is merged, tag the repository with the proper version number. The processes
   to build the packages use this information to infer the version. You can set the tag with the
   `rake tag` command.

   ```shell
   # automatic version, use the current <major version> + 1
   rake tag
   # manual version, useful for releasing a hot fix with a minor version
   rake tag[42.1]
   ```

   You need to push the tag to the server manually, see the `rake tag` output.

After creating the tag on the server the GitHub Actions will publish the packages in the
[systemsmanagement:Agama:Devel](https://build.opensuse.org/project/show/systemsmanagement:Agama:Devel)
project and create submit requests to openSUSE Factory.

## Building the packages

The packages are updated automatically using the GitHub actions. Here are details for manual update.

### Service

You can check the current package in
[systemsmanagement:Agama:Devel/rubygem-agama-yast](https://build.opensuse.org/package/show/systemsmanagement:Agama:Devel/rubygem-agama-yast).

Use `rake` to update the package in OBS as you would do with any other YaST package:

```shell
cd service
rake osc:commit
```

If you just want to build the package locally, run:

```shell
rake osc:build
```

### Agama server, command-line and web-based user interface

You can find the current packages in OBS:

- [systemsmanagement:Agama:Devel/agama](https://build.opensuse.org/package/show/systemsmanagement:Agama:Devel/agama)
  for the server and the command-line.
- [systemsmanagement:Agama:Devel/agama-web-ui](https://build.opensuse.org/package/show/systemsmanagement:Agama:Devel/agama-web-ui)
  for the web-based user interface.

As mentioned before, those packages are built using a service-based approach. You need to make sure
you installed the required OBS services: `obs-service-obs_scm`, `osb-service-cargo`, and
`obs-service-node_modules`.

```shell
zypper --non-interactive install --no-recommends \
  obs-service-download_files obs-service-format_spec_file \
  obs-service-obs_scm obs-service-cargo obs-service-node_modules
```

After checking out or branching the package, you need to run the following commands.

```shell
osc service manualrun
osc commit -m "Update sources" # or osc build
```

If you want to use a different Git branch, set another version, etc. just adapt the `_service`
accordingly before running the `osc service manualrun` command.

The version number is inferred from the repository tags: it uses the latest tag and the offset of
the latest commit respect such a tag. (e.g. `2.1+42`).

You can read more about the overall approach of this package in the following article:
[Git work flows in the upcoming 2.7 release](https://openbuildservice.org/2016/04/08/new_git_in_27/).

### The live ISO

The ISO for openSUSE products is built in the
[systemsmanagement:Agama:Devel/agama-installer-openSUSE](https://build.opensuse.org/package/show/systemsmanagement:Agama:Devel/agama-installer-openSUSE)
OBS project. See [Live ISO](./live_iso) for more details.
