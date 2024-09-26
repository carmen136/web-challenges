
import { getRandomColor } from "../../utils/randomColor.js"

export default function Circle() {

    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.addEventListener("click", () => {
      const randomBackgroundColor = getRandomColor();
      circle.style.backgroundColor = randomBackgroundColor;
    });
    
    return circle;
    
    };
    
    
    const circleElement = Circle();
    
    root.append(circleElement);