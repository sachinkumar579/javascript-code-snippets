// The spread operator ... is used to expand or spread an iterable or an array 

// copy array using spread operator

// clone array using spread operator 

// spread operator with object 

// Rest parameter 

let data = [ 1 , 2 ]

let arr = [ 3 , 4 ]

let final = [...data , ...arr]

console.log(final) // [1,2,3,4]

// A very strange problem 
const user = {
  name:'sachin',
  location : {
    city:'Delhi',
    country:'India'
  }
};

const copy = {...user}
copy.name="Mang"

console.log(user,copy)



let str  = "sachin"

const st = [...str]

console.log(st) // returns and array ['s','a','c','h','i','n']

const st = {...st}

console.log(st) // returns and array { 0:'s',1:'a',2:'c',3:'h',4:'i',5:'n' }
