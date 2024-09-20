import { getRandomColor } from "../../utils/randomColor.js"


export default function Pentagon() {

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  const randomBackgroundColor = getRandomColor();
  pentagon.style.backgroundColor = randomBackgroundColor;
});

return pentagon;

};


const pentagonElement = Pentagon();

root.append(pentagonElement);