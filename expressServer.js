const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const low = require('lowdb')
var pets = require('./pets.json')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


app.use(bodyParser.json())
app.use(methodOverride())
app.get('/pets', (req, res) => {
  res.send(pets)
})

app.get('/pets/:id', (req, res) => {
  const index = req.params.id
  if (index < 0 || index > pets.length-1) {
    res.set('Content-Type', 'text/plain')
    res.status(404).send("Not Found")
  } else {
    res.json(pets[index])
  }
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`)
})

module.exports = app
