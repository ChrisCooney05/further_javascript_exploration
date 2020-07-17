// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
dragons.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
dragons.filter((name) => name.includes("John"));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

function calculates(num) {
  return num ** 100;
}
//OR//

const power100 = (num) => num ** 100;

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
//1e+300
//1.23e6 = 1.23 * 1000000
//so our number has 300 0's
