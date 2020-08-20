export interface User {
  token?: string;
}

export enum ActionTypes {
  SIGN_IN_REQUEST = "@@user/SIGN_IN_REQUEST",
  SIGN_IN_SUCCESS = "@@user/SIGN_IN_SUCCESS",
  SIGN_IN_ERROR = "@@user/SIGN_IN_ERROR",
}

export interface UserState {
  readonly loading: boolean;
  readonly data?: User;
  readonly errors?: string;
}
