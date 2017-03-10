##Javascript Function Basics

* Functions in JavaScript can be identified by the equals and greater-than sign, which form an arrow =>

* Can take parameters and the body need to be wrapped in curly braces.

* Can pass functions as parameters to other functions.

* To return a value you must explicitly call the return keyword. Not all functions need a return value, some functions produce side effects. Example console.log("Hi, you!") and return("Hi, You!").

* Pure function is returns a value with no side effects (and no side effect dependencies).

* Scope refers to the visibility of variables with respect to a function. A function can access both local and global variables.

```
let spaceThing = "is in space";

let spaceshipTwo = () => {
  spaceThing = "is in another spaceship";
}
```
* Within spaceshipTwo we do not use the let keyword. This means that, rather than define a new, local variable named spaceThing, we will instead reference the global variable defined above the function.

* When we use the let keyword, JavaScript knows to create a new variable within the current scope. When we omit let, however, JavaScript searches for an existing variable named spaceThing within the current scope.

* Scope chaining - Nesting variable scopes within another, and accessing variables from outer scopes.

* As we generally don't want functions to change the values of variables defined elsewhere, we can leverage function-local scopes to protect ourselves and our variables from unintentional changes, even when using the same variable names inside and outside of functions.

* As we generally don't want functions to change the values of variables defined elsewhere, we can leverage function-local scopes to protect ourselves and our variables from unintentional changes, even when using the same variable names inside and outside of functions.

* Function declarations load before code gets executed. Function expressions load when the JavaScript reaches that line of code.

* Function declarations look very similar to how functions and methods might look in other languages, but function expressions let us be very specific and about what kind of code we are trying to write. For example, function declarations shouldn't be be declared inside if statements or loops. In fact, different browsers will handle this kind of behavior differently. If you stick to function expressions broadly, you are likely to deal with less naming and scope issues long term.
