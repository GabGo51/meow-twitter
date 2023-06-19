import { styled } from "styled-components"
import { COLORS } from "../constant"
import { useState } from "react"
const TweetButton = () =>{

  const [clicked, setClicked] = useState(false)

  const handleClick = () =>{
    setClicked(!clicked)
  }

return(

  <Container>
    <i class="fa-regular fa-comment"></i>
    <i class="fa-sharp fa-solid fa-retweet"></i>
    <i
        className={`fa-regular fa-heart ${clicked ? "liked" : ""}`}
        onClick={handleClick}
      ></i>
    <i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i>
  </Container>
)
}

const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 3rem;
border: 1px solid ${COLORS.paleGrey};
border-top:none;
border-bottom: none;


i{
  cursor: pointer;
  transition: 200ms;
}

.liked {
    color: red;
    
  }
`

export default TweetButton