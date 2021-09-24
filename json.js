// JSON is a data format that has its own independent standard and libraries for most programming languages.
// JSON supports plain objects, arrays, strings, numbers, booleans, and null.
// JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
// Both methods support transformer functions for smart reading/writing.
// If an object has toJSON, then it is called by JSON.stringify.

// JavaScript provides methods:

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

let user =  { name : "Sachin" , age: 32}

console.log(JSON.stringify(user)) // {"name":"Sachin","age":32}

let user =  { name : "Sachin" , age: 32 , lazy : true , life: undefined, happiness: null}

console.log(JSON.stringify(user)) // {"name":"Sachin","age":32,"lazy":true,"happiness":null}

let user =  { name : "Sachin" , age: 32 , lazy : true , life: undefined, happiness: null , anarray : [1,2] , anotherobject: { a:1,b:2}}

console.log(JSON.stringify(user)) // "name":"Sachin","age":32,"lazy":true,"happiness":null,"anarray":[1,2],"anotherobject":{"a":1,"b":2}}


let jsonUser = '{"name":"Sachin","Age":31}'

console.log(jsonUser) // {"name":"Sachin","Age":31}

console.log(JSON.parse(jsonUser)) // {name: 'Sachin', Age: 31}


// Source https://javascript.info/json
