import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-menu__item">
          <NavLink
            to="/"
            exact={true}
            className="navbar-menu-link"
            activeClassName="is-active"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-menu__item">
          <NavLink
            to="/about"
            className="navbar-menu-link"
            activeClassName="is-active"
          >
            About
          </NavLink>
        </li>
        <li className="navbar-menu__item">
          <NavLink
            to="/sign-in"
            className="navbar-menu-link"
            activeClassName="is-active"
          >
            Sign In
          </NavLink>
        </li>
        <li className="navbar-menu__item">
          <NavLink
            to="/account"
            className="navbar-menu-link"
            activeClassName="is-active"
          >
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
