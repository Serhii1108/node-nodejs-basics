import { existsSync, readFile } from 'fs'
import path from 'path'

const defPath = path.resolve('fs')

export const read = async () => {
  try {
    if (!existsSync(`${defPath}/files/fileToRead.txt`)) {
      throw new Error('FS operation failed')
    } else {
      readFile(
        `${defPath}/files/fileToRead.txt`,
        { encoding: 'utf8' },
        (err, data) => {
          if (err) throw err

          console.log('--------------')
          console.table(data)
          console.log('--------------')
        }
      )
    }
  } catch (err) {
    console.error(err.message)
  }
}

read()
