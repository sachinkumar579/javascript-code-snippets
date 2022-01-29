//  It fixes the problem of having to do multiple null checks when accessing a long chain of object properties in JavaScript. Introduced in ES2020

// optional chaining syntax has 3 forms 

// 1. obj?.prop returns obj.prop if obj exists otherwise undefined
// 2. obj?[prop] returns obj.prop if obj exists otherwise undefined
// 3. obj.method?.() calls obj.method() if method exists otherwise returns undefined  

// Source https://javascript.info/optional-chaining
// https://www.freecodecamp.org/news/javascript-optional-chaining-explained/
