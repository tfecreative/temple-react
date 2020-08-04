import React from "react";
import About from "About/About";
import Home from "Home/Home";
import Navbar from "Navbar/Navbar";
import AppHeader from "Layout/AppHeader/AppHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "App/App.scss";

function App() {
  return (
    <Router>
      <div id="app" className="App theme--light">
        <AppHeader />
        <Navbar />
        <div id="site-content" className="site-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
