import React from "react";
import "./SignInForm.scss";
import { Form } from "components/Form/Form";
import { FormHeader } from "components/Form/FormHeader";
import { FormInput } from "components/FormInput/FormInput";
import { FormButton } from "components/Form/FormButton";
import { accountService, SignInRequest } from "services/Account";
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
