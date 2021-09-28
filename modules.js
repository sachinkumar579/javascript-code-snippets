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



// Source https://javascript.info/modules-intro
