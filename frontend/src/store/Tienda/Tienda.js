import React from "react";
import "./Tienda.css";
import { ProductModel } from '../ProductModel/ProductModel';
// import Ecommerce from '../../assets/images/ecommerce.jpg';
import Ecomm from '../../assets/images/ecommerce1.jpg';
import Guanabana from '../../assets/images/guanabana.jpeg';
import Granadilla from '../../assets/images/granadilla.jpeg';
import Lulo from '../../assets/images/lulo.jpeg';
import Mangostino from '../../assets/images/mangostino.jpeg';
import Maracuya from '../../assets/images/maracuya.jpeg';
import Aguacate from '../../assets/images/aguacate.jpeg';
import Pitahaya from '../../assets/images/pitahaya.jpeg';


const Tienda = () => {
  return (
    <div className="container">
      <div className="store">
        <div className="store__container">
          <img src={Ecomm} alt="ecommerce" className="store__image" />

          <div className="store__row">
            <ProductModel
              id={1020304}
              title={"Pitahaya"}
              brief={"Favorece la pérdida de peso, protege las células del organismo, fortalece los huesos, mejora la digestión."}
              price={10.05}
              image={Pitahaya}
            />
            <ProductModel
              id={1030405}
              title={"Aguacate"}
              brief={"Es un alimento rico en potasio, es importante para regular la presión arterial y respaldar la función celular del cuerpo."}
              price={7.25}
              image={Aguacate}
            />
          </div>
          <div className="store__row">
            <ProductModel
              id={1040506}
              title={"Granadilla"}
              brief={"Ayuda a conciliar el sueño, a reducir los cólicos, y a disminuir el estrés y la ansiedad."}
              price={3.10}
              image={Granadilla}
            />
            <ProductModel
              id={1060708}
              title={"Mangostino"}
              brief={"Antioxidante Combate los radicales libres y el envejecimiento celular. Ayuda a combatir virus y bacterias."}
              price={21.05}
              image={Mangostino}
            />
            <ProductModel
              id={1080910}
              title={"Lulo"}
              brief={"Tiene propiedades diuréticas, aumenta cantidad y calidad de formación de cabello y uñas."}
              price={4.25}
              image={Lulo}
            />

          </div>
          <div className="store__row">
            <ProductModel
              id={1100117}
              title={"Maracuya"}
              brief={"Tiene un valor calórico elevado, es fuente natural de vitaminas A y C, antioxidante, fuente natural de minerales."}
              price={12.00}
              image={Maracuya}
            />
            <ProductModel
              id={1101225}
              title={"Guanabana"}
              brief={"Un poderoso antioxidante, cuyas propiedades van más allá de la curación del cáncer, ya que este fruto conocido también como graviola contiene acetogeninas."}
              price={10.05}
              image={Guanabana}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export { Tienda };
