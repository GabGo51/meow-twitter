import SideBar from "./SideBar";
import { styled } from "styled-components";

const Notifications = () => {
  return (
    <Container>
      <SideBar />
      <>Notifications</>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Notifications;
