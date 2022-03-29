import React from "react";
import Email from "../img/email.png";
import Instagram from "../img/instagram.png";
import Whatsapp from "../img/whatsapp.png";
import Facebook from "../img/facebook.png";

export default function Contatos() {
  return (
    <div className="contatos">
      <a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" rel="noreferrer">
        <img src={Email} alt="E-mail" />
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img src={Instagram} alt="Instagram"/>
      </a>

      <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
        <img className="whatsapp" src={Whatsapp} alt="Whatsapp"/>
      </a>

      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img className="facebook" src={Facebook} alt="Facebook" />
      </a>
    </div>
  );
}