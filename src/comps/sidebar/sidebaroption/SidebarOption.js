import React from "react";
import { useHistory } from "react-router-dom";

import db from "../../../firebase";
import "./SidebarOption.css";

function SidebarOption(props) {
  const Icon = props.Icon;
  const title = props.title;
  const id = props.id;
  const addChannelOption = props.addChannelOption;

  // pulling the web history with useHistory hook
  const history = useHistory();

  // function to handle routing logic when selecting an available channel
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  // function to handle the add new channel logic
  const addChannel = () => {
    const channelName = prompt(" Please enter a channel Name:");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3> {title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
