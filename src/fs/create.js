import { appendFile, existsSync } from 'fs'
import path from 'path'

const defPath = path.resolve('fs')

export const create = async () => {
  try {
    if (existsSync(`${defPath}/files/fresh.txt`)) {
      throw new Error('FS operation failed')
    } else {
      appendFile(
        `${defPath}/files/fresh.txt`,
        'I am fresh and young',
        (err) => {
          if (err) throw err
        }
      )
    }
  } catch (err) {
    console.error(err.message)
  }
}

create()
