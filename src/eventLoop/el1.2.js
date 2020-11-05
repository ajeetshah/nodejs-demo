// max call stack exceeded: call stack

let count = 1

const foo = () => {
  console.log("foo", count++);
  foo();
};

foo();
