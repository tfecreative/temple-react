import { Reducer } from "redux";
import { ActionTypes, UserState } from "./types";
export const initialState: UserState = {
  data: {},
  errors: undefined,
  loading: false,
};
const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_REQUEST: {
      return { ...state, loading: true };
    }
    case ActionTypes.SIGN_IN_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case ActionTypes.SIGN_IN_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export { reducer as UserReducer };
