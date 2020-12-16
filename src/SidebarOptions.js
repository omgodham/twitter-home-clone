import "./SidebarOptions.css"
import React from "react";
function SidebarOptions({active,Icon,text}){
return <div className={`sidebar-options ${active && "home-active"}`}>
<Icon className="sidebar-icon"/>
<h2>{text}</h2>
</div>
}
export default SidebarOptions;