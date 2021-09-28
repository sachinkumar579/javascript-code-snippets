// A module is a js file that can be loaded in any js file 
// They can load each other and use directives like export and import to interchange functionality ,call functions of one module from another one 

// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.

//Syntax

some.js
export function sayHi(user) {
  alert(`Hello, ${user}!`); // Hello Sachin
}

// index.html
<script type="module"> 
import {sayHi} from './some.js';

sayHi('Sachin')
</script>

------------------------------------------------------

some.js
export let name = "sachin";
export const age = 32;


//index.html
<script type="module">
import {name,age} from './some.js';
console.log(name,age)
</script>

-----------------------------------------------------
  
index.html
<script type="module"> 
import {updateName} from './some.js';
let name = updateName()
console.log(name)
</script>

some.js
export function updateName() {
  return name;
}

let name = "sachin";

----------------------------------------------------

// A good practice followed for exporting variables/functions
// is to put them at the end of the file 

some.js 
function updateName() {
  return names;
}

let names = "sachin";

let doNothing = function () {};

export { updateName, names, doNothing };

// However the placement of export statement doesn't matter. It unbelievably works 
// if you at the top or anywhere in the file 

some.js 
export { updateName, names, doNothing, a };

function updateName() {
  return names;
}

let names = "sachin";
let doNothing = function () {};
let a = { a: 1 };

index.html
<script type="module"> 

import {updateName,doNothing,names,a} from './some.js';

let name = updateName()

console.log(name,doNothing,names,a)

</script>

----------------------------------------------------------------

// A module is evaluated only the first time it is imported 

index.html
<html lang="en">
<head>
    <script type="module" src="index.js" defer> </script>    
</head>
<body>
  
</body>
<script type="module">
    import { b } from "./some.js";
    console.log(b)
</script> 
</html>

some.js
console.log("some");
export let b = "s";

index.js
console.log("hi");
export let a = "a";
import { b } from "./some.js";

// output

//some
//hi
//s  // Notice some is printed first because import statements are evaluated first . In index.js the control first goes to some.js 


// Here is the flow 
// Line 98 starts executing index.js script 
// Since it has import stmt it evaluates some.js and since it has export it gets the
// variable b with value s . some is printed first and then hi and line 103 is executed 

// Source https://javascript.info/modules-intro
