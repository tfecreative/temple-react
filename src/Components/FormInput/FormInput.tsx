import React from "react";
import { useFormContext } from "react-hook-form";
import { FormError } from "Components/Form/FormError";
import { Label } from "Components/Label/Label";

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
      <Label id={name}>
        {label}
      </Label>
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
