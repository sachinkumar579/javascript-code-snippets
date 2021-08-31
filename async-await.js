// A simplest definition I have found so far

// Async makes a function return a Promise

// Await makes a function wait for a Promise

async function myFunction(){
  return "hello"
}

//same as

async function myFunction(){
  return Promise.resolve("hello")
}

//How to use the Promise

myFunction().then( 
  function(value) { // code is successful } ,
  function(error) { // code if there is an error }
)

// The word async before the function will make sure that the function
// wil always return a Promise. All values will be wrapped in a Promise




