import { Worker } from 'worker_threads'
import { cpus } from 'os'

const filePath = new URL('./worker.js', import.meta.url)

const createWorker = (workerNum) => {
  return new Promise((res, rej) => {
    const worker = new Worker(filePath, {
      workerData: { coresNum: workerNum },
    })

    worker.on('message', (val) => {
      res(val)
    })
    worker.on('error', rej)
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`))
      }
    })
  })
}

const DEF_NUM = 10
const CORES_NUM = cpus().length
const RESOLVED = 'resolved'
const ERROR = 'error'

export const performCalculations = async () => {
  try {
    console.clear()
    console.log('Starting...')

    let res = []

    for (let i = 0; i < CORES_NUM; i++) {
      let data = null
      try {
        data = await createWorker(DEF_NUM + i)
      } catch (err) {
        console.error(err)
      }
      const status = data ? RESOLVED : ERROR
      res.push({ status, data })
    }

    console.log('Finished!')
    console.log('Result:')
    console.table(res)
  } catch (err) {
    console.error(err)
  }
}

performCalculations()
