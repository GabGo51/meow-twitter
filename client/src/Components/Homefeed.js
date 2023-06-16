import SideBar from "./SideBar";
import { styled } from "styled-components";

const Homefeed = () => {
  return (
    <Container>
      <SideBar />
      <>HOME</>
    </Container>
  );
};

const Container = styled.div`
display: flex;
`

export default Homefeed;
