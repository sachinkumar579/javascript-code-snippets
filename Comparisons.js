// To compare strings Javascript uses Unicode order . Strings are compared letter by letter

let result = "sachin" > "kumar"

console.log(result) // true

result = "A" > "a" 

console.log(result) // false 

// When comparing values for different types JS converts the values to numbers

console.log('1' == 1 ) // true 

console.log('1' == 2 ) // false

// For boolean values true becomes 1 and false becomes 0 

console.log(true == 1 ) // true

console.log(true == 2) // false

console.log(true == "1") // true 

console.log(false == "") // true 
console.log(false == 0) // true 
console.log(false == "0") // true 

// operands of different types are converted to numbers by the equality operator ==
// A strict equality operator === checks the equality without type conversion

// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

console.log(1+null) // 1

console.log(1+undefined) // NaN 

console.log(null==0) // false 
//equality check == and comparisons > < >= <= work differently.



