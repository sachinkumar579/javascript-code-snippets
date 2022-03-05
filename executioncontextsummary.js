// Summary

// When JavaScript runs codes, it creates a space for storing and managing variables and functions. 
// It keeps track of the names and changes. Whenever a function is created, JavaScript makes this space 
// and puts it on the top of the stack, where previously existing those spaces are stacked from the bottom. This space is called the execution context.
// There are two execution contexts in JavaScript — the global execution context and the function execution context. 
// An execution context is consist of LexicalEnvironment and ThisBinding. LexicalEnvironment is the place where variables and 
// functions are actually stored and managed. ThisBinding is the reference for this but we didn’t cover that here.
// JavaScript has two phases when it comes to managing variables and functions — creation phase and execution phase. 
// During the creation phase, variables are declared but set by the default value, normally undefined, while functions are 
// declared and initialized at once. After the creation phase, the action control moves to the execution phase, where all of 
// the codes are executed, one by one, from the top of the file. If a function is invoked during this phase, a new execution 
// context for that function will be created and stored in the stack. 
// Even though an execution context is deleted from the stack once it has run all the codes inside, a reference to the
// function is alive when the original function returns a new function that uses a variable out of its scope. Then, the 
// link to the outer function won’t be deleted until its codes are executed and completely removed from the stack.
// This is called Closure. Closure is a function that allows you to access the parent’s function scope, even though its execution phase is finished.
// A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, 
// and the variable is the reference to actual object [including function object] or primitive value).

// Source https://betterprogramming.pub/execution-context-lexical-environment-and-closures-in-javascript-b57c979341a5
