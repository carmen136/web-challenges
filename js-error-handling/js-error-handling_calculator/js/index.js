console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorWarning = document.querySelector(".error");

// const operations = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => {

//     try {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero!");    
//     }
//     return a / b;

//     } catch(error) {
//       errorWarning.textContent = "Cannot divide by zero! Please try again.";
//     }
     
//   }
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const firstNumber = Number(event.target.firstNumber.value);
//   const secondNumber = Number(event.target.secondNumber.value);
//   const operation = event.target.operation.value;
//   output.innerText = operations[operation](firstNumber, secondNumber);
// });



// es gibt auch die Möglichkeit, die try...catch Anweisung im addEventListener zu schreiben:

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");    
    }
    return a / b
     
  }
};


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
    errorWarning.textContent = "";
  } catch(error) {
  errorWarning.textContent = "Cannot divide by zero! Please try again.";
}
});


