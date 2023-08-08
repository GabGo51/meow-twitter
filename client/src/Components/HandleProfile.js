import { useParams, NavLink, Link  } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { COLORS } from "../constant";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import TweetButtons from "./TweetButtons";
import moment from "moment";
import SmallTweet from "./SmallTweet";
import Loading from "./Loading";

const HandleProfile = () => {
    const { handle } = useParams();
    const [ profile, setProfile ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ tweets, setTweets ] = useState("");
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/${handle}/profile`)
        .then(response => response.json())
        .then(parsed => {
                setProfile(parsed.profile);
            if(!parsed.profile.location) {
                setLocation(null)
            } else{
                setLocation(parsed.profile.location.split(",")[0])
            }   
        })

        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/${handle}/feed`)
        .then(response => response.json())
        .then(parsed => {
            setTweets(Object.values(parsed.tweetsById))
        })
    }, [handle]);
    
    const handleUnfollow = () => {
        return profile.numFollowers--;
    };

    const handleFollow = () => {
        return profile.numFollowers++;
    };

    const toggleFollow = () => {
        if(profile.isBeingFollowedByYou) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/${handle}/unfollow`, {
                method: "PUT",
                body: JSON.stringify({ isBeingFollowedByYou: false, numFollowers: handleUnfollow() }),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            })
            .then(()=> {
                setProfile({...profile, isBeingFollowedByYou: false, numFollowers: handleUnfollow()});
            });
        } else {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/${handle}/follow`, {
                method: "PUT",
                body: JSON.stringify({ isBeingFollowedByYou: false, numFollowers: handleFollow() }),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then(()=> {
        
                setProfile({...profile, isBeingFollowedByYou: true, numFollowers: handleFollow() });
            });
        }  
    };

    return( 
    <>
    {!profile ? <LoadingBox>
        <Loading/>
        </LoadingBox> :
    (<>
        <Container>
            <WrapperHead>
                <Banner src={profile.bannerSrc}/>
                <Avatar src={profile.avatarSrc}/>
                <Button onClick={toggleFollow}> { profile.isBeingFollowedByYou ? "Following" : "Follow" } </Button>
            </WrapperHead>
            <Wrapper>
                <Name>{profile.displayName}</Name>
                <HandleWrapper>
                    <p>@{profile.handle}</p>
                    <FollowTag> { profile.isFollowingYou ? "Follows you" : "" } </FollowTag>
                </HandleWrapper>
                <Bio>{profile.bio}</Bio>
                <Details>
                    <DetailElement><CiLocationOn style={{ width: "25px" }} />{location}</DetailElement>
                    <DetailElement><AiOutlineCalendar style={{ width: "25px" }}/> Joined {moment(profile.joined).format("MMMM, YYYY")}</DetailElement>
                    <LinkElement to={`/${handle}/following`}><BoldStyling>{profile.numFollowing}</BoldStyling> Following</LinkElement>
                    <LinkElement to={`/${handle}/followers`}><BoldStyling>{profile.numFollowers}</BoldStyling> Followers</LinkElement>
                </Details>
        </Wrapper>
        <ProfileNav>
            <ProfileSections to="/tweets" >Tweets</ProfileSections>
            <ProfileSections to="/media">Media</ProfileSections>
            <ProfileSections to="/likes">Likes</ProfileSections>
        </ProfileNav>
        <div>
            {!tweets ? <Loading/> :
            tweets.map(tweet => {
                return (
                    <div key={tweet.id}>
                        <SmallTweet  tweet={tweet} />
                        <TweetButtons  tweet = {tweet}/>
                    </div>
                    )
            })
            }                         
        </div>
        </Container>    
        </>
        )
        }
    </>
    )
};

const LoadingBox = styled.div`
width: 100%;
display: flex;
align-items:center ;
justify-content: center;
margin-top: -40rem;
`
const Container = styled.div`
margin: 0 100px 100px 20px;
border: 0.1vh solid ${COLORS.paleGrey};
@media screen and (max-width: 53rem) {
    width: calc(100vw - 12.5rem);
}
@media screen and (max-width: 35.5rem) {
    
    margin: 0;
    width: 100vw;
}
`
const WrapperHead = styled.div`
position: relative;
`
const Banner = styled.img`
width: 100%;
`
const Avatar = styled.img`
width: 15vw;
border-radius: 50vw;
border: 3px solid white;
position: absolute;
left: 2vw;
bottom: -5.5vh;
z-index: 5;
`
const Button = styled.button`
position: absolute;
right: 3vw;
bottom: -6vh;
z-index: 4;
background-color: white;
color: ${COLORS.primary};
font-weight: bold;
border: 1px solid ${COLORS.primary};
padding: 0.5rem;
width: 8vw;
border-radius: 3vh;

    &:active {
        color: white;
        background-color: ${COLORS.primary};
    }

    @media screen and (max-width: 35.5rem) {
    
    margin-right :50px ;
    width: 8rem;
    bottom: -9vh;
   }
`
const Wrapper = styled.div`
margin-top: 6vh;
padding: 0 2vh 2vh;
`
const HandleWrapper = styled.div`
display: flex;
color: ${COLORS.grey};
font-weight: 500;
padding: 0.2rem;
`
const Name = styled.h1`
font-size: 1.3rem;
`
const FollowTag = styled.p`
background-color: ${COLORS.paleGrey};
width: 6rem;
text-align: center;
border-radius: 6px;
margin-left: 0.4rem;
`
const Bio = styled.p`
width: 40vw;
margin: 1vh 0;
@media screen and (max-width: 35.5rem) {
    
    width: 100vw;
    }
`
const Details = styled.div`
display: grid;
grid-template-columns: repeat(2, 0fr);
width: 30vw;
justify-content: space-between;
color: ${COLORS.grey};
gap: 0.5rem;
@media screen and (max-width: 35.5rem) {
    
    width: 60vw;
   }
`
const DetailElement = styled.p`
width: 15vw;
display: flex;
align-items: center;

@media screen and (max-width: 35.5rem) {
    
    width: 40vw;
   }
`
const LinkElement = styled(Link)`
text-decoration: none;
width: 15vw;
display: flex;
align-items: center;
color: ${COLORS.grey} ;

&:active{
    color: ${COLORS.primary};
}
`
const BoldStyling = styled.span`
font-weight: bold;
padding: 0 0.5rem;
`
const ProfileNav = styled.div`
font-size: 0.8rem;
display: flex;
justify-content: space-between;
`
const ProfileSections = styled(NavLink)`
width: 20vw;
padding: 1rem;
text-align: center;
text-decoration: none;
font-weight: bold;
font-size: 1rem;
color: ${ COLORS.grey };

&.active {
    border-bottom: 0.2vh solid ${COLORS.primary};
    color: ${COLORS.primary};
}
`
export default HandleProfile;