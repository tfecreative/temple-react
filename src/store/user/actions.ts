import {
  userActions,
  IUserActionLoadProfileFailed,
  IUserActionLoadProfileSuccess,
  IUserActionLoadProfile,
  IUserActionClearProfile,
  IUserActionSetProfile,
} from "./types";
import { IUserProfile } from "models";

export const loadProfile = (): IUserActionLoadProfile => {
  return {
    type: userActions.LOAD_PROFILE,
  };
};

export const loadProfileSuccess = (
  profile: IUserProfile
): IUserActionLoadProfileSuccess => {
  return {
    type: userActions.LOAD_PROFILE_SUCCESS,
    payload: { profile },
  };
};

export const loadProfileFailed = (
  error: string
): IUserActionLoadProfileFailed => {
  return {
    type: userActions.LOAD_PROFILE_FAILED,
    payload: { error },
  };
};

export const clearProfile = (): IUserActionClearProfile => {
  return {
    type: userActions.CLEAR_PROFILE,
    payload: {},
  };
};

export const setProfile = (profile: IUserProfile): IUserActionSetProfile => {
  return {
    type: userActions.SET_PROFILE,
    payload: { profile },
  };
};
