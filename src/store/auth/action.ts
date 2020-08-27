import {
  ISignInFinishedAction,
  ISignInFailedAction,
  ISignInSuccessAction,
  AuthState,
} from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "store/types";
import { accountService, SignInRequest } from "services/Account";

export type AppThunk = ActionCreator<
  ThunkAction<void, IAppState, null, Action<string>>
>;

export const signIn: ActionCreator<ThunkAction<
  Promise<Action>,
  IAppState,
  AuthState,
  Action<string>
>> = ({ username, password }) => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      const req: SignInRequest = {
        username: username,
        password: password,
      };
      const response = await accountService.signIn(req);
      const success: ISignInSuccessAction = {
        type: "SignInSuccess",
        auth: {token: response.token },
      };
      return dispatch(success);
    } catch (e) {
      const failed: ISignInFailedAction = {
        type: "SignInFailed",
        error: e.message,
      };
      return dispatch(failed);
    } finally {
      const finished: ISignInFinishedAction = {
        type: "SignInFinished",
      };
      return dispatch(finished);
    }
  };
};
