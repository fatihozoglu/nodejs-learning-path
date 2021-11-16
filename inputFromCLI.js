// To run this script: node inputFromCLI

// Import readline module to get input from CLI
const readline = require("readline");

// Create an interface with .createInterface() method of readline module
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Getting the input from CLI with .question() method and when the answer is entered it calls the callback function
readlineInterface.question("What is your name?\n", (name) => {
  console.log(`Hello ${name}`);
  // We need to close the interface with .close() method in callback function
  readlineInterface.close();
});
