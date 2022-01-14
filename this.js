// 'this' in simple terms usually refers to the current object reference 

// The value of this is the object “before dot”, the one used to call the method

let user = { 
            name : 'john' , 
            age : 12 , 
            sayHi : console.log(this) 
           } 

user.sayHi() // prints user object. this in line 8 points to user object 


// The value of this is evaluated during the run-time, depending on the context.

// The rule is simple: if obj.f() is called, then this is obj during the call of f. 

//  If there’s this inside a function, it expects to be called in an object context. 

// In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

// arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.


// source https://javascript.info/object-methods
