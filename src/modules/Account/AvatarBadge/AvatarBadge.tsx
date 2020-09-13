import React from "react";
import "./AvatarBadge.scss";
// import { useSelector } from "react-redux";
// import { IAppState } from "store/types";

export const AvatarBadge = () => {
  // const profile = useSelector((state: IAppState) => state.user.profile);
  return (
    <div className="avatar-badge">
      <div className="avatar-badge__icon">
        <img
          className="avatar-badge__icon-image"
          src="https://avatarfiles.alphacoders.com/103/103143.gif"
        ></img>
      </div>
    </div>
  );
};
