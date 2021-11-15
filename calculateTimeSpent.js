// To run this script: node calculateTimeSpent

// This function logs all numbers from 1 to number
const count = (number) => {
  for (let i = 1; i < number; i++) {
    console.log(i);
  }
};

// We are curious about how much time count(50000) takes to execute
// So we declare measureTime Function to measure the process time of count function
const measureTime = () => {
  console.time("count(50000) Executes in:"); // String inside console.time('String') must match with console.timeEnd('String')
  count(50000); //Invoke count function with 50000 (Logs numbers between 1 and 50.000)
  console.timeEnd("count(50000) Executes in:"); // String inside console.timeEnd('String') must match with console.time('String')
};

// Invoke measureTime function to see how much time count function takes to execute in Console
measureTime();

// Important: Be careful that console.time, console.timeEnd and count are all Synchronous Functions in this example

// To calculate the execution time of an Asynchronous Function
const asyncFunction = () => {
  console.time("asyncFunction Executes in:");
  setTimeout(() => {
    console.timeEnd("asyncFunction Executes in:");
  }, 2000);
};

// asyncFunction should execute around 2 seconds because of the setTimeout function inside it
asyncFunction();
