// You can use and object literal to define an object
const person = {
  name: "John",
  lastName: "Doe",
  age: 30,
};

// With module.exports, this file can export just "person" object
module.exports = person;

// Important: With module.exports you can only export only one object from this file, otherwise you will get an error
