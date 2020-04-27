// We'll learn what a function is, how to use and run them
// Arguments, and how they let us pass information to our functions
// We cover how the variables in our functions are scoped and how to access them correctly
// We look at Immediately Invoked Function Expressions, also known as the IIFE pattern, and compare it to regular functions
// Introduce closures. A closure is a combination of a function and its context. The context contains the variables defined in the function, as well as those that are visible to the function when it was first defined
//
//
//
// Functions are the very heart of JavaScript.
// They are a powerful tool that allow us to create reusable chunks of code. They make coding faster, easier, and less error-prone.
// Functions are blocks of organized, reusable code, used to perform a single, related action.
// It's a set of statements that perform a task or calculate a value.
// To use a function, we must first define it:
// function greetingConsoleLog(name) {
//   console.log(`Hello ${name}`);
// }
// The function definition by itself doesn't really do anything.
// In order to run a function, we have to invoke it. This is done by calling the function, followed by parenthesis
// By default, all values returned a value, undefined if nothing
// Our function above returns undefined but logs to the console.
//
// Our function below returns a value because we use the return keyword, at the end of our function body:
// function greeting(name) {
//   return `Hello ${name}`;
// }
// Note: Anything **after** a return statement will be skipped
//
//
// Argument is a value that we pass to the function when we invoke it
// Parameter is a **variable** that we list as  part of a function definition
// Here, we define a function called sum, that takes in two parameters
// function sum(num1, num2) {
//   return num1 + num2;
// }
//
//
//
// In this example, we have a function statement identified by greetings, with the parameter 'name'. In the function body we can reference this parameter just like any other variable.
//
//
//
// the 'arguments' object
// There may be time when we need to invoke a function with an indefinite number of arguments.
// The arguments object allows us to represent them as an array-like object.
// It's array-like, though not exactly an array, because it has a length property and zero indexed, but IT DOES NOT have other built-in array methods, like [].forEach() and [].map().
// function printAll() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// In this example, we define a function that prints all arguments that are passed to it.
// NOTE: ES6 allows us to achieve the same result using rest parameters, and we will revisit this example in subsequent modules.
//
//
//
// Function Scope
// It's important we understand the lifetime of variables within a function
// function greeting() {
//   let message = 'Hello';
// }

// greeting(); // the function has been invoked and message is not out of scope
// console.log(message);
//
//
// Function Scope
// function greeting() {
//   let message = 'Hello';
//   let sayHi = function hi() {
//     console.log(message);
//   };
//   sayHi();
// }
// greeting();
//
//
//
// Block Scope
// Referring to the code space between curly braces
// With block scope, we are talking about the lifetime of variables within the curly brace of an *if* statement, a *while*, or a *for* loop, or any set of curly braces other than a function.
//
// Note: variables declared with the *var* keyword or within (created by) function declarations DO NOT have block scope.
// let message = 'Hello';
// if (message === 'Hello') {
//   let count = 100;
// }
//
//
//
// Below is similar to the last example, here we are declaring another variable with the same name as the variable before the *if* block and setting it to inside *if* block
// let message = 'Hello';
// if (message === 'Hello') {
//   let message = 'Inside if block';
//   console.log(message);
// }
// console.log(message);
// Printing the message variable again, outside the if block, it prints 'Hello'. So as we can see we are allowed to reuse variable names within code blocks, though they will override the value of message (the outer one), while the block is being executed.
// Once the execution goes outside of the block, the value is still what it was before the *if* block code execution started.
//
//
//
// Immediately Invoked Function Expression
// The IIFE pattern lets us group our code and have it work in isolation independent of any other code.
// Function Expression
//  // Let's us define a function and asssign it to a varible
// Immediately Invoked
//  // Invoking the function right away where it's defined
// function greeting() {
//   console.log('Hello');
// }

// greeting();
// // Here is the IIFE version below:
// (function () {
//   console.log('Hello');
// })();
//
//
//
// Closures
// We already looked at variables and nested functions go out of scope once the functional block they are contained in completes execution.
// There are times where we would want to hold on to them, even after the function is executed. Closures allow us to do just that.
// let greeting = (function () {
//   let message = 'Hello';
//   let getMessage = function () {
//     return message;
//   };
// })();
// console.log(greeting.message);
// How do we prevent message and getMessage from going out of scope? We use closures as shown in below:
// let greeting = (function () {
//   let message = 'Hello';
//   let getMessage = function () {
//     return message;
//   };
//   return {
//     getMessage: getMessage, // these names don't have to be the same
//   };
// })();
// console.log(greeting.getMessage());
//
//
//
// Another example of when we would want to use a closure
// function setupCounter(val) {
//   return function counter() {
//     return val++;
//   };
// }

// let counter1 = setupCounter(0);
// console.log(counter1());
// console.log(counter1());
// let counter2 = setupCounter(10);
// console.log(counter2());
//
//
//
// Improving Readability with Arrow Functions
// Arrow functions what and why
// Learn to define Arrow Functions
// We'll review the behavior of 'this' keyword
// Introducing Arrow Functions
// Arrow functions were introduced in ES6
// Simplify how to write funciton expressions
// Why would we want to use them?
//  // 'this' derives its value from enclosing lexical scope
//  // Not a substitute for regular
//  // They have no arguments object
//  // Side effect: behavior of the 'this' keyword
//
// let greetings = function () {
//   return 'Hello World!';
// };

// let message = greetings();
// console.log(message);
//
//
//
// Now let's write the same code using arrow functions
// Our anonymous function has been replaced by an opening and closing parenthesis. This implies that there are no input parameters. This is followed by an equal sign, followed by a greater than sign.
// Finally, we have a block containing the body of our arrow function.
// Inside the opening and closing curly braces, this block is identical to our previous example.
// let greetings = () => 'Hello World!';
// let message = greetings();
// console.log(message);
//
// let greet = function greetings(name) {
//   return 'Hello ' + name;
// };
// let message = greet('John');
// console.log(message);
//
// Arrow Function version of example above
// let greetings = (name) => 'Hello ' + name;
// let message = greetings('John');
// console.log(message);
//
//
//
// Arrow function to add two numbers
// function sum(num1, num2) {
//   return num1 + num2;
// }

// let output = sum(10, 5);
// console.log(output);

// const sum = (num1, num2) => num1 + num2;
//
//
//
// 'this' keyword refers to the owner of the function we are executing
// So if it's a standard function, 'this' refers to the global object. Otherwise, it can refer to the object that a function is a method of.
//
// The point to note: unlike regular functions, arrow functions do not have their own 'this' value. Moreover, the value of 'this' is always inherited from the enclosing scope.
// Demo
// let message = {
//   name: 'Tobias',
//   regularFunction: function () {
//     console.log(this);
//     console.log(`Hello ${this.name}`);
//   },
//   arrowFunction: () => {
//     console.log(this);
//     console.log(`Hi ${this.name}`);
//   },
// };

// message.regularFunction();
// message.arrowFunction();

//
//
//
//
//
// Function Context and Built-in Functions
// Functions in JavaScript are really specialized kinds of objects. Moreover, since functions are objects, they can have properties and methods, just like any other object.
// The different ways in which a function can be created, and how the context is set in each of those cases
// We'll look at the .call() and .apply() methods, and how they allow us to indirectly invoke a function as if it were a method of some other object.
// We'll look at how the bind method lets us bind a function to an object and return a copy of another function.
// Next, we'll look at some of JavaScript's build in functions. These include eval(), parseInt(), parseFloat(), escape(), and unescape()
//
// By the end of this module, we should feel comfortable understanding when to use the .call(), .apply(), and .bind() methods and what benefits the built in JavaScript functions provide.
// Understanding Contect
// Before we look at the .call() function, let's review the different ways in which we can create a function and how does that affect the value of the 'this' object.

// function sayHi() {
//   console.log('Hi');
//   console.log(this);
// }

// sayHi();
// //
// //
// //
// let greeting = {}; // we declare a greeting variable, and assign an empty object to it
// greeting.sayHi = function () { // we define a property .sayHi whose value is an anonymous function
//   console.log('Hi');
//   console.log(this); // the value of this is no longer the global window object because the execution context in this function is different.
// };

// greeting.sayHi();
// The value of 'this' now, refers to the object referenced by the greeting variable
//
//
//
//
//
//

// Let's look at yet another way functions are created in JavaScript. This time, we are using the 'new' keyword when invoking the sayHi() function. This is also known as the constructor function. The value of 'this' here will be an empty object.
// Any time we invoke a function with the 'new' keyword, JavaScript implicitly creates an empty object within the function before returning it.
// So in our example, the variable greeting, will hold this empty object.
// function sayHi() {
//   console.log('Hi');
//   console.log(this);
// }
// let greeting = new sayHi();
//
//
//
// Now that we have a good understanding of how the 'this' object get its value, let's look at the .call() method.

// let person1 = {
//   name: 'Tobias',
//   age: 22,
// };
// let person2 = {
//   name: 'Jayden',
//   age: 21,
// };

// let sayHi = function () {
//   console.log(`Hi ${this.name}`);
// };

// sayHi(); // prints out 'Hi', as it refers to the global window oject, which has no name property
//
// What we want to do here is set the value of 'this' to anything other than the current execution context
// Every JavaScript function object has a few properties that come out of the box. One of these properties is the .call() method. We can pass another object as an argument to this .call() method, as shown below.
// Passing the person1 object to the .call() method as an argument of sayHi binds the value of 'this' in sayHi, to the object we pass in.
// sayHi.call(person2); // Binding sayHi to the person1 object logs out 'Hi John' to the console.
//
// In the same way, when we pass the person2 as an argument to sayHi.call(), the value 'Hi Jayden' is logged to the console.
//
// We can also pass additional arguments to the call method
// //
// let person1 = {
//   name: 'Tobias',
//   age: 22,
// };

// let sayHi = function (message) {
//   console.log(`${message}, ${this.name}`);
// };

// sayHi.call(
//   person1,
//   'This is the message passed as an argument to the call method'
// );
// We are passing a message variable in addition to the person1 object.
// Call let's us run the function sayHi in the context of the first argument message
// Remember, we cannot use .call() on objects, only on functions
//
//
//
//
// .apply()
// Just like .call(), every function object also has an .apply() method. In the examples we have seen so far, we can easily replace a .call() with an .apply() method.
//
// How does .apply() and .call() differ?
// While the .apply() method syntax looks almost identical to that of a .call():
// .call() accepts an argument list
// // .apply() accepts a single array of arguments
// function introduction(name, profession) {
//   console.log(`My name is ${name}, and I am a ${profession}`);
//   console.log(this);
// }

// introduction('Tobias', 'student');

// introduction.apply(undefined, ['Tobias', 'lawyer']); // note the apply method takes in an array as an argument
// introduction.call(undefined, 'Tobiscuit', 'artist'); // the call takes multiple arguments
// Since we aren't changing the function context we pass in undefined as the first argument
//
// How do we decide when to use a .call() or an .apply() ???
// .apply()
//  // Use the .apply() method when the input parameter is already in the form of an array, consisting of similar values
// Otherwise
//  // If we're dealing with multiple arguments that are not really related to each other, use the .call() method
//
//
//
// With .call() and .apply(), we call an existing function and change the function context, that is the value of the 'this' object.
//
// What if we would like to make a copy of a function, and then change the value of 'this'? The .bind() method allows us to do just that
// let person1 = {
//   name: 'Tobias',
//   getName: function () {
//     return this.name;
//   },
// };

// let person2 = { name: 'John' };
// let getNameCopy = person1.getName.bind(person2);
// // In this way, we are no longer changing the context of an existing function, the way we did in .call() and .apply(), but instead create a new copy of the function, and then change its context to another object.
// console.log(getNameCopy());
// //
// //
// //
// // Built-in functions
// // eval()
// //  // Accepts a string as an input, evalues it, and returns a value
// let x = 1;
// let y = 2;
// console.log(eval('x + y + 1'));
// .eval() Takes an expression in string format as input
// .eval() continued
// let x = 1;
// let y = 2;
// let s = 'abc';
// console.log(eval('x + y + s'));
//
//
//
// console.log(parseInt('F', 16)); // prints 15. returns the value 'F' in base 16, which is 15
// console.log(parseInt('15', 10)); // prints 15. returns the value of 15 in decimal, which is also 15
// console.log(parseInt('Hi', 10)); // returns NaN
// parseInt() parses a string and returns an integer.
// Optionally, we can also specify an additional base or radix argument to return the integer of that base.
// If the first argument cannot be converted to a number, then parseInt() returns a special value of NaN, Not a Number.
//
//
//
// parseFloat() works just like parseInt()
// console.log(parseFloat('3.99')); // 3.99
// console.log(parseFloat('3.99e-1')); // 0.399?
// console.log(parseFloat('')); // NaN
//
//
//
// escape()
// Returns the hexadecimal encoding of an argument in the ASCII latin-1 (ISO 8859) character set
// console.log(escape('text')); // For example, alphanumeric characters like 'text' is 'text' in this character set
// console.log(escape(' ')); // while non-alphanumeric characters are represented as %xx where xx is a hexadecimal encoding of the ASCII character in the ISO LATIN-1 character set
// console.log(escape('abc&%'));
//
//
//
// unescape()
// Does the opposite of escape()
// Returns the ASCII string for a given input value
// console.log(unescape('text')); // text
// console.log(unescape('%20')); //
// console.log(unescape('abc%26%25')); // abc&%
//
//
//
// escape() and unescape() show us how encoding and decoding work

// console.log(escape('text'));
// console.log(escape(' '));
// console.log(escape('abc&%'));
// console.log('==========================');
// console.log(unescape('text'));
// console.log(unescape('%20'));
// console.log(unescape('abc%26%25'));
//
//
//
//
//
// Module Review
// When to use the .apply() and .call() methods, how they differ from each other, and how they let us change the context to another object.
// We also looked at how the .bind() function lets us create a copy of a function, and then change the function context.
// Finally, we looked at some of the built-in functions in JavaScript and when to use them. In the next module, we'll look at the spread and rest parameters
//
//
//
// Default Parameters
// Allow us to give a default value to a parameter in a function
// function sayHi(name = 'World') {
//   console.log(`Hello ${name}`);
// }
// // Since we have a default parameter, we can omit the argument and the default value will take place
// sayHi();
// // Or we can pass in an argument as a parameter
// sayHi('Tobias');
// // Another example of default parameters
// function sayHi(message, name = 'World') {
//   console.log(message + name);
// }
// // Not all parameters *need* to have default values
// sayHi('Hello');
// sayHi('Hi', 'Tobias');
// ALWAYS declare the default parameters AFTER the regular parameters in your function definition
//
//
//
// Rest parameters
// We can define a function to store multiple arguments in a single array. This is especially useful when we are invoking a function with multiple arguments
// Rest Parameters example
// let sayHi = function greet(...names) {
//   names.forEach((name) => console.log('Hi ' + name));
// };

// sayHi('Tobias', 'Jayden', 'Anna');
// Another example
let sayHi = function greet(message, ...names) {
  // Just like the default parameters, rest parameters should appear after any regular parameters in our function definition
  console.log(message + ' everyone!');
  // The rest parameters always stores the rest of the arguments as an array
  names.forEach((name) => console.log('Hi ' + name));
};

sayHi('Welcome', 'Tobias', 'Jayden', 'Akana');
// Remember: Rest parameters must be the last formal parameter, or else we get a SyntaxError
//
//
//
// Spread Operator
// Is the opposite of how a rest parameter works. It allows a function to take an array as an argument and then spread out it's elements so that they can be assigned to individual parameters.
function greet(person1, person2) {
  console.log('Hello ' + person1 + ' and ' + person2);
}

let names = ['Tobias', 'Jayden'];
greet(...names);
// Although it looks similar, we are going the opposite here
// We are passing an array, as an argument, and then spreading its elements into individual parameters of the function
//
//
//
// Another example of the Spread Operator
function display(char1, char2, char3, char4) {
  console.log(char1, char2, char3, char4);
}
let letters = 'abcd';
display(...letters);
//
// While a Rest parameter collects individual arguments and stores them in an array, the spread operator takes an array as an argument and spreads it into individual parameters
//
//
// We looked at setting default parameters when defining a function (do it last btw)
// Defining rest parameters, and how we can use the ... (ellipsis) notation with a parameter in a function definition such that we can store a list of arguments as an array
// We also looked at the Spread operator, which allows us to pass an array with the ... (ellipsis) notation and have its elements spread across various parameters.
//
//
// We should be familar with all the different ways we can create functions in JavaScript to write modular, readable, and reusable code. With some practice and effort, writing and working with functions and its various forms will become second-nature to us.
