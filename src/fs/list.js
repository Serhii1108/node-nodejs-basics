import { existsSync, readdir } from 'fs'
import path from 'path'

const defPath = path.resolve('fs')

export const list = async () => {
  try {
    if (!existsSync(`${defPath}/files`)) {
      throw new Error('FS operation failed')
    } else {
      readdir(`${defPath}/files/`, (err, files) => {
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
