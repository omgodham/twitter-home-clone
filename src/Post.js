import "./Post.css";
import React  from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'; 
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PublishIcon from '@material-ui/icons/Publish';
import RepeatIcon from '@material-ui/icons/Repeat';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function  Post({newTweetText,newTweetImage}) {

    return <div className="post">
    <div className="post-header">
        <Avatar src="https://pbs.twimg.com/profile_images/1065633264084402177/DD-DVJp4_400x400.jpg" />
        <h2 className="display-name">Omkar</h2>
      <VerifiedUserIcon className="verified-icon"/>
        <h3>@omkargodham</h3>
        <MoreHorizIcon className="post-more-icon"/>
      </div>
      <div className="actual-tweet">
          <p>{newTweetText}</p>
          <img src={newTweetImage} className="tweet-image"/>
      </div>
      <div className="reaction-icons">
        <ChatBubbleOutlineIcon className="reaction-icon"/>
        <RepeatIcon  className="reaction-icon"/>
        <FavoriteBorderIcon   className="reaction-icon"/>
        <PublishIcon className="reaction-icon"/> 
      </div>
      </div>

}
export default Post;