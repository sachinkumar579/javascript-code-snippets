// Arrays is a special data structure used for storing ordered collections 

// An array can store elements of any type

let arr = [ 1, "one" , true , null , undefined , function() {} ]

console.log(arr) // index.html:57 (6) [1, 'one', true, null, undefined, ƒ]


let arr = [ 1, "one" , true , null , undefined , function() {console.log('in here')} ]

console.log(arr) // (5) [1, 'one', true, null, undefined]

let f = arr[5]

f() // in here 

// Array methods

let arr = ["one","two","three"]

console.log(arr.pop())  // three

console.log(arr)  // ["one","two"]

console.log(arr.push("three")) // 3

console.log(arr)  // ["one","two","three"]

console.log(arr.shift()) // one

console.log(arr) // ["two","three"]

console.log(arr.unshift("one")) // one

console.log(arr) // ["one","two","three"]


let arr = ["one","two","three"]

console.log(arr.push("four","five")) // 5

// Arrays are copied by reference


let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}


//  the simplest way to clear the array is: arr.length = 0;. length property is writable 

// Two objects are equal == only if they’re references to the same object.
// If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter 

// Source https://javascript.info/array


