// JSON is a data format that has its own independent standard and libraries for most programming languages.
// JSON supports plain objects, arrays, strings, numbers, booleans, and null.
// JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
// Both methods support transformer functions for smart reading/writing.
// If an object has toJSON, then it is called by JSON.stringify.

let user =  { name : "Sachin" , age: 32}

console.log(JSON.stringify(user)) // {"name":"Sachin","age":32}

// Source https://javascript.info/json
