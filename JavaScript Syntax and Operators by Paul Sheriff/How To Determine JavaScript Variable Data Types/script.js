// How to Determine JavaScript Variable Data Types
//
// Goals:
// Explore the different data types that are available:
//    // Primitives and Objects
// How to determine data types
//  // typeof operator
//  // constructor property
//  // instanceof operator
//
//
// JavaScript, unlike other languages, only has a few primitive data types built-in:
// Primitives:
//  // boolean (true or false)
//  // null (no value)
//  // undefined (a variable declared, but has no value)
//  // number (integers, decimals, float, etc).
//  // string (a series, an array, or characters)
//
//
//
// Object Data Types
//  // new Array (a collection of values)
//  // new Error (contains a name and an error message)
//  // new Function (block of code)
//  // new Object (a wrapper around any of the other data types)
//  // new RegExp (a regular expression)
// These are the built-in object data types
//
//
// We also have these that are similar to the primitives, but they are objects
// new Boolean (an object that contains true or false)
// new Number (an object that contains a numeric value)
// new String (an object that contains a character(s))
// NOTE: Use the primitives 'boolean', 'number', or 'string' as opposed to the objects (these) whenever possible. These types of objects take up more memory space and are slower to access
//
//
//
//
// typeof operator
// Since we don't declare a data type when we create a variable in JavaScript, it means we need to have a mechanism to find out what that data type is in the variable at any given time in the application.
// We can use the typeof operator to find out a variable's data type
// 'typeof' returns the data type of the passed in expression
// Returns a string value such as:
//  // 'string'
//  // 'number'
//  // 'object'
//  // 'boolean'
//  //  etc.

//
//
// Examples:
console.log(typeof 'Hello'); // prints 'string'
console.log(typeof 4); // prints 'number'
// Works for expressions as well
console.log(typeof (4 * 2)); // prints 'number'
//
//
//

// Object Data Type and the Constructor property
//
//
// All object data types inherit from Object (not primitives)
// Object has a constructor property
// This constructor property returns a reference to the object itself
// The constructor is a kind of internal representation of a particular object

//
//
//
// Use the Constructor Property to determine type
// Object Data Type / Constructor
// All object data types inherit from Object (not primitives, just objects)
// Object has a constructor property. This constructor property returns a reference to the object itself, which we can use to find out more information about this object
// Object literals and primitives are cast to objects for display (when we use console.log, this is in order to be able to display it, they are casted)
//
//
//
// The constructor property is nice but it simply returns a string. It'd be nice if we had some functions that would return a boolean to say something like 'is array' or 'is date'.
// We can do that by creating our own helper functions

//
//
//
// instanceof operator
// Different from typeof
// This one checks if a specific object inherits from the Object data type
// Remember: everything inherits from Object data type (except the primitives)
// Tests for a specific type of object or for Object itself

//
//
// 
// Summary 
// In this module we learned it's important to understand the difference between primitives and Objects
// // // Use primitives where possible, for example
// // 'a value' instead of new String('a value')
// // because Objects are slower to access and take up a little bit more memory
//
// Detect data types using typeof and instanceof
// typeof for checking the type
// instanceof for checking what type of object it specifically is
//
// The constructor property
// Can be used both on objects and primitives
// With primitives, it can cast it into an object so we have the 'constructor' property available to us.
//
//
//
//
//
// Next module, we'll talk about the use of the 'this' keyword in different scopes, and .call() and .apply() methods.