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


// Source https://javascript.info/modules-intro
