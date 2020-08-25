import React from "react";
import { render } from "@testing-library/react";
import SignInForm from "modules/SignIn/components/SignInForm/SignInForm";

test("Test success toast shows after successful sign in", () => {

  const signInForm = render(<SignInForm/>);
  signInForm.find('button').simulate('click');
  expect(getByText("hoya there")).toBeTruthy();
});
