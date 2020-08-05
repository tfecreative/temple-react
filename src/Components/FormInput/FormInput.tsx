import React from "react";
import { useFormContext } from "react-hook-form";
import { FormError } from "Components/Form/FormError";

type Input = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  validation?: { [key: string]: any };
};

const defaultValidation = { required: true };

export const FormInput = ({
  label,
  name,
  type = "text",
  validation,
}: Input) => {
  const { register, errors } = useFormContext();

  return (
    <div>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="input"
        ref={register(validation || defaultValidation)}
      />
      <div>{errors[name] && <FormError error={errors[name]} />}</div>
    </div>
  );
};
