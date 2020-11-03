var http = require("http");
var myModule = require("./myModule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(myModule.myText() + " " + myModule.myDateTime());
  })
  .listen(8080);
