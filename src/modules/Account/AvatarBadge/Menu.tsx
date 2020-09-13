import React from "react";
import "./Menu.scss";

export type IAvatarMenuProps = {
    username: string;
}

export const Menu = ({ username }: IAvatarMenuProps) => {
  return (
    <div className="avatar-badge__menu">
    </div>
  );
};
