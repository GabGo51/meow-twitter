
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
width: calc(100vw - 25rem);

@media screen and (max-width: 53rem){
    
  width: calc(100vw - 12.5rem);
}

`
const Title = styled.div`

font-weight: bold;
font-size: 1.5em;
padding: 1rem;

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
padding-bottom: 16.2rem;
padding-top: 1.5rem;
padding-left:5.5rem;
padding-right: 0.7rem;
font-size: 1.2em;
resize: none;
overflow: hidden;
`

const ProfileImage = styled.img`
position: absolute;
top: 1rem;
left: 1rem;
width: 4rem;
border-radius: 50%;
z-index: 2;
`

const PostingSection = styled.div`
position: absolute;
top: 13rem;
right: .7rem;
display: flex;
align-items: center;
justify-content: center;
`

const Number = styled.p`
margin-right: .7rem;
margin-bottom: -2rem;
color: ${props => props.number < 0 ? "red" : "#21B474"};
`
const Button = styled.button`

  margin-top: .7rem;
  padding: .9rem 1.1rem;
  border-radius: 2.5rem;
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
