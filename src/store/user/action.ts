import { ActionTypes, User } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "store";
import { accountService, SignInRequest } from "services/Account";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const signIn: ActionCreator<ThunkAction<
  Promise<Action>,
  ApplicationState,
  User,
  Action<string>
>> = (username: string, password: string) => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      const req: SignInRequest = {
        username: username,
        password: password,
      };
      const response = await accountService.signIn(req);

      return dispatch({
        type: ActionTypes.SIGN_IN_SUCCESS,
        payload: response
      });
    } catch (e) {
      return dispatch({
        type: ActionTypes.SIGN_IN_FAILURE,
        payload: null,
      });
    }
  };
};
