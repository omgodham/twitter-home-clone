import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
    TwitterTimelineEmbed,
    TwitterFollowButton,
    TwitterTweetEmbed
  } from "react-twitter-embed";

function Widgets() {
    return <div className="widgets">
    <div className="widgets-search-bar">
    <SearchIcon className="widgets-search-icon" />
    <input  placeholder="Search Twitter" />
        </div>

    <div className="widgets-content">

    <h2 class="widgets-text">What's Happening</h2>
     <TwitterTweetEmbed
  tweetId={'1336672282769563651'} />
     <TwitterTimelineEmbed
  sourceType="profile"
  screenName="Google"
  options={{height: 400}}
/>

<TwitterFollowButton
    screenName={'Google'}
  />
  </div>
</div>
}
export default Widgets;