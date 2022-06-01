export const parseEnv = () => {
  const res = Object.entries(process.env).map((el) => `RSS_${el[0]}=${el[1]}`)
  res.forEach((el) => {
    console.log('-')
    console.log(el)
  })
  console.log('-')
}

parseEnv()
