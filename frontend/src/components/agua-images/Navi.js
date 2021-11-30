import React from "react";
import { Link } from "react-router-dom";
import "./Navi.css";

import Agua_1 from "../../assets/images/agua1.bmp";
import Agua_2 from "../../assets/images/agua2.bmp";
import Agua_3 from "../../assets/images/agua3.jpg";
import Agua_4 from "../../assets/images/agua4.bmp";
import Agua_5 from "../../assets/images/agua5.bmp";
import Agua_6 from "../../assets/images/agua6.jpg";
import Agua_7 from "../../assets/images/agua7.bmp";
import Agua_8 from "../../assets/images/agua8.bmp";
import Agua_9 from "../../assets/images/agua9.bmp";
import Agua_10 from "../../assets/images/agua10.bmp";

const Navi = () => {
  return (
    <div className="container mt-3 padre">
      <Link to="/Agua1">
        <figure>
          <img src={Agua_1} alt="" className="tamaño-img"></img>
          <figcaption>Iceberg</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_2">
        <figure>
          <img src={Agua_2} alt="" className="tamaño-img"></img>
          <figcaption>Montaña</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_3">
        <figure>
          <img src={Agua_3} alt="" className="tamaño-img"></img>
          <figcaption>Canoa</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_4">
        <figure>
          <img src={Agua_4} alt="" className="tamaño-img"></img>
          <figcaption>Cañada</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_5">
        <figure>
          <img src={Agua_5} alt="" className="tamaño-img"></img>
          <figcaption>Cascada</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_6">
        <figure>
          <img src={Agua_6} alt="" className="tamaño-img"></img>
          <figcaption>Silla</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_7">
        <figure>
          <img src={Agua_7} alt="" className="tamaño-img"></img>
          <figcaption>Espejo</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_8">
        <figure>
          <img src={Agua_8} alt="" className="tamaño-img"></img>
          <figcaption>Faro</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_9">
        <figure>
          <img src={Agua_9} alt="" className="tamaño-img"></img>
          <figcaption>Lago</figcaption>
        </figure>
      </Link>

      <Link to="/Agua_10">
        <figure>
          <img src={Agua_10} alt="" className="tamaño-img"></img>
          <figcaption>Blue</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export { Navi };
