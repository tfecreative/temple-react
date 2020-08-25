import React from "react";
import { FieldError } from "react-hook-form";

interface IFormErrorProps {
  error: FieldError;
};

export const FormError = ({ error }: IFormErrorProps) => (
  <div>
    {error.message && <div className="error">{error.message}</div>}

    {error.type && error.type === "required" && (
      <div>This field is required!</div>
    )}
  </div>
);
