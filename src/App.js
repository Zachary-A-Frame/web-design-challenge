import React from "react";
import "./App.css";
import "./styles/styles.scss";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Visualizations from "./components/Visualizations";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const subtitle = "An Analysis by Zach Frame";

  return (
    <Router>
      <Header subtitle={subtitle} />
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/visualizations" component={Visualizations} />
      </Switch>
    </Router>
  );
}

export default App;
