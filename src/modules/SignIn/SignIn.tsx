import React from "react";
import SignInForm from "modules/SignIn/components/SignInForm/SignInForm";
import "./SignIn.scss";

function SignIn() {
  return (
    <section className="section section-sign-in">
      <SignInForm></SignInForm>
    </section>
  );
}

export default SignIn;
