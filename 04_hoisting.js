console.log(sum(3, 7)); // 10

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5

console.log(i); // undefined
var i = 42;
console.log(i); // 42

var b;
console.log(b); // undefined
b = 30
console.log(b); // 30

// Not Working with let, const

// Function Expression && Function Declaration

console.log(square(3)); // 9
console.log(square2(4)); // Error, Not working (function expression)

// Function Declaration
function square(num) {
  return num ** 2;
}

// Function Expression
const square2 = function (num) {
  return num ** 2;
}
