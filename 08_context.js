const person = {
  surname: 'Stark',
  knows: function (what, name) {
    console.log(`You ${what} knows, ${name} ${this.surname}`);
  }
}

const john = {
  surname: 'Snow'
}

person.knows('all', 'Bran'); // You all knows, Bran Stark
person.knows.call(john, 'nothing', 'John'); // You nothing knows, John Snow
person.knows.apply(john, ['nothing', 'John']); // You nothing knows, John Snow
person.knows.call(john, ...['nothing', 'John']); // You nothing knows, John Snow
person.knows.bind(john, ...['nothing', 'John'])(); // You nothing knows, John Snow

function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

const andrii = new Person('Andrii', 22);

function logThis() {
  console.log(this);
}

const obj = { num: 42 };
logThis.call(obj);
logThis.bind(obj)();
logThis.apply(obj);

const animal = {
  legs: 4,
  logThis: function () {
    console.log(this);
  }
}

animal.logThis();
