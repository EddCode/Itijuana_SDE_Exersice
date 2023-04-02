const parseArgs = () => {
  const args = process.argv.slice(2)
  const options = {
    streetsFile: null,
    driversFile: null,
  }

  args.forEach((arg) => {
    if (arg.startsWith('--streetsFile')) {
      options.streetsFile = arg.split('=').pop()
    } else if (arg.startsWith('--driversFile')) {
      options.driversFile = arg.split('=').pop()
    }
  })

  return options
}

export default parseArgs
