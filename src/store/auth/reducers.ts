import { AuthState, authActions, IAuthAction } from "./types";

let initialState: AuthState = {
  token: "",
  signingIn: false,
  authenticated: false,
};

export const reducer = (
  state: AuthState = initialState,
  action: IAuthAction
) => {
  switch (action.type) {
    case authActions.SIGN_IN:
      return {
        ...state,
      };
    case authActions.SIGN_IN_STARTED:
      return {
        ...state,
        signingIn: true,
      };
    case authActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        signingIn: false,
        authenticated: true,
      };
    case authActions.SIGN_IN_CANCELLED:
      return {
        ...state,
      };
    case authActions.SIGN_IN_FAILED:
      return {
        ...state,
        token: "",
        signingIn: false,
        authenticated: false,
      };
    case authActions.CLEAR_TOKEN:
      return {
        ...state,
        token: "",
      };
    case authActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case authActions.SIGN_OUT:
      return {
        ...state,
        token: "",
        authenticated: false,
      };
  }
  return state;
};

export default reducer;
