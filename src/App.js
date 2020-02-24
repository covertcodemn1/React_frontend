import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navigation } from "./components/Navigation";
import { HighscoreList } from "./components/HighscoreList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <h1 className="justify-content-center">Highscore</h1>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Highscorelist" component={HighscoreList} exact />
          <Route path="/login" component={Login} exact />
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
    </BrowserRouter>
  );
}

export default App;
