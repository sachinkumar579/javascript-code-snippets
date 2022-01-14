// Try Catch Finally statements are used for efficient handling of errors in code 
// Basic syntax
try {
 // code to be executed that can result in errors

 } catch(err) {
   // handle the error 
  } finally {
    // runs irrespective of whether try block returns an error or not
  }

// Valid syntaxes
try{
 
} catch(err){
 
}

-------------------------
try{
 
} finally{

}

-------------------------
// Invalid
try{
 
}
// Console error Uncaught SyntaxError: Missing catch or finally after try

// More examples
try {
  try {
    junk1;
  } catch (err) {
    junk2;
    console.log(err);
  }
} catch (err) {
  console.log(err);
}

// Console error ReferenceError: junk2 is not defined
