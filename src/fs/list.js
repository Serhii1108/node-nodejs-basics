import { readdir } from 'fs/promises'
import { existsSync } from 'fs'

const filesPath = new URL('./files/', import.meta.url)

export const list = async () => {
  try {
    if (!existsSync(filesPath)) {
      throw new Error('FS operation failed')
    } else {
      await readdir(filesPath).then((files) => {
        files.forEach((file) => {
          console.log('--------------------')
          console.log(file)
        })
        console.log('--------------------')
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

list()
