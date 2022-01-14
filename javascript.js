// Clear explanation as given in stackoverflow 

// JavaScript is single threaded and has a synchronous execution model. Single threaded means that one command is being executed at a time. 
// Synchronous means one at a time i.e. one line of code is being executed at time in order the code appears. So in JavaScript one thing is happening at a time.

// Execution Context 
// The JavaScript engine interacts with other engines in the browser. In the JavaScript execution stack there is global context at the bottom and then when we 
// invoke functions the JavaScript engine creates new execution contexts for respective functions. When the called function exits its execution context is popped 
// from the stack, and then next execution context is popped and so on...

// Source https://stackoverflow.com/questions/2035645/when-is-javascript-synchronous
