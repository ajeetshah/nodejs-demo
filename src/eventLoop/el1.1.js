// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKCnZhciBiYXogPSBmdW5jdGlvbiBiYXooKSB7CiAgcmV0dXJuIGNvbnNvbGUubG9nKCJiYXoiKTsKfTsKCnZhciBiYXIgPSBmdW5jdGlvbiBiYXIoKSB7CiAgY29uc29sZS5sb2coImJhciIpOwogIGJheigpOwp9OwoKdmFyIGZvbyA9IGZ1bmN0aW9uIGZvbygpIHsKICBjb25zb2xlLmxvZygiZm9vIik7CiAgYmFyKCk7Cn07Cgpmb28oKTsKfSk7Cgpjb25zb2xlLmxvZygiSGkhIik7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygiQ2xpY2sgdGhlIGJ1dHRvbiEiKTsKfSwgNTAwMCk7Cgpjb25zb2xlLmxvZygiV2VsY29tZSB0byBsb3VwZS4iKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
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


