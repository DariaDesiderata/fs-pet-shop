const http = require('http')
const fs = require('fs')
const url = require('url')
PORT = process.env.PORT || 8000
const petRegExp = /^\/pets\/(.*)$/

const server = http.createServer(function (req, res) {
  const urlParts = url.parse(req.url)
  if(petRegExp.test(urlParts.pathname)) {
    const arr = urlParts.pathname.split('/')
    const index = arr[arr.length-1]
    res.writeHead(200, {'Content-Type': 'application/json'})
      fs.readFile('./pets.json', 'utf8', (err, data) => {
        if (err) throw err
        var dataArr = JSON.parse(data)
        res.end(JSON.stringify(dataArr[index]))
      })

  } else if(urlParts.pathname = '/pets') {
    res.writeHead(200, {'Content-Type': 'application/json'})
      fs.readFile('./pets.json', 'utf8', (err, data) => {
        if (err) throw err
        res.end(data)
      })
  }
}).listen(PORT)


module.exports = server
