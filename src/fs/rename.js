import { existsSync, rename as changeName } from 'fs'
import path from 'path'

const defPath = path.resolve('fs')

export const rename = async () => {
  try {
    if (
      !existsSync(`${defPath}/files/wrongFilename.txt`) ||
      existsSync(`${defPath}/files/properFilename.md`)
    ) {
      throw new Error('FS operation failed')
    } else {
      changeName(
        `${defPath}/files/wrongFilename.txt`,
        `${defPath}/files/properFilename.md`,
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
