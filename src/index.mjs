import assignShipmentsToDrivers from "./assignShipmentsToDrivers.mjs"
import readArgs  from './readArgs.mjs'

const run = async () => {
  const { streetsFile, driversFile } = readArgs()
  const assignments = await assignShipmentsToDrivers({ streetsFile, driversFile })
  console.log(assignments)
}

run()
