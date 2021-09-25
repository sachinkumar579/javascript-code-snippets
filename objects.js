// There are 8 data types in JS . 7 are primitive data types that can hold a single value either a number or string. 
// Objects are used to stored keyed collections of data 
// An object can be created with {} . A property is a key:value pair where key is a string and value can be anything

let user = {    // an object
    
    name: 'Tony',  // this is a property with name as key and value 'Tony'
    age : 36   // Another property with age as key and value 36 
  
} 

// Accessing property values using dot notation

console.log(user.name) // Tony

// in dot notation we cannot use variable names

let user = { name : "Tony" } 
let key = "name"

console.log(user.key) // undefined
console.log(user[key]) // Tony
console.log(user["name"]) // Tony

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

// for in loop - to iterate over an object 
for (let key in user) {
    console.log(user[key]) //Tony
}

// Ordering in objects
// Integer keys are sorted and non integer keys are listed in creation order

// this

// Actions are represented in JS by functions in properties 

let user = {
    name: 'Tony',
    age :36 
}

user.sayHello = function() {
    console.log('hello');   
}

//  a function that is a property of an object is called a method 

// shorter syntax
let user = {
    name: 'Tony',
    age :36 ,
    sayHello : function() {
    console.log('hello');   
    }
}


// or

let user = {
    name: 'Tony',
    age :36 ,
    sayHello() {
    console.log('hello');   
    }
}

// using this . this refers to the current object 
let user = {
    name: 'Tony',
    age :36 ,
    sayHello() {
    console.log('hello '+this.name); // this value will be user    
    }
}


let user = {
    name: 'Tony',
    age :36 ,
    sayHello() {
    console.log('hello '+user.name); // this is possible too   
    }
}


// this can be used in any function even if it is not a method of an object 
// the rule in obj is simple - if obj.f() is called this here refers to obj 
// if there is a this inside a function it should be called in an object context 
// In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”
// Arrow functions have no this. It is taken from the outer normal function 


// In Javascript , objects are assigned by references and not by values 
let arr1 = [1 , 2 , 3 , 4 ]
let arr2 = arr1

arr1.push(5)

console.log(arr1) // [1,2,3,4,5]

console.log(arr2) // [1,2,3,4,5]


let obj = { a : 1 ,b:2 , c:3}

console.log(Object.keys(obj)) // ['a','b','c']
console.log(Object.values(obj)) // [1,2,3]
console.log(Object.entries(obj))  // [ ['a',1] , ['b',2] , ['c',3] ] 

//Both objects and arrays are considered “special” in JavaScript. 
//Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). 
//Arrays are a special type of variable that is also mutable and can also be used to store a list of values



// source https://javascript.info/object-methods
// source https://javascript.info/object

