// Debouncing and throttling techniques are used to limit the number of times a function can execute.

// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

// In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the 
// user stops firing the event.

// The main difference between throttling and debouncing is that throttling executes the function at a regular interval,
// while debouncing executes the function only after some cooling period.

// code

  let waiting = false;
  let timerId = null;

  function throttle(){
    if(waiting){
      return
    }
    waiting=true
    setTimeout(()=>{doSomeHeavyOperation(); waiting=false},3000) // This is executed once every 3 secs  
  }

  function debounce(){
    clearInterval(timerId)
    timerId = setTimeout(doSomeHeavyOperation,2000) // This will be executed when the function is not called for 2 secs ( or when no text is typed in the below search box for 2 secs)  
  }

  function doSomeHeavyOperation(){
    console.log('doing something..')
  }

// HTML 
// <body>
//   <input type="text" oninput="debounce()"> 
// </body>

// Source https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
