import WebscafBase from '../../webscaf-base'
import {
  CliUx,
} from '@oclif/core'
import * as inquirer from 'inquirer'
import {
  resolvePath,
  shellExecAsync,
} from '../../helpers'
import * as childProcess from 'node:child_process'
import * as data from './data.json'

export default class Theme extends WebscafBase {
  async run(): Promise<void> {
    const {themes} = data

    const {typeOfTheme} = await inquirer.prompt([{
      type: 'list',
      name: 'typeOfTheme',
      message: 'What type of theme do you want to create?',
      choices: Object.keys(themes),
    }])

    const {nameOfTheme} = await inquirer.prompt([{
      type: 'input',
      name: 'nameOfTheme',
      message: 'What is the name of the theme?',
      default: 'WordPress Theme',
    }])

    const {repo} = themes[typeOfTheme as keyof typeof themes][0]
    const themeName = nameOfTheme.replace(/\s+/g, '-').toLowerCase()
    try {
      CliUx.ux.action.start(`Cloning ${repo}`)
      await shellExecAsync(`git clone ${repo} ${themeName}`)
    } catch (error:any) {
      this.error(error)
    } finally {
      CliUx.ux.action.stop()
    }

    try {
      CliUx.ux.action.start('Initializing the theme')
      const scriptPath = resolvePath(`${themeName}/bin/init.js`)
      this.runScript(scriptPath, (error:any) => {
        if (error) {
          this.error(error)
        }
      })
    } catch (error:any) {
      this.error(error)
    } finally {
      CliUx.ux.action.stop()
    }
  }

  runScript(scriptPath:string, callback:CallableFunction):void {
    let invoked = false

    const process = childProcess.fork(scriptPath)

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
      if (invoked) return
      invoked = true
      callback(err)
    })

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
      if (invoked) return
      invoked = true
      const err = code === 0 ? null : new Error('exit code ' + code)
      callback(err)
    })
  }
}
