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


// Await - works only inside async block

async function sayHello() {
        let promise = new Promise((res)=>{
            setTimeout(()=>{res("done")}, 3000)
        })

        let val = await promise; // The keyword await makes JS wait until the promise is settled and returns the result
        return val;
}

console.log(sayHello()) // done will be printed after 3secs because setTimeout will resolve the promise after 3secs
    

