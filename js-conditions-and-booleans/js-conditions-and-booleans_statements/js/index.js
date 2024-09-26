console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
    console.log("Access denied!");
}


// Part 2: Even / Odd
const number = 6;
const testNumber = 2;

if (number % testNumber) {
    console.log("odd number");
} else {
    console.log("even number");
}


// Part 3: Hotdogs
const numberOfHotdogs = 999;
let priceOfHotdog = 2;

if (numberOfHotdogs < 5) {
    priceOfHotdog = 2;
    console.log("Total price:", numberOfHotdogs * priceOfHotdog);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
    priceOfHotdog = 1.5;
    console.log("Total price:", numberOfHotdogs * priceOfHotdog);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
    priceOfHotdog = 1;
    console.log("Total price:", numberOfHotdogs * priceOfHotdog);
} else if (numberOfHotdogs >= 1000000) {
    priceOfHotdog = 0.1;
    console.log("Total price:", numberOfHotdogs * priceOfHotdog);
}


// Part 4: Daytime
const currentHour = 19;

const statement = currentHour >= 17 ? "Partytime!!!" : "Still need to learn...";

console.log(statement);



// Part 5: Greeting
const userName = "Archibald";
const enterName = "Tom";

const greeting = "Hello " + (enterName === userName ? "Coach" : enterName ) + "!";

console.log(greeting);


