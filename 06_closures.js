function sayHelloTo(name) {
  const message = `Hello ${name}`;

  return function () {
    console.log(message);
  }
}

const helloToElena = sayHelloTo('Elena');
console.log(helloToElena); // [Function (anonymous)]
helloToElena(); // Hello Elena

function createFrameworkManager() {
  const fw = ['Angular', 'React'];

  return {
    print: function () {
      return fw.join(' ');
    },
    add: function (framework) {
      fw.push(framework);
      return 'added';
    }
  }
}

const manager = createFrameworkManager();
console.log(manager); // { print: [Function: print], add: [Function: add] }

console.log(manager.print()); // Angular React
manager.add('VueJS');
console.log(manager.print()); // Angular React VueJS

// setTimeout
const fib = [1, 2, 3, 5, 8, 13];

for (let i = 0; i < fib.length; i++) {
  setTimeout(() => {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500)
}

for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500)
  })(i);
}
