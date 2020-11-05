const foo = () => {
  console.log("hi there");
  console.log(require.main === module);
  console.log(require.main.filename, __filename);
};

module.exports = {
  foo,
};

// foo();
