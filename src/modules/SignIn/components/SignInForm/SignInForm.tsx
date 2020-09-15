import React from "react";
import "./SignInForm.scss";
import { Form } from "components/Form/Form";
import { FormHeader } from "components/Form/FormHeader";
import { FormInput } from "components/FormInput/FormInput";
import { FormButton } from "components/Form/FormButton";
import { useDispatch } from "react-redux";
import { signInRequest } from "store/auth/actions";

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: any) => {
    dispatch(signInRequest(values.username, values.password));
  };

  return (
    <Form onSubmit={handleSubmit} className="sign-in-form">
      <FormHeader text="Sign In"></FormHeader>
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
