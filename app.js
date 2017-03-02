const express = require('express')
const app = express()
const routes = require('./routes.js')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/', routes)
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
})
