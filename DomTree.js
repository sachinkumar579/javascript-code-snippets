// The backbone of an HTML document is tags. According to the Document Object Model (DOM), every HTML tag is an object All these objects are accessible using JavaScript

// For example, document.body is the object representing the <body> tag. 

// DOM represents HTML as a tree structure of tags.

// the top tag is always <html>. Even if it doesn’t exist in the document, it will exist in the DOM, because the browser will create it.

// The document object that represents the whole document is, formally, a DOM node as well.

// $ ( insert a number).methods()  - get a node from elements in console 

// We can use developer tools to inspect DOM and modify it manually.

// An HTML/XML document is represented inside the browser as the DOM tree.

// All operations on the DOM start with the document object. 

// Ways to search nodes in DOM 
// If an element has the id attribute, we can get the element using the method document.getElementById(id), no matter where it is.

// elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector.

// console.log(elem) shows the element DOM tree.
// console.dir(elem) shows the element as a DOM object, good to explore its properties.

// When the browser loads the page, it “reads” (another word: “parses”) the HTML and generates DOM 
// objects from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects.

// Too tired today 
// Source https://javascript.info/dom-nodes
