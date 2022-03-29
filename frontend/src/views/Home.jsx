import React from "react";
import img1 from "../img/maeEbebe.jpg";
// import img2 from "../img/mae.jpg";
// import img3 from "../img/maeECrianca.jpg";

export default function Home() {
  return (
    <div className="container">
        <img class="d-flex w-100" src={img1} alt="Primeiro Slide" />
        <div class="carousel-caption d-none d-md-block">
          <a href="/cadastroVagas" className="btn btn-danger">Vagas Disponíveis</a>
        </div>
    </div>
  );
}
