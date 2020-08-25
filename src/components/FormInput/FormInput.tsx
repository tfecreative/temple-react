import React from "react";
import { useFormContext } from "react-hook-form";
import { FormError } from "components/Form/FormError";
import { Label } from "components/Label/Label";
import "./FormInput.scss";

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
    <div className="form-input">
      <Label id={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        data-cy={name}
        className="text-input"
        ref={register(validation || defaultValidation)}
      />
      <div>{errors[name] && <FormError error={errors[name]} />}</div>
    </div>
  );
};
