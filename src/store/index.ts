import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";

import { History } from "history";

import { UserReducer } from "./user/reducer";
import { UserState } from "./user/types";

export interface ApplicationState {
  user: UserState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    user: UserReducer,
    router: connectRouter(history),
  });
