import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";

import { History } from "history";

import { AuthReducer } from "./auth/reducer";
import { AuthState } from "./auth/types";

export interface ApplicationState {
  auth: AuthState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    auth: AuthReducer,
    router: connectRouter(history),
  });
