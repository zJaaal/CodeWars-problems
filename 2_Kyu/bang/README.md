Write a function named `bang` throwing an `Error` with a message string `"Just throw like this!"`  
with these limits:

-   no invoking `require` function
-   no invoking function constructors
-   no invoking `eval` function
-   no `throw` in your code
-   no `Error` in your code
-   no `\` in your code

Also, we removed `fs` and `vm` from global scope, redefined `assert`, and removed `assert` from `console`.  
Do not modify `Error` in global scope, we do not use it to check ( J/K, we do use it ).
