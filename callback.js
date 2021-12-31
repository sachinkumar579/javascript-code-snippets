
setTimeout(function () {
  console.log("This gets printed after 2 secs");
}, 2000);

console.log("This is printed first");

// We pass an anonymous function as first argument to function setTimeout(), 2000 milliseconds as second argument.
// The supplied function is called callback. The inbuilt function setTimeout() waits for 2000 milliseconds and executes the callback function .
// While it is executing setTimeout() function it doesn't wait for 2000 milliseconds, instead it finishes its job of registering the callback
// function to be executed after 2000 milliseconds and executes the next lines of code, which is line 6 in this example. 
// And that is the reason line 6 message is printed first , almost instantly after running the code , and line 3 message gets printed after 2000 milliseconds
