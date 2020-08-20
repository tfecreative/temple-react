import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import configureStore from "store/store.config";
const history = createBrowserHistory();

const initialState: any = {};
const store = configureStore(history, initialState);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} />,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
