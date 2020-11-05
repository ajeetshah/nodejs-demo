// synchronous: call stack

const baz = () => console.log("baz");

const bar = () => {
  console.log("bar");
  baz();
};

const foo = () => {
  console.log("foo");
  bar();
};

foo();
