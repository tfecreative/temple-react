import { AuthState } from "./auth/types";
import { RouterState } from "connected-react-router";
import { ISignUpState } from "./sign-up/types";

export interface IAppState {
  auth: AuthState;
  signUp: ISignUpState;
  router: RouterState;
}
