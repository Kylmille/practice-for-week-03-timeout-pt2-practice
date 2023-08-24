/***********************************************************************
Write a function, `postpone`, that accepts a callback and a delay in
milliseconds as arguments. `postpone` should return a new function. When
the returned function is called, it should invoke the callback after the
given delay.

Hint: use closures and setTimeout to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples

const sayHello = () => console.log('hi');
const slowHello = postpone(sayHello, 1000);
console.log(slowHello); // [Function]
slowHello(); // prints 'hi' after 1000 ms

const sayGoodbye = () => console.log('bye');
const slowerGoodbye = postpone(sayGoodbye, 1750);
console.log(slowerGoodbye); // [Function]
slowerGoodbye(); // prints 'bye' after 1750 ms
***********************************************************************/
function postpone(cb, delay) {
  //Create and return a new function:
  return function() {
    //The new function delays the invocation of the provided callback (cb)
    // after the given delay:
    setTimeout(cb, delay);
    // Use setTimeout to set a timeout for the callback after the specified delay
  };
}


/*
//function postpone(cb, delay) {
  This line defines a new function named postpone that takes two parameters:
  a callback function (cb) and a delay in milliseconds (delay). 
  This function is designed to return a new function that will delay the invocation of the
  provided callback after the given delay.

//return function() {
  This line uses the return statement to return a new anonymous function. 
  This returned function doesn't have a name and takes no parameters. 
  It will be invoked when the returned function is called later.



//setTimeout(cb, delay);
    Inside the returned function, the setTimeout function is used to set up a timeout.
    The provided callback function (cb) will be invoked after the specified delay (delay).


  };
}

The closing braces mark the end of the returned function and the end of the postpone function.


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = postpone;
} catch {
  module.exports = null;
}
