import { styled } from "styled-components";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { COLORS } from "../constant";
import SmallTweet from "./SmallTweet";
import TweetButtons from "./TweetButtons";

const Homefeed = () => {
  const { user, status } = useContext(UserContext);
  const [number, setNumber] = useState(280);
  const [tweets, setTweets] = useState();
  const [value, setValue] = useState("");
  const [feed , setFeed]= useState(true)

  //change on textarea
  const handleChange = (event) => {
    setValue(event.target.value);
    setNumber(280 - value.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      status: value
    };

    fetch("/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((newTweet) => {
        if(value.length < 280){
          setFeed(!feed)
          setValue("");
        }else {
          window.alert("Tweet to long!")
        }
        
      })
      .catch((error) => {
        console.error("Error submitting tweet:", error);
      });
  };

  useEffect(() => {
    fetch(`/api/me/home-feed`)
      .then((response) => response.json())
      .then((parsed) => {
        setTweets(Object.values(parsed.tweetsById));
      });
  }, [feed]);
  console.log(tweets);

  return (
    <>
      {!user ? (
        <h1>Loading...</h1>
      ) : (
        <HomeContainer>
          <Title>Home</Title>
          <TweetBox>
            <ProfileImage src={user.avatarSrc} />
            <Input
              placeholder="What's happening?"
              type="text"
              value={value}
              onChange={handleChange}
            />
            <PostingSection>
              <Number number={number}>{number}</Number>
              <Button type="submit" onClick={handleSubmit}>
                Meow
              </Button>
            </PostingSection>
          </TweetBox>

          {!tweets ? (
            <h1>Loading...</h1>
          ) : (
            tweets.slice().reverse().map((tweet) => {
              return (
                <div key={tweet.id}>
                  <SmallTweet  tweet={tweet} />
                  <TweetButtons  tweet = {tweet}/>
                </div>
                

              )
              
            })
          )}
        </HomeContainer>
      )}
    </>
  );
};

const HomeContainer = styled.div`
  width: calc(100vw - 25rem);

  @media screen and (max-width: 53rem) {
    width: calc(100vw - 12.5rem);
  }
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 35.5rem) {
    width: 100vw;
    
  }
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  padding: 1rem;

  border: 1px solid ${COLORS.paleGrey};

  @media screen and (max-width: 35.5rem) {
    display: none;
    
  }
`;

const TweetBox = styled.div`
  position: relative;
  border: 1px solid ${COLORS.paleGrey};
`;

const Input = styled.textarea`
  width: 100%;
  position: relative;
  border: none;
  outline: none;
  padding-bottom: 12.5rem;
  padding-top: 1.8rem;
  padding-left: 5.8rem;
  padding-right: 0.7rem;
  font-size: 1.2em;
  resize: none;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 4rem;
  border-radius: 50%;
  z-index: 2;
`;

const PostingSection = styled.form`
  position: absolute;
  top: 13rem;
  right: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Number = styled.p`
  margin-right: 0.7rem;
  margin-bottom: -2rem;
  color: ${(props) => (props.number < 0 ? "red" : "#21B474")};
`;
const Button = styled.button`
  margin-top: 0.7rem;
  padding: 0.9rem 1.1rem;
  border-radius: 2.5rem;
  border: none;
  border: 1px solid hsl(258deg, 100%, 50%);
  background-color: hsl(258deg, 100%, 50%);
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  transition: 200ms;
  cursor: pointer;

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
