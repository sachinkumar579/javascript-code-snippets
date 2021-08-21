// A function is a block of code.. It gets executed on invoking it. 

// Javascript Function syntax
// This is function declaration 
function name(parameter1,parameter2... ) {
  // code to be executed 
  // It can also have a return statement 
}

// A function is defined with function keyword, followed by a name, followed by paranthesis()
// The code inside the function will be executed when the function is invoked

// Function invocation Syntax
name(paramerter2,parameter2...)

// Function declaration vs Function expression
// There are 2 ways to define a function with function keyword in javascript

// Function declaration
function sayHi(){
  console.log('hi');
}

sayHi(); // This is invocation

//Function expression
// The function is assigned to a variable and the function is referred using the variable 
let sayHi = function() {
  console.log('hi');
}

sayHi() // This is invocation

// Function expressions are not hoisted 

//Source https://codeburst.io/javascript-demystified-02-function-hoisting-b83dcaeb265





