import { createReadStream } from 'fs'

const filePath = new URL('files/fileToRead.txt', import.meta.url)

export const read = async () => {
  const stream = new createReadStream(filePath, 'utf8')

  stream.on('data', (data) => {
    process.stdout.write(data)
  })

  stream.on('error', (error) => {
    console.error(`error: ${error.message}`)
  })
}

read()
