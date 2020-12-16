import "./Feed.css"
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
function Feed() {
    return <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <form className="tweet-box-block">
            <div className="tweet-box">
            <Avatar className="profile-avatar" src="https://pbs.twimg.com/profile_images/1065633264084402177/DD-DVJp4_400x400.jpg"/>
            <input className="tweet-input" placeholder="What's happening?"/>
            </div>
            <Button className="tweet-box-btn">Tweet</Button>
            </form>
        
    </div>
}
export default Feed;