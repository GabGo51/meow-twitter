
import { styled } from "styled-components";

import { useEffect, useState } from "react";

const Homefeed = () => {
  const [number, setNumber] = useState(280)

  const[value, setValue] = useState("")
  const [ profile, setProfile ] = useState();

  useEffect(() => {
    fetch(`/api/me/profile`)
    .then(response => response.json())
    .then(parsed => {
      setProfile(parsed.profile);
    })
  }, []);
  console.log(profile);
  console.log(value);

  const handleChange = (event) =>{
    setValue(event.target.value)
    setNumber(300-value.length)
    
  }


  return (
    <>
      {!profile ? <h1>Loading...</h1> : 
      <HomeContainer>
        <Title>Home</Title>
        <TweetBox>
          <ProfileImage src={profile.avatarSrc}/>
          <Input 
          placeholder="What's happening?"
          type="text"
          value={value}
          onChange={handleChange}
          />
          <PostingSection>
            <Number number={number}>{number}</Number>
            <Button>Meow</Button>
          </PostingSection>
        </TweetBox>

      </HomeContainer>}
    </>
    
    
  );
};



const HomeContainer = styled.div`
width: calc(100vw - 400px);

@media screen and (max-width: 850px){
    
  width: calc(100vw - 200px);
}

`
const Title = styled.div`

font-weight: bold;
font-size: 1.5em;
padding: 15px;

border: 1px solid grey;

`

const TweetBox = styled.div`
position: relative;
`

const Input = styled.textarea`
width: 100%;
position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
outline: none;
padding-bottom: 250px;
padding-top: 25px;
padding-left:90px;
padding-right: 10px;
font-size: 1.2em;
resize: none;
overflow: hidden;
`

const ProfileImage = styled.img`
position: absolute;
top: 13px;
left: 13px;
width: 60px;
border-radius: 50%;
z-index: 2;
`

const PostingSection = styled.div`
position: absolute;
top: 205px;
right: 10px;
display: flex;
align-items: center;
justify-content: center;
`

const Number = styled.p`
margin-right: 10px;
margin-bottom: -30px;
color: ${props => props.number < 0 ? "red" : "#21B474"};
`
const Button = styled.button`

  margin-top: 10px;
  padding: 12px 18px;
  border-radius: 40px;
  border: none;
  border: 1px solid hsl(258deg, 100%, 50%);
  background-color: hsl(258deg, 100%, 50%);
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  transition: 200ms;

  &:hover {
    background-color: white;
    color: hsl(258deg, 100%, 50%);
  }

  &:active {
    color: white;
    background-color: hsl(258deg, 100%, 50%);
  }
`;

export default Homefeed;
