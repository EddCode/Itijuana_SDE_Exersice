const countVowels = str => str.match(/[aeiou]/g)?.length || 0

const countConsonants = str => str.match(/[bcdfghjklmnpqrstvwxyz]/g)?.length || 0

const isOdd = (number) => number % 2 == 0

const commonFactorDivisor = (first, second) => {
  if (second === 0) return first

  return commonFactorDivisor(second, first % second)
}

const calculateSuitableScore = (driver, street) => {
    let score = isOdd(street.length) 
      ? countVowels(street) * 1.5
      : countConsonants(street)
  
  
    commonFactorDivisor(street.length, driver.length) > 1 && ( score *= 1.5)
  
    return score
}

export default calculateSuitableScore