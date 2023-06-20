import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homefeed from "./Homefeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import SideBar from "./SideBar";
import { styled } from "styled-components";
import HandleProfile from "./HandleProfile";
import ErrorScreen from "./ErrorScreen";


function App() {
  return (
    <Router>
      <Container>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Homefeed />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/tweet/:tweetId" element={<TweetDetails />} />
          <Route path="/:handle/profile" element={<HandleProfile/>} />
          <Route path="/:profileId" element={<Profile />} />
          <Route path="/error" element={<ErrorScreen/>}/>
        </Routes>
      </Container>
      
    </Router>
  );
}

const Container  = styled.div`
display: flex;

@media screen and (max-width: 35.5rem) {
    display: flex;
    flex-direction: column;
    
  }
`

export default App;
