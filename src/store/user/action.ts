import { ActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "store";
import mockUser from "./mockdata";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: ActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser
      });
    } catch (e) {
      return dispatch({
        type: ActionTypes.SIGN_IN_ERROR
      });
    }
  };
};