import { styled } from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import { COLORS } from "../constant";

const BigTweet = ({ tweet }) => {
  return (
    <TweetContainer>
      <UserInfo>
        <Link to={`/${tweet.author.handle}/profile`}>
          <ImageProfile alt="profile picture" src={tweet.author.avatarSrc} />
        </Link>
        <Title>
          <Name to={`/${tweet.author.handle}/profile`}>
            {tweet.author.displayName}
          </Name>{" "}
          @{tweet.author.handle}
        </Title>
      </UserInfo>

      <TweetInfo>
        <Box>
          <Text>{tweet.status}</Text>
          <ImageBox>
            {tweet.media && tweet.media.length > 0 && (
              <Image src={tweet.media[0].url} alt="tweet image" />
            )}
          </ImageBox>
          {moment(tweet.timestamp).format("h:mm A · MMMM d YYYY")} · <p>Critter web app</p>
        </Box>
      </TweetInfo>
    </TweetContainer>
  );
};

const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 1rem;
  border: 1px solid ${COLORS.paleGrey};
  width: calc(100vw - 25rem);
  padding: 2rem 2rem;
  max-height: 80vh;

  @media screen and (max-width: 53rem) {
    width: calc(100vw - 12.5rem);
  }
  @media screen and (max-width: 35.5rem) {
    width: 100%;
  }
`;

const UserInfo = styled.div`
display: flex;
`
const ImageProfile = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
const TweetInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Box = styled.div``;
const Name = styled(Link)`
  font-weight: bold;
  color: black;
  margin-right: 1rem;
  text-decoration: none;
  font-size: 1.3em;
`;
const Title = styled.p`
  color: grey;
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1.5em;
  margin-right: 20px;
`;
const ImageBox = styled.div``;
const Image = styled.img`
  border-radius: 10px;
  width: 98%;
  object-fit: cover;
  margin-bottom: 0.5rem;
  max-height: 60vh
`;

export default BigTweet;
