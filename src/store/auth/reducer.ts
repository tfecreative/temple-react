import { Reducer } from "redux";
import { ActionTypes, AuthState } from "./types";
import { toast } from "react-toastify";

export const initialState: AuthState = {
  auth: { token: "" },
  errors: undefined,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS: {
      toast.success("signed in success!");
      return {
        ...state,
        loading: false,
        auth: action.payload,
      };
    }
    case ActionTypes.SIGN_IN_FAILURE: {
      toast.error("signed in failed!");
      return {
        ...state,
        loading: false,
        errors: action.payload,
        auth: { token: "heyyyy" },
      };
    }
    default: {
      return state;
    }
  }
};
export { reducer as AuthReducer };
