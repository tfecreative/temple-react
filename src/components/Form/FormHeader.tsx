import React from "react";
import "./FormHeader.scss";

export interface Props {
  text: string;
}

export const FormHeader = (props: Props) => {
  return <div className="form-header">{props.text}</div>;
};
