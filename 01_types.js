// null, undefined, boolean, number, string, object, symbol

console.log(typeof 0); // number
console.log(typeof null); // object => JS mistake
console.log(typeof `Java Script`); // string
console.log(typeof []); // object
console.log(typeof Math); // object
console.log(typeof Symbol('JS')); // symbol
console.log(typeof undefined); // undefined
console.log(typeof function () {}); // function => JS mistake
console.log(typeof NaN); // number => JS mistake

console.log(1 / 0); // Infinity

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean('')); // false
console.log(Boolean('Hello')); // true
console.log(Boolean(Math)); // true
console.log(Boolean(function () {})); // true
console.log(Boolean(0)); // false
console.log(Boolean('0')); // true
console.log(Boolean(' ')); // true

console.log(1 + '2'); // 12
console.log('' + 1 + 0); // 10
console.log('' - 1); // -1
console.log('' - 1 + 0); // -1
console.log('3' * '8'); // 24
console.log(4 + 10 + 'px'); // 14px
console.log('px' + 5 + 10); // px510
console.log('42' - 40); // 2
console.log('42px' - 2); // NaN
console.log(console.log(null + 2)); // 2
console.log(console.log(undefined + 2)); // NaN

console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log('0' == false); // true
console.log('0' == 0); // true
console.log(0 == 0); // true
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == {}); // false
console.log(0 == []); // true
console.log(0 == null); // false