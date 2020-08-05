import React from "react";
import "./Label.scss";

export interface Props {
  children?: React.ReactNode;
  for: string;
}

export const Label = (props: Props) => {
  return <label htmlFor={props.for}>{props.children}</label>;
};
