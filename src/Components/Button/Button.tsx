import React from "react";
import "./Button.scss";

export interface Props {
  theme: string;
  onClick: (e: any) => void;
  children?: any;
}

const Button = (props: Props) => {
  function handleClick(event: Event) {
    event.preventDefault();
    props.onClick(event);
  }
  return (
    <button
      onClick={() => handleClick}
      className={"btn btn-" + props.theme}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
