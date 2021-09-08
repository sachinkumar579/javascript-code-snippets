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



// Source https://javascript.info/prototype-inheritance
