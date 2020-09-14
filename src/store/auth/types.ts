export type AuthState = {
  token: string;
  signingIn: boolean;
  authenticated: boolean;
};

export const authActions = {
  SIGN_IN: "Sign in requested.",
  SIGN_IN_STARTED: "Sign in started.",
  SIGN_IN_SUCCESS: "Sign in successful.",
  SIGN_IN_FAILED: "Sign in failed.",
  SIGN_IN_CANCELLED: "Sign in process was cancelled.",
  SIGN_OUT: "Sign out requested.",
  CLEAR_TOKEN: "Clear token",
  SET_TOKEN: "Set token.",
};

export interface IAuthAction {
  type: string;
  payload?: any;
}

export interface IAuthSignInRequestAction {
  type: typeof authActions.SIGN_IN;
  payload: { username: string; password: string };
}

export interface IAuthSignInSuccessAction {
  type: typeof authActions.SIGN_IN_SUCCESS;
  payload: { token: string };
}

export type AuthActions = IAuthSignInRequestAction | IAuthSignInSuccessAction;
