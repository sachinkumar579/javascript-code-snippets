// In JS textual data is stored as a string . there is no special type to store characters . The internal format is always UTF-16

// Strings can be enclosed within either single quotes, double quotes or backticks:
// Backticks allow us to add an expression 

// Some special characters - \n new line , \\ backslash

// The length property has the strins length

let string = "sachin"

console.log(string.length) // 6

// To get a character at a position use square brackets 

let string = "sachin"

console.log(string[1])  // a

console.log(string.charAt(1)) // a

// Iterating using for .. of

let string = "px12"
 
for(let char of string) {
  console.log(char) // prints p  x  1  2
}

// Strings are immutable . They can't be changed

// Methods toLowerCase() and toUpperCase() change the case

let string ="i am cool"

console.log(string.indexOf("am"))  // 2

let string ="i am cool"

console.log(string.indexOf("am",2))  // 2

console.log(string.indexOf("am",2))  // 2

console.log(string.indexOf("am",3))  // -1


let string ="i am cool oo"

console.log(string.lastIndexOf("oo"))  // 10

console.log(string.lastIndexOf("oos"))  // -1 

// includes, startsWith, endsWith are other string methods

// There are 3 methods in JavaScript to get a substring: substring, substr and slice.

// method	                selects…	                            negatives
// slice(start, end)	    from start to end (not including end)	allows negatives
// substring(start, end)	between start and end	                negative values mean 0
// substr(start, length)	from start get length characters	    allows negative start

// localeCompare can be used for string comparison 


// Source  https://javascript.info/string

