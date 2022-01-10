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

