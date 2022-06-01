import { rm, existsSync } from 'fs'
import path from 'path'

const defPath = path.resolve('fs')

export const remove = async () => {
  try {
    if (!existsSync(`${defPath}/files/fileToRemove.txt`)) {
      throw new Error('FS operation failed')
    } else {
      rm(`${defPath}/files/fileToRemove.txt`, (err) => {
        if (err) throw err
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

remove()
