// Global scope
const globalScopeC = "10";
let globalScopeL = "learning javascript";
var globalScopeV = "old school";

// Still using notepad at this point. Because I want to be a Javascript expert.

console.log(globalScopeC, globalScopeL, globalScopeV);
// Prints all values

// Block scope
{
  const blockScopeC = "20";
  let blockScopeL = "learning javascript";
  var blockScopeV = "old school";

  console.log(blockScopeC, blockScopeL, blockScopeV);
  // Prints perfectly on the console
}

console.log(blockScopeV);
//We can access only var variables declared in block scope

// Function scope
function printValues() {
  const functionScopeC = "20";
  let functionScopeL = "learning javascript";
  var functionScopeV = "old school";

  console.log(globalScopeC, globalScopeL, globalScopeV);
  console.log(functionScopeC, functionScopeL, functionScopeV);
  // Prints all values because a function has access to its outer variables  + variables declared within function scope.

  //console.log(blockScopeC, blockScopeL, blockScopeV);
  //If you uncomment this you will see an error because the visibility for these variables is only between line 10 to line 17
}

printValues();

//console.log(fucntionScopeC, functionScopeL, functionScopeV);
// No, you can't access funcion scoped variables. These variables are not accessible outside.

// local scope is any scope created within global scope 

// Every time a new function is declared , a new local scope gets created and variables declared inside the function belong to that unique scope 
