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

console.log(arr) // [1,2,3]

4. unshift() adds an item to the beginning and returns the length

console.log(arr.unshift(0)) // 5 

console.log(arr) // [0,1,2,3,4]

5. Deleting an item from the array

delete arr[1]

console.log(arr) // [1,empty,3,4]

console.log(arr.length) // 4

The element was removed, but the array still has 3 elements, we can see that arr.length == 4.
delete obj.key removes a value by the key. But for arrays we usually want the 
rest of elements to shift and occupy the freed place. We expect to have a shorter array now.
