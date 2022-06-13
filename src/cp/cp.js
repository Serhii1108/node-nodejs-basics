import { fork } from 'child_process'

const filePath = new URL('./files/script.js', import.meta.url)

export const spawnChildProcess = async (args) => {
  try {
    const child = fork(filePath, [...args])

    child.on('error', (err) => {
      throw err
    })
  } catch (err) {
    console.error(err)
  }
}

spawnChildProcess(['testArg1', 'testArg2', 'testArg3', 'testArg4'])
