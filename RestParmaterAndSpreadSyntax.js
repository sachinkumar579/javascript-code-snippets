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


