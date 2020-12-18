import React ,{useState} from "react";
import "./Feed.css"
import Post from "./Post";

import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

function Feed() {
    const [tweet,setTweet]=useState({
        text:"",
        image:""
    });
    const [tweets,setTweets]=useState([]);

function handleChange(event) {
    const value=event.target.value;
      const name=event.target.name;
      setTweet(prevValue => { return {
          ...prevValue,
          [name]:value
      };});
      console.log(tweet);
}

function setNewTweet(event){
    setTweets(prevValue => {
        return [...prevValue,tweet]
    });
   

    setTweet({
        text:"",
        image:""
    });
        event.preventDefault();
    }



    return <div className="feed">
            <div className="feed-header">
            <Avatar className="home-avatar"
src="https://pbs.twimg.com/profile_images/378800000305778238/852d2f76797dbe1da82095f988d38fbe_400x400.png" />
                <h2 style={{ cursor:'pointer'}}>Home</h2>
                <i class="fi-xwluxl-star-wide star"></i>
            </div>
            <form className="tweet-box-block">
            <div className="tweet-box">
            <Avatar className="avatar-image"
            src="https://pbs.twimg.com/profile_images/378800000305778238/852d2f76797dbe1da82095f988d38fbe_400x400.png"/>
            <input className="tweet-input" 
            placeholder="What's happening?" type="url" name="text" value={tweet.text} onChange={handleChange} />
            </div>
            <input placeholder="Enter Image Url" type="url" name="image" value={tweet.image} className="image-url" onChange={handleChange} />
            <div className="bottom-section">
            <div className="tweet-box-icons">
                <CropOriginalIcon className="tweet-box-icon" />
                <GifIcon className="tweet-box-icon" />
                <PollIcon className="tweet-box-icon" />
                <InsertEmoticonIcon className="tweet-box-icon" />
                <CalendarTodayIcon className="tweet-box-icon" />
            </div>
            <Button type="submit" onClick={setNewTweet}  className="tweet-box-btn">Tweet</Button>
            </div>
            </form>
            {tweets.map((item,index)=>(
                 <Post key={index} newTweetText={item.text} newTweetImage={item.image} />))}
                 <Avatar className="footer-navbar-tweet-btn"
             src="https://i.ibb.co/58w1gh5/ci.png"/>
            <div className="footer-navbar-block">
            <div className="footer-navbar">
                <HomeIcon className="footer-navbar-icon footer-icon-active" />
                <SearchIcon className="footer-navbar-icon"/>
                <NotificationsNoneIcon className="footer-navbar-icon"/>
                <MailOutlineIcon className="footer-navbar-icon"/>
            </div>
            </div>
    </div>
}
export default Feed;