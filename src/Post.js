import "./Post.css";
import React  from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'; 
function  Post({newTweetText,newTweetImage}) {

    return <div className="post">
    <div className="post-header">
        <Avatar src="https://pbs.twimg.com/profile_images/1065633264084402177/DD-DVJp4_400x400.jpg" />
        <h2 className="display-name">Omkar</h2>
      <VerifiedUserIcon className="verified-icon"/>
        <h3>@omkargodham</h3>
      </div>
      <div className="actual-tweet">
          <p>{newTweetText}</p>
          <img src={newTweetImage} className="tweet-image"/>
      </div>
    </div>

}
export default Post;