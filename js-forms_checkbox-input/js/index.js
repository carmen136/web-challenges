console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}


function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}



// tosCheckbox.addEventListener("input", (event) => {
//   return(event.target.checked);
// })

hideTosError();
hideSuccess();


tosCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    hideTosError(); // Fehler ausblenden, wenn die Checkbox angekreuzt ist
  } else {
    showTosError(); // Fehler anzeigen, wenn die Checkbox nicht angekreuzt ist
    hideSuccess();
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tosCheckbox.checked) {             // Das Ausrufezeichen macht das true zum false -> wir überprüfen hier, ob die checkbox NICHT angekreuzt ist
    showTosError();
    hideSuccess();
    return;
  }

  showSuccess();
  hideTosError();
  alert("Form submitted");

  // eslint-disable-next-line no-alert
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  
});




// TOS is short for Terms of Service. Here, the `alert()` in the submit event handler should only be called if the `tos` checkbox has been checked.

// > 💡 You can use an early `return;` in an if statement to prevent the `alert()` from being called.

// In addition, the error message below the checkbox should only be displayed if the checkbox is **not** checked. The message should disappear as soon as the user checks the checkbox - and it should reappear as soon as the user unchecks the checkbox. Use the given functions `showTosError()` and `hideTosError()`.

// Can you make the error message hidden initially (before the form is submitted)?

// ## Bonus: Success message!

// Add this HTML code to the [`index.html`](./index.html) below the form. 
// Write JavaScript code to only show the div if the submission was valid (`tos` checkbox was checked). Like the error message, it should also be hidden initially.


