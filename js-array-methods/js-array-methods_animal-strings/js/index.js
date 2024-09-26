console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

// const hippoExists = animalStrings.find("hippo");
const hippoExists = animalStrings.includes("hippo");

// Hint: You can pass the starting index as second parameter.
// const catStartingFromIndexFiveExists = animalStrings.find("cat", 4);
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 4);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) => animal = animal.startsWith("p"));

const indexOfGiraffe = animalStrings.findIndex((animal) => animal === "giraffe");
// const indexOfGiraffe = animalStrings.findIndex((animal) => animal.find("giraffe"));

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// That's why we use toSorted()
const animalsSortedAlphabetically = animalStrings.toSorted((nameA, nameB) => {
  if (nameA < nameB) {
    return -1;
  } if (nameA > nameB) {
    return 1;
  }
    return 0;
});

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) => animal.endsWith("z"));

const everyAnimalHasMoreThanTwoLetters = animalStrings.every((animal) => animal.length > 2);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

// Option 1:

const sumOfAllAnimalCharacters = animalStrings.reduce((accumulator, animal) => {
  return accumulator + animal; // Alle Tiernamen zu einem String zusammenfügen
  }, '').length; // Länge des resultierenden Strings zurückgeben


  console.log(sumOfAllAnimalCharacters);

  // Option 2

// const sumOfAllAnimalCharacters = animalStrings.map(animal => animal.length) // Erzeuge ein Array mit den Längen
//   .reduce((accumulator, length) => accumulator + length, 0); // Summiere die Längen

// console.log(sumOfAllAnimalCharacters);

// 0 ist der Anfangswert für den accumulator. Wir wollen mit einer Summe von 0 starten



export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};




// In the `./index.js` file, there is an `animalStrings` array with - guess what? - animal names as strings.

// Below this array, you will find a couple of variables (e.g. `hippoExists`). They all are initialized with `null`.

// And now it's your turn: delete the value `null` and write code such that the variables have a value corresponding to their name. Use the following methods to achieve this goal:

// - `Array.includes()`
// - `Array.find()`
// - `Array.findIndex()`
// - `Array.toSorted()`
// - `Array.some()`
// - `Array.every()`
// - `Array.reduce()`

// Additionally, you will need:

// - `String.startsWith()`
// - `String.endsWith()`

// You will find some hints as comments. Use console.log() to see if you get the expected result.

// Switch to the `./index.js` file and work with animals!

// This challenge comes with tests. See below how to start them.