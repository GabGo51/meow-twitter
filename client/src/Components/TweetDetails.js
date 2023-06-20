import { useParams } from "react-router-dom";
import BigTweet from "./BigTweet";
import { useEffect, useState } from "react";
import TweetButtons from "./TweetButtons";
import { styled } from "styled-components";
import Loading from "./Loading";
const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState("");
  console.log(tweetId);

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((response) => response.json())
      .then((parsed) => {
        setTweet(parsed.tweet);
      });
  }, []);
  

  return (
    <>
      {!tweet ? (
        <LoadingBox>
        <Loading/>
      </LoadingBox>
      ) : (
        <Box>
          <BigTweet tweet={tweet} />
          <TweetButtons/>
        </Box>
      )}
    </>
  );
};

const LoadingBox = styled.div`
width: 100%;
display: flex;
align-items:center ;
justify-content: center;
margin-top: -40rem;
padding-top: 10rem;
`

const Box = styled.div`
display: flex;
flex-direction: column;
`

export default TweetDetails;
