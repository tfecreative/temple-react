import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { IAppState } from "store/types"
import { reducer as notificationsReducer } from "store/notifications/reducers"

export const createRootReducer = (history: History) =>
  combineReducers<IAppState>({
    notifications: notificationsReducer,
    router: connectRouter(history),
  });
