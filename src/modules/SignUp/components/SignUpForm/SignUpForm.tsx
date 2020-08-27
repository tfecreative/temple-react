import React from "react";
import { Form } from "components/Form/Form";
import { FormHeader } from "components/Form/FormHeader";
import { FormInput } from "components/FormInput/FormInput";
import { FormButton } from "components/Form/FormButton";
import "./SignUpForm.scss";

export interface SignUpFormProps {
  loading: boolean;
  onSubmit: (values: any) => any;
}

const SignUpForm = (props: SignUpFormProps) => {
  return (
    <Form onSubmit={props.onSubmit} className="sign-up-form">
      <FormHeader text="Sign Up" />
      <FormInput name="email" label="Email" />
      <FormInput name="username" label="Username" />
      <FormInput name="password1" label="Password" />
      <FormInput name="password2" label="Confirm Password" />
      <div className="form-actions">
        <FormButton theme="accent" id="signUpSubmit">
          Submit
        </FormButton>
      </div>
    </Form>
  );
};

export default SignUpForm;
