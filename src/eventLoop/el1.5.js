// asynchronous : npn blocking: callback queue : event loop

console.log("Hi");

setTimeout(() => {
  console.log("there");
}, 0);

console.log("hello");
