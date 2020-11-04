const http = require("http");
const myUtils = require("./myUtils");

const port = 8083;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`${myUtils.hello}, ${myUtils.now()}`);
  })
  .listen(port);

myUtils.printServerInfo(port);
