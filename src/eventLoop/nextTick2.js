console.log("start");

setTimeout(() => {
  console.log("setTimeout callback 1");
}, 0);

setTimeout(() => {
  console.log("setTimeout callback 2");
}, 0);

setTimeout(() => {
  console.log("setTimeout callback 3");
}, 0);

process.nextTick(() => {
  console.log("nextTick callback 1");
});

process.nextTick(() => {
  console.log("nextTick callback 2");
});

console.log("scheduled");
