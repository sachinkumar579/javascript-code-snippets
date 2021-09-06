let client = "Thor";

function printName() {
  console.log(client);
}

printName();
//closure - a function that remembers where it is created and has access to outer variables

let num = 1;

function outerFn() {
  function innerFn() {
    console.log(num);
  }
  return innerFn;
}

let fn = outerFn();

fn();

//Every running function has something called lexical environment
//Lexical env has environment record for storing all objects/function declarations and reference to outer lexical environment

// Every function, on creation , is assigned an internal property called [[scope]]

// [[scope]] property is assigned to a function when it is created not when it is invoked 

// Scope chaining - memory space of the function that was called + the memory space of its outer function 

// Closure is a function that allows you to access to the parent function scope, even though it’s been 
// removed from the execution context stack.   

// Check this very interesting piece of code
    let a =1 
    function cal(){
        let b =2 
        return () => {console.log(a+b)}
    }

    let funCal = cal()

    funCal() // This prints 3 ( 1 + 2) in line 39 

// When cal() finishes execution after calling from line 42, the EC is removed from EC call stack
// When the returned anonymous function is called in line 44 it still has access to variable b




// A very good explanation is given here https://betterprogramming.pub/execution-context-lexical-environment-and-closures-in-javascript-b57c979341a5
