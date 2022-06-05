import { appendFile } from 'fs/promises'
import { existsSync } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

export const create = async () => {
  try {
    if (existsSync(`${filesPath}/fresh.txt`)) {
      throw new Error('FS operation failed')
    } else {
      await appendFile(`${filesPath}/fresh.txt`, 'I am fresh and young').then(
        () => {
          console.log('File created successfully!\n')
        }
      )
    }
  } catch (err) {
    console.error(err.message)
  }
}

create()
