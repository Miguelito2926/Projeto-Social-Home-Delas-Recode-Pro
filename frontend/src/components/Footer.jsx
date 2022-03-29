import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/" className="navbar-brand">
          <img id="logo" src={logo} alt="Logo HomeDelas" />
      </Link>
    </footer>
  );
}