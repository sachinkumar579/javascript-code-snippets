// After having read a number of articles and watching some Youtube videos and verifying it myself using the Browser Devloper tools , 
// this is what I have understood about the Javascript exection model/ Event Loop / Callback queues/ Call Stack 

// Javascript is 
// single threaded - it can do one thing at a time
// non blocking - it can also execute tasks asynchronously using asynchronous APIs 

// Consider this code

console.log('begin')

setTimeout(()=>{console.log('inside settimeout')}, 3000) 

console.log('end')

// How does javascript execute this code. 

// Creates a global execution context and puts it into the call stack - with no variables and function definitions 
// It starts with line 7 - puts the stmt to the call stack and executes  - printing begin in the console - and it is removed from the call stack 
// Puts setTimeout() function to the call stack - Runs the setTimout Web API - removes the setTimeout() function from the queue 
// Control goes to the next line 11 . Puts the stmt to the call stack - prints end to the console - And it is removed from the call stack
// Removes the global execution context from the call stack since that was the last line of code and there is no more code to execute
// Call stack is empty now
// setTimeout WebAPI call puts the anonymous function in the queue after a delay of 3000ms or 3 secs 
// Event loop checks the queue for any messages and immmediately puts the messages to the call stack
// In this case, the event loop puts the message or instructions or code "console.log('inside settimeout') to the call stack 
// It prints inside settimeout to the console and removes the message from the queue
// Call stack is empty again 


// Summary 
// All code/functions are added to the call stack and call stack can do only one thing at a time or it can execute only a single piece of code at a time
// Callbacks are placed in a queue. Event loop continously checks for any messages in the callback queue and puts it in the call stack 
// If the call stack is not empty Event loop will wait till the stack is cleared and then place the message in the call stack 
// Call Stack uses LastInFirstOut method for execution and Queue uses FirstInFirstOut method 

// Source
// https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript
