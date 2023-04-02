import fileContentToList from './readLines.mjs'
import calculateSuitableScore from './calculationScore.mjs'

const assignShipmentsToDrivers = async ({ streetsFile, driversFile } = {}) => {
  if (!streetsFile) {
    throw Error ('Missing street file')
  }

  if (!driversFile) {
    throw Error ('Missing drivers file')
  }

  const streets = await fileContentToList(streetsFile)
  const drivers  = await fileContentToList(driversFile)

  let totalScore = 0
  const assignments = {}

  streets.forEach( (street) => {
    let bestDriver = null
    let bestScore = -Infinity
    drivers.forEach(driver => {
      if (!assignments[driver]){
        const score = calculateSuitableScore(driver, street)
        if (score > bestScore) {
          bestScore = score
          bestDriver = driver
        }
      }
    })

    if (bestDriver) {
      assignments[bestDriver] = { street, score: bestScore}
      totalScore += bestScore
    }
  })

  return { totalScore, assignments }
}

export default assignShipmentsToDrivers