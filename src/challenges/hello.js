const foo = (t1, t2) => {
  setTimeout(() => console.log('hello'), t1)
  setTimeout(() => console.log('hello'), t2)
}

setTimeout(foo, 0, 4000, 8000)
