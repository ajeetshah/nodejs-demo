const http = require("http");
const myUtils = require("./myUtils");

const port = 8081;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(port);

myUtils.printServerInfo(port);
