// To run this script: node eventLoop

// The Node.js JavaScript code runs on a single thread. There is just one thing happening at a time
// You mainly need to be concerned that your code will run on a single event loop, and write code with this thing in mind to avoid blocking it.

// Example of a blocking JS code, you can't do anything else until this code finishes executing
function count() {
  for (let i = 0; i <= 2000000000; i++) {
    if (i === 2000000000) {
      console.log("count function finally finished...");
    }
  }
}

// Invoke count function, any other code after calling this function will wait this function to finish executing
console.log("----First Example Starts Here----");
count();
console.log("I am other codes after count function and waited it to finish :(");
console.log("Me too :(");
console.log("----First Example Ends Here----");
console.log("\n");

// What if we don't want to wait for count function to finish? Can't we just keep going with other codes and get the result when count function finishes executing? Yes we can :)

// Because we invoked count function inside setTimeout callback, it will be called when any other function calls are finished in call stack
// setTimeout creates a timer which is 0 here and when timer expires, count function is put in the Message Queue. The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like 'onload'.
//The event loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.
console.log("----Second Example Starts Here----");
setTimeout(() => {
  count();
}, 0);
console.log("I didn't have to wait for count function to finish :)");

// Job Queue is used by Promises. It's a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.
new Promise((resolve, reject) => resolve("Promise Result")).then((resolve) =>
  console.log(resolve)
);
console.log("Promise will wait for me");

// As you can see in the console, because Promise results are in Job Queue, it is reached as soon as possible, but setTimeout waits for any other function in the call stack and it is executed at last
