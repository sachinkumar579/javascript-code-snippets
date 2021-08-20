
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
promise.then( result=> alert(result) , error => alert(error));
// The first argument is a function which runs when the promise is resolved and receieves the result
// The second argument is a function which runs when the promise is rejected and receives the error

//This can also be written as 
promise.then( result => alert(result) ).catch( error => alert(error));
//The function inside then would be called on fulfillments and the function inside catch would be called on rejections 

// Reference https://javascript.info/promise-basics
