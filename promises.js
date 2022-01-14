// Promises are used to write asynchronous code 

 let promise = new Promise( function (resolve,reject){
    setTimeout( ()=> {resolve("done") } , 2000); 
 });

// On running this code the executor will be executed immediately by new Promise constructor . 
// The executor recieves 2 arguments resolve and reject. These functions are created by Javascript 
// We should call onf them when its ready 
// After 1 second of processing the executor calls resolve("done") to produce the result.
// This changes the state of promise object from pending undefined to fulfilled done. 
//The Promise constructor takes a function (an executor) that will be executed immediately and 
//passes in two functions: resolve , which must be called when the Promise is resolved (passing a result),
//and reject , when it is rejected (passing an error)
// Promises are objects representing the result of a single (asynchronous) computation
// resolve and reject function can be called only onve during the execution


// .then .catch and .finally
1. promise.then( result=> alert(result) , error => alert(error));
// The first argument is a function which runs when the promise is resolved and receieves the result
// The second argument is a function which runs when the promise is rejected and receives the error

//This can also be written as 
2. promise.then( result => alert(result) ).catch( error => alert(error));
//The function inside then would be called on fulfillments and the function inside catch would be called on rejections 

// In practice, an executor usually does something asynchronously and calls resolve/reject after some time


// Promises chaining

let promiseChaining = new Promise((res, rej) => {  // The executor function starts executing asynchronously 
  res(1);  // Promise is resolved here . this will execute line 36 then method because it is resolved 
})
  .then((data) => {
    console.log(data);  // prints 1 because that is the value from returned Promise in line 34 
    return 2 * data; // Returns a promise object with value 2 and status fulfilled 
  })
  .then((data) => 2 * data) // Returns a promise object with value 4(2*2) and status fulfilled
  .then((data) => 2 * data); // Returns a promise object with value 8(2*4) and status fulfilled

promiseChaining.then((data) => console.log(data)); // prints 8 got from the promise object in line 41 


//Demonstrating errors

let f = new Promise((res) => res(10));
let er = f.then((a) => a.toFixed(200)).catch((err) => err); // catch method will return a promise object with the error object
console.log(er);

// Console message 
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: RangeError: toFixed() digits argument must be between 0 and 100 at Number.toFixed (<anonymous>) at http://127.0.0.1:5500/node.js:3:26
message: "toFixed() digits argument must be between 0 and 100"
stack: "RangeError: toFixed() digits argument must be between 0 and 100\n    at Number.toFixed (<anonymous>)\n    at http://127.0.0.1:5500/node.js:3:26"
[[Prototype]]: Error

// .catch handles errors in promises of all kinds: be it a reject() call, or an error thrown in a handler.
// In case of an error, the promise becomes rejected, and the execution should jump to the closest rejection handler.
// What happens when a regular error occurs and is not caught by try..catch? The script dies with a message in the console. 
// The JavaScript engine tracks such rejections and generates a global error in that case.
// In the browser we can catch such errors using the event unhandledrejection:

// Solve 
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
// there’s an "implicit try..catch" around the function code. So all synchronous errors are handled.
// But here the error is generated not while the executor is running, but later. So the promise can’t handle it.

         
//The difference between the 2 forms is that if success callback returns a rejected promise only in 2. the error will be caught by catch()
// Reference https://javascript.info/promise-basics
