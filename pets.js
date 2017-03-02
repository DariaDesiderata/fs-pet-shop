const fs = require('fs')

const command = process.argv[2]

if (command === "read") {
  const index = process.argv[3]
  fs.readFile('./pets.json', 'utf8', (err, data) => {
    if (err) throw err
    let petArr = JSON.parse(data)
    index ? console.log(petArr[index]) : console.log(petArr)

    if (index > petArr.length || index < 0) {
      console.log("Usage: node pets.js read INDEX")
      process.exitCode = 1
    }
  })
} else if (command === "create") {
    const age = Number.parseInt(process.argv[3])
    const kind = process.argv[4]
    const name = process.argv[5]
    fs.readFile('./pets.json', 'utf8', (err, data) => {
      if (err) throw err
      let petArr = JSON.parse(data)
      if (!age || !kind || !name) {
        console.error("Usage: node pets.js create AGE KIND NAME")
        process.exitCode = 1
      }
      const newPet = {
        age: age,
        kind: kind,
        name: name
      }
      petArr.push(newPet)
      fs.writeFile('./pets.json', JSON.stringify(petArr), (err) => {
        if (err) throw err
        console.log(newPet)
      })
    })
} else {
  console.error("Usage: node pets.js [read | create | update | destroy]")
  process.exitCode = 1
}
