import { Link } from "react-router-dom";
import React from "react";

import "./Nav.css";
import { ReactComponent as GithubLogo } from "./icons8-github.svg";

export const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="links">
        <li className="link">
          <Link to="/">Início</Link>
        </li>
        <li className="link">
          <Link to="/instructions">Instruções</Link>
        </li>
        <li className="link">
          <Link to="/examples">Exemplos</Link>
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
