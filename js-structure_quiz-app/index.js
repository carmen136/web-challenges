import Card from "./components/Card/Card.js"
import CardList from "./components/Card/CardList.js"
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";



// Store the cards in a global state



function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags.split(","),
    isBookmarked: false,
  };

  cards.unshift(newCard);

  // To prevent the need to rerender, we add the new card to the DOM directly
  const cardList = document.querySelector(".card-list");
  const newCardElement = Card(newCard);
  cardList.prepend(newCardElement);

  event.target.reset();
  event.target.elements.question.focus();

};



// in Forms(handleFormSUbmit)!!








function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(handleFormSubmit), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();







// The following hints might guide you:

// - Try to think component-based:
//   - Figure out which components exist.
//   - Each component should have its own JS file. This file contains all functions belonging to this component.
// - Eventually, the `./index.js` file should only contain imports, function calls and the main `render()` function.
