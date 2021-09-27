// A module is a js file that can be loaded in any js file 
// They can load each other and use directives like export and import to interchange functionality ,call functions of one module from another one 

// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.

//Syntax

// index.html
<script type="module"> 
// 📁 main.js
import {sayHi} from './sayHi.js';

sayHi('Sachin')
</script>

sayHi.js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`); // Hello Sachin
}


// Source https://javascript.info/modules-intro
