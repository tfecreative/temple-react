import React, { Component } from "react";
import "./SignInForm.scss";
import { Form } from "components/Form/Form";
import { FormHeader } from "components/Form/FormHeader";
import { FormInput } from "components/FormInput/FormInput";
import { FormButton } from "components/Form/FormButton";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signIn } from "store/auth/action";

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    try {
      const payload = { username: values.username, password: values.password };
      dispatch(signIn(payload));
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
