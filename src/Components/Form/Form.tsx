import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import "./Form.scss";

type Form = {
  initialValues?: any;
  children: React.ReactNode;
  onSubmit: (values: any, actions: any) => void;
  className?: string;
};

export const Form = ({
  initialValues,
  children,
  onSubmit,
  className,
}: Form) => {
  const methods = useForm({ defaultValues: initialValues })

  return (
    <FormProvider {...methods}>
      <form
        className={`form ${className}`}
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
};
