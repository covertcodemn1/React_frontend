import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navigation } from "./components/Navigation";
import { HighscoreList } from "./components/HighscoreList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logNew from "./components/LoginNEW";
import Admin from "./components/Admin";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Highscorelist" component={HighscoreList} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/loginNew" component={logNew} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/logout" component={Logout} exact />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Router>
  );
}

export default App;
