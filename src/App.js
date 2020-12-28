import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./comps/header/Header";
import Sidebar from "./comps/sidebar/Sidebar";
import Chat from "./comps/chat/Chat";

function App() {
  return (
    // BEM naming conversions
    <div className="App">
      <Router>
        <Header />

        <div className="app_body">
          <Sidebar />
        </div>

        <Switch>
          <Route path="/room/:roomId">
            <Chat />
          </Route>
          <Route path="/">
            <h1> Welcome </h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
