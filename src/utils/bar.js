function bar() {
  console.log(import.meta);
}

function bar2() {
  console.log("123");
}

const array = [1, 2, 4, 4, 4];

export { bar, bar2, array };
