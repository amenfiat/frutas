import React from "react";
import "./Home.css";
// import Campo1 from "../../assets/videos/campo1.mp4";
// import Campo2 from "../../assets/videos/campo2.mp4";
import Campo3 from "../../assets/videos/campo3.mp4";
// import Campo4 from "../../assets/videos/campo4.mp4";

function Home() {
  return (
    <div>
      <h1 className="text-center let">
        Bienvenido! <br />
        <span> Exportación de Frutas Exóticas</span>
      </h1>
      <video autoPlay loop muted id="bg-video">
        <source src={Campo3} type="video/mp4" />
      </video>
    </div>
  );
}

export { Home };
