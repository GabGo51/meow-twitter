import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = () =>{
  const { profileId } = useParams();
  const [ profile, setProfile ] = useState();

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
    .then(response => response.json())
    .then(parsed => {
      setProfile(parsed.profile);
    })
  }, []);
  console.log(profile);

  return(
    <> 
    {!profile ? <h1>Loading...</h1> : 
    (<> 
      <div>profile</div>
      <img src={profile.bannerSrc}/>
      <img src={profile.avatarSrc}/>
      <button></button>
      {/* button "follow/following" - changes based on the profile info. */}
      <h1>{profile.displayName}</h1>
      <p>{profile.handle}</p>
      {/* <p>{profile.isFollowingYou}</p> - do they follow the current user? seems to break everything*/}
      <p>{profile.bio}</p>
      <p>{profile.location}</p>
      <p>{profile.joined}</p>
      <p>{profile.numFollowers}</p>
      <p>{profile.numFollowing}</p>
    </>)
    }
    </>
    
  )
}

export default Profile