import React from "react";

import Navbar from "modules/Navbar/Navbar";

import Header from "modules/Layout/Header/Header";

import { ApplicationState } from "store";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";
import "App/App.scss";
import "react-toastify/dist/ReactToastify.css";

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Router>
        <div id="app" className="App theme--light">
          <ToastContainer />
          <Header />
          <Navbar />
          <div id="site-content" className="site-content">
            <ConnectedRouter history={history}>
              <Routes />
            </ConnectedRouter>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
