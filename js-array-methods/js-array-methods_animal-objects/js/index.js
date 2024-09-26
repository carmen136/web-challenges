console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];


// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = animals.find((animal) => animal.name.startsWith("g"));

console.log(firstAnimalStartingWithLetterG);


// mit Verwendung der extracted animal names Variable:
// const indexOfAnimalWithNameLongerFive = animalNames.findIndex((name) => name.length > 5);

const indexOfAnimalWithNameLongerFive = animals.findIndex((animal) => animal.name.length > 5);

console.log(indexOfAnimalWithNameLongerFive);
// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// Make sure to use toSorted() instead.

const animalsSortedAlphabetically = animals.toSorted((animalA, animalB) => {
  if (animalA.name < animalB.name) {
    return -1;
  }
  if (animalA.name> animalB.name) {
    return 1;
  }
  return 0
});

console.log(animalsSortedAlphabetically);


const animalsSortedByWeightStartingWithLowest = animals.toSorted((animalA, animalB) => {
  return animalA.weight - animalB.weight;
});

console.log(animalsSortedByWeightStartingWithLowest);



// Note:
// - reverse() mutates the original array (like sort() does), which is bad.
// Use toReversed() instead (or any other method to get the expected result)

const animalsSortedByWeightReversed = animalsSortedByWeightStartingWithLowest.toReversed();

console.log(animalsSortedByWeightReversed);

const animalWithWeightMoreThanFivehundredExists = animals.some((animal) => animal.weight > 500);

console.log(animalWithWeightMoreThanFivehundredExists);

// Hint: Filter for Europe first, then check every animal for its weight.
const animalsInEurope = animals.filter(animal => animal.continents.includes("Europe"));
console.log(animalsInEurope);

const allAnimalsInEuropeWeighLessThanOnehundred = animalsInEurope.every((animal) => animal.weight < 100 );

console.log(allAnimalsInEuropeWeighLessThanOnehundred);

// Hint: filter + map + reduce

const animalsInAfrica = animals.filter(animal => animal.continents.includes("Africa"));
console.log(animalsInAfrica);

const weightOfAllAnimalsInAfrica = animalsInAfrica.map(animal => animal.weight).reduce((accumulator, length) => accumulator + length, 0);

console.log(weightOfAllAnimalsInAfrica);
// Hint: As above, but divided by the number of animals in Africa.
const averageWeightOfAllAnimalsInAfrica = weightOfAllAnimalsInAfrica / animalsInAfrica.length;

console.log(averageWeightOfAllAnimalsInAfrica);

export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};



// In the `./index.js` file, there is an `animals` array with - guess what? - animals. Each animal is an object with some key-value-pairs.

// Below this array, you will find a couple of variables (e.g. `firstAnimalStartingWithLetterG`). They all are initialized with `null`.

// And now it's your turn: delete the value `null` and write code such that the variables have a value corresponding to their name. Use the following methods to achieve this goal:

// - `Array.includes()`
// - `Array.find()`
// - `Array.findIndex()`
// - `Array.toSorted()`
// - `Array.some()`
// - `Array.every()`
// - `Array.reduce()`
// - `Array.toReversed()`

// Additionally, at some point you will need:

// - `Array.filter()`
// - `Array.map()`
// - `String.startsWith()`

// You will find some hints as comments.