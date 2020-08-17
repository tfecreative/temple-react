import React from "react";
import "./SignInForm.scss";
import { Form } from "Components/Form/Form";
import { FormHeader } from "Components/Form/FormHeader";
import { FormInput } from "Components/FormInput/FormInput";
import { FormButton } from "Components/Form/FormButton";

const SignInForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit} className="sign-in-form">
      <FormHeader text="Sign In"></FormHeader>
      <FormInput name="Username" label="Username" />
      <FormInput name="Password" label="Password" />
      <div className="form-actions">
        <FormButton theme="accent">Submit</FormButton>
      </div>
    </Form>
  );
};

export default SignInForm;
