import React from "react";
import "./Button.scss";

type ButtonType = "button" | "submit";

export interface Props {
  theme: string;
  onClick?: (e: any) => void;
  children?: any;
  disabled: boolean;
  type?: ButtonType;
  id: string;
}

export const Button = (props: Props) => {
  function handleClick(event: Event) {
    if (!props.onClick) {
      return;
    }
    event.preventDefault();
    props.onClick(event);
  }
  return (
    <button
      onClick={() => handleClick}
      className={"btn btn-" + props.theme}
      id={props.id}
      data-cy={props.id}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
