import { Reducer } from "redux";
import { ActionTypes, UserState } from "./types";
import { toast } from "react-toastify";

export const initialState: UserState = {
  user: { token: "" },
  errors: undefined,
  loading: false,
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS: {
      toast.success("signed in success!");
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    case ActionTypes.SIGN_IN_FAILURE: {
      toast.error("signed in failed!");
      return {
        ...state,
        loading: false,
        errors: action.payload,
        user: { token: "heyyyy" },
      };
    }
    default: {
      return state;
    }
  }
};
export { reducer as UserReducer };
