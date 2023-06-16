import SideBar from "./SideBar";
import { styled } from "styled-components";

const Bookmarks = () => {
  return (
    <Container>
      <SideBar />
      <>Bookmarks</>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Bookmarks;
