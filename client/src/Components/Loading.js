import { styled } from "styled-components"
import  { keyframes } from 'styled-components';

const Loading = () =>{

  return(
    <Box>
      <i class="fa-sharp fa-solid fa-circle-notch"></i>
    </Box>


  )
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;

i{

  scale: 4;
  animation: ${rotateAnimation} 2s infinite;
}
`

export default Loading