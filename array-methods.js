let arr = [1,2,3,4]

console.log(arr)  // [1,2,3,4]

1. push() adds item to the end and returns the length
 
arr.push(5) 

console.log(arr) // [1,2,3,4,5]

2. pop() extracts an item from the end and returns that item 

console.log(arr.pop()) // Taking line 1 as input for all examples - 4

console.log(arr) // [1,2,3]

3. shift() extracts an item from the beginning and returns the length 

console.log(arr.shift()) // 1

console.log(arr) // [2,3,4]

4. unshift() adds an item to the beginning and returns the length

console.log(arr.unshift(0)) // 5 

console.log(arr) // [0,1,2,3,4]

5. Deleting an item from the array

delete arr[1]

console.log(arr) // [1,empty,3,4]

console.log(arr.length) // 4

The element was removed, but the array still has 4 elements, we can see that arr.length == 4.
delete obj.key removes a value by the key. But for arrays we usually want the 
rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

6. splice()

let arr = ["I" , "am" , "Sachin"]

console.log(arr.splice(1,1)) // "am" 

console.log(arr) // ["I","Sachin"]

let arr = ["I" , "am" , "Sachin"]

arr.splice(0,1,"ok")

console.log(arr)  // ["ok","am","sachin"]

let arr = ["I" , "am" , "Sachin"]

arr.splice(0,2,"ok") // This also removes the array of removed elements 

console.log(arr)  // ["ok","sachin"]

// Splice can also insert without removals .. by using 0 

let arr = ["I" , "am" , "Sachin"]

arr.splice(2,0,"ok") 

console.log(arr)  // ["I","am","ok","sachin"]

// Negative index 

let arr = ["I" , "am" , "Sachin"]

arr.splice(-1,0,"ok") 

console.log(arr)  // ["I","am","ok","sachin"]


7. slice([start],[end])

// Retutns a new array copying all items from start index to end (not including end)

let arr = ["I" , "am" , "Sachin"]

let slicedArr = arr.slice(1,3) 

console.log(slicedArr) // ["am" , "Sachin"]
 
console.log(arr)  // ["I" , "am" , "Sachin"] . The original array is unaffected 

// arr.slice() creates a copy of arr. That’s often used to obtain a copy for 
// further transformations that should not affect the original array.

let arr = ["I" , "am" , "Sachin"]

console.log(arr.slice(-2)) // ["am" , "Sachin"] -2 till the end 

8. concat()

// The method arr.concat creates a new array that includes values from other arrays
// and additional items. The original array is unmodified

arr.concat(arg1, arg2...)

let arr = [1,2,3,4]

let arr1 = [5,6,7,8]

let arr2 = [9,0]

console.log(arr.concat(arr1,arr2)) // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]



let arr = [1,2,3,4]

let arr1 = { name : "sac"}

let concatArr = arr.concat(arr1)
 
console.log(concatArr) // (5) [1, 2, 3, 4, { name : "sac" }] . The object is itself is stored in index 4

9. Iterate : forEach
// This method allows to run a function for every element in the array
let arr = [1,2,3,4]

arr.forEach(function(item,index,array) {
  console.log("Item is " + item+ " at Index " + index + " In Array  " + array) 
})

//Output
//Item is 1 at Index 0 In Array  1,2,3,4
//Item is 2 at Index 1 In Array  1,2,3,4
//Item is 3 at Index 2 In Array  1,2,3,4
//Item is 4 at Index 3 In Array  1,2,3,4

10. Searchin in an array

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.

let arr = [1,2,3,4,false,true]

console.log(arr.indexOf(true))  // 5

// They use === for comparison 

let arr = [3,4,false,"1",3]

console.log(arr.indexOf(3)) // 0

console.log(arr.lastIndexOf(3)) // 4

console.log(arr.includes(4)) // true 

11. find()

// If the code returns true the search will be stopped and the current item will be returned
// The find method looks for a single (first) element that makes the function return true.

let users = [
   {id: 1 , name:"sachin"},
   {id: 2 , name:"kumar"},
   {id: 3 , name:"not-so-cool"}
]

let user = users.find((user)=> {
  return user.id==1
})

console.log(user) // { id: 1 , name:"sachin" } . It has the 3rd object here because user.id at this iteration is 3 and that object is returned which is stored in user variable

12. findIndex() 

// Same as index but it returns the index where the element was found 
// Whenever it returns true 

13. filter()

// same as find but filter  returns an array of all matching elements 

let users = [
   {id: 1 , name:"sachin"},
   {id: 3 , name:"kumar"},
   {id: 3 , name:"not-so-cool"}
]

let user = users.filter((user)=> {
  return user.id==3
})

console.log(user) // { id: 3 , name:"kumar" } , { id: 3 , name:"not-so-cool" }

14. map()

// This transforms the input array

let users = [ "sachin","kumar","uncool"]

let userLength = users.map((item,index,array)=> {
  return item.length
})

console.log(userLength) // [6,5,6] 

15. sort()

// Sorts the array in place

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2

//The items are sorted as strings by default.
//All elements are converted to strings for comparisons. 
//For strings, lexicographic ordering is applied and indeed

// To have our own sorting order we should supply a function
// as an argument of sort() method

function compare(a,b) {
  if(a>b) return 1 ;
  if(a==b) return 0; 
  if(a<b) return -1; 
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15


//Source https://javascript.info/array-methods

