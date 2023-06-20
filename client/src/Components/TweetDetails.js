import { useParams } from "react-router-dom";
import BigTweet from "./BigTweet";
import { useEffect, useState } from "react";
const TweetDetails = () =>{
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState("")
  console.log(tweetId);

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
    .then(response => response.json())
    .then(parsed => {
      setTweet(parsed.tweet) 
    })
  }, []);
  console.log(tweet);
  


  
  return(

    <>{!tweet ? (
      <h1>Loading...</h1>
    ) : (<BigTweet tweet = {tweet}/>)}
    </>
  )
}

export default TweetDetails