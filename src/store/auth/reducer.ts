import { Reducer } from "redux";
import { AuthState } from "./types";

export const initialState: AuthState = {
  auth: { token: "" },
  authenticated: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case "SignInRequest": {
      return {
        ...state,
        loading: true,
        auth: {},
        authenticated: false,
      };
    }
    case "SignInSuccess": {
      return {
        ...state,
        loading: false,
        auth: action.auth,
        authenticated: true,
      };
    }
    case "SignInFailed": {
      return {
        ...state,
        loading: false,
        auth: { token: "" },
        authenticated: false,
      };
    }
    case "SignInFinished": {
      console.info('finished state', state)
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export { reducer as AuthReducer };
