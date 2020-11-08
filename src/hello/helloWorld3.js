// IIFE
// Private members

(() => {
  const name = "John";
  const foo = () => console.log(`hello ${name}`);
  foo();
})();

(() => {
  const name = "John";
  const foo = () => console.log(`hello ${name}`);
  foo();
})();

// console.log(name);
