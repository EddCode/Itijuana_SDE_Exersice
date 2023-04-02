import calculateScore from "./calculateScore.mjs"
import readArgs  from './readArgs.mjs'

const run = async () => {
  const { streetsFile, driversFile } = readArgs()
  const assignments = await calculateScore({ streetsFile, driversFile })
  console.log(assignments)
}

run()
