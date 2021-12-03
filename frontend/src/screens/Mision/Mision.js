import React from "react";
import mision100 from "../../assets/images/mision100.jpeg";

function Mision() {
  return (
    <div className="container">
      <img src={mision100} />
      <p>
        Contribuir al mejoramiento de la calidad de vida de la comunidad rural,
        a través de la formación integral apropiada de 100 campesinos, para que
        sean líderes de sus comunidades y autores de su propio desarrollo y del
        cambio social para que aporten su granito de arena a una nueva Colombia
        en paz y sostenible.
      </p>
    </div>
  );
}

export { Mision };
