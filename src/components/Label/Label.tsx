import React from "react";
import "./Label.scss";

export interface Props {
  children?: React.ReactNode;
  id: string;
}

export const Label = (props: Props) => {
  return (
    <label htmlFor={props.id} className="label">
      {props.children}
    </label>
  );
};
