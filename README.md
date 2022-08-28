Webscaf CLI
=================
Generate projects scaffold for any web project :rocket:


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g webscaf
$ webscaf COMMAND
running command...
$ webscaf (--version)
webscaf/1.0.1 linux-x64 node-v16.15.0
$ webscaf --help [COMMAND]
USAGE
  $ webscaf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`webscaf autocomplete [SHELL]`](#webscaf-autocomplete-shell)
* [`webscaf help [COMMAND]`](#webscaf-help-command)
* [`webscaf plugins`](#webscaf-plugins)
* [`webscaf plugins:install PLUGIN...`](#webscaf-pluginsinstall-plugin)
* [`webscaf plugins:inspect PLUGIN...`](#webscaf-pluginsinspect-plugin)
* [`webscaf plugins:install PLUGIN...`](#webscaf-pluginsinstall-plugin-1)
* [`webscaf plugins:link PLUGIN`](#webscaf-pluginslink-plugin)
* [`webscaf plugins:uninstall PLUGIN...`](#webscaf-pluginsuninstall-plugin)
* [`webscaf plugins:uninstall PLUGIN...`](#webscaf-pluginsuninstall-plugin-1)
* [`webscaf plugins:uninstall PLUGIN...`](#webscaf-pluginsuninstall-plugin-2)
* [`webscaf plugins update`](#webscaf-plugins-update)
* [`webscaf update [CHANNEL]`](#webscaf-update-channel)
* [`webscaf wordpress theme`](#webscaf-wordpress-theme)

## `webscaf autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ webscaf autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ webscaf autocomplete

  $ webscaf autocomplete bash

  $ webscaf autocomplete zsh

  $ webscaf autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.3.0/src/commands/autocomplete/index.ts)_

## `webscaf help [COMMAND]`

Display help for webscaf.

```
USAGE
  $ webscaf help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for webscaf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `webscaf plugins`

List installed plugins.

```
USAGE
  $ webscaf plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ webscaf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `webscaf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ webscaf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ webscaf plugins add

EXAMPLES
  $ webscaf plugins:install myplugin 

  $ webscaf plugins:install https://github.com/someuser/someplugin

  $ webscaf plugins:install someuser/someplugin
```

## `webscaf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ webscaf plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ webscaf plugins:inspect myplugin
```

## `webscaf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ webscaf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ webscaf plugins add

EXAMPLES
  $ webscaf plugins:install myplugin 

  $ webscaf plugins:install https://github.com/someuser/someplugin

  $ webscaf plugins:install someuser/someplugin
```

## `webscaf plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ webscaf plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ webscaf plugins:link myplugin
```

## `webscaf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ webscaf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ webscaf plugins unlink
  $ webscaf plugins remove
```

## `webscaf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ webscaf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ webscaf plugins unlink
  $ webscaf plugins remove
```

## `webscaf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ webscaf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ webscaf plugins unlink
  $ webscaf plugins remove
```

## `webscaf plugins update`

Update installed plugins.

```
USAGE
  $ webscaf plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `webscaf update [CHANNEL]`

update the webscaf CLI

```
USAGE
  $ webscaf update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the webscaf CLI

EXAMPLES
  Update to the stable channel:

    $ webscaf update stable

  Update to a specific version:

    $ webscaf update --version 1.0.0

  Interactively select version:

    $ webscaf update --interactive

  See available versions:

    $ webscaf update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.0.0/src/commands/update.ts)_

## `webscaf wordpress theme`

```
USAGE
  $ webscaf wordpress theme
```
<!-- commandsstop -->
