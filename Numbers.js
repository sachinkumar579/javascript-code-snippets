// In modern JS there are 2 types for numbers-  regular and bigint numbers 

// Regular number range - 2.pow(53) to 2.pow(-53)

// We can use underscore as separator for big numbers. makes it more readable

 let num = 12_122
 
 console.log(num) // 12122

 let num =1e2
 
 console.log(num) // 100

let num = 1e-4

console.log(num) // 0.0001


// toString(base) The method num.toString(base) returns a string representation of num in the numeral system with the given base.

let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111

let num = 14

console.log(num.toString(2)) // 1110

// Base can vary from 2 to 6. Default is 10 

// If we want to call a method directly on a number we have use 2 dots 

console.log(1..toString()) // "1" string represenation 

// The reason 1 dot doesn't work because it creates ambiguity whether the number will have a decimal part 

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

// Math.trunc (not supported by Internet Explorer)
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:


let num = "12px"
 
console.log(parseInt(num))  // 12

let num = "px12"
 
console.log(parseInt(num))  // NaN


// Math.random() Returns a random number from 0 to 1 (not including 1).
// Math.max(a, b, c...) / Math.min(a, b, c...) Returns the greatest/smallest from the arbitrary number of arguments.
// Math.pow(n, power) Returns n raised to the given power.

