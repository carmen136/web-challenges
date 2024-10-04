import React, { useRef } from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [dateInput, setDateInput] = useState("");
  const [holidayInput, setHolidayInput] = useState("");
  const holidayInputRef = useRef(null); 
  // useRef ist ein hook der benutzt wird um eine Referenz zu erstellen. Bei useRef(null) hat die Referenz zunächst keinen Wert.
  // Man kann die Referenz verwenden, um auf DOM-Elemente oder andere Werte zuzugreifen.

  function handleDate(dateParameter) {
    setDateInput(dateParameter)
  }

  function handleHoliday(holidayParameter) {
    setHolidayInput(holidayParameter);
  }


  function handleSubmit(event) {
    event.preventDefault();
    const dateValue = event.target.date.value;      // hier müssen wir das name-Attribut des Eingabefelds Date nehmen
    handleDate(dateValue);
    const holidayValue = event.target.holiday.value; // hier müssen wir das name-Attribut des Eingabefelds Holiday nehmen
    handleHoliday(holidayValue);


    event.target.reset();   // mit der reset()-Methode leeren wir die Eingabefeler

    holidayInputRef.current.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          ref={holidayInputRef} // Ref zuweisen
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holidayInput}</span>
      </p>
      <p>
        Date: <span className="output">{dateInput}</span>
      </p>
    </div>
  );
}
