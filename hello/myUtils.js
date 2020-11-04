exports.now = () => Date();

exports.hello = "hello world";

exports.printServerInfo = (port) =>
  console.log(`Sever started at http://localhost:${port}`);
