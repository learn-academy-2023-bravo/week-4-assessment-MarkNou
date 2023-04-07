// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeShuffle", () => {
  const removed1 = ["purple"]
  const removed2 = ["chartreus"] 
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(removeShuffle(colors1)).toEqual(expect.not.arrayContaining(removed1))
    expect(removeShuffle(colors1)).toEqual(expect.not.arrayContaining(removed2))
    
  })
})

// Jest output: 
// FAIL  ./code-challenges.test.js
// removeShuffle
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function called 'removeShuffle' that takes in an array as a parameter
// Assign the array to a variable called 'removed' that will apply the built-in method '.shift()' to remove the first value
// Use built-in method '.sort()' with 'Math.random()' to randomize the order
// Call a return to get a mutated array with the first index removed, and the rest shuffled.


const removeShuffle =  (array) => {
    const removed = array.shift()
    array.sort(() => Math.random() - 0.5)
    return array
}

// Jest output:  PASS  ./code-challenges.test.js
// removeShuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (5 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.777 s, estimated 1 s

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("voteTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(voteTally(votes1)).toEqual(11)
    expect(voteTally(votes2)).toEqual(-31)
  })
})

// Jest output:
// FAIL  ./code-challenges.test.js
// removeShuffle
//   ○ skipped takes in an array, removes the first item from the array and shuffles the remaining content
// voteTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally (2 ms)

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function called 'voteTally' that takes in an object as an argument
// Create a variable with const called 'total' that will hold the output
// Using dot notation, call the keys from the objects and subtract 'upVotes' from 'downVotes'
// Return the variable 'total'

const voteTally = (object) => {
    const total = object.upVotes - object.downVotes
    return total

}

// Jest output:
// PASS  ./code-challenges.test.js
// removeShuffle
//   ○ skipped takes in an array, removes the first item from the array and shuffles the remaining content
// voteTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally (4 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

fdescribe("noDups", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(noDups(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// Jest output:
// FAIL  ./code-challenges.test.js
// removeShuffle
//   ○ skipped takes in an array, removes the first item from the array and shuffles the remaining content
// voteTally
//   ○ skipped takes in an object that contains up votes and down votes and returns the end tally
// noDups
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values (4 ms)

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Pseudocode
// Create a function called noDups that takes in 2 arrays as parameters.
// Create a new variable called 'newArray' that will hold array1 and array2 concated.
// Create a new variable called 'arrayNoDups' that will remove duplicates.
// Use 'Set' to create a new object will remove duplicates.
// Use Array.from to revert the object back into an array.

const noDups = (array1, array2) => {
  newArray = array1.concat(array2)
  arrayNoDups = Array.from(new Set(newArray))
  return arrayNoDups
}

//Jest output:
// PASS  ./code-challenges.test.js
// removeShuffle
//   ○ skipped takes in an array, removes the first item from the array and shuffles the remaining content
// voteTally
//   ○ skipped takes in an object that contains up votes and down votes and returns the end tally
// noDups
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (5 ms)
