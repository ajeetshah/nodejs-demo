const http = require("http");
const myUtils = require("./myUtils");

const hostname = "localhost";
const port = 8083;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(myUtils.hello);
    } else if (req.url === "/v1/api/now") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(myUtils.now());
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found!");
    }
  })
  .listen(port, hostname, () => {
    myUtils.printServerInfo(port);
  });
