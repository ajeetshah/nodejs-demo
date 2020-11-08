// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKCnZhciBjb3VudCA9IDE7Cgp2YXIgZm9vID0gZnVuY3Rpb24gZm9vKCkgewogIGNvbnNvbGUubG9nKCJmb28iLCBjb3VudCsrKTsKICBmb28oKTsKfTsKCmZvbygpOwp9KTsKCmNvbnNvbGUubG9nKCJIaSEiKTsKCnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCJDbGljayB0aGUgYnV0dG9uISIpOwp9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJXZWxjb21lIHRvIGxvdXBlLiIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// max call stack exceeded: call stack

let count = 1

const foo = () => {
  console.log('foo', count++)
  foo()
}

foo()
