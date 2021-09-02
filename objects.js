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

console.log( user['am i cool'])

// source https://javascript.info/object
