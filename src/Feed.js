import React ,{useState} from "react";
import "./Feed.css"
import Post from "./Post";


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
                <h2>Home</h2>
            </div>
            <form className="tweet-box-block">
            <div className="tweet-box">
            <Avatar className="profile-avatar" 
            src="https://pbs.twimg.com/profile_images/1065633264084402177/DD-DVJp4_400x400.jpg"/>
            <input className="tweet-input" 
            placeholder="What's happening?" type="url" name="text" value={tweet.text} onChange={handleChange} />
            </div>
            <input placeholder="Enter Image Url" type="url" name="image" value={tweet.image} className="image-url" onChange={handleChange} />
            <Button type="submit" onClick={setNewTweet}  className="tweet-box-btn">Tweet</Button>
            </form>
            {tweets.map((item,index)=>(
                 <Post key={index} newTweetText={item.text} newTweetImage={item.image} />))}
       
    </div>
}
export default Feed;