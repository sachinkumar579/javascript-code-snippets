// Using call,apply,bind we can control this parameter and run functions 
// call 
let user = { name : 'sachin' } 

function print() {
  console.log(this.name) // sachin. this = user object
}

print.call(user)

// call with arguments 
let user = { name : 'sachin' } 

function print(message) {
  console.log(message+this.name) // hello sachin . this = user object
}

print.call(user,"hello") 

//apply 
let user = { name : 'sachin' } 

function print(message) {
  console.log(message+this.name) // sachin
}

let arr = [ 'hello' ]
print.apply(user,arr) // hello sachin 

// bind
let user = { name : 'sachin' } 

function print(message) {
  console.log(message+this.name) //hello sachin
}

let func = print.bind(user)  // assigns print function definition to func variable with this pointing to user object

func("hello") 
