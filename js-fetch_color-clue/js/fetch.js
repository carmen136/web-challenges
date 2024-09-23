import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--
  const response = await fetch(colorApiUrl);
  const colorData = await response.json();
  console.log(colorData);
  setColorToGuess(colorData.name.closest_named_hex, colorData.name.value);


  // --^-- your code here --^--
}




// To get the names of the colors, we use the Color API.

// Unfortunately, the game does not work because the fetch function to get data from the color api is not implemented. Let's fix this!

// ## Task

// Check out the [`js/fetch.js`](./js/fetch.js) file: There is a `fetchNewColor()` function which creates a random hex code and creates the correct url to fetch data from the Color API.

// Your task is to implement the fetch functionality:

// 1. Use the `fetch()` function to get data from the Color API.
// 2. Use the `.json()` method to parse the body of the response and convert it into an object.
// 3. Inspect the parsed object (e.g. by logging it to the console) and find the hex value and name of the closest named color.
// 4. Call the `setColorToGuess()` function with the hex value and name of the closest named color.
// 5. Guess colors! 🎉
