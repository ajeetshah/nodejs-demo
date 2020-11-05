// synchronous: cpu intensive work : blocking : call stack

const baz = () => {
  console.log("baz");
  for (let i = 0; i < 10000000000; i++);
};

const bar = () => {
  console.log("bar");
  for (let i = 0; i < 10000000000; i++);
};

const foo = () => {
  console.log("foo started");
  for (let i = 0; i < 10000000000; i++);
  bar();
  baz();
  console.log("foo ended");
};

foo();
