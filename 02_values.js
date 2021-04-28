let a = 42;
let b = a;
b++;

console.log('a', a);
console.log('b', b);

let arr = [1, 2, 3];
let brr = arr;
let crr = [1, 2, 3, 4];

brr.push(4);

console.log('arr', arr); // arr [ 1, 2, 3, 4 ]
console.log('brr', brr); // brr [ 1, 2, 3, 4 ]

console.log(arr === brr); // true
console.log(arr === crr); // false

