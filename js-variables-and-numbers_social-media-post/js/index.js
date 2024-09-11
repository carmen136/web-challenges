"use strict";

console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "Social Media Post";
const text = "Hello World, this is a social media post!";
let likes = 27;
const creator = "Maxima Musterfrau";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(title);
console.log(text);
console.log("Number of likes: " + likes);
console.log("Post created by: " + creator);
console.log("Post succesfully uploaded? " + isReported);

likes++ ;

console.log("-----");
console.log(title);
console.log(text);
console.log("Number of likes: " + likes);
console.log("Post created by: " + creator);
console.log("Post succesfully uploaded? " + isReported);



// --^-- write your code here --^--
