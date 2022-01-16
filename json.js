// JSON supports plain objects, arrays, strings, numbers, booleans, and null.

// JSON.stringify to convert objects into JSON. The result is a string following JSON notation 
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

let s = { name: "sachin" };
console.log(JSON.stringify(s)); // {"name":"sachin"} 

let t = '{"name":"sachin"}';
console.log(JSON.parse(t)); // object {name:'sachin'}

let s = ["1", , [1, 2], 121211, { a: 1 }, true, undefined, null];
console.log(JSON.stringify(s));  // ["1",null,[1,2],121211,{"a":1},true,null,null]   (string representation)

let s = ["Sachin", "kumar"];
console.log(JSON.stringify(s)); // ["Sachin","kumar"] (string representation)
 
// Source https://javascript.info/json
