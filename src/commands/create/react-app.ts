import {Command} from '@oclif/core'
import {exec} from 'shelljs'

class CreateReactApp extends Command {
  static description = 'Create a new React app'

  async run(): Promise<void> {
    exec('npx create-react-app my-app')
  }
}

export default CreateReactApp
