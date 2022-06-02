import { appendFile, existsSync } from 'fs'

const filesPath = new URL('./files/', import.meta.url).pathname.slice(3)

export const create = async () => {
  try {
    if (existsSync(`${filesPath}/fresh.txt`)) {
      throw new Error('FS operation failed')
    } else {
      appendFile(`${filesPath}/fresh.txt`, 'I am fresh and young', (err) => {
        if (err) throw err
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}

create()
