import { Action } from "redux";

export interface Auth {
  token?: string;
}

export interface ISignInRequestAction extends Action<"SignInRequest"> {
  type: "SignInRequest";
}

export interface ISignInSuccessAction extends Action<"SignInSuccess"> {
  type: "SignInSuccess";
  auth: Auth;
}

export interface ISignInFailedAction extends Action<"SignInFailed"> {
  type: "SignInFailed";
  error: string;
}

export interface ISignInFinishedAction extends Action<"SignInFinished"> {
  type: "SignInFinished";
}

export type SignUpActions =
  | ISignInRequestAction
  | ISignInFailedAction
  | ISignInSuccessAction
  | ISignInFinishedAction;

export interface AuthState {
  readonly loading: boolean;
  readonly auth: Auth;
  readonly authenticated: boolean;
}
