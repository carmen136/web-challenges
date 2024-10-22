import styled, {css} from "styled-components";
import Link from "next/link";
import Button from "./Button";

export default function HomePage() {
    return (
        <>
            <h1>Hello from Next.js</h1>
            <FlexContainer>
                <Button>Click me!</Button>
                {/* $ Prefix für props, die nur für das Styling verwendet werden */}
                <Button $color="danger">Danger Button</Button>
                <p>This is a <StyledLink href="/">styled Link</StyledLink></p>
            </FlexContainer>
            <h2>Using props: css block/ Complex Component</h2>
            <FlexContainer $column>
                <Button $variant="text">Button -- Text</Button>
                <Button $variant="outlined">Button -- outlined</Button>
                <Button $variant="contained">Button -- contained</Button>
                <p>This is a <StyledLink href="/">styled Link</StyledLink></p>
            </FlexContainer>
        </>
    );
}

            
// styledcomponents erzeugt im Hintergrund eindeutige Klassennamen, 
//dadurch wird das Styling eindeutig zugewiesen


const FlexContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    flex-direction: ${(props) => props.$column ? "column" : "row"}
`;


const StyledLink = styled(Link)`
    border: none;
    padding: 1rem;

    &:hover{
        color: black;
        background-color: white;
    }

`;


// complex components:

