import fs from 'fs'
import readline from 'readline'

const readLineFiles = file => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream(file),
      console: false
    })
    return readInterface
  } catch (error) {
    throw Error(error.message)
  }
}

const fileContentToList  = (file) => 
  new Promise((resolve, reject) => {
    const linesContent = []
    const streemFile = readLineFiles(file)

    streemFile.on('line', (line) => 
      linesContent.push(line.toLowerCase().trim()) 
    )

    streemFile.on('close', _ => resolve(linesContent))

    streemFile.on('error', error => reject(error))
  })

export default fileContentToList
