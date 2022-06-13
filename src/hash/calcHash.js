import { readFile } from 'fs/promises'
import { createHash } from 'crypto'

export const calculateHash = async () => {
  await readFile(
    new URL('./files/fileToCalculateHashFor.txt', import.meta.url)
  ).then((fileBuffer) => {
    const hash = createHash('sha256').update(fileBuffer)
    const hex = hash.digest('hex')
    console.log(`Hash: ${hex}\n`)
  })
}

calculateHash()
