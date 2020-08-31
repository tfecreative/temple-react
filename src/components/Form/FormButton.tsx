import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "components/Button/Button";

type FormButton = {
  children: React.ReactNode;
  theme: string;
  id: string;
  disabled?: boolean;
};

export const FormButton = ({ id, children, theme, disabled }: FormButton) => {
  const {
    formState: { isDirty, isSubmitting },
  } = useFormContext();

  return (
    <Button
      theme={theme}
      type="submit"
      disabled={disabled || !isDirty || isSubmitting}
      id={id}
    >
      {children}
    </Button>
  );
};

export default FormButton;
