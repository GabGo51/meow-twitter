import SideBar from "./SideBar";
import { styled } from "styled-components";

const Homefeed = () => {
  return (
    <Container>
      <SideBar />
      <HomeContainer>
        <Title>Home</Title>

      </HomeContainer>
    </Container>
  );
};

const Container = styled.div`
display: flex;
`

const HomeContainer = styled.div`

`
const Title = styled.div`
margin-top: 20px;
font-weight: bold;
font-size: 1.5em;
padding-bottom:15px ;
padding-left: 15px;
width: 100vw;
box-shadow: inset 0px -5px 5px -5px rgba(0, 0, 0, 0.2);

`

export default Homefeed;
