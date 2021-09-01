// Used for creating many objects of the same kind - employee, student, car 

// Basic syntax

 class ClassName {
   
    constructor(name) {
       this.name = name
    }
   
    method1() { 
       console.log('name is' +this.name)
    }
 }

 // Creating an object and calling the class methods
 let classObject = new ClassName('JSengine');
 classObject.method1();

// When new new ClassName('JSengine') is called a new object is created and constructor code is executed
// name is printed on calling method1() in line 18 . On creating the object in line 17 the value
// JSengine is assigned to name and that is how the same value gets printed on calling method1() function

console.log(typeof ClassName) // will print function 



