import { parentPort, workerData, isMainThread } from 'worker_threads'

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

export const sendResult = () => {
  if (!isMainThread && workerData.coresNum) {
    parentPort.postMessage(nthFibonacci(workerData.coresNum))
  } else {
    console.error(
      "Error: It's main thread. Task completed but function doesn't work in main thread. Please run main.js"
    )
  }
}

sendResult()
