import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";

import { History } from "history";

import { UserReducer } from "./user/reducer";
import { UserState } from "./user/types";

export interface ApplicationState {
  userState: UserState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    userState: UserReducer,
    router: connectRouter(history),
  });
