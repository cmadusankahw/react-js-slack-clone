import React, { useState } from "react";
import firebase from "firebase";

import db from "../../../firebase";
import "./ChatInput.css";

// using user values from React Context API
import { useStateValue } from "../../../StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  // global user from Context API
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    // refreshes the page
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <form action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
