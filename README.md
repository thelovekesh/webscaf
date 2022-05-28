oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

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
webscaf/0.0.0 linux-x64 node-v14.19.0
$ webscaf --help [COMMAND]
USAGE
  $ webscaf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`webscaf hello PERSON`](#webscaf-hello-person)
* [`webscaf hello world`](#webscaf-hello-world)
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

## `webscaf hello PERSON`

Say hello

```
USAGE
  $ webscaf hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/thelovekesh/webscaf/blob/v0.0.0/dist/commands/hello/index.ts)_

## `webscaf hello world`

Say hello world

```
USAGE
  $ webscaf hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

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
<!-- commandsstop -->
