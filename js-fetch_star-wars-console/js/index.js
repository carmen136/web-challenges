console.clear();

const url = "https://swapi.py4e.com/api/people";



// mit async/ await

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.results);
    console.log("Eye-color R2-D2:", data.results[2].eye_color);
}

fetchData();


// mit fetch:

// fetch(url)
//     .then(response =>{
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         console.log(data.results);
//         console.log("Eye-color R2-D2:", data.results[2].eye_color);
//     });







// Have a look at the [`js/index.js`](./js/index.js) file: There is an `url` variable and an empty `fetchData()` function.

// Inside of the `fetchData()` function, use the `url` variable to fetch data from the Star Wars API.

// Log the fetched data to the console and play around with it:

// - log the entire data object
// - log different values of the data object
// - Bonus: Can you log the eye color of R2-D2?

// The following hints may guide you:

// - make sure to wait for all asynchronous operations
