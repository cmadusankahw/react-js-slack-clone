import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

import "./Login.css";

function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7e/Slack_logo.svg/1200px-Slack_logo.svg.png"
          alt="slack logo"
        />
        <h1> Sign in to Chiran's Slack Workspace</h1>
        <p>chiranhw.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
