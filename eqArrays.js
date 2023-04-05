const assertEqual = function(actual, expected) {
  if (expected === actual){
    console.log("✅✅✅ " + "Assertion Passed: " + actual + " === " + expected);
  } else console.log("🛑🛑🛑 " + "Assertion Failed: " + actual + " != " + expected);
  }

  const eqArrays = function(array1, array2) {
    let output = true;
    if (array1.length !== array2.length) return false;
    for (let element = 0; element < array1.length; element += 1) {
      if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
        output = output && eqArrays(array1[element], array2[element]);
      } else if (array1[element] !== array2[element]) {
        output = output && false;
      }
    }
    return output;
  };


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
assertEqual(eqArrays(["1", 2, 3], ["1", 2, 3]), true);