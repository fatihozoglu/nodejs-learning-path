// To run this script: node argumentsFromCommandLine FirstArgument SecondArgument 100 200 300

// Get and log the arguments from command line
console.log(process.argv); // process.argv returns an Array of arguments

// First element in process.argv Array
console.log(process.argv[0]); // The first element is the full path of the node command

// Second element in process.argv Array
console.log(process.argv[1]); // The second element is the full path of the file being executed (argumentsFromCommandLine.js in this case)

// You can iterate over all the arguments (including the node path and the file path) using a loop
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// All the additional arguments are present from the third position(process.argv[2]) going forward
// You can get only the additional arguments by creating a new array that excludes the first 2 params
let additionalArguments = process.argv.slice(2);
console.log(additionalArguments);

// You can iterate over all the additional arguments using a loop
additionalArguments.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// Important: As you can see from the console, elements in process.argv array are all string data type
