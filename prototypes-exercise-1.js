/* class Person {
  name = 'Tobias';

  constructor() {
    this.age = 30;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}
 */

function Person() {
  this.age = 30;
  this.name = 'Tobias';
  this.greet = function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  }
};

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);
