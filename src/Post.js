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
        <Avatar src="https://pbs.twimg.com/profile_images/378800000305778238/852d2f76797dbe1da82095f988d38fbe_400x400.png" />
        <h2 className="display-name">Elon Musk</h2>
      <VerifiedUserIcon className="verified-icon"/>
        <h3>@elonmusk</h3>
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