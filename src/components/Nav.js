import { NavLink } from "react-router-dom";
import React from "react";

import "./Nav.css";
import { ReactComponent as GithubLogo } from "./icons8-github.svg";

export const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul className="links">
        <li className="link">
          <NavLink activeClassName="active" exact to="/">
            Início
          </NavLink>
        </li>
        <li className="link">
          <NavLink activeClassName="active" exact to="/instructions">
            Instruções
          </NavLink>
        </li>
        <li className="link">
          <span onClick={props.onClick}>Exemplos</span>
        </li>
      </ul>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/thiago-tallison/verticalizar-edital"
        className="social"
      >
        <GithubLogo className="git-logo" />
      </a>
    </nav>
  );
};
