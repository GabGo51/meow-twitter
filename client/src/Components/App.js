import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homefeed from "./Homefeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homefeed/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/bookmarks" element={<Bookmarks/>}/>
        <Route path="/tweet/:tweetId" element={<TweetDetails/>}/>
        <Route path="/:profileId" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
