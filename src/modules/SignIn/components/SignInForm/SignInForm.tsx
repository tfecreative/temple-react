import React, { Component } from "react";
import "./SignInForm.scss";
import { Form } from "components/Form/Form";
import { FormHeader } from "components/Form/FormHeader";
import { FormInput } from "components/FormInput/FormInput";
import { FormButton } from "components/Form/FormButton";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { signIn } from "store/user/action";
import { User, UserState } from "store/user/types";
import { ApplicationState } from "store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface SignInFormProps {
  user: User,
  signIn: (username: string, password: string) => any;
}

const SignInForm: React.FC<SignInFormProps> = (props: SignInFormProps) => {
  const handleSubmit = async(values: any) => {
    try {
      await props.signIn(values.username, values.password);
      // await this.SignIn(values.username, values.password);
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="sign-in-form">
      <FormHeader text="Sign In"></FormHeader>
      <div>{props.user.token ?? "???"}</div>
      <FormInput name="username" label="Username" />
      <FormInput name="password" label="Password" />
      <div className="form-actions">
        <FormButton theme="accent">Submit</FormButton>
      </div>
    </Form>
  );
}

const mapStateToProps = ({ userState }: ApplicationState) => ({
  user: userState.user
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    signIn: (username: string, password: string) => dispatch(signIn(username, password))
  };
};

const connected = connect(mapStateToProps, mapDispatchToProps)(SignInForm);
export default connected;
