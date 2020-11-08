// async
// async : callback (cpu intensive blocking) queue : event loop

const myUtils = require('../hello/myUtils')

const bar = () => setTimeout(() => console.log('bar', myUtils.now()), 1000)

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo started', myUtils.now())
  bar()
  baz()
  setTimeout(() => {
    for (let i = 0; i < 10000000000; i++);
    console.log('Finished cpu intensive work')
  }, 0)
  console.log('foo finished')
}

foo()
