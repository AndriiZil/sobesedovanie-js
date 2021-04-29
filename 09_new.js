function Cat(color, name) {
  this.color = color;
  this.name = name;
}

const cat = new Cat('black', 'Kota');
console.log(cat);

function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  return constructor.apply(obj, args) || obj;
}

const myCat = myNew(Cat, 'black', 'Kotik')
console.log(myCat);
