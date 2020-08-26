import React from "react";

import Navbar from "modules/Navbar/Navbar";

import Header from "modules/Layout/Header/Header";

import { IAppState } from "store/types";
import { Provider } from "react-redux";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./Routes";
import ReduxToastr from 'react-redux-toastr'
import "App/App.scss";
import "react-redux-toastr/src/styles/index.scss";

export interface MainProps {
  store: Store<IAppState>;
  history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div id="app" className="App theme--light">
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
          <Header />
          <Navbar />
          <div id="site-content" className="site-content">
            <Routes />
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
