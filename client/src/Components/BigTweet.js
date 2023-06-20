import { styled } from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import { COLORS } from "../constant";

const BigTweet = ({ tweet }) => {
  return (
    <TweetContainer>
      <Link to={`/${tweet.author.handle}/profile`}>
        <ImageProfile alt="profile picture" src={tweet.author.avatarSrc} />
      </Link>
      <TweetInfo>
        <Title>
          <Name to={`/${tweet.author.handle}/profile`}>
            {tweet.author.displayName}
          </Name>{" "}
          @{tweet.author.handle} · {moment(tweet.timestamp).format("MMM, Do")}
        </Title>
        <Box >
          <Text>{tweet.status}</Text>
          <ImageBox>
            {tweet.media && tweet.media.length > 0 && (
              <Image src={tweet.media[0].url} alt="tweet image" />
            )}
          </ImageBox>
        </Box>
      </TweetInfo>
    </TweetContainer>
  );
};

const TweetContainer = styled.div`
display:flex;
padding-top:1rem;
padding-left:1rem;
border: 1px solid ${COLORS.paleGrey};
width: calc(100vw - 25rem);
height: 100%;
padding-top: 20px;

@media screen and (max-width: 53rem) {
    width: calc(100vw - 12.5rem);
  }

`

const ImageProfile = styled.img`
width:4rem;
height:4rem;
border-radius:50%;
margin-right:1rem;
margin-bottom: 1rem;

`
const TweetInfo = styled.div`
display:flex;
flex-direction:column;
flex-wrap: wrap;
`

const Box = styled.div`

`

const Name = styled(Link)`
font-weight:bold;
color:black;
margin-right:1rem;
text-decoration: none;
`
const Title = styled.p`
color:grey;
display:flex;
`

const Text = styled.p`
margin-bottom:1rem;


`

const ImageBox = styled.div`

`

const Image = styled.img`
border-radius:10px;
width:98%;
object-fit:cover;
`

export default BigTweet;
