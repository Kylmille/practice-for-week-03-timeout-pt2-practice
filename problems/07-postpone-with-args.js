/***********************************************************************
Write a function, `postponeWithArgs`, that accepts a callback and a delay in
milliseconds as arguments. `postponeWithArgs` should return a new function that
accepts any number of arguments. When the returned function is called, it should
invoke the callback after the given delay, passing any arguments it receives to
the callback.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples

const greet = (person) => console.log('Hello ' + person + '!');
const slowGreet = postponeWithArgs(greet, 1000);
slowGreet('Rose'); // prints 'Hello Rose!' after 1000 ms
slowGreet('Alex'); // prints 'Hello Alex!' after 1000 ms

const printSum = (num1, num2) => console.log(num1 + num2);
const slowPrintSum = postponeWithArgs(printSum, 500);
slowPrintSum(4, 3); // prints '7' after 500 ms
slowPrintSum(2, 8); // prints '10' after 500 ms

***********************************************************************/

function postponeWithArgs(cb, delay) {
  //Return a new function that accepts any number of arguments:
  return function (...args) {
    //Use the rest parameter syntax (...)
    //to capture the arguments into an array called args
    setTimeout(() => {
      // Use setTimeout to delay the
      //invocation of the provided callback cb with the given delay:
      cb(...args);
      // Invoke the callback cb with the spread syntax (...)
      //to pass the captured arguments

    }, delay);
  };
}


/*
//function postponeWithArgs(cb, delay) {
  This line defines a new function named postponeWithArgs that takes two parameters:
  a callback function (cb) and a delay in milliseconds (delay). 
  This function is designed to return a new function that will delay the invocation of 
  the provided callback with the given delay, while also accepting any number of arguments.
  
//return function (...args) {
  This line uses the return statement to return a new anonymous function.
  This returned function uses the rest parameter syntax (...args) to capture any
  number of arguments into an array called args. 
  The returned function will accept and store all the arguments passed to it.

//setTimeout(() => {
  Inside the returned function, a setTimeout function is used to create a delay 
  before invoking the callback.
  
//cb(...args);
  Inside the setTimeout callback function, the provided callback function (cb) is invoked
  using the spread syntax (...args) to pass the captured arguments.
  This means that all the arguments passed to the returned function will be forwarded
  as individual arguments to the callback function.
  

      }, delay);
    };
  }

//The closing braces mark the end of the setTimeout callback function and 
the end of the returned function, as well as the end of the postponeWithArgs function.*

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = postponeWithArgs;
} catch {
  module.exports = null;
}
