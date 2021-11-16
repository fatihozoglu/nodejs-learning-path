// To run this script: node callback

// Import axios
const axios = require("axios");

// Callback functions are functions passed as an argument to another function
// Functions which accepts other functions as argument or returning a function are called Higher Order Functions

// Let's first define a Higher Order Function (Because it will take another function as argument)
// This function will take a number and a callback function as parameter and execute the callback inside it's body
function higherOrderFunction(number, callback) {
  console.log("higherOrderFunction started executing");
  callback(number);
  console.log("higherOrderFunction finished executing");
}

// Let's define our callback function to add numbers between 1 to number
function add(number) {
  console.log("callback function started executing");
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  console.log(`callback function finished executing, TOTAL: ${total}`);
}

// Let's call our Higher Order Function with a number and add function as a callback
higherOrderFunction(100, add);

// Result will be:
// higherOrderFunction started executing
// callback function started executing
// callback function finished executing, TOTAL: 5050
// higherOrderFunction finished executing

// But this example seems useless. Where can i really use this ? Let's see.
// We have a function which takes an object and returns the stringified version of the object
function stringifyObject(object) {
  console.log(JSON.stringify(object));
}

// We have another function which makes an API call and returns an object as a result
// function apiCall() {
//   axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.data);
// }

// We want to get the data first with apiCall function and stringify the returned object. How can we do that ? Let's modify
// our apiCall function to make it take a callback
// We will wait for the data first and then call callback function with that data
function apiCall(callback) {
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
    callback(response.data);
  });
}

apiCall(stringifyObject); // Result will be: {"userId":1,"id":1,"title":"delectus aut autem","completed":false}

// Let define another function to use as a callback in apiCall, which will return keys in the object
function returnKeys(object) {
  console.log(Object.keys(object));
}

apiCall(returnKeys); // Result will be: [ 'userId', 'id', 'title', 'completed' ]
