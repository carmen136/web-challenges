
import { getRandomColor } from "../../utils/randomColor.js"

export default function Square() {

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  const randomBackgroundColor = getRandomColor();
  square.style.backgroundColor = randomBackgroundColor;
});

return square;

};

const squareElement = Square();

root.append(squareElement);