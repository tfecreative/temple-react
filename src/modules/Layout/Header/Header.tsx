import React from "react";
import "./Header.scss";
import { AvatarMenu } from "modules/Account/AvatarMenu";

function Header() {
  return (
    <header className="app-header">
      <div className="app-header__title">temple</div>
      <div className="app-header__actions">
        <AvatarMenu></AvatarMenu>
      </div>
    </header>
  );
}

export default Header;
