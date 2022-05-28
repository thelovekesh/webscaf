import * as path from 'node:path'
import * as fs from 'node:fs'
import * as os from 'node:os'
import {exec, execSync} from 'node:child_process'

const getTempDir = (dirName?: string): string => {
  return path.resolve(os.tmpdir(), 'webscaf', dirName || '')
}

const removeTempDir = (dirName?: string): void => {
  if (!fs.existsSync(getTempDir(dirName))) return
  fs.rmdirSync(getTempDir(dirName), {recursive: true})
}

const resolvePath = (...args: string[]): string => {
  return path.resolve(...args)
}

const getAllFiles = (dir: string, ignoreFilesOrDirs?: string[]): string[] => {
  try {
    let files:string[] = fs.readdirSync(dir)
    files = files.filter(fileOrDir => ignoreFilesOrDirs ? !ignoreFilesOrDirs.includes(fileOrDir) : true)

    const allFiles: string[] = []
    for (const file of files) {
      const filePath:string = path.resolve(dir, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        allFiles.push(...getAllFiles(filePath))
      } else {
        allFiles.push(filePath)
      }
    }

    return allFiles
  } catch {
    return []
  }
}

const shellExecAsync = (command: string, options?: {cwd?: string}): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout) => {
      if (error) {
        reject(error)
        return
      }

      resolve(stdout as string)
    })
  })
}

const shellExecSync = (command: string, options?: {cwd?: string}): string => {
  return execSync(command, options).toString()
}

export {
  getTempDir,
  removeTempDir,
  resolvePath,
  getAllFiles,
  shellExecAsync,
  shellExecSync,
}
