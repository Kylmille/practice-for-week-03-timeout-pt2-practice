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

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = postponeWithArgs;
} catch {
  module.exports = null;
}
