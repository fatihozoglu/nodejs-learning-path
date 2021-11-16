// An object literal to export
const car = {
  brand: "Ford",
  model: "Fiesta",
};

// A function to export
function multiply(a, b) {
  console.log(a * b);
}

// export can be used directly this way also
exports.name = "John";
exports.lastName = "Doe";
exports.age = 30;

exports.car = car;
exports.multiply = multiply;

// Important: Every data exported with exports keyword will be combined into a single object
// {
//     name: 'John',
//     lastName: 'Doe',
//     age: 30,
//     car: { brand: 'Ford', model: 'Fiesta' },
//     multiply: [Function: multiply]
// }
