import { existsSync, readdir } from 'fs'

const filesPath = new URL('./files/', import.meta.url)

export const list = async () => {
  try {
    if (!existsSync(filesPath)) {
      throw new Error('FS operation failed')
    } else {
      readdir(filesPath, (err, files) => {
        if (err) throw err

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
