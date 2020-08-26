import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { SignUpRequest, SignUpResponse } from "models/sign-up";
import { accountService } from "services/Account";
import { ISignUpFinishedAction, ISignUpRequestAction } from "./types";

export const signUp: ActionCreator<ThunkAction<
  Promise<ISignUpFinishedAction>,
  SignUpResponse,
  null,
  ISignUpFinishedAction
>> = (signUpRequest: SignUpRequest) => {
  return async (dispatch: Dispatch) => {
    try {
      const inProgress: ISignUpRequestAction = {
        type: "SignUpRequest",
      };
      dispatch(inProgress);
      await accountService.signUp(signUpRequest);
      const success: ISignUpFinishedAction = {
        type: "SignUpFinished",
      };
      return dispatch(success);
    } catch (e) {
      const failed: ISignUpFinishedAction = {
        type: "SignUpFinished",
      };
      return dispatch(failed);
    }
  };
};
