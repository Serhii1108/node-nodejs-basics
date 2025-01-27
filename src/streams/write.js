import { createWriteStream } from 'fs'

const filePath = new URL('files/fileToWrite.txt', import.meta.url)

export const write = async () => {
  const stream = new createWriteStream(filePath, 'utf-8')

  process.stdin
    .on('data', (data) => {
      stream.write(data)
    })
    .on('error', (err) => {
      console.error(err)
    })

  console.log(
    'Write something and you will see it in the file "fileToWrite.txt"\n'
  )
}

write()
