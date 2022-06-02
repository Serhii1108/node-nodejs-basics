// For tests
process.env.RSS_testName1 = 'testVal1'
process.env.RSS_testName2 = 'testVal2'
process.env.RSS_testName3 = 'testVal3'

export const parseEnv = () => {
  const env = process.env
  const res = Object.keys(env)
    .filter((el) => el.startsWith('RSS_'))
    .map((el) => `${el}=${env[el]}`)
    .join('; ')

  console.log('-'.repeat(res.length))
  console.log(res)
  console.log('-'.repeat(res.length))
}

parseEnv()
