// To run this script: FIRST_NUM=10 SECOND_NUM=20 node readEnvVariables

// We are going to take two environment variables while running this script FIRST_NUM and SECOND-NUM
let firstNumber = process.env.FIRST_NUM;
let secondNumber = process.env.SECOND_NUM;

// Function to log the data types of the environment variables
function showDataType(a, b) {
  console.log(a, typeof a);
  console.log(b, typeof b);
}

// Invoking the showDataType function with environment variables
showDataType(firstNumber, secondNumber);

// Important: Environment variables are string type so we need to convert them explicitly before usage to avaid bugs in our code
