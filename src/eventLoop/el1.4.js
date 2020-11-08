// asynchronous : npn blocking: callback queue : event loop

console.log('Hi')

setTimeout(() => {
  console.log('there')
}, 1000)

console.log('hello')
