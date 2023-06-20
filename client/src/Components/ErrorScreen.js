import { GiUnlitBomb } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorScreen = () => {

    return (
        <>
        <Wrapper>
            <GiUnlitBomb style={{ fontSize: "5rem", margin: "3rem" }}/>
            <h1>An unknown error has occurred.</h1>
            <Error>Please try refreshing the page, or <Link>contact support</Link> if the problem persists.</Error>
        </Wrapper>
        </>
    )
};
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80vw;
`
const Error = styled.p`
font-size: 1.2rem;
margin: 2rem;
text-align: center;
`

export default ErrorScreen;