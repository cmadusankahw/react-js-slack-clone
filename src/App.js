import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./comps/header/Header";
import Sidebar from "./comps/sidebar/Sidebar";
import Chat from "./comps/chat/Chat";
import Login from "./comps/login/Login";

// using user values from React Context API
import { useStateValue } from "./StateProvider";

function App() {
  // global user from Context API
  const [{ user }] = useStateValue();

  return (
    // BEM naming conversions
    // Usnig Router and Switch for Routing
    // Login page handeling Logic
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h5 className="app_mentions"> No recent Mentions... </h5>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
