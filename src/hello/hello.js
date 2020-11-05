const http = require("http");
const myUtils = require("./myUtils");

const hostname = "localhost";
const port = 8081;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(port, hostname, () => {
    myUtils.printServerInfo(port);
  });
