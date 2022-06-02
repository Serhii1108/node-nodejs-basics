import { copyFile, existsSync, mkdirSync, readdir } from 'fs'

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

      readdir(filesPath, (err, files) => {
        if (err) {
          throw err
        }
        files.forEach((file) => {
          copyFile(
            `${filesPath}/${file}`,
            `${filesCopyPath}/${file}`,
            (err) => {
              if (err) throw err
            }
          )
        })
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

copy()
