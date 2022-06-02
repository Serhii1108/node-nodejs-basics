import { readFile } from 'fs/promises'
import { existsSync } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

export const read = async () => {
  try {
    if (!existsSync(`${filesPath}/fileToRead.txt`)) {
      throw new Error('FS operation failed')
    } else {
      await readFile(`${filesPath}/fileToRead.txt`, { encoding: 'utf8' }).then(
        (data) => {
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
