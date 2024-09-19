console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

// function renderStars(filledStars) {
//   // reset the star container before rerendering stars
//   starContainer.innerHTML = "";

//   for (let i = 1; i <= 5; i++) {
//     const img = document.createElement("img");


//     if (i <= filledStars) {
//       img.src = "assets/star-filled.svg";
//     } else {
//       img.src = "assets/star-empty.svg";
//     };
    

//     img.addEventListener("click", ()=> {
//       renderStars(i);
//     });


//     starContainer.append(img);

//   };

// };


// renderStars();


//  ANDERER LÖSUNGSWEG:

let filledStars = 3;


function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");


    if (i <= filledStars) {
      img.src = "assets/star-filled.svg";
    } else {
      img.src = "assets/star-empty.svg";
    };
    

    img.addEventListener("click", ()=> {
      filledStars = i;
      renderStars();
    });


    starContainer.append(img);

  };

};


renderStars();








// Let's build an awesome interactive 5-star rating scale! The goal is to display filled/empty stars depending on the user input. A click on a star should fill all stars up to the clicked one and leave all others empty.

// ## Task

// ### Part 1: Render Stars

// Start by rendering 5 empty stars in the `starContainer`. For that, switch to `./js/index.js` and write the function `renderStars`:

// - Use a for loop inside the function to repeat the following code five times.
//   💡 Start the loop with the value 1, not with 0
// - Inside the for loop, create an image element and set the "src" attribute to the path of the empty star image ("assets/star-empty.svg")
// - append the star to the `starContainer`.

// ### Part 2: Change the number of filled stars

// Now we want to render a certain number of filled stars, depending on the argument given to the function:

// - Add a new parameter to the `renderStars` function, named `filledStars`. Expect its value to be a number.
// - Inside the loop, as you create each star, use the value of `filledStars` to decide if a filled or an empty star should be created.
//   💡 Use the counter variable of the for loop to check which star is currently being created (the first, second, third...)
// - Depending on whether a filled or an empty star should be created, set the `src` of the image element to the filled or empty star image URL.
// - Change the code that calls `renderStars`: pass in a number between 0 and 5 as an argument, and see if it works as expected!

// ### Part 3: Implement user input

// By now, the number of filled stars is set when calling the `renderStars` functions with a number argument.
// However, we want the user to decide how many stars should be filled. Let's add a "click" event listener to every star to re-render the stars inside the container!

// - Before appending the star element to the `starContainer`, add a "click" event listener to it.
// - Inside the event listener, re-render the stars by calling `renderStars`. Pass the correct number to that function in order to render the correct number of filled stars.
//   💡 Your loop counter variable might help you!

// You are done! 🎉 Five stars to you! ⭐️⭐️⭐️⭐️⭐️
