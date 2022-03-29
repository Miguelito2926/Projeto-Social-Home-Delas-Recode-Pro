import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-md ">

      <div className="container">

        <Link to="/" className="navbar-brand">
          <img id="logo" src={logo} alt="Logo HomeDelas" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cadastroVagas" className="nav-link text-dark">
              Vagas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CadastroVagas-Create" className="nav-link text-dark">
              Cadastrar vagas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cursos" className="nav-link text-dark">
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contatos" className="nav-link text-dark">
              Contatos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
