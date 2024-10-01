import "./styles.css";

export default function App() {
  return <Greeting
            name = "Ruth"
            isCoach = {false}
            />;
    
}


// Lösung a:

function Greeting({ name, isCoach }) {
  const greetingPrefix = isCoach ? "Coach" : name; // Bestimme den Namen oder "Coach"
  
  return (
    <div>
      Hello, {greetingPrefix}!
    </div>
  );
}

// Lösung b:

// function Greeting({name, isCoach}) {
//   return (
//     <div>
//       Hello, {isCoach ? " Coach" : ""} {name}!
//     </div>
//   )
// }


// Lösung c:

// function Greeting({ name, isCoach }) {
//   return (
//     <div>
//       {isCoach ? "Hello, Coach!" : `Hello, ${name}!`}
//     </div>
//   );
// }




// ### Create a Component with props

// Look at the `./src/App.js` file: the `App` component returns a default heading element. Replace this element with a custom `Greeting` component, which renders a greeting according to its props.

// You can use the following hints as guideline:

// - Write the `Greeting` component inside of the `src/App.js`.
//   - It accepts a prop called `name` (make sure to destructure it).
//   - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
// - Inside of the return statement of your `App` component, replace the heading with your `Greeting` component and pass it a `name` prop with a value of your choice.

// ### Conditional Rendering with props

// Update your `Greeting` component to show "Hello, Coach!" if the `name` prop is equal to one of your coaches.
