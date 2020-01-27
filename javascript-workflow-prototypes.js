class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Tobias';

  constructor() {
    super();
    this.age = 30;
    
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

/* function Person() {
  this.age = 30;
  this.name = 'Tobias';
  this.greet = function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  };
}

Person.describe = function() {
  console.log('Creating persons...')
} */

/* Person.prototype = {
  printAge() {
    console.log(this.age);
  }
};
 */
/* 
Person.prototype.printAge = function() {
  console.log(this.age);
};

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.length);
console.log(p.toString());
const p2 = new p.__proto__.constructor();
console.dir(Object.prototype.__proto__);
 */

 const p = new Person();
 const p2 = new Person();
 console.log(p.__proto__ === p2.__proto__);
