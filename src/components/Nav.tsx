import { NavLink } from "react-router-dom";
import React from "react";

import { buttonVariants } from "./ui/button";
import { Github } from "lucide-react";

type NavProps = {
  onClick?: () => void;
  showExamples?: boolean;
};

type ExamplesNavLinkProps = {
  show: boolean;
  onClick: () => void;
};

function ExamplesNavLink({ show, onClick }: ExamplesNavLinkProps) {
  if (!show) return null;

  return (
    <li>
      <span onClick={onClick}>Exemplos</span>
    </li>
  );
}

export function Nav({ onClick, showExamples }: NavProps) {
  return (
    <nav className="flex flex-1 items-center justify-between md:max-w-5xl">
      <ul className="flex gap-3">
        <li>
          <NavLink activeClassName="active" exact to="/">
            Início
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/instructions">
            Instruções
          </NavLink>
        </li>
        <ExamplesNavLink show={showExamples} onClick={onClick} />
      </ul>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/thiago-tallison/verticalizar-edital"
        className={buttonVariants({ variant: "outline" })}
      >
        <Github className="w-4 h-4 mr-2" />
        Github
      </a>
    </nav>
  );
}
