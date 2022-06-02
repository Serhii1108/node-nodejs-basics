import { rm, existsSync } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

export const remove = async () => {
  try {
    if (!existsSync(`${filesPath}/fileToRemove.txt`)) {
      throw new Error('FS operation failed')
    } else {
      rm(`${filesPath}/fileToRemove.txt`, (err) => {
        if (err) throw err
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

remove()
