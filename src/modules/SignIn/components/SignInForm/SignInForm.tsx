import React from "react";
import "./SignInForm.scss";
import { Form } from "components/Form/Form";
import { FormHeader } from "components/Form/FormHeader";
import { FormInput } from "components/FormInput/FormInput";
import { FormButton } from "components/Form/FormButton";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { signIn } from "store/auth/action";
import { IAppState } from "store/types";


const SignInForm = () => {
  const dispatch = useDispatch();

  const authenticated: boolean = useSelector(
    (state: IAppState) => state.auth.authenticated,
    shallowEqual
  );

  const handleSubmit = async (values: any) => {
    try {
      dispatch(
        signIn({ username: values.username, password: values.password })
      );
    } catch (e) {}
  };

  return (
    <Form onSubmit={handleSubmit} className="sign-in-form">
      <FormHeader text="Sign In"></FormHeader>
      {authenticated === true ? "Authenticated!" : "Not Authenticated"}
      <FormInput name="username" label="Username" />
      <FormInput name="password" label="Password" />
      <div className="form-actions">
        <FormButton theme="accent" id="signInSubmit">
          Submit
        </FormButton>
      </div>
    </Form>
  );
};

export default SignInForm;
