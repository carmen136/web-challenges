import { createGlobalStyle } from "styled-components";
import {Lora} from "next/font/google";

const lora = Lora({ subsets: ["latin"], style: ["normal", "italic"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-family: ${lora.style.fontFamily}, serif;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
