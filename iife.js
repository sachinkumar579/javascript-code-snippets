// Immediately invoked function expression 

let sayHello = ( function() { return 'hello' } ) ();
console.log(sayHello)

// Explanation - The code within () gets executed here. The code here is returning string 'hello' and that gets assigned to the variable sayHello

// an even better version with arrow functions

let sayHello = (() => {
   return 'hello'
}) ();

console.log(sayHello)
