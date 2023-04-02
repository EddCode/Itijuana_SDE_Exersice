import calculateScore from "./calculateScore.mjs"

const [streetsFile, driversFile] = process.argv.slice(2)

calculateScore({ streetsFile, driversFile })
