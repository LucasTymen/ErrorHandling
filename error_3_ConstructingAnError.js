/*
Learn JavaScript: Error Handling
Constructing an Error

JavaScript errors are objects that have a name and message property. Previously, we’ve seen how built-in errors alert us about common mistakes in our code. But, what if we need an error message that isn’t covered by the built-in errors? Let’s say we need to inform a user that a string passed in as an argument is too short with a custom message. Such a message isn’t covered by a built-in error, but we could use the Error function to make our own error object with a message that is unique to our program!
*/

console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.

/*
The Error function takes an argument of a string which becomes the value of the error’s message property. In the code snippet above, we used the Error function to create an error object that has the message 'Your password is too weak.'.

You might also see errors created with the new keyword. Both methods will lead to the same functionality. Take a look:

console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.

Keep in mind that creating an error is not the same as throwing an error. A thrown error will cause the program to stop running. We cover how to throw our created errors in the next exercise!
Instructions
1.

At the top of main.js add a console.log() that prints an error with the message 'User missing name'.

After running the code, take note of the console.log() at the bottom of main.js and if that line of code still runs.

The argument passed to the Error() function becomes the message property of the new error. You may use the Error() function create the error object or use the new keyword with the Error().
*/
console.log(Error('Message goes here'));
// OR
console.log(new Error('Message goes here'));
/*
Either line of code will do the same thing.
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!

========================================================================================================================
the code :
*/
// Write your code below:
console.log(new Error('User missing name'))


console.log('Will logging the error stop our program from running?');
/*
========================================================================================================================
Error displayed :

Error: User missing name
    at Object.<anonymous> (/home/ccuser/workspace/error-handling-error-construction/main.js:2:13)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
    at bootstrap_node.js:542:3
Will logging the error stop our program from running?
*/
