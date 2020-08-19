import React from "react";
import "./SignInForm.scss";
import { Form } from "Components/Form/Form";
import { FormHeader } from "Components/Form/FormHeader";
import { FormInput } from "Components/FormInput/FormInput";
import { FormButton } from "Components/Form/FormButton";
import { accountService, SignInRequest } from "Services/Account";
import { toast } from "react-toastify";

const SignInForm = () => {
  const handleSubmit = async (values: any) => {
    try {
      const req: SignInRequest = {
        username: values.username,
        password: values.password,
      };
      await accountService.signIn(req);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="sign-in-form">
      <FormHeader text="Sign In"></FormHeader>
      <FormInput name="username" label="Username" />
      <FormInput name="password" label="Password" />
      <div className="form-actions">
        <FormButton theme="accent">Submit</FormButton>
      </div>
    </Form>
  );
};

export default SignInForm;
