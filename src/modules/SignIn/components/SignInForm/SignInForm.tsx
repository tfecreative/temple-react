import React from "react";
import "./SignInForm.scss";
import { Form } from "components/Form/Form";
import { FormHeader } from "components/Form/FormHeader";
import { FormInput } from "components/FormInput/FormInput";
import { FormButton } from "components/Form/FormButton";

const SignInForm = () => {
  const handleSubmit = async (values: any) => {
    try {
      // TODO: sign in
    } catch (e) {}
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
