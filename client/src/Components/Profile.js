import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled }from "styled-components";
import { COLORS } from "../constant";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import moment from "moment";

const Profile = () =>{
  const { profileId } = useParams();
  const [ profile, setProfile ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ tweets, setTweets ] = useState("");

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
    .then(response => response.json())
    .then(parsed => {
      setProfile(parsed.profile);
      setLocation(parsed.profile.location.split(",")[0])
    })

    fetch(`/api/${profileId}/feed`)
    .then(response => response.json())
    .then(parsed => {
      setTweets(parsed.tweetsById)
    } )
  }, []);
  
  // console.log(profile)
  console.log(tweets)

  return(
    <> 
    {!profile ? <h1>Loading...</h1> : 
    (<> 
      <Container>
        <WrapperHead>
          <Banner src={profile.bannerSrc}/>
          <Avatar src={profile.avatarSrc}/>
          <Button> {profile.isBeingFollowedByYou ? "Following" : "Follow" }  </Button>
        </WrapperHead>
        <Wrapper>
          <Name>{profile.displayName}</Name>
          <p>@{profile.handle}</p>
          <p> { profile.isFollowingYou ? "Follows you" : "" } </p>
          <Bio>{profile.bio}</Bio>
          <Details>
            <DetailElement><CiLocationOn style={{ width: "25px" }} />{location}</DetailElement>
            <DetailElement><AiOutlineCalendar style={{ width: "25px" }}/> Joined {moment(profile.joined).format("MMMM, YYYY")}</DetailElement>
            <DetailElement><BoldStyling>{profile.numFollowers}</BoldStyling> Following</DetailElement>
            <DetailElement><BoldStyling>{profile.numFollowing}</BoldStyling> Followers</DetailElement>
          </Details>
        </Wrapper>
        <ProfileNav>
          <Link to="/tweets">Tweets</Link>
          <Link to="/media">Media</Link>
          <Link to="/likes">Likes</Link>
        </ProfileNav>
        <div>
          
        </div>
      </Container> 
    </>)
    }
    </>
    
  )
}

const Container = styled.div`
margin: 0 100px 100px 20px;
border: 0.1vh solid ${COLORS.paleGrey};
`

const WrapperHead = styled.div`
position: relative;
`
const Banner = styled.img`
width: 75vw;
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
background-color: ${COLORS.primary};
color: white;
font-weight: bold;
border: none;
padding: 1vh;
width: 8vw;
border-radius: 2vh;
`
const Wrapper = styled.div`
margin-top: 6vh;
padding: 0 2vh 2vh;
`
const Name = styled.h1`
font-size: 1.3rem;
`
const Bio = styled.p`
width: 40vw;
margin: 1vh 0;
`
const Details = styled.div`
display: grid;
grid-template-columns: repeat(2, 0fr);
width: 30vw;
justify-content: space-between;
color: ${COLORS.grey};
`
const DetailElement = styled.p`
width: 15vw;
display: flex;
align-items: center;
`
const BoldStyling = styled.span`
font-weight: bold;
padding: 0 5px;
`
const ProfileNav = styled.div`
font-size: 0.8rem;
display: flex;
justify-content: space-between;
`

const Link = styled(NavLink)`
width: 20vw;
text-align: center;
text-decoration: none;
font-weight: bold;
font-size: 1rem;
color: ${ COLORS.grey };

&.active {
  padding-bottom: 1rem;
  border-bottom: 0.2vh solid ${COLORS.primary};
  color: ${COLORS.primary};
}
`

export default Profile