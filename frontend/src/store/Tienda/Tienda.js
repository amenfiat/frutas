import React from "react";
import "./Tienda.css";
import { ProductModel } from "../ProductModel/ProductModel";
import Ecomm from "../../assets/images/ecommerce1.jpg";
import { useDatos } from '../../apis/Datos';
import { Col, Row } from 'react-bootstrap';


const Tienda = () => {

  const productos = useDatos();

  return (
    <div className="container">
      <div className="store">
        <div className="store__container">
          <img src={Ecomm} alt="ecommerce" className="store__image" />
          <Row xs={1} md={3} className="g-4">
            {productos.map(prod => (
              <Col>
                <ProductModel
                  key={prod.id}
                  name={prod.name}
                  brief={prod.brief}
                  pricePound={prod.pricePound}
                  image={prod.image}
                  minimunSale={prod.minimunSale}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div >
  );
};

export { Tienda };


/*
 {productos.map(item => (

   ))}
*/