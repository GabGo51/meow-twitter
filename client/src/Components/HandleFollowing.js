import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { styled } from "styled-components";
import Loading from "./Loading";
import { COLORS } from "../constant";

const HandleFollowing = () => {
const  { handle } = useParams();
const [ profile, setProfile ] = useState();
const [ following, setFollowing ] = useState();

const location = useLocation();
const { pathname } = location;
const splitLocation = pathname.split("/");
// console.log(splitLocation);

// console.log(handle);
// console.log(profile);
console.log(following);

useEffect(() => {
    fetch(`/api/${handle}/profile`)
    .then(response => response.json())
    .then(parsed => {
            setProfile(parsed.profile); 
    })


    fetch(`/api/${handle}/following`)
    .then(response => response.json())
    .then(parsed => {
        console.log(parsed.following);
        setFollowing(parsed.following);
    })
}, [handle]);

    return (
    <>
    {!following ? 
    <LoadingBox>
        <Loading/>
    </LoadingBox> :
    <Container>
        <Profile>
            <h1>{profile.displayName}</h1>
            <p>@{profile.handle}</p>
        </Profile>
        <Navigation>
            <OnPageNav className={splitLocation[2] === "followersyouknow" ? "active" : ""} >
                <LinkNav>Followers you know</LinkNav>
            </OnPageNav>
            <OnPageNav className={splitLocation[2] === "followers" ? "active" : ""} >
                <LinkNav to={`/${handle}/followers`}>Followers</LinkNav>
                </OnPageNav>
            <OnPageNav className={splitLocation[2] === "following" ? "active" : ""} > 
            <LinkNav to={`/${handle}/following`}>Following </LinkNav>
            </OnPageNav>
        </Navigation>
        <Wrapper>
            {following.map((follow) => {
                return (
                <FollowingProfile key={follow.handle}>
                    <Avatar src={follow.avatarSrc}/>
                    <ProfileText>
                        <Name>{follow.displayName}</Name>
                        <ProfileHandle>@{follow.handle}</ProfileHandle>
                        <p>{follow.bio}</p>
                    </ProfileText>
                    <Button>Following</Button>
                </FollowingProfile>)
            })}
        </Wrapper>
        
    </Container>
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
display: flex;
flex-direction: column;
width: 100vh;
border: 0.1vh solid ${COLORS.paleGrey};

@media screen and (max-width: 53rem) {
    width: calc(100vw - 12.5rem);
  }
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 35.5rem) {
    width: 100vw;
  }
`
const Profile = styled.div`
margin: 2vw 7vw;
`
const Navigation = styled.ul`
display: flex;
justify-content: space-evenly;
border-bottom: 0.1rem solid ${COLORS.paleGrey};
`
const OnPageNav = styled.li`
padding-bottom: 2vh;
width: 33%;
display: flex;
justify-content: center;

&.active {
    border-bottom: 0.2rem solid ${COLORS.primary};
}
`
const LinkNav = styled(Link)`
text-align: center;
text-decoration: none;
color: ${COLORS.grey};
font-weight: bold;
`
const Wrapper = styled.div`
`
const FollowingProfile = styled.div`
display: flex;
padding: 2vh;
border-top: 0.1rem solid ${COLORS.paleGrey};
border-bottom: 0.1rem solid ${COLORS.paleGrey};
position: relative;
`

const ProfileText = styled.div`
margin-left: 1vh;
`
const Button = styled.button`
position: absolute;
right: 3vw;
top: 2vh;
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
    
    margin-right : 1rem ;
    width: 8rem;
    }

`
const ProfileHandle = styled.p`
color: ${COLORS.grey};
`
const Avatar = styled.img`
width: 4vw;
border-radius: 50vw;
object-fit: contain;
`

const Name = styled.p`
font-weight: bold;
`

export default HandleFollowing;