export interface Auth {
  token?: string;
}

export enum ActionTypes {
  SIGN_IN = "@@auth/SIGN_IN",
  SIGN_IN_SUCCESS = "@@auth/SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "@@auth/SIGN_IN_FAILURE",
}

export interface AuthState {
  readonly loading: boolean;
  readonly auth: Auth;
  readonly errors?: string;
}
