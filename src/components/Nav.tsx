import { NavLink } from "react-router-dom";
import React from "react";

import "./Nav.css";
import GithubLogo from "./icons8-github.svg";

export const Nav = (props) => {
  const ExamplesNavLink = ({ show }) =>
    show ? (
      <li className="link">
        <span onClick={props.onClick}>Exemplos</span>
      </li>
    ) : null;
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
        <ExamplesNavLink show={props.showExamples} />
      </ul>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/thiago-tallison/verticalizar-edital"
        className="social"
      >
        <img src={GithubLogo} alt="React Logo" />
      </a>
    </nav>
  );
};
