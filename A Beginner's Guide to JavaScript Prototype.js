// function Animal(name, energy) {
//   this.name = name;
//   this.energy = energy;
// }

// Animal.prototype.eat = function(amount) {
//   console.log(`${this.name} is eating...`);
//   this.energy += amount;
// };

// Animal.prototype.sleep = function(length) {
//   console.log(`${this.name} is sleeping...`);
//   this.energy += length;
// };

// Animal.prototype.play = function(length) {
//   console.log(`${this.name} is playing...`);
//   this.energy -= length;
// };

// const leo = new Animal('Leo', 7);
// const snoop = new Animal('Snoop', 10);

class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(`${this.name} is eating...`);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping...`);
    this.energy += length;
  }
  play(length) {
    console.log(`${this.name} is playing...`);
    this.energy -= length;
  }
}

const leo = new Animal('Leo', 7);
const snoop = new Animal('Snoop', 10);


/* Arrow functions don't have their own 'this' keyword. As a result, arrow functions can't be constructor functions. If we try to invoke an arrow function with the 'new' keyword, an error is thrown.
*/