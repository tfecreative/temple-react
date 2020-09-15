import React from "react";
import "./MenuHeader.scss";

export interface IMenuHeaderProps {
  text: string;
}

export const MenuHeader = ({ text }: IMenuHeaderProps) => {
  return <li className="menu-header">{text}</li>;
};
