import { copyFile, existsSync, mkdirSync, readdir } from 'fs'
import path from 'path'

const defPath = path.resolve('fs')

export const copy = async () => {
  try {
    if (
      !existsSync(`${defPath}/files`) ||
      existsSync(`${defPath}/files_copy`)
    ) {
      throw new Error('FS operation failed')
    } else {
      mkdirSync(`${defPath}/files_copy/`)

      readdir(`${defPath}/files/`, (err, files) => {
        if (err) {
          throw err
        }
        files.forEach((file) => {
          copyFile(
            `${defPath}/files/${file}`,
            `${defPath}/files_copy/${file}`,
            (err) => {
              if (err) throw err
            }
          )
        })
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

copy()
