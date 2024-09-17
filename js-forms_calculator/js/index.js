console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');



function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}



form.addEventListener("submit", (event) => {

  event.preventDefault();

  let result;

  const numberA = parseFloat(event.target.elements.numberA.value);
  const numberB = parseFloat(event.target.elements.numberB.value);
  
  const operator = event.target.elements.operator.value;
  
   // Die entsprechende Funktion basierend auf dem ausgewählten Operator aufrufen -> siehe udemykurs javascript: switch-Anweisungen
   switch (operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      if (numberB !== 0) {
        result = divide(numberA, numberB);
      } else {
        result = "Fehler: Division durch Null!";
      }
      break;
    default:
      result = "Ungültiger Operator";
  }

  console.log(result);

  resultOutput.textContent = result;
  
  });




// Build a calculator that can add, subtract, multiply and divide two numbers.

// Add the following functionality to the submit event handler:

// - Use the values of the `numberA` and `numberB` inputs to perform the operation selected by the `operator` input on them. 
// You can use the provided helper functions `add()`, `subtract()`, `multiply()` and `divide()`.
// - Assign the result to the `result` variable.

// > 💡 Make sure to thoroughly test the addition operation, as it can have unexpected results.
