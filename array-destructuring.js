// Array destructing - a JS expression to assign array values to variables

//Syntax

let data = [ 1, 2, 3, 4 ]

let [ one, two ] = data

console.log(one)  // 1

console.log(two)  // 2

let [ one, two , three , four , five ] = data

console.log(five) // undefined 

let [ a , b ] = [ 1 , 2 ]

console.log(a) // 1 

console.log(b) // 2 
