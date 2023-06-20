import { styled } from "styled-components";
import { COLORS } from "../constant";
import { useState } from "react";
const TweetButtons = ({tweet}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    //do a patch
  };
  console.log(tweet);

  return (
    <Container>
      <i className="fa-regular fa-comment"></i>
      <i className="fa-sharp fa-solid fa-retweet"></i>
      <Liked>
        <i
          className={`fa-regular fa-heart ${clicked ? "liked" : ""}`}
          onClick={handleClick}
        ></i>
        {clicked && <span className="count">1</span>}
      </Liked>

      <i className="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
  border: 1px solid ${COLORS.paleGrey};
  border-top: none;
  /* border-bottom: none; */

  i {
    cursor: pointer;
    transition: 200ms;
  }

  .liked {
    color: red;
  }
`;

const Liked = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
`

export default TweetButtons;
