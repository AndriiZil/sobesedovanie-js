// Let
let a = 'variable a';
let b = 'variable b';

{
  a = 'New Variable A'
  let b = 'Local Variable B'
  console.log('Scope A', a); // Scope A New Variable A
  console.log('Scope B', b); // Scope B Local Variable B
}

console.log('A', a); // A New Variable A
console.log('B', b); // B variable b

// Const
const array = ['js', 'is', 'awesome'];
array.push('!');
console.log(array); // [ 'js', 'is', 'awesome', '!' ]

const myObj = {};
myObj.name = 'Andrii';
myObj.age = 30;
console.log(myObj); // { name: 'Andrii', age: 30 }