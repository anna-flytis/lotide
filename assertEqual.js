// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (expected === actual){
  console.log("✅✅✅ " + "Assertion Passed: " + actual + " === " + expected);
} else console.log("🛑🛑🛑 " + "Assertion Failed: " + actual + " != " + expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);