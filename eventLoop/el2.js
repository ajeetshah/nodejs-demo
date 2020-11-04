const bar = () => setTimeout(() => console.log("bar"), 1000);

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo started");
  bar();
  baz();
  console.log("foo finished");
};

foo();
