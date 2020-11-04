const http = require("http");
const lodash = require("lodash");
const myUtils = require("./myUtils");

const port = 8082;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(lodash.toLower("hElLo lODaSh!"));
  })
  .listen(port);

myUtils.printServerInfo(port);
