import { AuthActions, authActions, IAuthAction } from "./types";

export const signInRequest = (
  username: string,
  password: string
): AuthActions => {
  return {
    type: authActions.SIGN_IN,
    payload: { username, password },
  };
};

export const signInStarted = (): IAuthAction => {
  return {
    type: authActions.SIGN_IN_STARTED,
  };
};

export const signInSuccess = (token: string): AuthActions => {
  return {
    type: authActions.SIGN_IN_SUCCESS,
    payload: { token },
  };
};

export const signInFailed = (): IAuthAction => {
  return {
    type: authActions.SIGN_IN_FAILED,
  };
};

export const setToken = (token: string): AuthActions => {
  return {
    type: authActions.SET_TOKEN,
    payload: { token },
  };
};

export const clearToken = (): IAuthAction => {
  return {
    type: authActions.CLEAR_TOKEN,
  };
};

export const signOut = (): IAuthAction => {
  return {
    type: authActions.SIGN_OUT
  }
}

export const signInCancelled = (): IAuthAction => {
  return {
    type: authActions.SIGN_IN_CANCELLED,
  };
};
