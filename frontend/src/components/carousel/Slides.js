import React from "react";
import { Carousel, Card } from "react-bootstrap";

import imgslidea from "../../assets/images/slidea.png";
import imgslideb from "../../assets/images/slideb.png";
import imgslidec from "../../assets/images/slidec.png";

import "./Carousel.css";

function Slides() {
  return (
    <>
      <Carousel className="bg">
        <Carousel.Item>
          <div className="d-flex bd-highlight example-parent">
            <div className="p-2 flex-fill bd-highlight col-example">
              <img
                src={imgslidea}
                className="img-fluid rounded-start imgnormalizada"
                alt="..."
              />
            </div>
            <div className="p-2 flex-fill align-self-center bd-highlight col-example divnormalizado">
              <div className="cardbody">
                <div className="message1">
                  <Card.Title style={{ color: "#fff" }}>
                    Del verdadero campo a su mesa
                  </Card.Title>
                  <Card.Text style={{ color: "#fff" }}>
                    Todos nuestros productos son obtenidos de las fincas de
                    nuestros campesinos colombianos agricultores de oficio, que
                    con su ardúo esfuerzo logran poner en cada uno de nuestros
                    hogares productos de alta calidad de exportación.
                  </Card.Text>
                  <Card.Text style={{ color: "#fff" }}>
                    Gracias al objetivo social de este este proyecto se reactiva
                    el campo y se reconoce todo el engranaje agricultor, del
                    cual se da a conocer los mejores frutos a nivel nacional
                    tipo exportación. Su contribución hace realidad los sueños
                    estas familias.
                  </Card.Text>
                  <Card.Footer>
                    <Card.Link href="#" style={{ color: "#fff" }}>
                      Ver Galería ...{" "}
                    </Card.Link>
                  </Card.Footer>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex bd-highlight example-parent">
            <div className="p-2 flex-fill bd-highlight col-example">
              <img
                src={imgslideb}
                className="rounded-start imgnormalizada"
                alt="..."
              />
            </div>
            <div className="p-2 flex-fill align-self-center bd-highlight col-example divnormalizado">
              <div className="cardbody">
                <div className="message2">
                  <Card.Title style={{ color: "#fff" }}>
                    Mujeres Rurales Emprendedoras: empoderamiento económico para
                    poner fin a las violencias
                  </Card.Title>
                  <Card.Text style={{ color: "#fff" }}>
                    <p>
                      Hasta hace algunos años la mujer rural ante la economía
                      productiva era clasificada como inactiva. Sin embargo,
                      este proyecto ha demostrado que representan una proporción
                      sustancial de la fuerza de trabajo agrícola.
                    </p>
                  </Card.Text>
                  <Card.Text style={{ color: "#fff" }}>
                    Este proyecto ha incorporado el enfoque de género de manera
                    directa a todo el proceso,
                  </Card.Text>
                  <Card.Footer>
                    <Card.Link href="#" style={{ color: "#fff" }}>
                      Ver Galería ...{" "}
                    </Card.Link>
                  </Card.Footer>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex bd-highlight example-parent">
            <div className="p-2 flex-fill bd-highlight col-example">
              <img
                src={imgslidec}
                className="img-fluid rounded-start imgnormalizada"
                alt="..."
              />
            </div>
            <div className="p-2 flex-fill align-self-center bd-highlight col-example divnormalizado">
              <div className="cardbody">
                <div className="message3">
                  <Card.Title style={{ color: "#fff" }}>
                    Desde Boyacá y Cundinamarca, Uchuvas para el mundo
                  </Card.Title>
                  <Card.Text style={{ color: "#fff" }}>
                    La uchuva colombiana está llegando hasta Australia, pasando
                    por otros países como Estados Unidos, Canadá y algunos de
                    Europa.
                  </Card.Text>
                  <Card.Text style={{ color: "#fff" }}>
                    El proyecto Frutas emplean a 40 mujeres cabeza de familia y
                    tienen proveedores, todos pequeños agricultores, en
                    Ventaquemada, Arcabuco y Ciénaga en Boyacá, y en Tabio,
                    Tenjo y Zipaquirá, en Cundinamarca
                  </Card.Text>
                  <Card.Footer>
                    <Card.Link href="#" style={{ color: "#fff" }}>
                      Ver Galería ...{" "}
                    </Card.Link>
                  </Card.Footer>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export { Slides };
