const assertEqual = function(actual, expected) {
  if (expected === actual){
    console.log("✅✅✅ " + "Assertion Passed: " + actual + " === " + expected);
  } else console.log("🛑🛑🛑 " + "Assertion Failed: " + actual + " != " + expected);
  }

  const tail = function(arr){
    array2 = arr.slice(1,arr.length);

  }

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
