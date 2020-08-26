import { Action } from "redux";
import { SignUpResponse } from "models/sign-up";

export interface ISignUpState {
  readonly loading: boolean;
}

export const initialSignUpState: ISignUpState = {
  loading: false,
};

export interface ISignUpRequestAction extends Action<"SignUpRequest"> {
  type: "SignUpRequest";
}

export interface ISignUpFinishedAction extends Action<"SignUpFinished"> {
  type: "SignUpFinished";
  response?: SignUpResponse;
}

export type SignUpActions = ISignUpRequestAction | ISignUpFinishedAction;
