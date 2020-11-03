var http = require("http");
var lodash = require("lodash");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(lodash.toUpper("Hello Lodash!"));
  })
  .listen(8080);
