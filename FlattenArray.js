// Flattening array - creating one array from nested array elements or a new array with sub array elements concatenated into it 
// Ex [[[1,2,3]],3,4,5] = [1,2,3,3,4,5] with depth Infinity 
// [[[[[1,2,3]]]]] = [1,2,3] with depth Infinity 
// [1,2,[[3,4]]] = [1,2,[3,4]] with depth 1 . Visualizing this - Array[ index(0) = 1 , index(1) = 2  , index(2) = [3,4] ]
// [1,2,[[3,4]]] = [1,2,3,4] with depth 2 
// Flattening removes empty slots in array . [1,2,3,,,,,5] = [1,2,3,5]
let numsArr = [[1, 2, 3, 9, 4, 6], 1];

// Using Javascript Array flat method 
console.log(numsArr.flat()); // [1, 2, 3, 9, 4, 6, 1] ; depth defaults to 1 

let flattenedArr = [];

function iterate(ele) {
  ele.forEach((element) => {
    if (Array.isArray(element)) {
      iterate(element);
    } else flattenedArr.push(element);
  });
}

iterate(numsArr);

console.log(flattenedArr);
