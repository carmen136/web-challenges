import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({}); // heißt dass wir hier ein Objekt speichern werden
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(URL);
        const { next, previous, results } = await response.json();
        setPokemon({ next, previous, results });

        // Anstatt dass wir alle Daten einzeln fetchen, können wir die benötigten Daten auch als Objektvariable speichern (s. Zeile 14)
        // setNextPage(data.next);
        // setPreviousPage(data.previous);
        // setPages( data.previous, data.next);

        console.log({ next, previous, results });

      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [URL]);


  function handlePreviousPage() {
    if(pokemon.previous) {            // pokemon ist der Name des Objekts (s. Zeile 4, um ein Objekt key anzusprechen nutzen wir pokemon.previous)
      setURL(pokemon.previous)
    }
  }


  function handleNextPage() {
    if(pokemon.next) {          
      setURL(pokemon.next)
    }
  }


  return (
    <main>
      <button onClick={handlePreviousPage}  type="button" disabled={!pokemon.previous}>Previous Page</button> 
      <button onClick={handleNextPage} type="button">Next Page</button>
      <ul>
        {Array.isArray(pokemon.results) && pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}


// Warum muss man in Zeile 49 überprüfen ob pokemon.results ein Array ist?

// Der Fehler, den du erhältst, dass map nicht funktioniert, tritt auf, weil pokemon.results möglicherweise undefined ist,
// wenn du versuchst, die map-Methode darauf anzuwenden.
// Zu Beginn ist pokemon ein leeres Objekt ({}), und pokemon.results existiert daher nicht, was zu einem Fehler führt.

// Um dieses Problem zu beheben, kannst du sicherstellen, dass pokemon.results ein Array ist, bevor du die map-Methode darauf anwendest.
// Hier sind einige Möglichkeiten, wie du das tun kannst:

// Überprüfe, ob results existiert und ein Array ist: 
// Du kannst eine Bedingung hinzufügen, um sicherzustellen, dass results vorhanden ist und ein Array ist, bevor du map aufrufst.