import React, { MouseEvent } from "react";
import "./Button.scss";

type ButtonType = "button" | "submit";

export interface Props {
  theme: string;
  onClick?: () => any;
  children?: any;
  disabled?: boolean;
  type?: ButtonType;
  id: string;
  className?: string;
}

export const Button = ({
  children,
  className,
  disabled,
  id,
  onClick,
  theme,
  type,
}: Props) => {
  function handleClick(event: MouseEvent) {
    if (!onClick) {
      return;
    }
    event.preventDefault();
    onClick();
  }
  return (
    <button
      onClick={(e: MouseEvent) => handleClick(e)}
      className={`btn btn-${theme} ${className}`}
      id={id}
      data-cy={id}
      type={type}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
};
