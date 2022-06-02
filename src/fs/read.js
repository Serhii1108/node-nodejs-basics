import { existsSync, readFile } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

export const read = async () => {
  try {
    if (!existsSync(`${filesPath}/fileToRead.txt`)) {
      throw new Error('FS operation failed')
    } else {
      readFile(
        `${filesPath}/fileToRead.txt`,
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
