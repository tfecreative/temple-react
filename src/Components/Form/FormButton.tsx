import React from "react";
import { useFormContext } from "react-hook-form";
import Button from "Components/Button/Button";

type FormButton = {
  children: React.ReactNode;
};

export const FormButton = ({ children }: FormButton) => {
  const {
    formState: { isDirty, isSubmitting },
  } = useFormContext();

  return (
    <Button theme="primary" type="submit" disabled={!isDirty || isSubmitting}>
      {children}
    </Button>
  );
};

export default FormButton;
