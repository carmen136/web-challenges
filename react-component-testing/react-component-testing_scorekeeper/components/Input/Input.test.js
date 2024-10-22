import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(
    <>
        <Input 
            name="nameOfGame"
            labelText="Name of game"
            placeholder="e.g. Dodelido" 
        />
        <Input 
            name="playerNames"
            labelText="Player names, separated by comma"
            placeholder="e.g. John Doe, Jane Doe" 
        />
    
    </>)			
	
    // Überprüfen ob die Labels im Dokument sind
	const nameOfGameLabel = screen.getByLabelText(/Name of game/i)
    const playerNamesLabel = screen.getByLabelText(/Player names, separated by comma/i)
	
    // Überprüfen ob die Inputs im Dokument sind
	const nameOfGameInput = screen.getByLabelText(/Name of game/i)
    const playerNamesInput = screen.getByLabelText(/Player names, separated by comma/i)

	expect(nameOfGameLabel).toBeInTheDocument();
	expect(playerNamesLabel).toBeInTheDocument();

    expect(nameOfGameInput).toBeInTheDocument();
	expect(playerNamesInput).toBeInTheDocument();

     // Überprüfen der Platzhaltertexte (optional)
     expect(nameOfGameInput).toHaveAttribute("placeholder", "e.g. Dodelido");
     expect(playerNamesInput).toHaveAttribute("placeholder", "e.g. John Doe, Jane Doe")
});


// kann sein dass der Test nicht läuft -> Bei Benjamin hat textbox nicht funktioniert!

test("calls callback on every user input", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(
        <Input 
            onChange={handleChange} 
            name="nameOfGame" 
            labelText="Name of game" 
            placeholder="e.g. Dodelido" 
        />
    );

    const input = screen.getByLabelText("Name of game")
    await user.type(input, "Test");

    expect(handleChange).toHaveBeenCalledTimes(4);

});



// Labeltext anpassen: Der Text „Name of game“ wird nun in getByLabelText verwendet, um sicherzustellen, dass er mit dem labelText übereinstimmt, den du in der Input-Komponente definiert hast.
// Props übergeben: Die erforderlichen Props werden beim Rendern der Input-Komponente übergeben, damit das Eingabefeld korrekt erstellt wird und getByLabelText funktioniert.