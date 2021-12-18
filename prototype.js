// Prototype is a property on a function .. It allows us to share methods across all instances of a function 

// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), 
// that is either null or references another object. That object is called “a prototype”:

// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

//In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
//We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
//The object referenced by [[Prototype]] is called a “prototype”.
//If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
//Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
//If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
//The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.7

//The property [[Prototype]] is internal and hidden, but there are many ways to set it.

// One of them is to use the special name __proto__, like this:

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal   // set animal to be a prototype of rabbit 

alert( rabbit.eats ); // true // eats is taken from animal 
alert( rabbit.jumps ); // true

// The value of __proto__ can be either an object or null. Other types are ignored.
// There can be only one [[Prototype]]. An object may not inherit from two others.

// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
// As a result, methods are shared, but the object state is not.

// Function prototype
// By default all functions have F.prototype = { constructor: F }, so we can get the constructor of an object by accessing its "constructor" property.

// On regular objects prototype is nothing special . they can be added to an object like any other property 

let user = { prototype : 'no' } 

//Every function has the "prototype" property even if we don’t supply it.
//The default "prototype" is an object with the only property constructor that points back to the function itself.

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit );  // true 

// Sharing properties using prototype 

Array.prototype.doNothing = 1 // This property doNothing automatically becomes available for all arrays - a and b in this example  

let a   = [1,2,3]
console.log( a.doNothing )
  
let b = []
console.log(b.doNothing)

// Source https://javascript.info/function-prototype

// Source https://javascript.info/prototype-inheritance
