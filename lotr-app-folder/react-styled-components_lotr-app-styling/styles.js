import { createGlobalStyle } from "styled-components";
import {Lora} from "next/font/google";

const lora = Lora({ subsets: ["latin"], style: ["normal", "italic"] });

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-family: ${lora.style.fontFamily}, serif;
  }

  body {
    font-family: system-ui;
  }
`;
