import fileContentToList from "./readLines.mjs"

const calculateSuitableScore = (driver, street) => {
  let score = 0
  score = isOdd(street.length) 
    ? countVowels(street) * 1.5
    : countConsonants(street)


  commonFactorDivisor(street.length, driver.length) > 1 && ( score *= 1.5)

  return score
}

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

const countVowels = str => str.match(/[aeiou]/g)?.length || 0

const countConsonants = str => str.match(/[bcdfghjklmnpqrstvwxyz]/g)?.length || 0

const isOdd = (number) => number % 2 == 0

const commonFactorDivisor = (first, second) => {
  if (second === 0) return first

  return commonFactorDivisor(second, first % second)
}


export default assignShipmentsToDrivers
