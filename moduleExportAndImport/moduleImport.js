// To run this script: node moduleExportAndImport/moduleImport

// Import the object exported from moduleExport.js
const person = require("./moduleExport");

// Log person object
console.log(person);

// Log the properties of person object
console.log(person.name);
console.log(person.lastName);
console.log(person.age);
