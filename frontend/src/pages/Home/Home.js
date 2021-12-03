import React from "react";
import "./Home.css";
import Campo3 from "../../assets/videos/campo3.mp4";
import SignIn from "../../store/SignIn/SignIn";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center let">
        Bienvenido! <br />
        <span> Exportación de Frutas Exóticas</span>
      </h1>
      <video autoPlay loop muted id="bg-video">
        <source src={Campo3} type="video/mp4" />
      </video>
      <SignIn />
    </div>
  );
}

export { Home };
