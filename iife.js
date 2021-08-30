// Immediately invoked function expression  (iife)

let sayHello = ( function() { return 'hello' } ) ();
console.log(sayHello)

// Explanation - The code within () gets executed here. The code here is returning string 'hello' and that gets assigned to the variable sayHello

// an even better version with arrow functions

let sayHello = (() => {
   return 'hello'
}) ();

console.log(sayHello)

( function() { console.log('hello') } ) () ;

// iife is executing a function while defining the function 
