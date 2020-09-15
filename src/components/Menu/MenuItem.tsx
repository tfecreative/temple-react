import React from "react";
import "./MenuItem.scss";

export interface IMenuItemProps {
  id: string;
  text: string;
  onClick: () => any;
}

export const MenuItem = ({ id, text, onClick }: IMenuItemProps) => {
  return (
    <li
      id={id}
      className="menu-item"
      onClick={onClick}
      data-testid={`menu-item-${id}`}
    >
      {text}
    </li>
  );
};
