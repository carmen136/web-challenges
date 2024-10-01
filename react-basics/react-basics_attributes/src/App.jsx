import "./styles.css";

export default function App() {
  return <Article />;
}


function Article() {
  return (
    <div className="article">
      <h2 className="article__title">Do you know Ruth Bader Ginsburg?</h2>
      <div>
        <input id="yes" type="radio" name="option" value="yes" />
        <label htmlFor="yes">Yes, but I want to learn more about her!</label>
      </div>
      <div>
        <input id="no" type="radio" name="option" value="no" />
        <label htmlFor="no">No, but I want to get to know her!</label>
      </div>
      <a className="article__link" href="https://de.wikipedia.org/wiki/Ruth_Bader_Ginsburg">Link to her wikipedia article</a>
    </div>
  )
}




// Write an `Article` component and use it to replace the given `<div>`.

// Your component should contain the following parts:

// - an `<article>` as a wrapper HTML element with the class `article`
// - an `<h2>` with the class `article__title` and a text of your choice
// - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
// - an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)