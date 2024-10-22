import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    const mockDecreaseScore = jest.fn();
    const mockIncreaseScore = jest.fn();
    
    render(
    <Player 
        name="Testplayer"
        score={5}
        onDecreasePlayerScore={mockIncreaseScore}
        onIncreasePlayerScore={mockDecreaseScore}
    
    />)

    const playerName = screen.getByText("Testplayer");

    const decreaseButton = screen.getByRole("button", {name: "Decrease Score"})
    const increaseButton = screen.getByRole("button", {name: "Increase Score"})

    //Alternative: beide Buttons auf einmal finden:
    // const bothButtons = screen.getAllByRole("button", {name: "Decrease Score", name: "Increase Score"})

    expect(playerName).toBeInTheDocument();

    expect(decreaseButton).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();

    // Alternative. beide Buttons auf einmal
    // expect(bothButtons).toHaveLength(2);
});


test("calls callbacks when increasing or decreasing score", async () => {
    const handleIncreaseScore = jest.fn();
    const handleDecreaseScore = jest.fn();
    const user = userEvent.setup();
    
    render(
        <Player 
            name="Testplayer"
            score={5}
            onDecreasePlayerScore={handleIncreaseScore}
            onIncreasePlayerScore={handleDecreaseScore}
        
        />)
    
    
    const decreaseButton = screen.getByRole("button", {name: "Decrease Score"})
    const increaseButton = screen.getByRole("button", {name: "Increase Score"})
    
    await user.click(decreaseButton);
    await user.click(increaseButton);

    expect(handleDecreaseScore).toHaveBeenCalledTimes(1);
    expect(handleIncreaseScore).toHaveBeenCalledTimes(1);
});
