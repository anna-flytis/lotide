// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected){
  console.log("✅✅✅");
} else console.log("🛑🛑🛑");
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);