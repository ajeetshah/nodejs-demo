// cpu intensive work : blocking : call stack
// async : callback queue : event loop

const myUtils = require('../hello/myUtils')

const bar = () => setTimeout(() => console.log('bar', myUtils.now()), 1000)

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo', myUtils.now())
  bar()
  baz()
  for (let i = 0; i < 10000000000; i++);
  console.log('Finished cpu intensive work')
  console.log('foo finished')
}

foo()
