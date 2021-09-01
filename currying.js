// currying converts a function f(a,b,c) to f(a)(b)(c)
// consider this code explaining currying 

function outerFunction(a) {
   console.log(a);
  
   function innerFunction(b) {
     console.log(b);
   }
  
  return innerFunction;
  
}


outerFunction(1)(2);
// outerFunction(1) gets executed first and it will return function innerFunction
// Since there is another pair of paranthesis the returned function innerFunction gets executed next
// If the function outerFunction doesn't return a function line 9 will give an error


