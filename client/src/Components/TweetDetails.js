import { useParams } from "react-router-dom";

const TweetDetails = () =>{
  const { tweetId } = useParams();
  console.log(tweetId);
  
  return(

    <div>TweetDetails</div>
  )
}

export default TweetDetails