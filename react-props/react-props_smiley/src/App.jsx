import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley
            isHappy = {true} />;
}



function Smiley({isHappy}) {
  return (
    <div>
      {isHappy ? "🤩" : "😪"}
    </div>
  )
}





// Props are versatile: you cannot only pass strings or numbers, but a boolean value as well! Let's use this feature to render smileys ;)

// ## Task

// Look at the `./src/App.js` file: the `App` component returns a heading which wants to be replaced by a component. Your task is to write a `Smiley` component which renders a smiley depending on a prop called `isHappy`.

// You can use the following hints as guideline:

// - Write the `Smiley` component inside of the `src/App.js`.
//   - It accepts a prop called `isHappy` (make sure to destructure it).
//   - It returns a semantic HTML element which renders a happy smiley if `isHappy` is `true` and a sad one if its value is `false`.
// - Inside of the return statement of your `App` component, replace the heading with your `Smiley` component and pass it the `isHappy` prop (– or don't, if you want to display the unhappy smiley).