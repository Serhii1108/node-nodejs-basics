import { rename as changeName } from 'fs/promises'
import { existsSync } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

export const rename = async () => {
  try {
    if (
      !existsSync(`${filesPath}/wrongFilename.txt`) ||
      existsSync(`${filesPath}/properFilename.md`)
    ) {
      throw new Error('FS operation failed')
    } else {
      await changeName(
        `${filesPath}/wrongFilename.txt`,
        `${filesPath}/properFilename.md`
      ).then(() => {
        console.log('File name changed successfully!')
        console.log('New name: properFilename.md\n')
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

rename()
