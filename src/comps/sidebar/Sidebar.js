import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import "./Sidebar.css";
import SidebarOption from "./sidebaroption/SidebarOption";

function Sidebar(props) {
  const user = {
    displayName: "Chiran HW",
  };
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2> Your Slack </h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" />

      {/* connect to db and list all channels --> sidebarOptions */}
    </div>
  );
}

export default Sidebar;
