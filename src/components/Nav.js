import React from 'react'
import './Nav.css';

export const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="links">
        <li className="link"><a href="localhost:3000" id="inicio">Início</a></li>
        <li className="link"><a href="localhost:3000" id="instrucoes">Instruções</a></li>
        <li className="link"><a href="localhost:3000" id="sobre">Instruções</a></li>
      </ul>
      <a href="localhost:3000" className="social">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
    </nav>
  )
}
