import { promisify } from 'util'
import { createUnzip } from 'zlib'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

const fileToCompressPath = new URL(
  './files/fileToCompress.txt',
  import.meta.url
)
const archiveFilePath = new URL('./files/archive.gz', import.meta.url)

export const decompress = async () => {
  try {
    const pipe = promisify(pipeline)

    const unzip = createUnzip()
    const source = createReadStream(archiveFilePath)
    const destination = createWriteStream(fileToCompressPath)

    await pipe(source, unzip, destination)
      .catch((err) => {
        throw err
      })
      .then(() => {
        console.log('File was successfully decompressed\n')
      })
  } catch (err) {
    console.error(err.message)
  }
}

decompress()
