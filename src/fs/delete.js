import { rm } from 'fs/promises'
import { existsSync } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

export const remove = async () => {
  try {
    if (!existsSync(`${filesPath}/fileToRemove.txt`)) {
      throw new Error('FS operation failed')
    } else {
      await rm(`${filesPath}/fileToRemove.txt`).then(() => {
        console.log('File deleted successfully!\n')
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

remove()
