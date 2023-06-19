import styled from 'styled-components'
import { COLORS } from '../constant';
import moment from "moment";


const SmallTweet = ({tweet}) =>{
    
    return(

        <TweetContainer>
            <ImageProfile alt="profile picture" src ={tweet.author.avatarSrc}/>
            <TweetInfo>
                <Title><Name>{tweet.author.displayName}</Name> @{tweet.author.handle} · {moment(tweet.timestamp).format("MMM, Do")}</Title>
                <Text>{tweet.status}</Text>
                <ImageBox>
                    {tweet.media && tweet.media.length > 0 && (
                    <Image src={tweet.media[0].url} alt="tweet image" />)}
                </ImageBox>
            </TweetInfo>
        </TweetContainer>
    )

}
const TweetContainer = styled.div`
display:flex;
padding-top:1rem;
padding-left:1rem;

border: 1px solid ${COLORS.paleGrey};
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

`

const Name = styled.p`
font-weight:bold;
color:black;
margin-right:1rem;
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
export default SmallTweet