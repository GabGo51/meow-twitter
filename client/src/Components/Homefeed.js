import { styled } from "styled-components";
import { UserContext } from "./UserContext";
import { useEffect, useState, useContext } from "react";
import { COLORS } from "../constant";
import SmallTweet from "./SmallTweet";
import TweetButtons from "./TweetButtons";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Homefeed = () => {
  const { user, status } = useContext(UserContext);
  const [number, setNumber] = useState(280);
  const [tweets, setTweets] = useState();
  const [value, setValue] = useState("");

  const [feed , setFeed]= useState(true);
  const navigate = useNavigate();


  //change on textarea
  const handleChange = (event) => {
    setValue(event.target.value);
    setNumber(280 - value.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      status: value,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/tweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((newTweet) => {
        if (value.length < 280) {
          setFeed(!feed);
          setValue("");
        } else {
          event.preventDefault();
          window.alert("Tweet too long!");
        }
      })
      .catch((error) => {
        console.error("Error submitting tweet:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/me/home-feed`)
      .then((response) => response.json())
      .then((parsed) => {
        setTweets(Object.values(parsed.tweetsById));
      })
      .catch(error => {
        console.error(error);
        navigate("/error");
      })
  }, [feed]);

  return (
    <>
      {!user ? (
        <LoadingBox>
          <Loading />
        </LoadingBox>
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
              {value.length > 280 ? (
                <ButtonDisable disabled={true} >
                  Meow
                </ButtonDisable>
              ) : (
                <Button type="submit" onClick={handleSubmit}>
                  Meow
                </Button>
              )}
            </PostingSection>
          </TweetBox>

          {!tweets ? (
            <Loading />
          ) : (
            tweets
              .slice()
              .reverse()
              .map((tweet) => {
                return (
                  <div key={tweet.id}>
                    <SmallTweet tweet={tweet} />
                    <TweetButtons tweet={tweet} />
                  </div>
                );
              })
          )}
        </HomeContainer>
      )}
    </>
  );
};

const LoadingBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -40rem;
`;

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
  @media screen and (max-width: 35.5rem) {
    padding-right: 1.5rem;
    font-size: 1.1em;
  }
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

const ButtonDisable = styled.button`
background-color: ${COLORS.paleGrey};
margin-top: 0.7rem;
  padding: 0.9rem 1.1rem;
  border-radius: 2.5rem;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  transition: 200ms;
  cursor: not-allowed;
`

export default Homefeed;
