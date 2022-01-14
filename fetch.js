// Fetch API available in the browser can be used to make asynchronous HTTP requests 

// It returns a Promise . then and catch methods can be used to further handle the data or for error processing 

// If the contents of the response are in text format, text() method can be used . Other methods available - json() , blob() 

// Code samples 

let response = fetch("http://localhost:8080/data") // This makes an asynchronous HTTP call 
  
let data = response.then(data=>data.json())  // The returned response is a promise object . We call then on this response object and it returns another promise object with the JSON

data.then(data=> console.log(data)) // Calling then on this object will give the actual data that is coming from the HTTP call 'http://localhost:8080/data' . Here we print the JSON

// Using async/await 

fetchText() // Execution begins  - it calls the function 

async function fetchText() {
    let response = await fetch('http://localhost:8080/data');  // Makes an asynchronous HTTP call . Since the fetch API call is appended with fetch , 
    // it makes Javascript wait for the promise. It doesn't execute the next lines yet . fetch API call must return a promise object and only then it will continue with
    // the next line 
  
    let data = await response.json(); // Same execution principle . data variable will have the JSON data returned from the HTTP call 'http://localhost:8080/data' 
    
    console.log(data); // Prints the object 
}

// The fetch() returns a promise that rejects when a real failure occurs such as a web browser timeout, a loss of network connection, and a CORS violation.
//  It has to be noted that it only makes the async function block wait and not the whole program execution.
// The fetch() returns a promise that rejects when a real failure occurs such as a web browser timeout, a loss of network connection, and a CORS violation.

// Error scenarios  - When the server is down 

fetchText(); // Execution begins  - it calls the function

async function fetchText() {
  let response;
  try {
    response = await fetch("http://localhost:8080/data"); // Returns an error 
    console.log("here");  // This line is not executed 
  } catch (err) {
    console.log(response); // prints undefined
    console.log(err); // prints the error object 'TypeError: Failed to fetch'
  }
}

// Source https://www.javascripttutorial.net/javascript-fetch-api/
