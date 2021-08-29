// Immediately invoked function expression 

let sayHello = ( function() { return 'hello' } ) ();

console.log(sayHello)

// an even better version with arrow functions

let sayHello = (() => {
   return 'hello'
}) ();

console.log(sayHello)
