import { pipeline, Transform } from 'stream'

console.log('Write something...')
console.log('------------------------')

export const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const res = `${chunk
        .toString()
        .split('')
        .reverse()
        .join('')
        .trim()}\n------------------------\n`
      callback(null, res)
    },
  })

  pipeline(process.stdin, reverse, process.stdout, (err) => {
    console.error(err)
  })
}

transform()
