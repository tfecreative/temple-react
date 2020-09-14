import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { IAppState } from "store/types";
import { reducer as authReducer } from "store/auth/reducers";
import { reducer as notificationsReducer } from "store/notifications/reducers";
import { reducer as userReducer } from "store/user/reducers";

export const createRootReducer = (history: History) =>
  combineReducers<IAppState>({
    auth: authReducer,
    user: userReducer,
    notifications: notificationsReducer,
    router: connectRouter(history),
  });
