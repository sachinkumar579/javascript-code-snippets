// An elegant way of writing functions 

// Basic syntax

let func = ()=> { console.log('do nothing') } ;

console.log(func) // ()=> { console.log('do nothing') }

func() // prints 'do nothing'

let func = ()=> 1 ; // This means return the value 

console.log(func()) // prints 1. In this case it has the returned value of the function

let func = ()=>  {1} ; // func has the function definition 

console.log(func()) // In this case it will run the function and it does not return anything . So it is undefined 

// Mutliple arrow operators

let sum = (a) => (b) => console.log(a + b);

sum(3)(3);

// is same as writing

function sum(a) {
       return function(b) {
          console.log(a+b);
     }
}


