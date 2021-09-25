let a

let b = a ?? "default value" 

console.log(b) // "default value" 

a = null 

b = a ?? "default value again"

console.log(b) // "default value again" 

a = undefined  

b = a ?? "default value once again"

console.log(b) // "default value once again" 

// Treats null and undefined similarly . Result of a ?? b is a if a not null/undefined or b if b is not null/undefined 
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.


// if both are undefined

let a

let c 

let b = a ?? c 

console.log(b) // undefined 

// Source https://javascript.info/nullish-coalescing-operator
