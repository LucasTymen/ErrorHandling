/*
Learn JavaScript: Error Handling
The throw Keyword

Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.

To throw an error in JavaScript, we use the throw keyword like so:
*/

throw Error('Something wrong happened');
// Error: Something wrong happened

/*
When we use the throw keyword, the error is thrown and code after the throw statement will not execute. Take for example:
*/

throw Error('Something wrong happened');
// Error: Something wrong happened

console.log('This will never run');

/*
After throw Error('Something wrong happened'); is executed and the error object is thrown, the console.log() statement will not run (just like when a built-in JavaScript error was thrown!).

In the next lesson we will cover how to handle an error so that the rest of our code can run!
Instructions
1.

Use the throw keyword to throw an error with the message 'Username or password does not match'

After you clear this checkpoint, try adding some code after your throw statement. Also, try to throw a new error and other data types to see what happens!

To use the throw keyword, use the following syntax:
*/

throw Error('Helpful message to pinpoint what went wrong!');

//Or

throw new Error('Helpful message to pinpoint what went wrong!');

/*
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!

========================================================================================================================
throwing Error code :
*/
throw new Error('Username or password does not match')
/*
========================================================================================================================
displayed Error :
Learn JavaScript: Error Handling: The throw Keyword
Learn
Learn JavaScript: Error Handling
The throw Keyword

Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.

To throw an error in JavaScript, we use the throw keyword like so:

throw Error('Something wrong happened');
// Error: Something wrong happened

When we use the throw keyword, the error is thrown and code after the throw statement will not execute. Take for example:

throw Error('Something wrong happened');
// Error: Something wrong happened

console.log('This will never run');

After throw Error('Something wrong happened'); is executed and the error object is thrown, the console.log() statement will not run (just like when a built-in JavaScript error was thrown!).

In the next lesson we will cover how to handle an error so that the rest of our code can run!
Instructions
1.

Use the throw keyword to throw an error with the message 'Username or password does not match'

After you clear this checkpoint, try adding some code after your throw statement. Also, try to throw a new error and other data types to see what happens!
Checkpoint 2 Passed

To use the throw keyword, use the following syntax:

throw Error('Helpful message to pinpoint what went wrong!');

Or

throw new Error('Helpful message to pinpoint what went wrong!');

Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Still have questions? View this exercise's thread in the Codecademy Forums.
1
2
Output:

/home/ccuser/workspace/error-handling-throw/main.js:2
throw new Error('Username or password does not match')
^

Error: Username or password does not match
    at Object.<anonymous> (/home/ccuser/workspace/error-handling-throw/main.js:2:7)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
    at bootstrap_node.js:542:3
*/
