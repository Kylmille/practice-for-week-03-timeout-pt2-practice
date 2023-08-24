/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples:

dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }
***********************************************************************/
function dynamicIntervalCount(cb, delay, amount) {
  let count = 0;//Create a variable called count and set it to 0
  let intervalId;//Create a variable called intervalId and leave it undefined

  const executeCallback = () => {//Create a function called executeCallback:
    cb();// Invoke the provided callback cb()
    count++;// Increment the count by 1

    if (typeof amount === 'number' && count === amount) {
    //If an amount argument is passed and the count reaches the desired amount:
      clearInterval(intervalId);
    //Clear the interval using clearInterval(intervalId)

    }
  };

  intervalId = setInterval(executeCallback, delay);
  // Set an interval with the executeCallback as the
  //callback function and the specified delay, and store the intervalId

  if (typeof amount !== 'number') {
  // If an amount argument is not provided (typeof amount is not 'number'):
    return intervalId;
    // Return the intervalId
  }
}

/*
//function dynamicIntervalCount(cb, delay, amount) {
    This line defines a new function named dynamicIntervalCount that takes
    three parameters: a callback function (cb), a delay in milliseconds (delay),
    and an optional amount indicating the number of times the callback should be executed.

//let count = 0;
//let intervalId;
    Two variables, count and intervalId, are declared using the let keyword. 
    count is initialized to 0 and will be used to track the number of times the
    callback function has been executed. intervalId is declared without an initial value.

//const executeCallback = () => {
    This line defines an arrow function named executeCallback.
    This function will be used to execute the callback function,
    increment the count, and potentially clear the interval.


//cb();
//count++;

    if (typeof amount === 'number' && count === amount) {
      clearInterval(intervalId);
    }
  };


//Inside the executeCallback function:
  The provided callback function (cb) is invoked.
  The count variable is incremented by 1.
  An if statement checks if an amount argument is provided and whether the count has
  reached the specified amount. 
  If both conditions are met, the interval is cleared using clearInterval(intervalId).
  
//intervalId = setInterval(executeCallback, delay);
    This line sets an interval using the setInterval function.
    The executeCallback function is used as the callback function,
    and the specified delay (delay) is used for the interval.



  if (typeof amount !== 'number') {
    return intervalId;
  }
}

//If the amount argument is not a number, meaning it wasn't provided or is not
 a numeric value:

//The function returns the intervalId. This allows you to access the interval 
  identifier outside the function, which can be useful for stopping the interval manually.

//If the amount argument is provided and is a number, the function ends without
   returning anything, which effectively prevents the intervalId from being returned.
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}
