// __proto__

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says myay`);
}

const cat = new Cat('Kot', 'white');
console.log(Cat.prototype);
console.log(cat.__proto__);
cat.voice();

const proto = { year: 2020 };
const myYEar = Object.create(proto);

console.log(myYEar.year); // 2020
console.log(myYEar.hasOwnProperty('year')); // false
