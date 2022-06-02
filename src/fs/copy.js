import { copyFile, readdir } from 'fs/promises'
import { existsSync, mkdirSync } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

const filesCopyPath = new URL('./files_copy/', import.meta.url).pathname.slice(
  3
)

export const copy = async () => {
  try {
    if (!existsSync(filesPath) || existsSync(filesCopyPath)) {
      throw new Error('FS operation failed')
    } else {
      mkdirSync(filesCopyPath)

      await readdir(filesPath).then((files) => {
        files.forEach((file) => {
          copyFile(`${filesPath}/${file}`, `${filesCopyPath}/${file}`)
        })
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

copy()
