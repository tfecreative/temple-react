import React from "react";
import SignUpForm from "modules/SignUp/components/SignUpForm/SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "store/sign-up/actions";
import "./SignUp.scss";
import { IAppState } from "store/types";

const SignUp = () => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(
    (state: IAppState) => state.signUp.loading
  );

  const handleSubmit = (values: any) => {
    dispatch(signUp(values));
  };

  return (
    <section className="section section-sign-up">
      <div>
        <span>Loading: {loading ? "Loading..." : "Finished"}</span>
      </div>
      <SignUpForm onSubmit={handleSubmit} loading={loading}></SignUpForm>
    </section>
  );
};

export default SignUp;
