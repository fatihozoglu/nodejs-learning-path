// To run this script: node timers

// When writing JavaScript code, you might want to delay the execution of a function
// This is the job of setTimeout, we give a callback function and a delay value(in milliseconds)
setTimeout(() => {
  console.log("I executed after 2 seconds");
}, 2000);

// Calling setTimeout with a function which has some parameters
setTimeout(
  (name, age) => {
    console.log(`My name is ${name} and I am ${age} years old`);
  },
  5000,
  "Fatih", // name parameter
  30 // age parameter
);

// If you specify the timeout delay to 0, the callback function will be executed as soon as possible, but after the current
// function execution
// This is especially useful to avoid blocking the CPU on intensive tasks and let other functions be executed while performing
// a heavy calculation, by queuing functions in the scheduler.
setTimeout(() => {
  console.log(
    "I will execute as soon as possible because of 0 milliseconds delay"
  );
}, 0);

console.log(
  "I will execute first because all other functions are in setTimeout"
);

// setInterval will run the function forever, at the specific time interval you specify (in milliseconds)
let intervalID = setInterval(() => {
  console.log("I will appear in every 6 seconds");
}, 6000);

// Let's clear the interval after 30 seconds by using setTimeout and clearInterval
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval Cleared");
}, 30000);
