export interface User {
  token?: string;
}

export enum ActionTypes {
  SIGN_IN = "@@user/SIGN_IN",
  SIGN_IN_SUCCESS = "@@user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "@@user/SIGN_IN_FAILURE",
}

export interface UserState {
  readonly loading: boolean;
  readonly user: User;
  readonly errors?: string;
}
