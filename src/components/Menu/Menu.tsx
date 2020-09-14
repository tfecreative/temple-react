import React from "react";
import "./Menu.scss";

export interface IMenuProps {
  children?: React.ReactNode;
}

export const Menu = ({ children }: IMenuProps) => {
  return (
    <div className="menu" data-testid="menu">
      <ul className="menu-list" data-testid="menu-list">{children}</ul>
    </div>
  );
};
