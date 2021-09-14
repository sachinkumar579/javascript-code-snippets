// ES 6 introduced object destructuring syntax that provides a way to assign properties of an object to variables
// We can extract data from arrays and objects and assign them to variables 
// Syntax . Consider the below 

let user = { name : 'sachin' , age : 100 } 

let { name : name , age  : age } = user 

console.log(name) // sachin

console.log(age) // 100

let { group : group } = user 

// If the property doesn't exist the value will be undefined 

console.log(group) // undefined 

// Shorhand syntax

let { name, age } = user

console.log(name) // sachin

console.log(age) // 100 



