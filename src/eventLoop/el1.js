const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo started");
  bar();
  baz();
  console.log("foo finished");
};

foo();
