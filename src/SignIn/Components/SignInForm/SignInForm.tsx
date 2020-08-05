import React from "react";
import "./SignInForm.scss";
import { Form } from "Components/Form/Form";
import { FormInput } from "Components/FormInput/FormInput";
import { FormButton } from "Components/Form/FormButton";

const SignInForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit} className="sign-in-form">
      <div>
        <FormInput name="FirstName" label="First Name" />
      </div>
      <div>
        <FormInput name="lastName" label="Last Name" />
      </div>
      <div>
        <FormInput
          name="email"
          label="Email"
          type="email"
          validation={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email",
            },
          }}
        />
      </div>
      <div>
        <FormButton>Submit</FormButton>
      </div>
    </Form>
  );
};

export default SignInForm;
