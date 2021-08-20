// To understand hoisting we should understand the different phases Javascript engine goes through the code

// Javascript engine is a programme which reads and runs Javascript code . It does its job in 2 phases - memory creation phase and execution phase 

//Consider the below code  
console.log(x)
//This throws an error - Uncaught ReferenceError: x is not defined

//Consider this code
console.log(x)
var x 
// This prints undefined . 
// How ?
// During memory creation phase Javascript engine recognises variable declarations as it reads the code, initializes them to undefined and puts them into memory
// to be used in execution phase 

//This is called Variable Hoisting 

//Source https://codeburst.io/javascript-demystified-variable-hoisting-c3c4d2e8fd40
