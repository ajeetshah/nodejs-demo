const http = require('http')
const lodash = require('lodash')
const myUtils = require('./myUtils')

const hostname = 'localhost'
const port = 8082

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(lodash.toLower('hElLo lODaSh!'))
  })
  .listen(port, hostname, () => {
    myUtils.printServerInfo(port)
  })
