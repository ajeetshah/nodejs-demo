let counter = 0;

const id = setInterval(() => {
  console.log(`Hello World ${++counter}`);
  if (counter === 5) {
    console.log("Done");
    clearInterval(id);
  }
}, 1000);
