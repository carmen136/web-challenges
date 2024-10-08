// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2) {
    console.log(num1);
    return num1;
  } else {
    console.log(num2);
    return num2;
}

};

maxOfTwoNumbers(5,2);

/*

Goal: 
When comparing two numbers which we pass to the function maxOtTwoNumbers, the higher number should be displayed.

Step 1: create an if-statement to check whether num1 > num2. If yes, console.log and return num1.

Step 2: create an else-statement which should return and console.log num2,

Final step: run the function with two numbers. 
*/

// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho",];

function findLongestWord(words) {
  let longestWord = "";

  words.forEach((word) => {
    if(word.length > longestWord.length) {
      longestWord = word;
    };

  });

  console.log(longestWord);
  return(longestWord);
};

findLongestWord(words);


/*

Step 1: Declare a variable longestWord and initialize it with an empty string. This will give the .length a value of 0.

Step 2: Take the words array and create a .forEach Method.

Step 3: In the .forEach function, create an if-statement in which we prove if the .length of the first string in the array words is higher than the .length
of the variable longestWord.
If yes, save the string in the longestWord variable so it gets updated.

Final step: return the longestWord variable.

*/


// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// ForEach-Methode:

function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number; // sum = sum + number;
  });
  console.log(sum);
  return sum;
}

sumNumbers(numbers);


/*

Goal: we take all elements in the array numbers and add them to one sum.

Step 1: We declare a let variable sum and initialize it with 0.

Step 2: we take the .forEach method for the numbers array. For each element in the array numbers, we want to add the number with the variable sum and also want 
to save the number to the variable sum (+=).

Final step: we log the variable sum and return it. Then we can call the function sumNumbers(numbers),

*/


// For-Schleife:

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
}

sumNumbers(numbers);


// reduce: 
function sumNumbers(numbers) {
  const sum = numbers.reduce((accumulator, number) => {
    return accumulator + number}, 0
  );

  console.log(sum);
  return sum;
}

sumNumbers(numbers);



// Calculate the average length of the words 

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique"
];

function averageWordLength(words2) {
  const words2Numbers = words2.map((word) => {
    return word.length;
  });

  console.log(words2Numbers);

  let sum = 0;
  words2Numbers.forEach(number => {
    return sum += number;
  });

  console.log(sum);

  const averageLength = sum / words2Numbers.length;

  console.log(averageLength);
  return averageLength;

}

averageWordLength(words2);

/*
Step 1: We want to get the length of each array element. 

Step 2: We want to sum up the length of all array elements and divide it by the length of the array words2.

Step 3: We want to divide the sum with the length of the words2numbers Array.

Step 4: We call the function averageWordLength(words2);

*/

// Unique arrays - return an array without duplicates

const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

// Set-Method:

// function uniquifyArray(words) {
//   return [...new Set(words)];
// }

// console.log(uniquifyArray(words3));


// Filter-Method:

function uniquifyArray(words) {
  return words.filter((word, index) => words.indexOf(word) === index);
}

console.log(uniquifyArray(words3));


/* 

Step 1:  We use the .filter method and put in the variables word, and index of the word. In the filter method, we use the .indexOf method as a callback function

Step 2: the array method index.of gives the first found index of the element in the array back

Step 3: with words.indexOf(word) === index we check if the current index is equal to the first found index of the element. If yes, we return the element.
        If not, the element won't be in the new array.

last Step: return and log the new array.

*/



// Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(haystack, needle) {
  return haystack.includes(needle);
}


console.log(doesWordExist(wordsFind, "subset"));


/*

Step 1: we need to use an array method which checks if the array wordsFind contains a string.
 Therefore we give the function the array wordsFind as the first argument "haystack" and the string as the 
 second argument "needle".


Step 2: In the function we use the array method .includes with haystack as array parameter and needle as array element parameter. 
The function should return "true" or "false".


last Step: We start the function and give wordsFind and subset as parameters.
*/

// BETTER: 

/*
Step 1: We need to use an array method that checks if the array `wordsFind` contains a specific string. 
To accomplish this, we will define a function that takes the array `wordsFind` as the first argument, referred to as "haystack," and the string to search for as the second argument, referred to as "needle."

Step 2: Within the function, we will utilize the array method `.includes()` with `haystack` as the array parameter and `needle` as the element to search for. 
The function should return `true` if the string is found, or `false` if it is not.

Final Step: We will invoke the function by passing `wordsFind` and `subset` as arguments.
*/


// Count repetition

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(haystack, needle) {
  return haystack.filter(word => word === needle).length;
}


console.log(howManyTimes(wordsCount, "matter"))

/*
Step 1: We need to use an array method that checks how many times the array `wordsFind` contains a specific string. 
To accomplish this, we will define a function that takes the array `wordsFind` as the first argument, referred to as "haystack," and the string to search for as the second argument, referred to as "needle."

Step 2: Within the function, we will utilize the array method `.filter()` with `haystack` as the array parameter and `word` as the element we wand to filter.
The function should return a new array containing only the element we are searching by passing it as the "needle" argument.
This will be done by the following: haystack.filter((word) => word === needle).

Step 3: The property .length returns the number of elements in the filtered array,
which corresponds to how many times needle appears in haystack.

Final Step: We will invoke the function by passing `wordsFind` and `subset` as arguments.
*/


// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false
];

function sum(array) {
  return array.reduce((accumulator, currentElement) => {
    if (typeof currentElement === 'string') {
      // Für Strings die Länge des Strings hinzufügen
      return accumulator + currentElement.length;
    } else if (typeof currentElement === 'number') {
      // Für Zahlen die Zahl selbst hinzufügen
      return accumulator + currentElement;
    } else if (typeof currentElement === 'boolean') {
      // Für Booleans 1 für true und 0 für false verwenden
      return accumulator + (currentElement ? 1 : 0);
    }
    return accumulator; // Bei anderen Typen nichts hinzufügen
  }, 0);
}
console.log(sum(mixedArray));

// Good to know: 
// typeof ist ein Operator in JavaScript, um den Datentyp einer Variablen oder eines Wertes zu bestimmen.
// Er gibt eine Zeichenkette (String) zurück, die den Typ des angegebenen Wertes beschreibt.


// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let maxProduct = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Überprüfen der horizontalen Produkte
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols - 3; j++) {
      const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // Überprüfen der vertikalen Produkte
  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < cols; j++) {
      const product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
}

console.log(greatestProduct(matrix));


module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct 
}