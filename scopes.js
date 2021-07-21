const globalScopeC = "10";
let globalScopeL ="learning javascript";
var globalScopeV = "old school";

// Still using notepad at this point. Because I want to be a Javascript expert.

console.log( globalScopeC , globalScopeL , globalScopeV );
// Prints all values

{
const blockScopeC = "20";
let blockScopeL ="learning javascript";
var blockScopeV = "old school";  

console.log( blockScopeC , blockScopeL , blockScopeV ) 
 // Prints perfectly on the console
}

console.log(blockScopeV)
//We can access var variables declared in block scope

function sayHelloFn() {
   const fucntionScopeC = "20";
   let functionScopeL ="learning javascript";
   var functionScopeV = "old school";  

   console.log("hello") 
   console.log( c , l , v )
   // Prints all values because a function has access to its outer variables

}

console.log( fucntionScopeC , functionScopeL , functionScopeV );
// No, you can't access funcion scoped variables. These variables are not visible outside. 
