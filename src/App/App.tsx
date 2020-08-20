import React from "react";
import About from "modules/About/About";
import Home from "modules/Home/Home";
import Navbar from "modules/Navbar/Navbar";
import SignIn from "modules/SignIn/SignIn";
import Header from "modules/Layout/Header/Header";
import Account from "modules/Account/Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "App/App.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div id="app" className="App theme--light">
        <ToastContainer />
        <Header />
        <Navbar />
        <div id="site-content" className="site-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/account" component={Account} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
