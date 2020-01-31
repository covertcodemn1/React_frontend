import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Navigation } from "./components/Navigation";
import { Highscore } from "./components/Highscore";
import { Highscorelist } from "./components/HighscoreList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <h1 className="justify-content-center">Highscore</h1>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Highscore" component={Highscore} exact />
          <Route path="/Highscorelist" component={Highscorelist} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
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
