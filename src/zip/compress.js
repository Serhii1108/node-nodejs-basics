import { createGzip } from 'zlib'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createReadStream, createWriteStream } from 'fs'

const fileToCompressPath = new URL(
  './files/fileToCompress.txt',
  import.meta.url
)
const archiveFilePath = new URL('./files/archive.gz', import.meta.url)

export const compress = async () => {
  const pipe = promisify(pipeline)

  const gzip = createGzip()
  const source = createReadStream(fileToCompressPath)
  const destination = createWriteStream(archiveFilePath)

  await pipe(source, gzip, destination).catch((err) => {
    console.error(err)
  })
}

compress()
