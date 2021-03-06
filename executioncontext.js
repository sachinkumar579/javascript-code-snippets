// Following events happen as Javascript engine starts reading the code 

// The global execution context is created before any code is executed

// When a function is executed a new execution context is created

// Every context provides this keyword which points to an object to which the current code that is executed belongs to 

// In JavaScript, execution context is an abstract concept that holds information about the environment within which the current code is being executed.

//Memory creation phase 

//Creation of a scope , Creation of a scope chain , Determination of value of this 

// The information about the process of execution of a running function is stored in its execution context 

// Execution context refers to the code that is currently running and everything else that helps

// JS engine creates a global execution context even before the code is executed. It gives 2 things by default - window object and this keyword

// Every execution context has a reference to its outer scope all the way up to the global scope. This chain of reference is a called a scope chain4

// this always get set to a leading parent object of a function at the time of execution 

// a simple rule = function call = new execution context 

// this keyword by default points to the global window object and sits within the global scope 

// A global Window object is created when JS engine starts executing the code 

// Global object in a browser is called Window , Scripts running under node have an object called global 

var a = 1 ;

console.log(window.a) // 1 will be printed 

function sayHello() {
   console.log('hello') 
}

window.sayHello() // will print hello 
sayHello()  // will print hello 
// Global variables and functions are stored as properties in window object 

// window can also be replaced with this 

// let and const variables are not stored in the global space 
// Source https://codeburst.io/js-demystified-04-execution-context-97dea52c8ac6

// The js engine maintains a stack - execution context stack or call stack, which contains these contexts 
// and the global execution context stays at the bottom of this stack. And a new execution context is created
// and pushed to the stack when execution of a function begins.

// The are 2 kinds of execution contexts - global execution context and function execution context .
// The difference being global execution context is created by JS engine even before the execution starts
// It has the global Window object , this reference and variable/function declarations. Variables= undefined and function declaration
// Whereas function execution context is created when the function is invoked. It contains the function arguments, this reference and 
// variable/function declaration. Variables = undefined and function declaration

// Source https://stackoverflow.com/questions/35759544/what-is-the-difference-and-relationship-between-execution-context-and-lexical-en
// A very good explanation is given here https://betterprogramming.pub/execution-context-lexical-environment-and-closures-in-javascript-b57c979341a5
