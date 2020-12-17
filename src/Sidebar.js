import SidebarOptions from "./SidebarOptions.js"
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";

function Sidebar(){

return <div className="sidebar">

<TwitterIcon className="twitter-icon"/>
<SidebarOptions active Icon={HomeIcon} text="Home" />
<SidebarOptions Icon={SearchIcon} text="Explore" />
<SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
<SidebarOptions Icon={MailOutlineIcon} text="Messages" />
<SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
<SidebarOptions Icon={ListAltIcon} text="Lists" />
<SidebarOptions Icon={PermIdentityIcon} text="Profile" />
<SidebarOptions Icon={MoreHorizIcon} text="More" />
<Button className="sidebar-tweet-btn">Tweet</Button>
<div className="sidebar-footer">
<Avatar className="footer-avatar" src="https://pbs.twimg.com/profile_images/1065633264084402177/DD-DVJp4_400x400.jpg" />
       <div className="sidebar-footer-text">
        <h2>Omkar</h2>
        <h3 style={{ opacity:0.5 }}>@omkargodham</h3>
        </div>
        <MoreHorizIcon  className="footer-more-icon"/>
</div>
</div>

}
export default Sidebar;