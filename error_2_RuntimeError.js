/*
Learn JavaScript: Error Handling
Runtime Errors

Errors contain useful messages that tell us why our program isn’t working or why the error was thrown. When an error is thrown, our program stops running and the console displays the error message in red text like so:

When we execute code and a line of code throws an error, that error is referred to as a runtime error. In JavaScript, there are built-in error objects that have a name and message property which tell us what went wrong. Examples of built-in runtime errors include:

    ReferenceError: when a variable or function cannot be found.
    TypeError: when a value is not a valid type, see the example below:

const reminder = 'Reduce, Reuse, Recycle';
reminder = 'Save the world';
// TypeError: Assignment to constant variable.
console.log('This will never be printed!');

In the example above, when we try to reassign a constant variable reminder, the TypeError is thrown. Code that is written after a thrown runtime error will not be evaluated, so the console.log() statement will not be evaluated.

Let’s see for ourselves what happens when a runtime error is thrown.
Instructions
1.

In main.js, we have a function throwError() that will throw a ReferenceError. There are also two console.log() statements, one at the top of the file and one at the bottom.

Call throwError() below the comment that indicates to call it. Observe what code runs and what code doesn’t.

Make sure you call throwError() before the second console.log() statement. If done correctly, the first console.log() statement will print while the second console.log() statement won’t.
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!

========================================================================================================================
console.log('This message will be printed to the console.');

function throwError () {
  return notDefinedVar;
}

// Call throwError() below:
throwError()

console.log('Because of the error, this will not printed!');


========================================================================================================================
displayed error :

This message will be printed to the console.
/home/ccuser/workspace/error-handling-runtime-errors/main.js:4
  return notDefinedVar;
         ^

ReferenceError: notDefinedVar is not defined
    at throwError (/home/ccuser/workspace/error-handling-runtime-errors/main.js:4:10)
    at Object.<anonymous> (/home/ccuser/workspace/error-handling-runtime-errors/main.js:8:1)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)

*/
