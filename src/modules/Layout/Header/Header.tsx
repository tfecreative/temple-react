import React from "react";
import "./Header.scss";
import { AvatarBadge } from "modules/Account/AvatarBadge";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__title">temple</div>
      <div className="app-header__actions">
        <AvatarBadge></AvatarBadge>
      </div>
    </header>
  );
};

export default Header;
