import { existsSync, rename as changeName } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

export const rename = async () => {
  try {
    if (
      !existsSync(`${filesPath}/wrongFilename.txt`) ||
      existsSync(`${filesPath}/properFilename.md`)
    ) {
      throw new Error('FS operation failed')
    } else {
      changeName(
        `${filesPath}/wrongFilename.txt`,
        `${filesPath}/properFilename.md`,
        (err) => {
          if (err) throw err
        }
      )
    }
  } catch (err) {
    console.error(err.message)
  }
}

rename()
