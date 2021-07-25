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
