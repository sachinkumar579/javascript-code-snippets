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
    

// Another example to explain async and await
    
// Since this function has the word async it will wrap the return object and return it as a Promise    
async function fetchData() {
    let resp = await fetch('https://reqres.in/api/users?page=2') // Returns a resolved promise on success 
    return resp.json(); // returns the JSON data 
}

fetchData().then(user=>{   // then() method is for handling a successful response 
    user.data.forEach(item => {  //Iterate through all items in data array and print the values 
       console.log(item) 
})});
 
    
// Here we are fetching JSON data using Fetch API 
// JavaScript Fetch API can be used to make asynchronous HTTP requests. We can make HTTP requests to servers using Web browsers 
// The fetch() method is available in the global scope that instructs the web browsers to send a request to a URL.
// To get the actual data we can call one of the methods of the Response object - text() for raw data, json() for JSON data 
    
