import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "store/types";
import { Modal, useModal } from "components/Modal";
import { useOutsideClick } from "hooks/useOutsideClick";
import { Menu, MenuHeader, MenuItem } from "components/Menu";
import { signOut } from "store/auth/actions";
import "./AvatarBadge.scss";
import { history } from "store";

export const AvatarBadge = () => {
  const profile = useSelector((state: IAppState) => state.user.profile);
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state: IAppState) => state.auth.authenticated
  );
  const { isShowing, toggle, close } = useModal();
  const ref = useRef<HTMLInputElement>(null);

  useOutsideClick({
    ref: ref,
    callback: close,
  });

  const onSignOutClick = () => {
    dispatch(signOut());
  };

  const onSignInClick = () => {
    history.push("/sign-in");
  };

  return (
    <div className="avatar-badge" onClick={toggle} ref={ref}>
      <div className="avatar-badge__icon">
        {authenticated && profile?.username && (
          <img
            alt="User Avatar"
            className="avatar-badge__icon-image"
            src={`https://ui-avatars.com/api/?name=${profile.username[0]}`}
          ></img>
        )}

        {!authenticated && (
          <img
            alt="User Avatar"
            className="avatar-badge__icon-image"
            src="https://avatarfiles.alphacoders.com/103/103143.gif"
          ></img>
        )}
      </div>

      <Modal id="avatar-menu-modal" open={isShowing}>
        <Menu>
          <MenuHeader text={`Hello, ${profile.username || "Guest"}`} />
          {!authenticated && (
            <MenuItem id="sign-in" text={`Sign In`} onClick={onSignInClick} />
          )}
          {authenticated && (
            <MenuItem
              id="sign-out"
              text={`Sign Out`}
              onClick={onSignOutClick}
            />
          )}
        </Menu>
      </Modal>
    </div>
  );
};

export default AvatarBadge;
