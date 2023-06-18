import styled from 'styled-components'

const handleTime = (timestamp) =>{
    
    const dateObj = new Date(timestamp);
    const month = dateObj.toLocaleString('default', { month: 'short' });

    const currentTime = new Date();
    const timeDifference = currentTime - dateObj;

    const totalHours = Math.floor(timeDifference / (1000 * 60 * 60));
    const totalDays = Math.floor(totalHours / 24);

    return(`${month} ${dateObj.getHours()}h`);
    
}

const SmallTweet = ({tweet}) =>{
    console.log(tweet.media[0]);
    return(

        <TweetContainer>
            <ImageProfile alt="profile picture" src ={tweet.author.avatarSrc}/>
            <TweetInfo>
                <Title><Name>{tweet.author.displayName}</Name> @{tweet.author.handle} · {handleTime(tweet.timestamp)}</Title>
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
margin-bottom:2rem;

`

const ImageProfile = styled.img`
width:4rem;
height:4rem;
border-radius:50%;
margin-right:1rem;

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