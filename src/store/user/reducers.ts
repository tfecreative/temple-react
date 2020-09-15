import {
  UserState,
  userActions,
  IUserAction,
  defaultUserProfile,
} from "./types";

let initialState: UserState = {
  profile: { username: "" },
};

export const reducer = (
  state: UserState = initialState,
  action: IUserAction
) => {
  switch (action.type) {
    case userActions.LOAD_PROFILE:
      return {
        ...state,
      };
    case userActions.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
      };
    case userActions.LOAD_PROFILE_FAILED:
      return {
        ...state,
      };
    case userActions.CLEAR_PROFILE:
      return {
        ...state,
        profile: defaultUserProfile,
      };
    case userActions.SET_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
      };
  }
  return state;
};

export default reducer;
