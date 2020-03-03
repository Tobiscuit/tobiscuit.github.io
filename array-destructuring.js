// const alphabet = ["A", "B", "C", "D", "E", "F"];

// const numbers = ["1", "2", "3", "4", "5", "6"];

// // const a = alphabet[0];
// // const b = alphabet[1];
// const [a, , c, ...rest] = alphabet;

// // const newArray = [...alphabet, ...numbers];
// const newArray = alphabet.concat(numbers);

// console.log(newArray);

// function sumAndMultiply(a, b) {
//   return [a + b, a * b, a / b];
// }

// const [sum, multiply, division = 'No division'] = sumAndMultiply(5, 3);
// console.log(sum);
// console.log(multiply);
// console.log(division);

// Object Destructuring

const personOne = {
  name: 'Tobias',
  age: 22,
  address: {
    city: 'Houston',
    state: 'Texas'
  }
};

// const personTwo = {
//   name: 'Jayden',
//   age: 21,
//   favoriteFood: 'Watermelon',
//   address: {
//     city: 'Bay Area',
//     state: 'California'
//   }
// };

// // const {
// //   name: firstName,
// //   address: { city }
// // } = personTwo;

// const personThree = { ...personOne, ...personTwo };

// // console.log(firstName);
// // console.log(city);
// console.log(personThree);

const printUser = ({ name, age, favoriteFood = 'Watermelon' }) =>
  console.log(
    `Name is: ${name}. Age is ${age}. Favorite food is ${favoriteFood}`
  );
printUser(personOne);
