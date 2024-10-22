import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  const mockCreateGame = jest.fn();

  render(
    <GameForm
        onCreateGame={mockCreateGame}
     />)


  const nameOfGameInput = screen.getByLabelText(/Name of game/i)
  const playerNamesInput = screen.getByLabelText(/Player names, separated by comma/i)
 
  const createGameButton = screen.getByRole("button", {name: "Create game"})
  
  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNamesInput).toBeInTheDocument();
  expect(createGameButton).toBeInTheDocument();

});

test("renders a form with the accessible name 'Create a new game'", async () => {
  const mockCreateGame = jest.fn();
  const user = userEvent.setup();

  render(
    <GameForm
        onCreateGame={mockCreateGame}
     />)

   // brauche ich das alles hier um nur die Form zu rendern?   
  const nameOfGameInput = screen.getByLabelText(/Name of game/i)
  await user.type (nameOfGameInput, "Dodelido");

  const playerNamesInput = screen.getByLabelText(/Player names, separated by comma/i)
  await user.type(playerNamesInput, "Jane Doe");

  const  button = screen.getByRole("button", {name:"Create game"});
  await user.click(button);
  
  const gameForm = screen.getByRole("form", {name: "Create a new game"});
  expect(gameForm).toBeInTheDocument();
  
});

test("submits the correct form data when every field is filled out", async () => {
  const mockCreateGame = jest.fn();
  const user = userEvent.setup();

  render(
    <GameForm
        onCreateGame={mockCreateGame}
     />)

  const nameOfGameInput = screen.getByLabelText(/Name of game/i)
  await user.type (nameOfGameInput, "Dodelido");

  const playerNamesInput = screen.getByLabelText(/Player names, separated by comma/i)
  await user.type(playerNamesInput, "Jane Doe");

  const  button = screen.getByRole("button", {name:"Create game"});
  await user.click(button);
  
  expect(mockCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["Jane Doe", ]
  })

});

test("does not submit form if one input field is left empty", async () => {
  const mockCreateGame = jest.fn();
  const user = userEvent.setup();

  render(
    <GameForm
        onCreateGame={mockCreateGame}
     />)

  const nameOfGameInput = screen.getByLabelText(/Name of game/i)
  await user.type (nameOfGameInput, "Dodelido");

  const playerNamesInput = screen.getByLabelText(/Player names, separated by comma/i)
  // hier bleibt für den Test das Eingabefeld leer

  const  button = screen.getByRole("button", {name:"Create game"});
  await user.click(button);
  
  expect(mockCreateGame).not.toHaveBeenCalled()

});
