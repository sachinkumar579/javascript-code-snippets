// There are 8 data types in JS . 7 are primitive data types that can hold a single value either a number or string. 
// Objects are used to stored keyed collections of data 
// An object can be created with {} . A property is a key:value pair where key is a string and value can be anything

let user = {    // an object
    
    name: 'Tony',  // this is a property with name as key and value 'Tony'
    age : 36   // Another property with age as key and value 36 
  
} 

// Accessing property values using dot notation

console.log(user.name) // Tony

// Adding properties

user.isAdmin = true 

//Removing property

delete user.age

// multi worded property name 

let user = {    // an object
    
    name: 'Tony',  // this is a property with name as key and value 'Tony'
    age : 36,   // Another property with age as key and value 36 
    'am i cool' : 'No'  
} 

// For multi worded properties dot notation doesnt work, use square bracket notation

console.log( user['am i cool']) // No 

// Another way to access as result of expression 

let key =age

console.log( user[key] ) // 36 

// using square brackets in an object literal 

let key = 'name'
let user = {
    
   [ key ] : 'Tony'   
    
}

// [key] means the property names should be taken from kay value 

console.log(user.name) // Tony

// property value shorhand

let name = 'Tony'
let age = 36
let user = {
   name, // same as name:name
   age // same as age:age 
}

console.log(user) // name: "Tony", age: 36 

// reserver words can be used a object property names

//Numbers are automatically converted to strings when used as property name
// 0 becomes "0"

let user= {} 

console.log(user.name) // undefined

// Property existence 
let user = { name : 'Tony' } 

console.log( "name" in user)  // should contain the actual property name 

// undefined values should not be explicitly assigned. Use null or unknown values or empty values


// source https://javascript.info/object

