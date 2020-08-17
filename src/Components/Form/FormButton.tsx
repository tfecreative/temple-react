import React from "react";
import { useFormContext } from "react-hook-form";
import Button from "Components/Button/Button";

type FormButton = {
  children: React.ReactNode;
  theme: string;
};

export const FormButton = ({ children, theme }: FormButton) => {
  const {
    formState: { isDirty, isSubmitting },
  } = useFormContext();

  return (
    <Button theme={theme} type="submit" disabled={!isDirty || isSubmitting}>
      {children}
    </Button>
  );
};

export default FormButton;
