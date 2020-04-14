'use strict';
(function () {
  // let person = {
  //   firstName: 'Tobias',
  //   lastName: 'Ramzy',
  //   age: 22,
  //   isAdult() { return this.age >= 18; }
  // };
  // // for (let propertyName in person) {
  // //   display(propertyName);
  // // }
  // // Equality
  // // In JavaScript, there are 3 different equality operators
  // // ==, ===, and Object.is()
  // // Object.is(person1, person2)
  // // == is not type safe. "42" == 42
  // // 0 == false
  // // null == undefined
  // // "" == 0
  // // [1, 2] == "1,2"
  // // Best to avoid
  // // Triple Equality and Object.is() work almost identically with a couple of small differences
  // // Both of these operators are type safe
  // // Triple equals is convenient and concise, so we'll use === most of the time
  // // NaN === NaN yields false, Object.is(NaN, NaN) yields true
  // // +0 === -0 yields true, Object.is(+0, -0) yields false
  // // What does it mean for two objects to be equal?
  // // Objects get stored in different memory addresses even if their contents are the same, so two different objects with the same contents are NOT equal.
  // // What gets compared is their reference address.
  // // person1 == person2; // false
  // // person1 === person2; // false
  // // Object.is(person1, person2); // false
  // // // Note: This is only true for objects, not for primitive types
  // // let firstName1 = 'Tobias';
  // // let firstName2 = 'Tobias';
  // // firstName1 == firstName2; // true
  // // firstName1 === firstName2; // true
  // // Object.is(firstName1, firstName2); // true
  // // Consider these two separate string variables that have the same value. Even though they are stored on different memory addresses, for primitive types like strings, JavaScript compares their values.
  // // But with objects, JavaScript compares their memory address
  // //
  // // Sometimes in JavaScript we'll like to create an object from an existing one, or merge the properties of two properties together
  // let person1 = {
  //   firstName: 'Tobias',
  //   lastName: 'Ramzy',
  //   age: 22,
  //   isAdult: function() { return this.age >= 18; }
  // }
  // let person2 = {  };
  // Object.assign(person2, person1);
  // display(person1 === person2); // false, because even though the properties are the same between the two objects, they are not the same object in memory
  // let healthStats = {
  //   height: 165,
  //   weight: 200
  // };
  // function mergeHealthStats(person, healthStats) {
  //   // return Object.assign(person, healthStats); // Unintended side effect
  //   // The function mutates the original object, we have an unintended side effect.
  //   // Good immutability practice says: A function should refrain from mutating the objects that are passed into it
  //   // Objects.assign() takes unlimited parameters, merges all of the properties from the objects on the right, into the object on the left.
  //   //
  //   return Object.assign({}, person1, healthStats);
  //   // We'll often see the Object.assign used like this, with an empty object as the first parameter to avoid mutating other objects or cause unintended side effects
  // }
  // let mergedPerson = mergeHealthStats(person1, healthStats);
  // display(mergedPerson);
  // display(person1);
  // function Person(firstName, lastName, age) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  //   this.isAdult = function () {
  //     return this.age > 21;
  //   };
  // }
  // let tobias = new Person('Tobias', 'Ramzy', 22);
  // let jayden = new Person('Jayden', 'Diaz', 21);
  // display(tobias);
  // display(jayden);
  // Object.create()
  // let person1 = {
  //   firstName: 'Tobias',
  //   lastName: 'Ramzy',
  //   age: 22,
  // }
  // let person2 = Object.create(Object.prototype, {
  //   firstName: {
  //     value: 'Tobias',
  //     enumerable: true,
  //     writeable: true,
  //     configurable: true,
  //   },
  //   lastName: {
  //     value: 'Ramzy',
  //     enumerable: true,
  //     writeable: true,
  //     configurable: true,
  //   },
  //   age: { value: 22, enumerable: true, writeable: true, configurable: true },
  // });
  // display(person1);
  // display(person2);
  // Recap
  // let propertyNames = Object.keys(Person);
  // for (let propertyName in person) {}
  // === and Object.is() are identical except when:
  // Comparing NaN
  // Comparing -0
  // function registerUser(firstName, lastName) {
  //   let person = {
  //     firstName,
  //     lastName
  //   };
  //   displayObject(person);
  // }
  // registerUser('Tobias', 'Ramzy');
  //
  // let person = {
  //   firstName: 'Tobias',
  //   lastName: 'Ramzy',
  //   age: 22,
  // }
  //
  // person['hair color'] = 'Black';
  //
  // display(person['hair color']);
  // // Bracket Notation
  //   // A much more common usage is if we have a variable that contains a property name, and we want to get the value of that property off of an object
  //
  // let propertyName = 'firstName';
  //
  // display(person[propertyName]);
  // // One example of a use case for this is using it in conjunction with Object.keys() or a for..in loop to display all of the property values on an object
  //
  // for (let propertyName in person) {
  //   display(`${propertyName}: ${person[propertyName]}`);
  // }
  // // We can change property attributes using the Object.definePropertyMethod()
  // Object.defineProperty(person, 'name', {writable: false});
  // //
  // // We can freeze properties on an object from being changed using Object.freeze()
  // Object.freeze(person.name);
  // //
  // person.name.firstName = 'Toby';
  // display(person.name);
  // let person = {
  //   firstName: 'Tobias',
  //   lastName: 'Ramzy',
  //   age: 22,
  // };
  // Object.defineProperty(person, 'firstName',  {enumerable: false});
  // for (let propertyName in person) {
  //   display(`${propertyName}: ${person[propertyName]}`);
  // }
  // // Non enumerable will not show
  // display(Object.keys(person));
  // // Non enumerable will not show
  // display(JSON.stringify(person));
  // // Non enumerable will not be serialized into JSON
  // let person = {
  //   firstName: 'Tobias',
  //   lastName: 'Ramzy',
  //   age: 22,
  // };
  // Object.defineProperty(person, 'firstName', {configurable: false});
  // delete person.firstName;
  // display(person);
  // let person = {
  //   name: {
  //     first: 'Tobias',
  //     last: 'Ramzy',
  //   },
  //   age: 22,
  // };
  // Object.defineProperty(person, 'fullName', {
  //   get: function() {
  //     return `${this.name.first} ${this.name.last}`;
  //   },
  //   set: function(value) {
  //     let nameParts = value.split(' ');
  //     this.name.first = nameParts[0];
  //     this.name.last = nameParts[1];
  //   }
  // });
  // person.fullName = 'Tobiscuit Ramizzy'
  // display(person.fullName);
  // display(person.name.first);
  // display(person.name.last);
  // We learned we can access properties through dot notation and bracket notation.
  // In this module we learned about Object.defineProperty() to make properties read only, or non enumerable, or even make it so we can't change the property descriptors at all.
  //
  // We learned how to use Object.defineProperty to create getter and setter properties that allow us to create properties that are backed by functions.
  // In the next module, we'll learn about prototypes, how they're used to create inheritance chains, and how to create our own prototypal inheritance
  //
  // JavaScript Prototypes and Inheritance
  // A prototype is an object that exists on every function in JavaScript
  // let myFunction = function() {};
  // display(myFunction.prototype);
  // let person = {firstName: 'Tobias'};
  // display(person.prototype)
  // display(person.__proto__)
  //
  // A function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor.
  //
  // An Object's Prototype is the object instance from which the object is inherited.
  // function Person(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }
  // Person.prototype.age = 22;
  // displayObject(Person.prototype);
  // let tobias = new Person('Tobias', 'Ramzy');
  // let jayden = new Person('Jayden', 'Diaz');
  // jayden.__proto__.age = 21;
  // // Notice how the age changes in all instances, thisis because it is referring to the same prototype object.
  // display(tobias.__proto__);
  // display(jayden.__proto__);
  // display(Person.prototype === tobias.__proto__);
  //
  //
  //
  //
  // function Person(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }
  // Person.prototype.age = 29;
  // let tobias = new Person('Tobias', 'Ramzy');
  // let jayden = new Person('Jayden', 'Diaz');
  // tobias.age = 18;
  //
  // Prior to setting Tobias's age directly, the tobias object never had an age property, only its prototype did.
  // tobias.age = 18;
  // Here, we are actually adding a prototype property of age to it, so it does not look for the one upper in the chain. We can still access both values.
  //
  //
  // If a value for age is not found, it looks up further on the prototype chain.
  // What JavaScript is really doing when we ask for the property value is that it looks at the object to see if it has a value for that property name, if it doesn't find a property on that object, then it asks its prototype to see if it has that property.
  // We can see this further by using the .hasOwnProperty() method.
  //
  //
  // display(tobias.hasOwnProperty('age'));
  // display(tobias.age) // Since the tobias object didn't have an age, value came from prototype
  // //
  // //
  // Another way to look at prototypes: when we created our Person function, JavaScript also created another object in memory.
  // After creating that object JavaScript updates the function's prototype property to point to that new object.
  // We can manipulate properties on that function's prototype object like this:
  // Person.prototype.age = 22;
  // When we add age to the Person function's prototype, it adds that property to this object.
  // Remember, we haven't even created a person object from our function yet, this is just the hidden prototype object that JavaScript created behind the scenes.
  // function Person(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   prototype: {
  //     age: 29
  //   }
  // }
  // Person.prototype.age = 29;
  //
  // Let's create a new Person object from our function now. We do that like so:
  // let tobias = new Person('Tobias', 'Ramzy');
  // When we do that, the new object takes care of creating a new object, but the 'new' keyword also does something else behind the scenes. It adds a __proto__ property to our new object, and that property is a pointer to our Person's function prototype object.
  // Then the 'new' keyword executes our Person function, and the 'this' keyword in this context, is pointing to our new tobias object.
  // The instance properties, override the prototype properties
  // What would happen if we update the Person function's prototype's age property?
  // We could do that in two ways, either directly like so:
  // Person.prototype.age = 42;
  // OR we could do it through tobias's __proto__ property like this:
  // tobias.__proto__.age = 22;
  // as our code stands now, this would have the exact same effect.
  // It is possible however for these two statements to have a different effect. We'll talk more about that later.
  // For now, let's just stick with the more direct approach.
  // Person.prototype.age = 42; // It'll change the age property of our function's prototype
  // Now what will we get when we ask for tobias's age? We'll get 18, because the instance property overrides the prototype property.
  // A function's prototype: The object instance that will become the prototype for all objects created using this function as a constructor.
  // An object's prototype: The object instance from which the object is inherited.
  //
  // In the definition of function's prototype, we said the function's prototype is the object instance that will become the prototype for all objects created using this function. Let's take a look at a quick example that illustrates that:
  // Here we have our Person function and two Persons, which were derived from that function.
  // function Person(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }

  // Person.prototype.age = 42;

  // let tobias = new Person('Tobias', 'Ramzy');
  // let jayden = new Person('Jayden', 'Diaz');
  // // If we look at their ages, we will see they're both inheriting from the function's prototype, an age of 42
  // // We now know that if we change the age of the prototype, that will also change the age of tobias and jayden through inheritance.
  // // But what if we actually change the function's prototype to point to a completely different object? Let's try that:

  // Person.prototype = { age: 18 }; // We are now pointing to a new object
  // let anna = new Person('Anna', 'Akana');
  // display(Person.prototype);
  // display(tobias.age);
  // display(jayden.age);
  // display(anna.age);

  // If we add a new person after having changed the prototype to point to a new object
  // When we change the prototype of our function, what we really did was create a new object in memory, and change the Person function's prototype to point to that new object.
  // However, the existing tobias and jayden instances of our Person still have prototypes that are pointing to the old prototype object.
  // When we then created our new anna instance of a Person, it created a new object and set its prototype to point to the current prototype of the Person function. This really highlights again the fact that prototypes really are objects that live in memory, and as we'd expect, they behave like any other objects with regards to pointers.

  //
  //
  //
  // So far, we've only been talking about a single level of inheritance, where our person objects inherit from our prototype object, but actually the object's we've been working with have multiple levels of inheritance.
  // We know tobias has a .__proto__ (prototype) that was created from our person function.
  // What we haven't seen is that the Person prototype also has a .__proto__ (prototype).
  // display(tobias.__proto__);
  // display(tobias.__proto__.__proto__);
  // display(tobias.__proto__.__proto__.__proto__);
  // Let's create a more meaningful inheritance chain
  //
  //
  //

  // function Person(firstName, lastName, age) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  //   Object.defineProperty(this, 'fullName', {
  //     get: function () {
  //       return this.firstName + ' ' + this.lastName;
  //     },
  //     enumerable: true,
  //   });
  // }

  // function Student(firstName, lastName, age) {
  //   Person.call(this, firstName, lastName, age);
  //   this._enrolledCourses = [];

  //   this.enroll = function (courseId) {
  //     this._enrolledCourses.push(courseId);
  //   };
  //   this.getCourses = function () {
  //     return (
  //       this.fullName +
  //       "'s enrolled courses are: " +
  //       this._enrolledCourses.join(', ')
  //     );
  //   };
  // }

  // //
  // //
  // // We'll display it before and after setting the student prototype
  // // The function before setting the prototype, was Student
  // display(Student.prototype.constructor);
  // Student.prototype = Object.create(Person.prototype);
  // // Now after setting the prototype, it is Person. This is a side effect caused by the fact that we created a new object from the Person prototype, which has the Person function as its constructor, and then set that prototype for our Student object.
  // // display(Student.prototype.constructor);
  // // So to undo that side effect, we just need the line below.
  // Student.prototype.constructor = Student;
  // display(Student.prototype.constructor);

  //
  //

  //
  //
  // Why are we using Object.create() below? Because if we used the 'new' keyword, it would actually execute the person function at this point, and we don't really want to do that here. We don't want to call it until we're actually creating a new student, so Object.create() creates a new object with Person as its prototype, that's the first parameter of the Object.create() function.
  // And then we set that new object as the Student's function's prototype.
  // Student.prototype = Object.create(Person.prototype);
  // What about the line below? To understand this line, we must understand all prototypes have a constructor property, that points to the function that was used to create it.
  // Student.prototype.constructor = Student;
  //
  //

  // let tobias = new Student('Tobias', 'Ramzy', 22);

  // tobias.enroll('JavaScript 2020');
  // tobias.enroll('React - The Complete Guide');
  // tobias.enroll('NodeJS - The Complete Guide');

  // display(tobias);
  // display(tobias.__proto__);
  // display(tobias.__proto__.__proto__);

  // display(tobias.getCourses());
  //
  //
  //
  //
  //
  // The only 3 lines we needed to create an inheritance chain, was these 3 lines:
  // Person.call(this, firstName, lastName, age);
  // Student.prototype = Object.create(Person.prototype);
  // Student.prototype.constructor = Student;
  //
  //
  //
  //
  // Creating Prototypal Inheritance Chains: Summary //
  //
  //
  //
  // function Person(firstName, lastName, age) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  //   Object.defineProperty(this, 'fullName', {
  //     get: function () {
  //       return this.firstName + ' ' + this.lastName;
  //     },
  //     enumerable: true,
  //   });
  // }

  // function Student(firstName, lastName, age) {
  //   Person.call(this, firstName, lastName, age);
  //   this._enrolledCourses = [];

  //   this.enroll = function (courseId) {
  //     this._enrolledCourses.push(courseId);
  //   };
  //   this.getCourses = function () {
  //     return (
  //       this.fullName +
  //       "'s enrolled courses are: " +
  //       this._enrolledCourses.join(', ')
  //     );
  //   };
  // }

  // Student.prototype = Object.create(Person.prototype);
  // Student.prototype.constructor = Student;

  // let tobias = new Student('Tobias', 'Ramzy', 22);

  // tobias.enroll('JavaScript 2020');
  // tobias.enroll('React - The Complete Guide');
  // tobias.enroll('NodeJS - The Complete Guide');

  // display(tobias.getCourses());
  //
  //
  // That's all there is to creating prototypal inheritance chains, or creating inheritance in JavaScript where one object inherits properties and functionality from another object

  // In this module we learned that functions have prototypes, and that those prototypes point to objects in memory, and when you create new objects from those constructor functions they also have prototypes that point to the same object in memory.
  // We also learned that objects themselves can have properties, as well as their prototypes, and when we ask for the value of a property on an object, it asks the object first, and then its prototype (if property not found).
  //
  // We also learned how to set up inheritance with constructor functions, by setting the prototype of one function to an object created with the prototype of another function, and that we can initialize the parent classes properties by calling its function using the .call() function and passing along the context of this.
  //
  // function Person() {};
  // function Student() {
  //   Person.call(this, ...);
  // }
  // Student.prototype = Object.create(Person.prototype);
  //
  // Next, we'll see how to do all of this with classes.

  // JavaScript Classes
  // JS Classes play the exact same role as constructor functions, they are templates for creating objects and encapsulating logic related to those objects.
  // We'll explore the depths of JavaScript classes including using classes to create objects, properties, methods, getters and setters.
  // We'll also explore inheritance and creating inheritance chains.3
  // If this all sounds familiar, it's because we did all this with constructor functions. Basically, anything we can do with Constructor Functions we can do with Classes. In fact, classes are really just syntactic sugar for a cleaner way to do all this.
  // It's important to understand that classes don't really do anything new, including inheritance, the end result is the same, including using prototypes for inheritance behind the scenes.
  // Classes just offer cleaner syntax to accomplish the things we'd do with constructor functions.
  // We'll transform all the previous examples into Class syntax so we can see the difference.
  // One last thing to mention, it's important to know that Classes were introduced in EcmaScript version 6 (ES6). This means classes are now supported in all major browsers.
  //
  //
  //

  // class Person {
  // A constructor in classes is code that is run whenever a new object is created from this class. So it's kind of like the code that gets run inside of a constructor function, every time we create a new Person, except this is how you do it in classes.
  // Now, our constructor will take in a few parameters so that we can initialize these properties when we create a new Person
  // constructor(firstName, lastName, age) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  //
  // We can create properties without requesting the user initialize them right away when they create an object.
  // this.age = 0;
  // Not all properties need to be initialized via the constructor
  //
  // }

  // static adultAge = 18;

  // get fullName() {
  // This essentially creates a full name property on the person that is backed by functionality in a function. This is really nice compared to having to use the Object.defineProperty() syntax
  //     return this.firstName + ' ' + this.lastName;
  //   }

  //   set fullName(fullName) {
  //     let nameParts = fullName.split(' ');
  //     this.firstName = nameParts[0];
  //     this.lastName = nameParts[1];
  //   }
  //   isAdult() {
  //     return this.age >= 18;
  //   }
  // }
  // Notice how Classes are not so different from our Constructor Functions. With the Constructor Functions we just use the keyword 'function' instead of 'class', and we just define the properties inside that function
  // We'll take a look at getter and setter functions in classes next.;

  // let tobias = new Person('Tobias', 'Ramzy', 22);
  // tobias.fullName = 'Hello World'; // Using the setter

  //
  // Let's take a look at how we might manipulate properties on a class using property descriptors.

  // There's something notable missing here (while displaying it). We have this fullName getter, and so there's a fullName property on our tobias object. But it's not showing up when we display the object. That's because when we create a getter, it is created with enumerable set to false. Generally this isn't a big deal, because it's not too often that we iterate over the keys on an object.
  // But if we wanted to iterate over our object's keys and we wanted our getters to show up, we'd need to set this getter property to enumerable first. Unfortunately there isn't a good clean way to do this with classes, so we'll have to revert back to our Object.defineProperty() method.
  // We'll do that, Object.defineProperty(), just outside of our Person class. Now which object are we going to define this property on? The question is, where does that fullName property exist? Well, it's not on the Person class itself, but it's on the Person class's prototype. (Classes have prototypes, though this should have been obvious, just like functions do). This is an interesting thing to note.
  // Getters and setters live on the prototype, whereas other properties, like firstName, lastName, and age, live on the Person object instances. This makes sense when we really think about it. There's nothing stateful about getters and setters, they're really just functions. So they can live on the prototype. But the other properties like firstName and lastName contain state that change from instance to instance, so those need to be instance properties.
  // So the fullName getter is on the prototype. So we'll modify the prototype/
  // Object.defineProperty(Person.prototype, 'fullName', {
  //   enumerable: true,
  // });
  // Now we can see it because it's enumerable, and of course we can do this with the other property descriptors too, like configurable and writable.
  // Now let's take a look at inheritance with classes.
  // We've already created a Person class, let's go ahead and create a Student class that will inherit from this Person class.

  // class Student extends Person {
  //   constructor(firstName, lastName, age) {
  // With constructor functions, we called the Person constructor function from within the Student constructor function like so:
  // Person.call(this, firstName, lastName, age);
  // But what we have to do with the Student class, is we want to call the Person class's constructor function. And now that the Student class inherits from the Person class, we can do that with the super() keyword. So inside of our constructor function, we're going to just call super(). This keyword is used to call the constructor on the class that we're extending. So we can just pass in our parameters like so:
  //     super(firstName, lastName, age);
  //     this._enrolledCourses = [];
  //   }

  //   static fromPerson(person) {
  //     return new Student(person.firstName, person.lastName, person.age)
  //   }
  //   enroll(courseId) {
  //     this._enrolledCourses.push(courseId);
  //   }
  //   getCourses() {
  //     return (
  //       this.fullName +
  //       "'s enrolled courses are: " +
  //       this._enrolledCourses.join(', ')
  //     );
  //   }
  // }

  // let tobias = new Student('Tobias', 'Ramzy', 22);
  // tobias.enroll('JavaScript 2020');
  // tobias.enroll('React - The Complete Guide');
  // tobias.enroll('NodeJS - The Complete Guide');
  // display(tobias.getCourses());
  //
  //
  //
  //
  // Static properties and methods are items that we can access on a class without having to first create an instance of that class.
  // The getCourses() method from above is **not** a static method because in order to use it we have to create a new Student object like so:
  // let tobias = new Student('Tobias', 'Ramzy', 22);
  // So we can call tobias.getCourses() but we **can't** call Student.getCourses() and expect that to work. We get a TypeError: Student.getCourses() is not a function.
  // This is because there is not .getCourses() directly on the Student class. It's only on instances that are created from this class.
  // But we can create useful _static_ functions that do exist on classes. So, for example, imagine that in our college registration application, that a user first creates an account and then they enroll as a student. In this case, we might already have a Person object for them, and so they might have come and registered as a new user and at that point we created a new Person object, and now they're enrolling as a student, and so we want to create a new Student object from this existing Person object.
  // With a _static_ function, we could do that something like this:
  // let tobiasStudent = Student.fromPerson(tobias)
  // We can call .fromPerson() on the student class itself, and pass in a Person object, and then this .fromPerson() function could return a new Student with tobias's Person information, so let's implement that:
  // display(tobiasStudent);
  //
  //
  //
  // Recap: We create new classes with the 'class' keyword. Then we can create new instances of the class using the 'new' keyword.
  // The constructor is used to initialize property values
  // Getters and setters properties are super easy to create, and so are methods.
  // We can create static properties and methods using the 'static' keyword.
  // Inheritance is easy with the 'extends' keyword
  // We can call the parent class constructors using the super() function.
  // Classes are really nice because the syntax is so much cleaner than constructor functions. Now let's wrap things up by taking a look at a few built in JavaScript objects that are commonly used.
  //
  //
  //
  // We've talked a lot about how to create and work with our own objects.
  // Now, let's take a look at some objects that come built-into JavaScript
  // We'll take a look at three common objects that we're likely to use in JavaScript.
  // We'll start with the Math object, which comes with lots of static functions for various mathematical operations
  // Then we'll take a look at the Date object, which we can use to create, manipulate, and inspect dates
  // Finally we'll take a look at the Regex object, which is used for searching and validating strings using regular expressions.
  // The Math object is pretty straightforward, but the Date and Regex object have some complexity to them. So let's jump in and take a look.
  //
  // The Math object is a built in JavaScript object that has a handful of properties that contain some math constants, plus a whole host of math functions.
  // The MDN docs is a great resource for discovering all of the available functions and how they work.
  // All of the properties and functions on the Math object are static. That means we don't need to create a new Math object before using it, we just use it directly. So let's access one of the Math object's contants:

  display(Math.PI);
  // We can also directly call functions on Math:
  display(Math.max(3, 42, 63));
  // Math.max() takes in unlimited numerical arguments and returns the largest of all of them
  //Math.round() will round a number to the largest whole integer
  display(Math.round(62.6333));
  //
  //
  //
  // The Date() object is fairly involved and we'll take a look at some of the more common features. First we'll create a new Date object:
  // let date = new Date();
  // Creating a date like this without passing in any parameters creates a new Date object that represents the current date and time.
  // There are a few constructors though that we can use when creating a Date.
  // The next one we'll take a look at takes in a number as a Date. This parameter is the number of miliseconds since January 1st, 1970 (UNIX Epoch Time). So if we create a date like this with 0 miliseconds:
  // let date = new Date(0);
  // display(date.toString());
  // Miliseconds since UNIX epoch time isn't a very useful way to create dates, however. So let's move on to a more intuitive constructor which takes an ISO 8601 string, which looks like this:
  // let date = new Date('2050-03-25T13:01:30Z')
  // display(date.toString())
  // This seems really useful but there's a problem with this constructor in that different browsers may handle that string inconsistently.
  // So by far, this isn't the best constructor, but one that takes in each date and time part as an integer like so:
  let date = new Date(2050, 3, 25, 13, 1, 30, 50); // Yields April instead of March because the months (and only the months) are zero based.
  // display(date.toString())
  // So these parameters in order are: year, month, day, hour, minute, second, and milisecond.
  // The date object above clearly says 3, which should be March, but yields April. The second parameter (for the month), for some unholy reason, the month parameter is zero based, and everything else is one based. So 0 is January, 1 is February, and 2 is March.
  // This is the most useful and accurate way to create dates in JavaScript, with the constructor shown above using year, month, day, hour, minute, second, and milisecond.
  // Now, let's take a look at these following functions. Each of these has a corresponding setter also, so I could call:
  date.setMonth(5);
  display(date.toString());
  // It's important to note that these getters return values that correspond to the time zone of the computer they are running on, but there are also UTC versions of these.

  display(date.getFullYear());
  display(date.getMonth());
  display(date.getDate());
  display(date.getHours());
  display(date.getMinutes());
  display(date.getSeconds());
  display(date.getMilliseconds);
  // The UTC versions of these are below:
  display(date.getUTCFullYear());
  display(date.getUTCMonth());
  display(date.getUTCDate());
  display(date.getUTCHours());
  display(date.getUTCMinutes());
  display(date.getUTCSeconds());
  display(date.geUTCMilliseconds());
  //
  //
  // Another useful thing to be aware of with Dates, is that we can subtract two dates in order to learn the amount of time between them.
  // So if we create two dates like so:
  let date1 = new Date(2050, 3, 25, 13, 1, 30, 50);
  let date2 = new Date(2050, 3, 25, 13, 1, 30, 55); 

  //
  //
  //
  //
})();
