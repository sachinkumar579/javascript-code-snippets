// A function can be called with any number of arguments , there will be no error because of excessive arguments 

let sum = 0 ;

function add(a,b) 
{
   sum = a+b;
}

add(1,2,3,3,4)

console.log(sum) // 3  . 3,3,4 will be ignored


// Using the rest operator 

function print(...arr) { // the dots ... here mean gather all parameters into an array 

    for(let index in arr) {
       console.log(arr[index]) 
    }
  
}
  

print(1) // prints 1 
print(1,2) // prints 1 2
print(1,2,3) // prints 1,2,3 

// The rest parameters must be at the end 
function fuctionName(arg1,arg2.... , ...args) // args here will be an array 

// ... rest must always be the last 

// Rest allows us to get an array from a list of parameters 

// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

let arr = [3,2]

function add(a,b,c){
    console.log(a+b+c)
}

add(1,2,...arr) // 1 will be assigned to a, 2 will be assigned to b , 3 from arr[0] will be assigned to c , 2 from arr[1] will be ignored 

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
  
let arr = [3,2]

let arrCopy= [1,arr] 

console.log(arrCopy) // arrCopy[0] = 1 , arrCopy[1] = arr (the array itself is stored in index position 1 )

arrCopy = [ 1,...arr]

console.log(arrCopy) // arrCopy[0] = 1 , arrCopy[1] = 3 , arrCopy[2] = 2 

// Source  https://javascript.info/rest-parameters-spread
