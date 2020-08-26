import { Reducer } from "redux";
import { ISignUpState, SignUpActions, initialSignUpState } from "./types";

const reducer: Reducer<ISignUpState, SignUpActions> = (
  state: ISignUpState = initialSignUpState,
  action
) => {
  switch (action.type) {
    case "SignUpRequest":
      return {
        ...state,
        loading: true,
      };
    case "SignUpFinished":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export { reducer as SignUpReducer };
