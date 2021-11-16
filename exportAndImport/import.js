// Please first check the export.js file to understand how import works
// To run this script(in nodejs_learning_path): node exportAndImport/import

// Import object from export.js
const items = require("./export");
// Or you can import items one by one: const name = require("./export").name;
// Or you can use object destructuring: const { name, lastName, age, car, multiply } = require('./export')

// Let's check what is inside the imported object
console.log(items);

// Use imported multiply function
items.multiply(5, 9); // Logs the result to console

console.log(items.name);
console.log(items.lastName);
console.log(items.age);
console.log(items.car);
