import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { reducer as toastrReducer } from "react-redux-toastr";
import { AuthReducer } from "./auth/reducer";
import { SignUpReducer } from "./sign-up/reducer";

export const createRootReducer = (history: History) =>
  combineReducers({
    auth: AuthReducer,
    signUp: SignUpReducer,
    router: connectRouter(history),
    toastr: toastrReducer,
  });
