import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./comps/header/Header";
import Sidebar from "./comps/sidebar/Sidebar";
import Chat from "./comps/chat/Chat";

function App() {
  const [user, setUser] = useState(null);

  return (
    // BEM naming conversions
    // Usnig Router and Switch for Routing
    // Login page handeling Logic
    <div className="App">
      <Router>
        {!user ? (
          <h1>Login Page</h1>
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
                  <h1> Welcome </h1>
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
