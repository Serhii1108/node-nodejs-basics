export const parseArgs = () => {
  const args = process.argv.slice(2)
  for (let i = 0; i < args.length; i += 2) {
    console.log('-------------------------')
    console.log(`${args[i].slice(2)} is ${args[i + 1]}`)
  }
  console.log('-------------------------')
}

parseArgs()
