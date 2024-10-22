import styled, {css} from "styled-components";

// hier kann man nach dem Punkt ein beliebiges Element (p, div, li,..) einsetzen
// nach den Backticks wird das gewünschte Styling in normalem CSS geschrieben
export default styled.button`
    border: none;
    padding: 1rem;
    /* background-color: yellow; */
    background-color: ${(props) => props.$color === "danger" ? "red" : "yellow"};


    ${(props) => props.$variant === "text" && 
        css`
            background-color: transparent;
            color: black;

        `}

    ${(props) => props.$variant === "outlined" && 
        css`
            background-color: white;
            color: black;

        `}


    &:hover{
        color: black;
        background-color: white;
    }

`;