import { IUserProfile } from "models";

export const defaultUserProfile: IUserProfile = {
  username: "",
};

export type UserState = {
  profile: IUserProfile;
};

export const userActions = {
  LOAD_PROFILE: "Loading profile for current user.",
  LOAD_PROFILE_SUCCESS: "Loaded current user profile successfully.",
  LOAD_PROFILE_FAILED: "Failed to load profile for current user.",
  SET_PROFILE: "Setting current user profile",
  CLEAR_PROFILE: "Clearing current user profile",
};

export interface IUserAction {
  type: string;
  payload: any;
}

export interface IUserActionLoadProfile {
  type: typeof userActions.LOAD_PROFILE;
}

export interface IUserActionClearProfile extends IUserAction {
  type: typeof userActions.CLEAR_PROFILE;
}

export interface IUserActionSetProfile extends IUserAction {
  type: typeof userActions.SET_PROFILE;
  payload: {
    profile: IUserProfile;
  };
}

export interface IUserActionLoadProfileSuccess extends IUserAction {
  type: typeof userActions.LOAD_PROFILE_SUCCESS;
  payload: {
    profile: IUserProfile;
  };
}

export interface IUserActionLoadProfileFailed extends IUserAction {
  type: typeof userActions.LOAD_PROFILE_FAILED;
  payload: {
    error?: string;
  };
}

export type UserActions =
  | IUserActionClearProfile
  | IUserActionLoadProfile
  | IUserActionSetProfile
  | IUserActionLoadProfileSuccess
  | IUserActionLoadProfileFailed;
